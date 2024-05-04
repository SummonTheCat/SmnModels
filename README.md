# SmnModels

SmnModels is a lightweight, web-based application designed for embedding interactive 3D models into web pages using Three.js. This project simplifies the integration of complex 3D model interactions, enabling dynamic loading and comprehensive user interaction capabilities.

## Features

- **Interactive 3D Viewer:** Deploy 3D models interactively in any modern web browser.
- **GLTF Model Support:** Easily load and display models in the GLTF format.
- **Customizable:** Adjust model behavior and appearance through simple HTML attributes.

## Quick Start

Clone the repository and start embedding 3D models in your web pages:

```bash
git clone https://github.com/yourusername/smnmodels.git
cd smnmodels
```

## Usage Example

To use SmnModels, simply include the model elements in your HTML as shown in the example below:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Test01</title>
    <style>
        .panel {
            width: 300px;
            height: 300px;
            display: inline-block;
        }
    </style>
</head>
<body>
    <div class="panel">
        <model id="test-model-1" src="models/Test01.glb" behaviour="orbit 1 5" appearance="background-color:transparent; ambient-intensity:1;" scale="0.7" rotation="45 45 0">
            Model 1
        </model>
    </div>
    
    <div class="panel">
        <model id="test-model-2" src="models/Test02.glb" behaviour="rotate -0.01">
            Model 2
        </model>
    </div>

    <div class="panel">
        <model id="test-model-3" src="models/Test01.glb" appearance="background-color:#660011; ambient-intensity:1;" rotation="45 45 0" scale="0.75">
            Model 3
        </model>
    </div>

    <script type="module" src="./js/smnmodel.bundle.js"></script>
</body>
</html>
```

This HTML file demonstrates the integration of multiple models with different behaviors and appearances, offering a rich interactive user experience.

## Dependencies

- **Three.js:** For rendering 3D graphics.
- **GLTFLoader & OrbitControls:** Essential for loading GLTF models and enabling user interactions.

## Contributing

Contributions are welcome! Please fork the repo, make your changes, and submit a pull request.

## License

This project is released under the MIT License.

## Support

If you need assistance or have suggestions, please open an issue on the GitHub repository.