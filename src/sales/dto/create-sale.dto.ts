import { IsNumber, IsString, IsUUID } from "class-validator";
import { AuditDto } from "shared/dtos/audit.dto";

export class CreateSaleDto extends AuditDto{
    @IsUUID()
    cod_cliente: string;

    @IsString()
    dta_venda: Date;

    @IsNumber()
    val_total_venda: number;
}
