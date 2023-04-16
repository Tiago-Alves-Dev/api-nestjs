import { IsString } from "class-validator";

export class SignInDto {
    @IsString()
    des_email: string;

    @IsString()
    des_senha: string;
}
