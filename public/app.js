const filmes = [
    {
      id: "filme1",
      imagem: "https://br.web.img3.acsta.net/c_310_420/img/a6/40/a64041f8e31044710db5c7d1c2766f42.jpg",
      titulo: "O Homem Cão",
      genero: "Ação, Animação, Aventura, Comédia, Família, Fantasia",
      descricao: "O Homem-Cão, metade cão e metade homem, jurou proteger e servir enquanto persegue obstinadamente o supervilão felino Petey, o Gato.",
      dataLancamento: "27 de fevereiro de 2025",
      direcaoFilme: "Peter Hastings",
      classificacao: "Livre",
      sobre: "“Metade cão, metade homem, totalmente herói”, diz a descrição do longa, que é uma adaptação do livro best-seller nos EUA de mesmo nome escrito por Dav Pilkev. A animação retrata um fiel cão da polícia e seu dono, um policial dedicado, que são feridos durante o trabalho e precisam passar por uma cirurgia que, para salvar a vida de ambos, funde os dois e dá origem ao Homem-Cão.",
    },
    {
      id: "filme2",
      imagem: "https://br.web.img3.acsta.net/c_310_420/img/d2/e5/d2e517612de9e1db2463aeec34dc6d29.jpg",
      titulo: "O Macaco",
      genero: "Comédia, Terror",
      descricao: "“Todo mundo morre. É a vida”",
      dataLancamento: "6 de março de 2025",
      direcaoFilme: "Osgood Perkins",
      classificacao: "18 anos",
      sobre: "Em O Macaco, acompanhamos os gêmeos Bill e Hal (Theo James), que descobrem um antigo macaco de brinquedo no sótão de seu pai. A partir desse momento, uma série de mortes terríveis começa a acontecer com pessoas da sua família. Tentando se livrar do brinquedo e seguir em frente, os irmãos decidem descartá-lo e, com o tempo, distanciam-se desse passado sombrio. No entanto, o terror parece não os abandonar.",
    },
    {
      id: "filme3",
      imagem: "https://br.web.img3.acsta.net/c_310_420/img/b1/35/b1351babe7a777b7a97eded3db356990.jpg",
      titulo: "Ainda Estou Aqui",
      genero: "Drama biográfico",
      descricao: "Inspirado no livro homônimo de Marcelo Rubens Paiva, Ainda Estou Aqui é o primeiro original Globoplay.",
      dataLancamento: "7 de novembro de 2024",
      direcaoFilme: "Walter Salles",
      classificacao: "14 anos",
      sobre: "O longa-metragem é uma adaptação do livro homônimo escrito por Marcelo Rubens Paiva. A história se passa na década de 1970, no período mais intenso da ditadura militar no Brasil, e acompanha a trajetória da família Paiva, composta por Rubens, Eunice e cinco filhos.  A vida da família se transforma completamente quando, em um dia fatídico, Rubens Paiva é levado por militares à paisana e some sem deixar rastros.",
    },
    {
      id: "filme4",
      imagem: "https://br.web.img3.acsta.net/c_310_420/img/ae/76/ae760746629636d521b8e1aa5778935c.png",
      titulo: "Flow - À Deriva",
      genero: "Aventura, Animação, Família, Fantasia",
      descricao: "Um gato solitário, deslocado por uma grande inundação, encontra refúgio num barco com várias espécies. Juntos, enfrentam os desafios da adaptação a um mundo transformado.",
      dataLancamento: "20 de fevereiro de 2025",
      direcaoFilme: "Gints Zilbalodis",
      classificacao: "Livre",
      sobre: "Em Flow, o mundo parece ter chegado ao fim, coberto apenas por vestígios da presença humana, mas sem nenhum por perto. O gato é um animal solitário que, um dia, enquanto é perseguido por uma manada de cães, vê seu lar ser devastado por uma grande enchente. Buscando uma forma de sobreviver após a inundação, ele enfrenta diferentes ameaças, até que encontra refúgio em um pequeno barco povoado por diversas espécies. Enquanto tentam fugir de toda essa situação hostil, os animais terão que se unir apesar de suas diferenças. Nesse veleiro, navegando por paisagens místicas e transbordantes, eles passam pelos desafios e perigos da adaptação a este novo cenário pós-apocalíptico. Flow acompanha uma aventura por entre as ruínas de um mundo inundado e destruído e os sobreviventes que buscam permanecer à deriva com a ajuda e esperança de cada um.",
    },
    {
      id: "filme5",
      imagem: "https://br.web.img2.acsta.net/c_310_420/img/fb/8a/fb8a2dd78cc344d9b2fdf5e0a4bb4026.jpeg",
      titulo: "Moana 2",
      genero: "Animação, Aventura",
      descricao: "Moana volta à ilha para novas aventuras em um mundo mágico cheio de mistérios.",
      dataLancamento: "28 de novembro de 2024",
      direcaoFilme: "David G. Derrick Jr., Jason Hand, Dana Ledoux Miller",
      classificacao: "Livre",
      sobre: "Sequência da já clássica animação musical da Disney, Moana 2 acompanha o reencontro de Moana e Maui para uma nova aventura pelos mares. Passados três anos desde a última jornada marítima, um chamado de seus ancestrais leva a jovem polinésia Moana de volta para águas perigosas e distantes da Oceania com um grupo improvável de marinheiros. Com a ajuda também do semideus Maui, ela deve quebrar uma maldição terrível que um deus cruel e com sede de poder colocou sobre uma das ilhas de seu povo. Nessa grandiosa missão, Moana e sua equipe vão desbravar novos territórios e enfrentar velhos e novos inimigos, como monstros marítimos, feitiços e deuses do mal. Tudo isso em busca de reconectar sua nação e assegurar a paz dos oceanos.",
    },
    {
      id: "filme6",
      imagem: "https://br.web.img3.acsta.net/c_310_420/img/7e/31/7e31d6246c6f32fbb227b4739fb5440f.jpg",
      titulo: "Mufasa: O Rei Leão",
      genero: "Aventura, Fantasia",
      descricao: "A origem de Mufasa, o lendário rei leão, e a história de sua ascensão.",
      dataLancamento: "26 de março de 2025",
      direcaoFilme: "Barry Jenkins",
      classificacao: "10 anos",
      sobre: "Mufasa: O Rei Leão contará a história de Mufasa e Scar antes de Simba. A trama tem a ajuda de Rafiki, Timão e Pumba, que juntos contam a lenda de Mufasa à jovem filhote de leão Kiara, filha de Simba e Nala. Narrado através de flashbacks, a história apresenta Mufasa como um filhote órfão, perdido e sozinho até que ele conhece um simpático leão chamado Taka – o herdeiro de uma linhagem real. O encontro ao acaso dá início a uma grande jornada de um grupo extraordinário de deslocados em busca de seu destino, além de revelar a ascensão de um dos maiores reis das Terras do Orgulho.",
    },
  ];
  
  const containerFilmes = document.querySelector(".container-filmes .row");

  if (containerFilmes) {
      filmes.forEach((filme) => {
          const col = document.createElement("div");
          col.className = "col";
          
          const card = document.createElement("div");
          card.className = "card h-100";
          
          card.innerHTML = `
              <img src="${filme.imagem}" class="card-img-top" alt="${filme.titulo}">
              <div class="card-body">
                  <h5 class="card-title">${filme.titulo}</h5>
                  <p class="card-text"><strong>Gênero:</strong> ${filme.genero}</p>
                  <p class="card-text"><strong>Descrição:</strong> ${filme.descricao}</p>
              </div>
          `;
  
          card.addEventListener("click", () => {
              window.location.href = `detalhes.html?id=${filme.id}`;
          });
  
          col.appendChild(card);
          containerFilmes.appendChild(col);
      });
  }
  
  const params = new URLSearchParams(window.location.search);
  const filmeId = params.get("id");
  const filme = filmes.find((filme) => filme.id === filmeId);
  
  const informacoesExtras = document.getElementById("informacoes-extras");
  
  if (informacoesExtras && filme) {
    document.getElementById("titulo").textContent = filme.titulo;
    document.getElementById("data-lancamento").innerHTML = `<span class="rotulo">Lançamento:</span> <span class="valor">${filme.dataLancamento}</span>`;
    document.getElementById("direcao-filme").innerHTML = `<span class="rotulo">Direção do Filme:</span> <span class="valor">${filme.direcaoFilme}</span>`;
    document.getElementById("genero").innerHTML = `<span class="rotulo">Gênero:</span> <span class="valor">${filme.genero}</span>`;
    document.getElementById("classificacao").innerHTML = `<span class="rotulo">Classificação de Idade:</span> <span class="valor">${filme.classificacao}</span>`;
    document.getElementById("sobre").innerHTML = `<span class="rotulo">Sobre:</span> <span class="valor">${filme.sobre}</span>`;    
    document.getElementById("imagem").src = filme.imagem;
    document.getElementById("imagem").alt = filme.titulo;
  }
  