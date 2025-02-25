


var listaProdutos = [
    { img: "tacos.png", titulo: "Tacos", descricao: "Taco é um prato típico do México, feito de tortilla de milho frita e recheada.", preco: 32},
    { img: "burrito.png", titulo: "Burrito", descricao: "Burrito é feito com uma tortilla de farinha recheada com diversos ingredientes.", preco: 36},
    { img: "guacamole3.png", titulo: "Guacamole", descricao: "Guacamole é um molho ou pasta de abacate temperado, originário do México.", preco: 60},
    { img: "bowlcamarao.jpeg", titulo: "Bowl de Camarao", descricao: "O bowl de camarão pode ser feito com camarão, arroz, abacate, legumes, e temperos.", preco: 48},
    { img: "fajitas.jpeg", titulo: "Fajitas", descricao: "É feita de carnes populares como frango, porco, camarão e todos os cortes de carne bovina.", preco: 49},
    { img: "chillibeans.jpeg", titulo: "Chilli Beans", descricao: "O chilli beans é um prato picante, saboroso e nutritivo, que pode ser servido como acompanhamento ou prato principal.", preco: 59}
  
]  

var carrinho = [];

function exibirListaCarrinho() {

    var ulCarrinho = document.getElementById("carrinho");
    ulCarrinho.innerHTML = "";

    for (var i = 0; i < carrinho.length; i++) {
        // estou criando um item no html para CADA ELEMENTO/POSIÇÃO DO ARRAY
        ulCarrinho.innerHTML += `<li>
            <h1>${carrinho[i].titulo}</h1>
            <p style="color: green"> ${carrinho[i].preco}</p>
        `
    }
}

function addCarrinho(index){
    // adicionando um novo produto ao carrinho
    var item = listaProdutos[index];
    carrinho.push(item)
    exibirListaCarrinho()
}

function exibirLista() {
    for (var i = 0; i < listaProdutos.length; i++) {
        // estou criando um item no html para CADA ELEMENTO/POSIÇÃO DO ARRAY
        document.getElementById("lista-produtos").innerHTML += `<li>
            <img src="${listaProdutos[i].img}" width="80%" height="50%">    
            <h1>${listaProdutos[i].titulo}</h1>
            <p class="descricao">${listaProdutos[i].descricao} </p>
            <p style="color: green"> R$ ${listaProdutos[i].preco}</p>
            <button onclick="addCarrinho(${i})" style="background-color: green; color: white; border-radius: 5px; padding: 10px">compre agora</button>
            </li>`
    }
}
exibirLista();




