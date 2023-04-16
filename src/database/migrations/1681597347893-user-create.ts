import {MigrationInterface, QueryRunner} from "typeorm";

export class userCreate1681597347893 implements MigrationInterface {
    name = 'userCreate1681597347893'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "USER" ("CREATED_AT" TIMESTAMP NOT NULL DEFAULT now(), "UPDATED_AT" TIMESTAMP NOT NULL DEFAULT now(), "DELETED_AT" TIMESTAMP, "CREATED_BY" character varying NOT NULL DEFAULT 'system', "UPDATED_BY" character varying NOT NULL DEFAULT 'system', "DELETED_BY" character varying NOT NULL DEFAULT 'system', "COD_USUARIO" uuid NOT NULL DEFAULT uuid_generate_v4(), "DES_NOME" character varying NOT NULL, "DES_EMAIL" character varying NOT NULL, "DES_SENHA" character varying NOT NULL, "FLG_INATIVO" boolean NOT NULL DEFAULT false, CONSTRAINT "UQ_c7ad3fad9abca2518a822caa873" UNIQUE ("DES_EMAIL"), CONSTRAINT "PK_771390db8100c2f213044592c36" PRIMARY KEY ("COD_USUARIO"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "USER"`);
    }

}
