var listaProdutos = [
    { img: "tacos.png", titulo: "Tacos", descricao: "Taco é um prato típico do México, feito de tortilla de milho frita e recheada.", preco: 32 },
    { img: "burrito.png", titulo: "Burrito", descricao: "Burrito é um prato típico da culinária mexicana e Tex-Mex, feito com uma tortilla de farinha recheada com diversos ingredientes.", preco: 36},
    { img: "guacamole.png", titulo: "Guacamole", descricao: "Guacamole é um molho, pasta ou salada de abacate temperado, originário do México.", preco: 60 }
]  

function exibirLista() {
    for (var i = 0; i < listaProdutos.length; i++) {
        // estou criando um item no html para CADA ELEMENTO/POSIÇÃO DO ARRAY
        document.write(`<li>
            <img src="${listaProdutos[i].img}">    
            <h1>${listaProdutos[i].titulo}</h1>
            <p>${listaProdutos[i].descricao} </p>
            <p style="color: green"> ${listaProdutos[i].preco}</p>
            <button style="background-color: green; color: white; border-radius: 5px; padding: 10px">compre agora</button>
            </li>`)
    }
}
exibirLista();
// todo array
console.log(listaProdutos)
// [
//     {
//         "img": "smartv.png",
//         "titulo": "tv",
//         "descricao": "tv 50 polegas, samsung smartv luz de led",
//         "preco": 2000
//     },
//     {
//         "img": "smartv.png",
//         "titulo": "tv led",
//         "descricao": "tv 40 polegas, samsung smartv luz de led",
//         "preco": 1500
//     },
//     {
//         "img": "smartv.png",
//         "titulo": "tv sobre",
//         "descricao": "tv 20 polegas, samsung smartv luz de led",
//         "preco": 1000
//     }
// ]
// todo elemento selecionado
console.log(listaProdutos[0])
// {
//     "img": "smartv.png",
//     "titulo": "tv",
//     "descricao": "tv 50 polegas, samsung smartv luz de led",
//     "preco": 2000
// },
// apenas uma variavel do elemento selecionado
console.log(listaProdutos[2].titulo)
// "tv sobre"