var current_page = null;

$(function(){
  if ($(location).attr('hash')) {
    loadPage($(location).attr('hash'), "html");
  }
  $(document).on('click', "a[id$='page']", function(){
    var page = $(this).attr('id').split("-")[0];
    if(current_page == page){
      return;
    }
    $(location).attr('hash', page);
    loadPage(page, "html");
  });
  var test;
  $("input#ol").keyup(function(v){
    var text = $(this).val();
    test = /(\w{3,})(?!\W)/i.test(text);
    if(test){
      $("button#okay-1").attr("disabled", null);
    } else {
      $("button#okay-1").attr("disabled", "disabled");
    }
  });
  $("button#okay-1").click(function(ev){
    ev.preventDefault();
    if(test){
      $("#card-1").css("display", "none");
      Cookies.set("nickname", $("input#ol").val());
      $("name").typed({
        strings: [Cookies.get("nickname"), "logou no EndCraft"],
        typeSpeed: 0
      })
    }
  });

});

// Inicilização de conteudo
function init(){
  if(!Cookies.get('nickname')){
    console.log("Nickname não foi marcado");
  } else {
    $(".demowide").css("display", "none");
  }
  if(!current_page)
  {
    loadPage("#home", "html");
  }
}


 // Carregamento de páginas
function loadPage(pageName, ext){
  current_page = pageName;
  pageName = pageName.replace("#", "");
  $('.container').html('<div id=p2 class="mdl-progress mdl-js-progress mdl-progress__indeterminate"></div>');
  $.get(pageName + "." + ext, function(data){
    console.log("data loaded: " + pageName);
    $(".container").html(data);
  }).fail(function(){
    loadPage(pageName, "php");
  })
}
