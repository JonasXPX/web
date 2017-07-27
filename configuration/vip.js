$(function() {
  var lastElement = null;
  var viptype = null;
  $(".amount li").click(function(e){
    if(lastElement != null)
      $(lastElement).removeClass("selected");
    $(this).addClass("selected");
    lastElement = $(this);
    updateValues($(this));
  });
  $(".viptypes").click(function(){
    if(lastElement)
      updateValues(lastElement);
  });
  $("#comprar").click(function(e){
    if(!lastElement){
      e.preventDefault();
      $(".amount li").each(function(s){
        $(this).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
      });
      return;
    }
    if(!Cookies.get("nickname")){
      e.preventDefault();
      alert("Você precisa digitar seu nick logo abaixo");
      return;
    }
    $("<form method='POST' action='//www.endcraft.com.br/data/pagamento.php' target='_blank'> \
        <input type='hidden' name='username' value='"+ Cookies.get("nickname") +"'> \
        <input type='hidden' name='quantity' value='"+ lastElement.text() +"'> \
        <input type='hidden' name='type' value='"+ $("[name='viptype']:checked").attr("id") +"'> \
        <input type='hidden' name='amount' value='"+ $("[name='viptype']:checked").attr("value") +"'> \
        <input type='hidden' name='idref' value='"+ $("[name='viptype']:checked").attr("refid") +"'> \
        <input type='hidden' name='gateway' value='"+ $("[name='gateway']:checked").attr('value') +"'>\
        </form>").appendTo("body").submit().remove();
  });

  function updateValues(clicked) {
    var amount = parseFloat(clicked.text());
    var price = parseFloat($("[name='viptype']:checked").attr("value"));
    var total = amount * price;
    $(".total").text("Valor total: R$ " + total);
  }


  var data = {
      vips: [{
          amount: '32.00', //checado no PHP
          idref: '200',
          name: 'hero',
          title: 'VIP HERO',
          isdefault: false,
          desc: [
            'Duração: 30 Dias',
            'Usar /mc nas cidades',
            'Usar /disco com set de couro',
            'Ver o inventário de outros jogadore com /verinv',
            'Usar o /bau (Bau virtual)',
            'Drops exclusivos durante a mineração',
            'Usar /efeito Vários efeitos super legais',
            'Acesso a bigorna 24h por dia na /warp minavip',
            'Eventos privados na sala de eventos na /warp vip',
            'Acesso ao kit viphero e kit pvpvip',
            'Chat VIP com o comando /v (Prioridade para falar com o admin)',
            'Pode remover MobSpawners de graça',
            'Pode usar o comando /Fix set para reparar a armadura',
            'Pode usar o comando /autofix para reparar automaticamente quando a armadura quebrar',
            'Pode vender itens usando o /mercado']
          }, {
            amount: '17.00',
            idref: '100',
            isdefault: true,
            name: 'lite',
            title: "VIP+",
            desc: [
              'Duração: 20 Dias',
              'Usar /mc nas cidades',
              'Usar /disco',
              'Ver o inventário de outros jogadore com /verinv',
              'Usar o /bau',
              'Drops exclusivos durante a mineração',
              'Loja VIP (Preços melhores)',
              'Fazer Loja',
              'Acesso a bigorna 24h por dia na /warp minavip',
              'Acesso ao kit vip e kit pvpvip',
              'Chat VIP com o comando /v (Prioridade para falar com o admin)',
              'Pode remover MobSpawners de graça',
              'Pode vender itens usando o /mercado']
          }]
    };

  var hand = Handlebars.compile(document.getElementById("vips-pre").innerHTML);
  var hand_2 = Handlebars.compile(document.getElementById("vips-list").innerHTML);
  document.getElementById("content-vips").innerHTML = hand(data);
  document.getElementById("viptypes").innerHTML = hand_2(data);
});
