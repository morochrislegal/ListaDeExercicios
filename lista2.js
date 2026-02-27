//crie um programaque mostre se um número é positivo ou negativo
let num = 6

if (num > 0) {
    console.log(`o número ${num} é positivo`);
} else if (num < 0) {
    console.log(`o número ${num} é negativo`);

} else { 
    console.log(`o número é zero`);
}
//crie um programa que mostre se um ano é bissexto ou não
let ano = 2024;

if (ano % 4 === 0) {
    console.log(`o ano ${ano} é bissexto`);
} else {
    console.log(`o ano ${ano} não é bissexto`);
}
//criar um programa que mostre uma senha e a mensagem de acesso permitido ou negado 
let senha = "12345";
let senhacorreta = "12345";

if (senha === senhacorreta) {
    console.log("Acesso permitido");
} else {
    console.log("Acesso negado");
}

