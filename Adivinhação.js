// Gera um número aleatório entre 0 e 10
const randomNumber = Math.floor(Math.random() * 11);

// Função para verificar o palpite
function checkGuess() {
    const guess = parseInt(document.getElementById('guessField').value);
    const message = document.getElementById('message');

    if (isNaN(guess) || guess < 0 || guess > 10) {
        message.textContent = "Por favor, insira um número válido entre 0 e 10.";
    } else if (guess === randomNumber) {
        message.textContent = "Parabéns! Você acertou!";
    } else {
        message.textContent = `Errado! O número correto era ${randomNumber}. Tente novamente!`;
    }
}
