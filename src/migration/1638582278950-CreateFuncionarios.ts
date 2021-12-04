import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateFuncionarios1638582278950 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "funcionarios",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            generationStrategy: "increment",
          },
          {
            name: "idCompanhia",
            type: "int",
          },
          {
            name: "nome",
            type: "varchar",
          },
          {
            name: "matricula",
            type: "varchar",
            isUnique: true,
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
        foreignKeys: [
          {
            name: "FKCompanhiaFuncionario",
            referencedTableName: "companhias",
            referencedColumnNames: ["id"],
            columnNames: ["idCompanhia"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("funcionarios");
  }
}
