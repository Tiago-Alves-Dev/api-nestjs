import {MigrationInterface, QueryRunner} from "typeorm";

export class salesCreate1681787462212 implements MigrationInterface {
    name = 'salesCreate1681787462212'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "SALE" ("CREATED_AT" TIMESTAMP NOT NULL DEFAULT now(), "UPDATED_AT" TIMESTAMP NOT NULL DEFAULT now(), "DELETED_AT" TIMESTAMP, "CREATED_BY" character varying NOT NULL DEFAULT 'system', "UPDATED_BY" character varying NOT NULL DEFAULT 'system', "DELETED_BY" character varying NOT NULL DEFAULT 'system', "COD_VENDA" uuid NOT NULL DEFAULT uuid_generate_v4(), "COD_CLIENTE" uuid NOT NULL, "DTA_VENDA" TIMESTAMP NOT NULL, "VAL_TOTAL_VENDA" integer NOT NULL, CONSTRAINT "PK_027fef487b16483596914e8a9b4" PRIMARY KEY ("COD_VENDA"))`);
        await queryRunner.query(`ALTER TABLE "SALE" ADD CONSTRAINT "FK_18d5c2ebfb9630a202fe3f1bf13" FOREIGN KEY ("COD_CLIENTE") REFERENCES "CLIENT"("COD_CLIENTE") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "SALE" DROP CONSTRAINT "FK_18d5c2ebfb9630a202fe3f1bf13"`);
        await queryRunner.query(`DROP TABLE "SALE"`);
    }

}
