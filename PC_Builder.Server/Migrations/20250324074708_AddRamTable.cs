using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace PC_Builder.Server.Migrations
{
    /// <inheritdoc />
    public partial class AddRamTable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Cpus",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Cpus",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Gpus",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Gpus",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.CreateTable(
                name: "Ram",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Price = table.Column<double>(type: "float", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Ram", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Ram");

            migrationBuilder.InsertData(
                table: "Cpus",
                columns: new[] { "Id", "Name", "Price" },
                values: new object[,]
                {
                    { 1, "Intel Core i7-13700K", 420.0 },
                    { 2, "AMD Ryzen 7 7800X3D", 449.0 }
                });

            migrationBuilder.InsertData(
                table: "Gpus",
                columns: new[] { "Id", "Name", "Price" },
                values: new object[,]
                {
                    { 1, "Geforce RTX 4060", 284.99000000000001 },
                    { 2, "Geforce RTX 4080", 1650.0 }
                });
        }
    }
}
