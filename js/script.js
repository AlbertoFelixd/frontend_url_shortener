
const API_URL = 'http://localhost:8080/url_shortener/';

// Formulario url
document.getElementById('urlForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // No recargar la pagina

    const longUrl = document.getElementById('longUrl').value;

    if(!longUrl) {
        console.log('URL invalido');
        return;
    }

    // if(longUrl) {
    //     console.log('URL a acortar:', longUrl);
    //     console.log('Listo');
    //     return;
    // }

    try {
        const response = await fetch(API_URL + 'shorten', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ longUrl: longUrl })
        });
        
        const data = await response.json();
        
        const fullShortUrl = API_URL + data.code;

        if (response.ok) {
            alert('URL acortada: ' + fullShortUrl);

            console.log('URL original:', data.longUrl);
            console.log('Código:', data.code);
            console.log('URL corta:', fullShortUrl);
        } else {
            alert('URL invalido');
            console.error('Error al acortar la URL:', data);
        }

    } catch (error) {
        console.error('Error:', error);
    }
}); 