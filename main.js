/* Abre e fecha o menu quando clicar no ícone: haburguer e x*/

const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')
//Depois que pegar os dois elementos com a classe toggle( que são as div de abrir e fechar o menu), faço um laço de repetição para executar tarefas para cada um desses elementos.
//O laço quer dizer: "para cada elemento existente em toggle, adicione um evento de escuta do tipo clique e ao clicar, execute a função que foi passada como parâmetro."
for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
    //estamos pegando a lista de classes do nav e fazendo um toggle, ou seja, uma troca( toggle significa troca). Se estiver aparecendo a classe 'show', vc tira, se não estiver aparecendo, vc coloca.
    // classlista já existe no mapeamento do documento da DOM
    //a Função toggle() já existe no mapeamento da DOM
    //LEITURA COMPLETA DESSA PARTE DO CÓDIGO:
    //SE NA LISTA DE CLASSES DO NAV EXISTER A CLASSE 'SHOW', TIRA, SENÃO COLOCA. QUANDO?QUANDO A FUNÇÃO FOR EXECUTADA---E A FUNÇÃO SERÁ EXECUTADA QUANDO ACONTECER O EVENTO DE CLIQUE-- QUANDO HOUVER O CLIQUE EM QUEM? NO ELEMENTO-- QUAL ELEMENTO? UMA HORA SERÁ O 'x' E A OUTRA SERÁ O 'SÍMBOLO DE MENU'...OS DOIS ELEMENTOS QUE CONTÉM A CLASSE TOGGLE NO HTML.
  })
}

//PRÓXIMO PASSO: ao clicar nos links dos menu( início, sobre, serviços, depoimentos, contato), ele tem que fechar o menu e direcionar o usuário para as seções específicas.

/*Quando clicar num item do menu, esconder o menu */

const links = document.querySelectorAll('nav ul li a')
//No documento, pesquise por todos os seletores "a" descritos nos parâmetros e atributa-os para a variável links.
//Esses processos são feitos para pegar os elementos no html e CSS e trabalhar com  eloes no JavaScript.
//Feito isso, a variável link terá todos os seletores "a" guardados nela.

for (const link of links) {
  //Para cada link em links(ou seja, PARA CADA elemento "a" de links, execute as seguintes linhas de código:)
  link.addEventListener('click', function () {
    nav.classList.remove('show')
    //Para cada vez que um link for clicado, execute a função que irá procurar, na lista de classes do elemento nav a classe show e remové-la.Dessa vez não precisamos fazer troca, porque se o menu já está aberto e estamos clicando nos links do menu, é porque a classe show já existe(ela precisa existir para abrir o menu). Então para fechá-lo, só precisamos remover a classe show. Então, toda vez que um link for clicado, a função será executada e a classe show será removida, fechando o menu.
  })
}

/*Mudar o header da página quando der scroll(colocar sombra no header da página ao dar scroll) */
/*A lógica é: Quando o scroll passar a altura do header, o javascript tem que colocar
a sombrinha(box-shaddow) no header.
Primeiro: temos que pegar o header;(é o elemento que receberá o box shadow)
Segundo: temos que pegar a altura do header( para sabermos quando o scroll passa-la
, o que será o gatilho para o box shadow ser colocado no nav) */

const header = document.querySelector('#header')
const navHeight = header.offsetHeight
/*Para pegarmos a altura do header, pegamos o objeto header e a propriedade dele que nos dará a altura, que é o 'offsetHeight'*/

/*O evento de click acontecia no X e no menu hamburguer e nos links do menu. Já o evento de scroll, acontece na JANELA INTEIRA, OU SEJA, WINDOW. Por isso adicionamos um evento um ouvinte de evento para a janela inteira.*/

window.addEventListener('scroll', function () {
  if (window.scrollY >= navHeight) {
    //se scroll for maior que a altura do header
    header.classList.add('scroll')
  } else {
    //se scroll for menor que a altura do header(ou seja, não passou a altura do header ainda.)
    header.classList.remove('scroll')
  }
})
/*Quando acontecer o evento de scroll na janela, ele terá que executar uma função.*/
/*Se o scroll no eixo Y passar a altura do header, ou seja, for maior que a altura do header, a função executará uma ação. Do contrário, executará outra.  */
/*Quando o scroll no eixo y passar a altura do header(navheight),ele adicionará na lista de classes do header a classe scroll, criada no CSS para colocar o box-shadow.*/
/*Quando o scroll for menor do que a altura do header, ou seja, não tiver ultrapassado a altura do header ainda, a função executará a parte do else e removerá a classe scroll da lista do header. */

/*TESTIMONIALS SLIDER CARROUSEL SWIPER */

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})
/*A partir do tamanho do tablet(767), mostrar 2 slides por vez */

/*ScrollReveal- O QUE ISSO FAZ? Mostra elementos quando der scroll na página. */

/*A constante scrollreveal receberá uma função e o primeiro argumento dela será um objeto de configuração contendo propriedade e valor */
const scrollReveal = ScrollReveal({
  origin: 'top' /*Virá do top */,
  distance: '30px',
  duration: 700 /*Terá uma duração de 700 milisegundos */,
  reset: true
})

scrollReveal.reveal(
  `
#home .image, #home .text,
#about .image, #about .text,
#services header, #services .card,
#testimonials header, #testimonials .testimonials,
#contact .text, #contact .links,
footer .brand, footer .social
`,
  { interval: 100 }
)

/*BOTÃO VOLTAR PARA O TOPO */

const backToTopButton = document.querySelector('.back-to-top')
window.addEventListener('scroll', function () {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
})

/*Pegamos o botão back-to-top e atribuímos à constante backToTopButton.Depois disso, adicionamos um evento de escuta a tela, o evento de scroll. Toda vez que houver rolagem na tela, a função será chamada. Ao ser chamada, ela fará uma verificação. Se a rolagem da tela for maior ou igual a 560, ela adicionará a classe show à lista de classes do botão para cima. Se a rolagem de tela for menor do que 560, ela removerá a classe show da lista de classes do botão. */
