import { IsString } from "class-validator";
import { AuditDto } from "shared/dtos/audit.dto";

export class CreateClientDto extends AuditDto{
    @IsString()
    des_nome: string;

    @IsString()
    flg_inativo: string;

    @IsString()
    des_endereco: string;

    @IsString()
    num_endereco: string;

    @IsString()
    des_cidade: string;

    @IsString()
    des_uf: string;

    @IsString()
    des_telefone: string;

    @IsString()
    des_contato: string;

    @IsString()
    val_venda_acumulado: string;

    @IsString()
    qtd_venda_pedidos: string;

    @IsString()
    dta_ult_pedido: string;

    @IsString()
    dta_cadastro: string;

    @IsString()
    dta_alteracao: string;   
}
