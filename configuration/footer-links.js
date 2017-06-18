$(function() {
    var data = {
        footer: [{
          text: 'Como ativar um VIP',
          url: '//www.endcraft.com.br/forum'
        },{
          text: 'Ativando o PIN',
          url: '//www.endcraft.com.br/forum'
        }, {
          text: 'Recuperando senha da conta',
          url: '//www.endcraft.com.br/forum'
        }]
    };

    var db = Handlebars.compile(document.getElementById('footer-links').innerHTML);
    document.getElementById('footer-link__inner').innerHTML = db(data);
})
