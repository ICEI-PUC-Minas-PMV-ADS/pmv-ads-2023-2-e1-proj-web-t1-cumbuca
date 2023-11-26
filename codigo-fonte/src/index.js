// importar as receitas

const posts = JSON.parse(localStorage.getItem("posts")) || [];

if (posts.length === 0) {
  //Receitas pré definidas

  const carnePost = {
    id: 0,
    titulo: "Carne assada com batata",
    foto: "./assets/perfil/carneAssadaComBatata.jpg",
    resumo: "Deliciosa carne assada com batata",
    preparo:
      "Fure a carne com a ponta da faca e no meio para colocar a linguiça calabresa, deixe marinar no vinagre, alho, cominho, amaciante de carne e sal grosso por pelo menos 30 minutos.",
    listaInp: [
      "Lagarto Redondo",
      "Alho a gosto",
      "Sal",
      "1kg linguica",
      "3 batatas",
    ],
    categoria: "carnes",
    usuario: "admin2@gmail.com",
  };

  posts.push(carnePost);

  const avePost = {
    id: 1,
    titulo: "Peru com molho agridoce",
    foto: "./assets/perfil/peru.jpg",
    resumo: "Peru com molho agridoce",
    preparo:
      "Peru com molho agridoce, com licor Curaçau e frutas cítricas, que a Ana Maria preparou no programa para sua ceia de Natal. Confira!",
    listaInp: [
      "4 colheres de acucar",
      "1 xicara de vinagre",
      "Suco de 2 laranjas",
      "Suco de 1 limao",
      "Sal",
      "1 colher de manteiga",
    ],
    categoria: "aves",
    usuario: "admin@gmail.com",
  };

  posts.push(avePost);

  const peixesFrutos = {
    id: 2,
    titulo: "Bacalhau enformado em batata",
    foto: "./assets/perfil/bacalhau.jpg",
    resumo:
      "Receita de bacalhau enformado em batata laminada, feito na panela, para você servir em datas especiais e surpreender. Veja que fácil a delícia agora mesmo!",
    preparo:
      "1- Aqueça o azeite e refogue o alho. 2- Adicione o bacalhau e refogue até secar (uns 10 minutos). 3- Acrescente a cebola e os pimentões, tempere com sal e salsa a gosto e refogue levemente (1 minuto). Reserve.",
    listaInp: [
      "1 colher de azeite",
      "sopa de alho",
      "1 cebola fatiada",
      "1 pimentao",
      "Sal e salsa",
    ],
    categoria: "peixesFrutosDoMar",
    usuario: "admin2@gmail.com",
  };

  posts.push(peixesFrutos);

  const saladasMolhos = {
    id: 3,
    titulo: "Salada de brócolis",
    foto: "./assets/perfil/salada.jpg",
    resumo: "Salada de brócolis",
    preparo:
      "Como toda salada, esta também é super prática fácil de fazer. E a única preocupação que precisamos ter, é deixar o brócolis bem verdinho e crocante. Então, nada de refogar ou cozinhar direto na água. A melhor forma para consumir o brócolis em forma de salada, é cozido rapidamente no vapor, cru ou branqueado, como minha mãe diz, “assustado”.",
    listaInp: [
      "1 xicara de brocolis",
      "1 cebola roxa",
      "1 maçã picada",
      "1 cenoura",
      "1 xicara de parmesao",
    ],
    categoria: "saladasMolhos",
    usuario: "admin@gmail.com",
  };

  posts.push(saladasMolhos);

  const bebidas = {
    id: 4,
    titulo: "Caipirinha de limão",
    foto: "./assets/perfil/caipirinha.jpg",
    resumo: "Deliciosa Caipirinha de limão",
    preparo:
      "Pegar o limao, cortar ao meio, expremer em um recepiente ate sair todo o caldo e adicionar acuar e cachaça ",
    listaInp: ["limão", "açucar", "cachaça"],
    categoria: "bebidas",
    usuario: "admin2@gmail.com",
  };

  posts.push(bebidas);

  const docesSobremesas = {
    id: 5,
    titulo: "Pavê de baunilha",
    foto: "https://anamariabraga.globo.com/wp-content/uploads/2021/11/receitas-de-pave-1024x576.jpg",
    resumo:
      "Todo ano é a mesma alegria com as receitas de pavê: além de agradarem, divertem com a famosa piadinha “Pavê ou pacumê?”. Seja só para ver ou para comer, a verdade é que essa sobremesa não pode faltar na sua ceia.",
    preparo:
      "Misture bem o leite condensado com o leite, o chocolate em pó e o amido em uma panela. Leve ao fogo",
    listaInp: [
      "1 cx de leite condesado",
      "3 colheres de chocolate em po",
      "2 colher de baunilha",
      "biscoito de maizena",
    ],
    categoria: "docesSobremesas",
    usuario: "admin@gmail.com",
  };

  posts.push(docesSobremesas);

  const massas = {
    id: 6,
    titulo: "Lasanha Tradicional",
    foto: "./assets/perfil/lasanha.jpeg",
    resumo:
      "Experimente essa clássica receita de lasanha tradicional e encante-se com sua combinação irresistível. Com camadas de sabor e uma textura incrível, essa receita é perfeita para reunir a família ao redor da mesa. Aprenda a preparar essa delícia ",
    preparo:
      "1. Cozinhe a massa da lasanha em aproximadamente em 2 litros de água por 5 minutos. 2. Em uma panela cozinhe a carne moída, depois de cozida coloque molho de tomate, o sal e temperos a gosto. 3. Comece montando com uma camada de molho, a massa da lasanha",
    listaInp: [
      "Macarrao para lasanha",
      "molho de tomate",
      "sal",
      "queijo",
      "frango desfiado",
    ],
    categoria: "massas",
    usuario: "admin2@gmail.com",
  };

  posts.push(massas);

  const lanches = {
    id: 7,
    titulo: "Hamburguer",
    foto: "./assets/perfil/hamburguer.jpeg",
    resumo: "Delicioso hamburguer",
    preparo: "Colocar ingredientes na chapa, e depois montar tudo",
    listaInp: [
      "Pao brioche",
      "bife de hamburguer",
      "salada e tomate",
      "queijo",
    ],
    categoria: "lanches",
    usuario: "admin@gmail.com",
  };

  posts.push(lanches);

  const alimentacaoSaudavel = {
    id: 8,
    titulo: "Pão de queijo de ricota e chia",
    foto: "./assets/perfil/paodequeijo.jpg",
    resumo:
      "além de ser prática, esta receita ainda traz uma versão saudável do queridinho das mesas de todos o Brasil. Ao utilizar ricota a receita fica mais leve e saborosa.Delicioso Pão de queijo de ricota e chia",
    preparo: "Montar o pao de queijo e assar por 15 minutos",
    listaInp: ["Massa", "queijo", "brioche"],
    categoria: "alimentacaoSaudavel",
    usuario: "admin2@gmail.com",
  };

  posts.push(alimentacaoSaudavel);

  const bolosTortas = {
    id: 9,
    titulo: "Torta de Frango",
    foto: "./assets/perfil/torta.jpeg",
    resumo:
      "Essa receita de torta de frango de liquidificador é deliciosa e muito prática para o dia a dia. Não à toa, é uma das nossa campeãs de acessos. Aprenda agora mesmo a fazer essa torta de frango simpes e fácil!",
    preparo: "Cozinha frango, adicionar os ingredientes e assar",
    listaInp: ["500g de frango", "1 cebola", "1 xicara de ervilha"],
    categoria: "bolosTortas",
    usuario: "admin@gmail.com",
  };

  posts.push(bolosTortas);

  localStorage.setItem("posts", JSON.stringify(posts));
}

