import { IsNumber, IsString } from 'class-validator';
import { AuditDto } from 'shared/dtos/audit.dto';

export class CreateClientDto extends AuditDto {
  @IsString()
  des_nome: string;

  @IsString()
  flg_inativo: string;

  @IsString()
  des_endereco: string;

  @IsNumber()
  num_endereco: number;

  @IsString()
  des_cidade: string;

  @IsString()
  des_uf: string;

  @IsString()
  des_telefone: string;

  @IsString()
  des_contato: string;

  @IsNumber()
  val_venda_acumulado?: number;

  @IsNumber()
  qtd_venda_pedidos?: number;

  @IsString()
  dta_ult_pedido?: Date;
}
