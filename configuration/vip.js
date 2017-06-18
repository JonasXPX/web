$(function() {

  var data = {
      vips: [{
          title: 'VIP HERO',
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
            'Pode usar o comando /autofix para reparar automaticamente quando a armadura quebrar']
          }, {
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
              'Pode remover MobSpawners de graça']
          }]
    };

  var hand = Handlebars.compile(document.getElementById("vips-pre").innerHTML);
  document.getElementById("content-vips").innerHTML = hand(data);
});
