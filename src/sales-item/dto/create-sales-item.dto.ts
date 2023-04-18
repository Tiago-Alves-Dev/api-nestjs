import { IsNumber, IsString, IsUUID } from "class-validator";
import { AuditDto } from "shared/dtos/audit.dto";

export class CreateSalesItemDto extends AuditDto{
    @IsUUID()
    cod_venda: string;

    @IsString()
    des_produto: string;

    @IsNumber()
    val_unitario: number;

    @IsNumber()
    qtd_itens: number;

    @IsNumber()
    val_total: number;
}
