$(function(){

  $("#send_recuperacao").click(function(){
    $.post("../formulario.php", $("#jsformulario").serialize())
      .done(function(d) {
        alert("data sended " + JSON.stringify(d));
        $("#formulario_").html("<p class=\"finish_form\">Formulário enviado, Aguarde uma resposta no e-mail informado em até 5 dias.</p>");
        $("#send_recuperacao").hide();
      })
      .fail(function(d) {
        alert("data sended error " + JSON.stringify(d));
      })
  });


  var values = {
    form: [{
      id: "username",
      type: "text",
      required: "required",
      label: "Nick da conta perdida",
    },{
      id: "ip_form",
      type: "text",
      required: "",
      label: "Seu endereço de IP",
    }, {
      id: "mail",
      type: "email",
      required: "required",
      label: "E-mail usado na conta OU Seu E-mail",
    }, {
      id: "last-login",
      type: "text",
      required: "",
      label: "Data mais proxima do seu ultimo login",
    }, {
     id: "vips",
     type: "text",
     required: "",
     label: "Keys de ativação VIP, caso tenha ativado.",
     rows: "3"
    }, {
      id: "account_1",
      type: "text",
      required: "required",
      label: "Forneça detalhes sobre sua conta",
      rows: "4"
    }]
  };


  var data = Handlebars.compile(document.getElementById("pre-form").innerHTML);
  document.getElementById("formulario_").innerHTML = data(values);
});
