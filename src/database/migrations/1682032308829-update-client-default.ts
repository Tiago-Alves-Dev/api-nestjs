import {MigrationInterface, QueryRunner} from "typeorm";

export class updateClientDefault1682032308829 implements MigrationInterface {
    name = 'updateClientDefault1682032308829'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "CLIENT" ALTER COLUMN "VAL_VENDA_ACUMULADO" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "CLIENT" ALTER COLUMN "VAL_VENDA_ACUMULADO" SET DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "CLIENT" ALTER COLUMN "QTD_VENDA_PEDIDOS" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "CLIENT" ALTER COLUMN "QTD_VENDA_PEDIDOS" SET DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "CLIENT" ALTER COLUMN "QTD_VENDA_PEDIDOS" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "CLIENT" ALTER COLUMN "QTD_VENDA_PEDIDOS" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "CLIENT" ALTER COLUMN "VAL_VENDA_ACUMULADO" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "CLIENT" ALTER COLUMN "VAL_VENDA_ACUMULADO" DROP NOT NULL`);
    }

}
