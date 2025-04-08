import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SigninDto } from './dto/signin.dto';
import { SignupDto } from './dto/create-user.dto';
import { IsPublic } from 'src/shared/decorators/isPublic';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@IsPublic()
@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signin')
  @ApiOperation({ summary: 'Realizar login do usuário' })
  @ApiResponse({ status: 200, description: 'Login realizado com sucesso' })
  @ApiResponse({ status: 401, description: 'Credenciais inválidas' })
  @ApiBody({ type: SigninDto })
  signin(@Body() signinDto: SigninDto) {
    return this.authService.signin(signinDto);
  }
  @Post('signup')
  signup(@Body() signupDto: SignupDto) {
    return this.authService.signup(signupDto);
  }
}
