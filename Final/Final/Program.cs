using Final.Models;
using Final.Services;
using Microsoft.EntityFrameworkCore;
using TestApiJWT.Helpers;

var builder = WebApplication.CreateBuilder(args);
var services = builder.Services;


// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();


// connection:
string? connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
services.AddDbContext<ApplicationDbContext>(options =>
{
    options.UseSqlServer(connectionString);
});

// map class JWT to data created in appsettings:
services.Configure<JWT>(builder.Configuration.GetSection("JWT"));

// injection
services.AddScoped<IAuthenticationServices, Authenticationservices>();
services.AddScoped<IStudentServices, StudentServices>();
services.AddScoped<ITeachingStaffServices, TeachingStaffServices>();
services.AddScoped<IITTecnicalServices, ITTecnicalServices>();
services.AddScoped<IDepartmentServices, DepartmentServices>();
services.AddScoped<IAdminServices, AdminServices>();


// React connection 
// services.AddCors();
services.AddCors(options =>
{
    options.AddPolicy("CorsPolicy", builder =>
    {
        builder.AllowAnyHeader().AllowCredentials().AllowAnyMethod().WithOrigins("http://localhost:3000", "https://localhost:3000");

    });
});



var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

//app.UseHttpsRedirection();

app.UseStaticFiles();
//app.UseCors(c => c.AllowAnyHeader().AllowCredentials().AllowAnyMethod().
//WithOrigins("http://localhost:3000", "https://localhost:3000"));//should be used before UseAuthorization


app.UseCors("CorsPolicy");
app.UseAuthentication();
app.UseAuthorization();


app.MapControllers();

app.Run();



// some services in swagger built by me.
//builder.Services.AddSwaggerGen(c =>
//{
//    c.SwaggerDoc("v1", new OpenApiInfo { Title = "Demo", Version = "v1" });
//});
//builder.Services.AddSwaggerGen(swagger =>
//{
//    //This is to generate the Default UI of Swagger Documentation    
//    swagger.SwaggerDoc("v2", new OpenApiInfo
//    {
//        Version = "v1",
//        Title = "ASP.NET 7 Web API",
//        Description = " ITI Projrcy"
//    });

//    // To Enable authorization using Swagger (JWT)    
//    swagger.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme()
//    {
//        Name = "Authorization",
//        Type = SecuritySchemeType.ApiKey,
//        Scheme = "Bearer",
//        BearerFormat = "JWT",
//        In = ParameterLocation.Header,
//        Description = "Enter 'Bearer' [space] and then your valid token in the text input below.\r\n\r\nExample: \"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9\"",
//    });
//    swagger.AddSecurityRequirement(new OpenApiSecurityRequirement
//    {
//         {
//         new OpenApiSecurityScheme
//          {
//           Reference = new OpenApiReference
//             {
//               Type = ReferenceType.SecurityScheme,
//               Id = "Bearer"
//             }
//          },
//           new string[] {}
//         }
//    });
//});