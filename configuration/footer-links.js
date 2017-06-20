$(function() {
    var data = {
        footer: [{
          text: 'Como ativar um VIP',
          url: '//www.endcraft.com.br/forum/index.php?/topic/1984-mudan%C3%A7a-no-sistema-de-ativamento-vip/'
        },{
          text: 'Ativando o PIN',
          url: '//www.endcraft.com.br/forum/index.php?/topic/6588-fim-da-recupera%C3%A7%C3%A3o-via-email-novo-sistema-de-pin/'
        }, {
          text: 'Recuperando senha da conta',
          url: '//www.endcraft.com.br/forum/index.php?/topic/405-recupera%C3%A7%C3%A3o-de-senha/'
        }]
    };

    var db = Handlebars.compile(document.getElementById('footer-links').innerHTML);
    document.getElementById('footer-link__inner').innerHTML = db(data);
})
