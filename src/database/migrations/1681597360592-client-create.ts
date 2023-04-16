import {MigrationInterface, QueryRunner} from "typeorm";

export class clientCreate1681597360592 implements MigrationInterface {
    name = 'clientCreate1681597360592'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "CLIENT" ("CREATED_AT" TIMESTAMP NOT NULL DEFAULT now(), "UPDATED_AT" TIMESTAMP NOT NULL DEFAULT now(), "DELETED_AT" TIMESTAMP, "CREATED_BY" character varying NOT NULL DEFAULT 'system', "UPDATED_BY" character varying NOT NULL DEFAULT 'system', "DELETED_BY" character varying NOT NULL DEFAULT 'system', "COD_CLIENTE" uuid NOT NULL DEFAULT uuid_generate_v4(), "DES_NOME" character varying NOT NULL, "FLG_INATIVO" boolean NOT NULL DEFAULT false, "DES_ENDERECO" character varying NOT NULL, "NUM_ENDERECO" integer NOT NULL, "DES_CIDADE" character varying NOT NULL, "DES_UF" character varying NOT NULL, "DES_TELEFONE" character varying NOT NULL, "DES_CONTATO" character varying NOT NULL, "VAL_VENDA_ACUMULADO" integer NOT NULL, "QTD_VENDA_PEDIDOS" integer NOT NULL, "DTA_ULT_PEDIDO" TIMESTAMP NOT NULL, CONSTRAINT "UQ_8010df70539ef613f17447ce383" UNIQUE ("DES_CONTATO"), CONSTRAINT "PK_94209a1ea1f9514c2ac70cb02b6" PRIMARY KEY ("COD_CLIENTE"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "CLIENT"`);
    }

}
