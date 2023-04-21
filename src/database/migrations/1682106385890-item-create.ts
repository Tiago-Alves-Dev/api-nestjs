import { MigrationInterface, QueryRunner } from 'typeorm';

export class itemCreate1682106385890 implements MigrationInterface {
  name = 'itemCreate1682106385890';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "SALE-ITEM" ("CREATED_AT" TIMESTAMP NOT NULL DEFAULT now(), "UPDATED_AT" TIMESTAMP NOT NULL DEFAULT now(), "DELETED_AT" TIMESTAMP, "CREATED_BY" character varying NOT NULL DEFAULT 'system', "UPDATED_BY" character varying NOT NULL DEFAULT 'system', "DELETED_BY" character varying NOT NULL DEFAULT 'system', "COD_ITEM" uuid NOT NULL DEFAULT uuid_generate_v4(), "COD_VENDA" uuid NOT NULL, "DES_PRODUTO" character varying NOT NULL, "VAL_UNITARIO" double precision NOT NULL, "QTD_ITENS" integer NOT NULL, "VAL_TOTAL" double precision NOT NULL, CONSTRAINT "PK_3e79a0b967b49c5d4654d4135c8" PRIMARY KEY ("COD_ITEM"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "SALE-ITEM" ADD CONSTRAINT "FK_1d1111479f3478ad38f78beb4ba" FOREIGN KEY ("COD_VENDA") REFERENCES "SALE"("COD_VENDA") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "SALE-ITEM" DROP CONSTRAINT "FK_1d1111479f3478ad38f78beb4ba"`,
    );
    await queryRunner.query(`DROP TABLE "SALE-ITEM"`);
  }
}
