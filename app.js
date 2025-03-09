async function fetchAIResponse() {
    const inputText = document.getElementById("inputText").value;
    const responseElement = document.getElementById("responseText");

    if (!inputText) {
        responseElement.textContent = "Por favor, ingresa algo en el campo de texto.";
        return;
    }

    const response = await fetch('https://api-inference.huggingface.co/models/gpt2', {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer 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', // Tu token aquí
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            inputs: inputText,
        }),
    });

    const data = await response.json();

    if (data && data[0] && data[0].generated_text) {
        responseElement.textContent = `Respuesta de la IA: ${data[0].generated_text}`;
    } else {
        responseElement.textContent = "Hubo un error al procesar la solicitud.";
    }
}
