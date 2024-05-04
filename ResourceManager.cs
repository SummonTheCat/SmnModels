using System.Reflection;
using Microsoft.AspNetCore.StaticFiles;

class ResourceManager
{
    // Instance Management
    private static ResourceManager? _instance;
    public static ResourceManager Instance
    {
        get
        {
            return SafeGetInstance();
        }
    }

    public ResourceManager()
    {
        _instance = this;
    }

    private static ResourceManager SafeGetInstance()
    {
        if (_instance == null)
        {
            _instance = new ResourceManager();
        }

        return _instance;
    }

    public static string GetResourceRoot()
    {
        // Get the directory where the application is running
        string appRoot = "";
        string buildRoot = "";
        string binRoot = "";
        string projectRoot = "";
        appRoot += Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location);

        // Navigate up to the 'smnSite' directory
        if(Directory.GetParent(appRoot) != null)
        {
            buildRoot += Directory.GetParent(appRoot);
            if(Directory.GetParent(buildRoot) != null)
            {
                binRoot += Directory.GetParent(buildRoot);
                if(Directory.GetParent(binRoot) != null)
                {
                    projectRoot += Directory.GetParent(binRoot);
                }
            }
        }

        string resourceRoot = Path.Combine(projectRoot, "res");

        return resourceRoot;
    }

    public static FileExtensionContentTypeProvider GetCustomContentTypeProvider()
    {

        var provider = new FileExtensionContentTypeProvider();

        provider.Mappings[".glb"] = "model/gltf-binary";

        return provider;
    }

}
