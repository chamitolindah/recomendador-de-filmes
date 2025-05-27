function geraRecomendacao(idade, gostaDeFantasia) {
    if (idade >= 10) {
        if (idade >= 14) {
            return "O fabricante de lagrimas";
        } else {
            if (gostaDeFantasia) {
                return "culpa minha londres";
            } else {
                return "continencia ao amor";
            }
        }
    } else {
        if (gostaDeFantasia) {
            return "os farofeiros";
        } else {
            return "Descendentes";
        }
    }
}
function setup() {
    createCanvas(800, 400);

    // 🔵 Texto para informar ao usuário
    createSpan("Sua idade: ");
    campoIdade = createInput("5");

    // 🔵 Checkbox com descrição clara
    campoFantasia = createCheckbox(" Gosta de fantasia?");
}
function draw() {
    background("#A30EBD"); // ⚪ Fundo branco
    let idade = campoIdade.value();
    let gostaDeFantasia = campoFantasia.checked();
    let recomendacao = geraRecomendacao(idade, gostaDeFantasia);

    fill(color("#000000")); // 🟣 Cor do texto (roxo escuro)
    textAlign(CENTER, CENTER); // 🎯 Alinhamento centralizado
    textSize(38); // 🔠 Tamanho maior para boa leitura

    text(recomendacao, width / 2, height / 2); // 📍 Texto exibido no centro
}
