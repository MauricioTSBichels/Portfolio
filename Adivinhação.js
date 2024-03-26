// Gera um número aleatório entre 0 e 10
const numero = Math.floor(Math.random() * 11);

// Função para verificar o palpite
function checkar() {
    const guess = parseInt(document.getElementById('resposta').value);
    const message = document.getElementById('mensagem');

    if (isNaN(guess) || guess < 0 || guess > 10) {
        message.textContent = "Por favor, insira um número válido entre 0 e 10.";
    } else if (guess === numero) {
        message.textContent = "Parabéns! Você acertou!";
    } else {
        message.textContent = `Errado! O número correto era ${numero}. Tente novamente!`;
    }
}
