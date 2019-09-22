using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Contract.Migrations
{
    public partial class init : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Contract",
                columns: table => new
                {
                    ContractId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ContractName = table.Column<string>(maxLength: 50, nullable: false),
                    PlanCost = table.Column<decimal>(nullable: false),
                    PlanDeliveryDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    FactCost = table.Column<decimal>(nullable: false),
                    FactDeliveryDate = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Contract", x => x.ContractId);
                });

            migrationBuilder.CreateTable(
                name: "Stage",
                columns: table => new
                {
                    StageId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    StageName = table.Column<string>(maxLength: 50, nullable: false),
                    MinCntDays = table.Column<int>(nullable: false),
                    Comment = table.Column<string>(maxLength: 100, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Stage", x => x.StageId);
                });

            migrationBuilder.CreateTable(
                name: "StageContract",
                columns: table => new
                {
                    ContractId = table.Column<int>(nullable: false),
                    StageId = table.Column<int>(nullable: false),
                    PlanCompletionDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    ProjCompletionDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    FactCompletionDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    Comment = table.Column<string>(maxLength: 100, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_StageContract", x => new { x.ContractId, x.StageId });
                    table.ForeignKey(
                        name: "FK_StageContract_Contract_ContractId",
                        column: x => x.ContractId,
                        principalTable: "Contract",
                        principalColumn: "ContractId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_StageContract_Stage_StageId",
                        column: x => x.StageId,
                        principalTable: "Stage",
                        principalColumn: "StageId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_StageContract_StageId",
                table: "StageContract",
                column: "StageId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "StageContract");

            migrationBuilder.DropTable(
                name: "Contract");

            migrationBuilder.DropTable(
                name: "Stage");
        }
    }
}
