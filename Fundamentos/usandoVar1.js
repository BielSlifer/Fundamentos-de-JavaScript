{
    {
        {
            { var sera = 'Será???' }
        }
    }
}
console.log(sera);

function teste() {
    var local = 123
}
teste()
console.log(local);
//Erro! A variável 'algo' não será exibida porque só foi definida dentro da função
//evite criar variáveis que vão para o escopo global