var categorias = [
  "carnes",
  "aves",
  "peixex e frutos do mar",
  "saladas e molhos",
  "saladas e molhos",
  "bebidas",
  "doces e sobremesas",
  "massas",
  "lanches",
  "alimentação saudável",
  "bolos e tortas",
];

window.onload = function renderPosts() {
  const conteudoPost = document.getElementById("conteudo_post");
  conteudoPost.innerHTML = "";

  mockPosts.forEach((cont) => {
    var comentario = "";

    cont.comentarios.forEach((coment) => {
      // Use backticks for multi-line strings
      comentario += `<div class="userComents">
                        <img src="./assets/Avatar.svg" class="icone__botao avatar" />
                        <input type="text" name="comentarioUser" class="comentarioUser" value="${coment.texto}" disabled />
                    </div>`;
    });

    // Use backticks for multi-line strings
    conteudoPost.innerHTML += `
      <div class="receita__card" id="${cont.id + "_post"}">
        <button id="curtida_botao" onclick="countingClicks('${cont.id + "_post"}','${cont.id}')"><img src="${cont.foto}" class="card__img" /></button>
        <div class="receita__rating">
          <div class="">
            <div class="receita__rating">
              <div class="">
                <iconify-icon icon="mingcute:chicken-fill" class="icon" id="frango__20"></iconify-icon>
                <iconify-icon icon="mingcute:chicken-fill" class="icon" id="frango__40"></iconify-icon>
                <iconify-icon icon="mingcute:chicken-fill" class="icon" id="frango__60"></iconify-icon>
                <iconify-icon icon="mingcute:chicken-fill" class="icon" id="frango__80"></iconify-icon>
                <iconify-icon icon="mingcute:chicken-fill" class="icon" id="frango__100"></iconify-icon>
              </div>
              <button onclick="exibirComentario('${cont.id + "_coment"}', '${cont.id}')" id="botao_comentario"><img src="./assets/comentario.svg" /></button>

            </div>

            <p>${cont.descricao}</p>
            <div id="${cont.id + "_coment"}" class="coments-container remover__comentario">
              <div class="title-coments1">
                <h2></h2>
              </div>
              <div class="comments">
                <div class="comentar-container">
                  <textarea name="comentar" id="comentar" cols="36" rows="5" placeholder="Comentar" maxlength="50"></textarea>
                  <img src="./assets/receita/plano.png" alt="enviarMsg" id="enterMsg" />
                  <p id="texto-contador"><span id="contador">0</span>/50</p>
                </div>
                <div class="comentarios">
                  ${comentario} 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>`;
  });
}


