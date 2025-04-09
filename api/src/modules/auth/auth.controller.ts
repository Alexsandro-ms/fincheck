import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SigninDto } from './dto/signin.dto';
import { SignupDto } from './dto/create-user.dto';
import { IsPublic } from 'src/shared/decorators/isPublic';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@IsPublic()
@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signin')
  @ApiOperation({ summary: 'Realizar login do usuário' })
  @ApiResponse({
    status: 200,
    description:
      'token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhMmM2OWZlNy02NGQzLTQ0ZjQtODM2ZS0xNDlhNWQzMGM1YzEiLCJpYXQiOjE3NDQxNTE4OTEsImV4cCI6MTc0NDc1NjY5MX0.BHex3l962a5a6wgGzUOqBw9UCWmu0DDSptcoup9uMLA',
  })
  @ApiResponse({ status: 409, description: 'This email already exists' })
  @ApiResponse({ status: 401, description: 'Invalid credentials' })
  @ApiBody({ type: SigninDto })
  signin(@Body() signinDto: SigninDto) {
    return this.authService.signin(signinDto);
  }

  @ApiOperation({ summary: 'Criar usuário' })
  @ApiResponse({ status: 409, description: 'This email already exists' })
  @ApiResponse({ status: 401, description: 'Credenciais inválidas' })
  @ApiResponse({
    status: 200,
    description:
      'token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhMmM2OWZlNy02NGQzLTQ0ZjQtODM2ZS0xNDlhNWQzMGM1YzEiLCJpYXQiOjE3NDQxNTE4OTEsImV4cCI6MTc0NDc1NjY5MX0.BHex3l962a5a6wgGzUOqBw9UCWmu0DDSptcoup9uMLA',
  })
  @Post('signup')
  signup(@Body() signupDto: SignupDto) {
    return this.authService.signup(signupDto);
  }
}
