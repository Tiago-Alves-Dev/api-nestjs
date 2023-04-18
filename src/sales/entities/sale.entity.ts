import { SalesItemEntity } from "sales-item/entities/sales-item.entity";
import { ClientEntity } from "shared/entities";
import { AuditEntity } from "shared/entities/audit.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('SALE')
export class SaleEntity extends AuditEntity{
    @PrimaryGeneratedColumn('uuid', { name: 'COD_VENDA' })
    cod_venda: string;

    @Column({ name: 'COD_CLIENTE'})
    cod_cliente: string;

    @Column({ name: 'DTA_VENDA'})
    dta_venda: Date;

    @Column({ name: 'VAL_TOTAL_VENDA'})
    val_total_venda: number;

    /**
    * ENTITY RELATIONS
    */

    @ManyToOne(() => ClientEntity, (client) => client.sales)
    @JoinColumn({ name: 'COD_CLIENTE' })
    client?: ClientEntity;

    @OneToMany(() => SalesItemEntity, (item) => item.sale)
    itens?: SalesItemEntity[];
}
