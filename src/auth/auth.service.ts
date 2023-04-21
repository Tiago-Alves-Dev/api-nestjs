import { JwtService } from '@nestjs/jwt';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { compare } from 'bcryptjs';
import { UserRepository } from 'shared/repositories';

@Injectable()
export class AuthService {
  constructor(
    private readonly repository: UserRepository,
    private jwtService: JwtService,
  ) {}

  async signIn(des_email: string, des_senha: string): Promise<any> {
    const user = await this.repository.findOne({
      where: { des_email, flg_inativo: false },
    });

    if (!user) {
      throw new UnauthorizedException('Email não existe');
    }

    const passwordVerific = await compare(des_senha, user.des_senha);

    if (!passwordVerific) {
      throw new UnauthorizedException('Senha Inválida');
    }

    const payload = { username: user.des_email, sub: user.cod_usuario };
    return {
      access_token: await this.jwtService.signAsync(payload),
      user: {
        des_nome: user.des_nome,
        des_email: user.des_email,
        cod_usuario: user.cod_usuario,
      },
    };
  }
}
