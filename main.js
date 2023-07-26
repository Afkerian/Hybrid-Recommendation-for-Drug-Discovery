document.getElementById('ml-form').addEventListener('submit', function(event) {
    // Evita que la página se actualice
    event.preventDefault();

    // Obtiene los valores de los campos de entrada
    var input1 = document.getElementById('input1').value;
    var input2 = document.getElementById('input2').value;

    // Valida los valores de entrada
    if (isNaN(input1) || isNaN(input2)) {
        alert('Por favor, ingrese números válidos');
        return;
    }

    // Simula la ejecución del algoritmo con un retraso
    setTimeout(function() {
        // Aquí es donde llamarías a tu algoritmo de aprendizaje automático con los valores de entrada
        var result = 'Here are the results of running the algorithm with the values ' + input1 + ' and ' + input2;

        // Muestra los resultados en la página
        document.getElementById('results').innerText = result;
    }, 2000);

    setTimeout(function() {
        var sections = document.querySelectorAll('#two .features section');

        sections.forEach(function(section, index) {
            var imgNumber = Math.floor(Math.random() * 10) + 1; // genera un número aleatorio entre 1 y 10
            var imgPath = 'dataset/pic0' + (imgNumber < 10 ? '0' : '') + imgNumber + '.png'; // construye la ruta de la imagen

            var imgElement = document.createElement('img'); // crea un nuevo elemento de imagen
            imgElement.src = imgPath; // establece la fuente de la imagen

            var paragraph = section.querySelector('p'); // encuentra el párrafo
            section.replaceChild(imgElement, paragraph); // reemplaza el párrafo con la imagen
        });
    }, 3000); // añade un retraso de 3 segundos antes de mostrar las imágenes
});
