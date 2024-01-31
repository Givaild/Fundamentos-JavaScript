const podeDirigir = true
if (podeDirigir) {
    console.log("Ela pode dirigir");
}

const saldoEmConta = 1 
if(!saldoEmConta) {
    console.log('não tem saldo')
}

const bollComString = "ae hackerzão"
// força o valor a true ou false
// de aord ocom a tabela
console.log('bollComString', !! bollComString);

//negação
console.log("negação", !bollComString);

//negação  + forçar o booleam
console.log(
    "Negação +  forçar bolleam",
    !(!!bollComString)
);