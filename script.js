 // Define the shift value (how many positions to shift)
 const shift = 3;

 // Function to encrypt the text
 function encryptText() {
     const text = document.getElementById('text-container').value;
     let encryptedText = '';

     for (let i = 0; i < text.length; i++) {
         let char = text[i];
         if (char.match(/[a-z]/i)) {
             // Get the character code (ASCII value)
             let code = text.charCodeAt(i);

             // Uppercase letters
             if (code >= 65 && code <= 90) {
                 char = String.fromCharCode(((code - 65 + shift) % 26) + 65);
             }

             // Lowercase letters
             else if (code >= 97 && code <= 122) {
                 char = String.fromCharCode(((code - 97 + shift) % 26) + 97);
             }
         }
         // Append the encrypted character to the result
         encryptedText += char;
     }

     // Display the encrypted text in the div
     document.getElementById('encripted-text').textContent = encryptedText;
     document.querySelector('.message').style.display = 'none';
     document.querySelector('.result-image').style.display = 'none';
     document.getElementById('encripted-text').style.display = 'flex';
     document.querySelector('.buttons-aside').style.display = 'flex'
 }

 function decryptText() {
    const text = document.getElementById('text-container').value;
    let decryptedText = '';

    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        if (char.match(/[a-z]/i)) {
            let code = text.charCodeAt(i);

            if (code >= 65 && code <= 90) {
                char = String.fromCharCode(((code - 65 - shift + 26) % 26) + 65);
            } else if (code >= 97 && code <= 122) {
                char = String.fromCharCode(((code - 97 - shift + 26) % 26) + 97);
            }
        }
        decryptedText += char;
    }

    document.getElementById('encripted-text').textContent = decryptedText;
    document.querySelector('.message').style.display = 'none';
    document.querySelector('.result-image').style.display = 'none';
    document.getElementById('encripted-text').style.display = 'flex';
    document.querySelector('.buttons-aside').style.display = 'flex'
}

function copyToClipboard() {
    const outputText = document.getElementById('encripted-text').textContent;
    navigator.clipboard.writeText(outputText).then(() => {
        alert('Text copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
}
 