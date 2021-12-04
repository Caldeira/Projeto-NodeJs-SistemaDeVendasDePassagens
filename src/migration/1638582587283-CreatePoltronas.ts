import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreatePoltronas1638582587283 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "poltronas",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            generationStrategy: "increment",
          },
          {
            name: "numero_poltrona",
            type: "varchar",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("poltronas");
  }
}