function countingClicks(idPost, id) {

  debugger

  //document.getElementById(idbtn).disabled = true; //Assim cada loging cadatrado fará apenas uma curtida no post da 

  mockPosts.find((post) => post.id == id).curtidas += 1;

  var curdidas = mockPosts.find((post) => post.id == id).curtidas

  AdicionaCor(curdidas, idPost);
}


function PercorreID(idPost, id) {

  debugger

  var postElement = document.getElementById(idPost);

  var elements = postElement.querySelectorAll(`${id}`);

  // Loop through the selected elements and add the class
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.add("icon__selected");
  }
}

function AdicionaCor(curdidas, idPost) {

  debugger

  if (curdidas <= 20 && curdidas > 0) {
    PercorreID(idPost, "#frango__20");
  } else if (curdidas <= 40) {
    PercorreID(idPost, "#frango__20");
    PercorreID(idPost, "#frango__40");
  } else if (curdidas <= 60) {
    PercorreID(idPost, "#frango__20");
    PercorreID(idPost, "#frango__40");
    PercorreID(idPost, "#frango__60");
  } else if (curdidas <= 80) {
    PercorreID(idPost, "#frango__20");
    PercorreID(idPost, "#frango__40");
    PercorreID(idPost, "#frango__60");
    PercorreID("#frango__80");
  } else if (curdidas <= 100) {
    PercorreID(idPost, "#frango__20");
    PercorreID(idPost, "#frango__40");
    PercorreID(idPost, "#frango__60");
    PercorreID(idPost, "#frango__80");
    PercorreID(idPost, "#frango__100");
  }
}

const mockPosts = [
  {
    id: 0,
    foto: "./assets/perfil/paodequeijo.jpg",
    descricao:
      "Fure a carne com a ponta da faca e no meio para colocar a linguiça calabresa, deixe marinar no vinagre, alho, cominho, amaciante de carne e sal grosso por pelo menos 30 minutos.",
    curtidas: 0,
    exibir: false,
    comentarios: [
      {
        id: 0,
        texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, soluta?",
      },
      {
        id: 1,
        texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, soluta?",
      },
      {
        id: 2,
        texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, soluta?",
      },
    ]
  },
  {
    id: 1,
    foto: "./assets/perfil/carneAssadaComBatata.jpg",
    descricao:
      "Fure a carne com a ponta da faca e no meio para colocar a linguiça calabresa, deixe marinar no vinagre, alho, cominho, amaciante de carne e sal grosso por pelo menos 30 minutos.",
    curtidas: 0,
    exibir: false,
    comentarios: [
      {
        id: 0,
        texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, soluta?",
      },
      {
        id: 1,
        texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, soluta?",
      },
      {
        id: 2,
        texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, soluta?",
      },
    ]
  }
]


function exibirComentario(idComentario, idPost) {
  
  let exibir = mockPosts.find((post) => post.id == idPost).exibir;

  if (exibir) {
    document.getElementById(idComentario).style.display = "none";
    mockPosts.find((post) => post.id == idPost).exibir = false;
  }
  else {
    document.getElementById(idComentario).style.display = "block";
    mockPosts.find((post) => post.id == idPost).exibir = true;
  }

}