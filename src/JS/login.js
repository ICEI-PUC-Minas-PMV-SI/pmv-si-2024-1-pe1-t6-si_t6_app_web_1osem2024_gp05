const usuario = document.querySelector('#input_usuario');
const senha = document.querySelector('#input_senha');
const entrar = document.querySelector('#entrar');
const falha = document.querySelector('#incorreto');

var template_user = {user: []};

if (localStorage.getItem('usuarios') == undefined){
  localStorage.setItem('usuarios', JSON.stringify(template_user));
} 


entrar.addEventListener('click', function (){

  let usuarios = JSON.parse(localStorage.getItem('usuarios'))
  let validation = false;

  var submit_usuario = usuario.value
  var submit_senha = senha.value

  for (i = 0; i < usuarios.user.length ; i++){

    console.log(usuarios.user[i].login)
    if (submit_usuario == usuarios.user[i].login && submit_senha == usuarios.user[i].senha){
      validation = true;
      console.log('logou', validation)
      window.location.href='home.html'

      JSON.stringify(localStorage.setItem('logado', submit_usuario));
    }
    
  }
  
  falha.innerHTML = 'usuario ou senha incorretos'
  
  //console.log(template.user[5].login)

})