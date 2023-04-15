
import { AuditEntity } from "shared/entities/audit.entity";
import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Entity('USER')
export class UserEntity extends AuditEntity{
    @PrimaryGeneratedColumn('uuid', { name: 'COD_USUARIO' })
    cod_usuario: string;

    @Column({ name: 'DES_NOME'})
    des_nome: string;

    @Column({ name: 'DES_EMAIL', unique: true })
    des_email: string;

    @Column({ name: 'DES_SENHA',})
    des_senha: string;

    @Column({ name: 'FLG_INATIVO' })
    flg_inativo: string;
}
