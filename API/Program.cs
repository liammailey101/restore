using API.Data;
using API.Data.Migrations;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddDbContext<StoreContext>(options =>
{
    options.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection"));
});
builder.Services.AddCors();

var app = builder.Build();

// Configure the HTTP request pipeline.

app.UseCors(opt =>
{
    opt.WithOrigins("https://localhost:3000")
           .AllowAnyMethod()
           .AllowAnyHeader();
});

app.MapControllers();

DbInitializer.InitDb(app);


app.UseCors();
app.Run();
