import {MigrationInterface, QueryRunner} from "typeorm";

export class updateClient1681962027874 implements MigrationInterface {
    name = 'updateClient1681962027874'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "CLIENT" ALTER COLUMN "VAL_VENDA_ACUMULADO" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "CLIENT" ALTER COLUMN "QTD_VENDA_PEDIDOS" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "CLIENT" ALTER COLUMN "DTA_ULT_PEDIDO" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "CLIENT" ALTER COLUMN "DTA_ULT_PEDIDO" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "CLIENT" ALTER COLUMN "QTD_VENDA_PEDIDOS" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "CLIENT" ALTER COLUMN "VAL_VENDA_ACUMULADO" SET NOT NULL`);
    }

}
