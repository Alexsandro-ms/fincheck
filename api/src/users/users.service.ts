import { ConflictException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/database/prisma.service';
import { hash } from 'bcryptjs';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}
  async create(createUserDto: CreateUserDto) {
    const { email, name, password } = createUserDto;

    const emailTaken = await this.prismaService.user.findUnique({
      where: {
        email: createUserDto.email,
      },
    });

    if (emailTaken) {
      throw new ConflictException('This email already exists');
    }

    const hashedPassword = await hash(password, 12);

    const user = await this.prismaService.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    await this.prismaService.category.createMany({
      data: [
        { userId: user.id, name: 'Salário', icon: 'travel', type: 'INCOME' },
        {
          userId: user.id,
          name: 'Freelance',
          icon: 'freelance',
          type: 'INCOME',
        },
        { userId: user.id, name: 'Outro', icon: 'other', type: 'INCOME' },
        // Expense
        { userId: user.id, name: 'Casa', icon: 'home', type: 'EXPENSE' },
        {
          userId: user.id,
          name: 'Alimentação',
          icon: 'food',
          type: 'EXPENSE',
        },
        {
          userId: user.id,
          name: 'Educação',
          icon: 'education',
          type: 'EXPENSE',
        },
        { userId: user.id, name: 'Lazer', icon: 'fun', type: 'EXPENSE' },
        {
          userId: user.id,
          name: 'Mercado',
          icon: 'grocery',
          type: 'EXPENSE',
        },
        { userId: user.id, name: 'Roupas', icon: 'clothes', type: 'EXPENSE' },
        {
          userId: user.id,
          name: 'Transporte',
          icon: 'transport',
          type: 'EXPENSE',
        },
        { userId: user.id, name: 'Viagem', icon: 'travel', type: 'EXPENSE' },
        { userId: user.id, name: 'Outro', icon: 'other', type: 'INCOME' },
      ],
    });

    return {
      name: user.name,
      email: user.email,
    };
  }
}
