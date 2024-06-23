const _usuario = document.querySelector('#usuario')
const _senha = document.querySelector('#senha');
const repete_senha = document.querySelector('#repita_senha');

const botao_reg = document.querySelector('#botao_reg');


var template_user = {user: []};
db_usuarios = JSON.parse(localStorage.getItem('usuarios'));

if (localStorage.getItem('usuarios') == undefined){
  localStorage.setItem('usuarios', JSON.stringify(template_user));
} 


botao_reg.addEventListener('click', function(){

 let registrado = document.querySelector('#registrado')
  registrado.innerHTML = "";

  if (!_usuario.value){
    alert('DEFINA SEU USUARIO')
  }
  else if (!_senha.value){
    alert('DEFINA SUA USUARIO')
  }
  else if (!_senha.value || !repete_senha.value){
    alert('DEFINA SUA SENHA')
  }

  else if (_senha.value != repete_senha.value) {
    
    alert('SENHAS NAO CONFEREM')

  } else {

    let login = _usuario.value;
    let senha = _senha.value;

    db_usuarios.user.push({login, senha});
    localStorage.setItem('usuarios', JSON.stringify(db_usuarios))
    registrado.innerHTML = "registrado"
  }

})