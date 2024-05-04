using Microsoft.Extensions.FileProviders;


var builder = WebApplication.CreateBuilder(args); 
var app = builder.Build(); 

ResourceManager resourceManager = new();

app.UseStaticFiles(new StaticFileOptions
{
    FileProvider = new PhysicalFileProvider(
        Path.Combine(builder.Environment.ContentRootPath, "res", "static")),
    // Append to the default ContentTypeProvider
    ContentTypeProvider = ResourceManager.GetCustomContentTypeProvider(),
});

app.MapGet("/", () => "Hello World!");

app.Run();

