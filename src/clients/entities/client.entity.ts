import { AuditEntity } from "shared/entities/audit.entity";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('CLIENT')
export class ClientEntity extends AuditEntity{
    @PrimaryGeneratedColumn('uuid', { name: 'COD_CLIENTE' })
    cod_cliente: string;
    
    @Column({ name: 'DES_NOME'})
    des_nome: string;

    @Column({ name: 'FLG_INATIVO'})
    flg_inativo: string;

    @Column({ name: 'DES_ENDERECO'})
    des_endereco: string;

    @Column({ name: 'NUM_ENDERECO'})
    num_endereco: string;

    @Column({ name: 'DES_CIDADE'})
    des_cidade: string;

    @Column({ name: 'DES_UF'})
    des_uf: string;

    @Column({ name: 'DES_TELEFONE', unique: true})
    des_telefone: string;

    @Column({ name: 'DES_CONTATO'})
    des_contato: string;

    @Column({ name: 'VAL_VENDA_ACUMULADO'})
    val_venda_acumulado: string;

    @Column({ name: 'QTD_VENDA_PEDIDOS'})
    qtd_venda_pedidos: string;

    @Column({ name: 'DTA_ULT_PEDIDO'})
    dta_ult_pedido: string;

    @Column({ name: 'DTA_CADASTRO'})
    dta_cadastro: string;

    @Column({ name: 'DTA_ALTERACAO'})
    dta_alteracao: string; 
}
