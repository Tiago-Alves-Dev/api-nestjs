import { SaleEntity } from "sales/entities/sale.entity";
import { AuditEntity } from "shared/entities/audit.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('CLIENT')
export class ClientEntity extends AuditEntity{
    @PrimaryGeneratedColumn('uuid', { name: 'COD_CLIENTE' })
    cod_cliente: string;
    
    @Column({ name: 'DES_NOME'})
    des_nome: string;

    @Column({ name: 'FLG_INATIVO', default: false})
    flg_inativo: boolean;

    @Column({ name: 'DES_ENDERECO'})
    des_endereco: string;

    @Column({ name: 'NUM_ENDERECO'})
    num_endereco: number;

    @Column({ name: 'DES_CIDADE'})
    des_cidade: string;

    @Column({ name: 'DES_UF'})
    des_uf: string;

    @Column({ name: 'DES_TELEFONE'})
    des_telefone: string;

    @Column({ name: 'DES_CONTATO', unique: true})
    des_contato: string;

    @Column({ name: 'VAL_VENDA_ACUMULADO'})
    val_venda_acumulado: number;

    @Column({ name: 'QTD_VENDA_PEDIDOS'})
    qtd_venda_pedidos: number;

    @Column({ name: 'DTA_ULT_PEDIDO'})
    dta_ult_pedido: Date; 

    /**
    * ENTITY RELATIONS
    */

    @OneToMany(() => SaleEntity, (sales) => sales.client)
    sales?: SaleEntity[];
}
