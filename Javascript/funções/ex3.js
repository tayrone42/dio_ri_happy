let preco = 300

function aplicarDesconto(valor,desconto){
    return desconto = valor -(valor * desconto)
}

function tipoCompra(tipo){
    if(tipo == 1){
        console.log(`Compra no cartão desconto de 10%, valor final ${aplicarDesconto(preco, 0.1)}`)
    }
}

tipoCompra(1)