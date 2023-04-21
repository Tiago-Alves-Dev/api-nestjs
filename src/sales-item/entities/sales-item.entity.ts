import { SaleEntity } from 'shared/entities';
import { AuditEntity } from 'shared/entities/audit.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('SALE-ITEM')
export class SalesItemEntity extends AuditEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'COD_ITEM' })
  cod_item: string;

  @Column({ name: 'COD_VENDA' })
  cod_venda: string;

  @Column({ name: 'DES_PRODUTO' })
  des_produto: string;

  @Column({ name: 'VAL_UNITARIO', type: 'float' })
  val_unitario: number;

  @Column({ name: 'QTD_ITENS' })
  qtd_itens: number;

  @Column({ name: 'VAL_TOTAL', type: 'float' })
  val_total: number;

  /**
   * ENTITY RELATIONS
   */

  @ManyToOne(() => SaleEntity, (sales) => sales.itens)
  @JoinColumn({ name: 'COD_VENDA' })
  sale?: SaleEntity;
}
