import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateViagens1638634451968 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "viagens",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            generationStrategy: "increment",
          },
          {
            name: "codigoViagem",
            type: "varchar",
            isUnique: true,
          },
          {
            name: "origem",
            type: "varchar",
          },
          {
            name: "destino",
            type: "varchar",
          },
          {
            name: "dataHora",
            type: "date",
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
    await queryRunner.dropTable("viagens");
  }
}
