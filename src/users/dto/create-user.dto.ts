import { IsString } from "class-validator";
import { AuditDto } from "shared/dtos/audit.dto";


export class CreateUserDto extends AuditDto{
    @IsString()
    des_nome: string;

    @IsString()
    des_email: string;

    @IsString()
    des_senha: string;

    @IsString()
    flg_inativo: string;
}
