$(function() {
  var data = {
    pages: [{
      name: 'Início',
      pageid: 'home-page'
    },{
      name: 'VIP',
      pageid: 'vip-page'
    },{
      name: "Fórum",
      pageid: 'forum-page'
    },{
      name: "Rankings",
      pageid: 'rankings-page'
    },{
      name: "Dúvidas",
      pageid: 'faq-page'
    },{
      name: "Recuperação",
      pageid: 'recuperacao-page'
    }]
  };

  var hands = Handlebars.compile(document.getElementById('navegation').innerHTML);
  document.getElementById("navegation-page").innerHTML = hands(data);

})
