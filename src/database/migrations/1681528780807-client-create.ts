import {MigrationInterface, QueryRunner} from "typeorm";

export class clientCreate1681528780807 implements MigrationInterface {
    name = 'clientCreate1681528780807'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "CLIENT" ("CREATED_AT" TIMESTAMP NOT NULL DEFAULT now(), "UPDATED_AT" TIMESTAMP NOT NULL DEFAULT now(), "DELETED_AT" TIMESTAMP, "CREATED_BY" character varying NOT NULL DEFAULT 'system', "UPDATED_BY" character varying NOT NULL DEFAULT 'system', "DELETED_BY" character varying NOT NULL DEFAULT 'system', "COD_CLIENTE" uuid NOT NULL DEFAULT uuid_generate_v4(), "DES_NOME" character varying NOT NULL, "FLG_INATIVO" character varying NOT NULL, "DES_ENDERECO" character varying NOT NULL, "NUM_ENDERECO" character varying NOT NULL, "DES_CIDADE" character varying NOT NULL, "DES_UF" character varying NOT NULL, "DES_TELEFONE" character varying NOT NULL, "DES_CONTATO" character varying NOT NULL, "VAL_VENDA_ACUMULADO" character varying NOT NULL, "QTD_VENDA_PEDIDOS" character varying NOT NULL, "DTA_ULT_PEDIDO" character varying NOT NULL, "DTA_CADASTRO" character varying NOT NULL, "DTA_ALTERACAO" character varying NOT NULL, CONSTRAINT "UQ_037c4265d2b679ed1de21d2f557" UNIQUE ("DES_TELEFONE"), CONSTRAINT "PK_94209a1ea1f9514c2ac70cb02b6" PRIMARY KEY ("COD_CLIENTE"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "CLIENT"`);
    }

}
