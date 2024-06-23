
const seletor_lancamento = document.querySelector('#seletor_lancamento');
const seletor_produto = document.querySelector('#seletor_produto');
const seletor_origem = document.querySelector('#seletor_origem');
const btn_lancamento = document.querySelector('#btn_lancamento');
const nome_lancamento = document.querySelector('#nome_lancamento');
const valor_lancamento = document.querySelector('#valor_lancamento');
const resp_sucess = document.querySelector('#resp_sucess');

var tipo_selecionado;
var produto_selecionado;
var origem_selecionado;


//objetos

var str_equipamentos = {veiculos: [], maquinas: [], ferramentas: []};
var equipamentos;

if (localStorage.getItem('equipamentos') == undefined){
  localStorage.setItem('equipamentos', JSON.stringify(str_equipamentos));
}

equipamentos = JSON.parse(localStorage.getItem('equipamentos'));
console.log(equipamentos)

btn_lancamento.addEventListener('click', function(){

  seletor_lancamento.addEventListener('change', function(){
    resp_sucess.innerHTML = ``;
    tipo_selecionado = seletor_lancamento.value;
    console.log(tipo_selecionado)
    localStorage.setItem('tipo_selecionado', tipo_selecionado);
  })


  seletor_produto.addEventListener('change', function(){
    resp_sucess.innerHTML = ``;
    produto_selecionado = seletor_produto.value;
    console.log(produto_selecionado)
    localStorage.setItem('produto_selecionado', produto_selecionado);
  })


  seletor_origem.addEventListener('change', function(){
    origem_selecionado = seletor_origem.value;
    console.log(origem_selecionado)
    localStorage.setItem('origem_selecionado', origem_selecionado);
  })


  if(tipo_selecionado == 'equipamentos') {
    if (origem_selecionado == 'compra') {
      
      switch(produto_selecionado) {

        case 'veiculos':
          let lanc_veic = {carro: String(nome_lancamento.value), valor: Number(valor_lancamento.value)}
          equipamentos.veiculos.push(lanc_veic);
          localStorage.setItem('equipamentos', JSON.stringify(equipamentos));
          resp_sucess.innerHTML = `<h1>LANÇAMENTO REALIZADO COM SUCESSO</h1>`;
          break;

        case 'maquinas':
          let lanc_maq = {maquina: String(nome_lancamento.value), valor: Number(valor_lancamento.value)}
          equipamentos.maquinas.push(lanc_maq);
          localStorage.setItem('equipamentos', JSON.stringify(equipamentos));
          resp_sucess.innerHTML = `<h1>LANÇAMENTO REALIZADO COM SUCESSO</h1>`;
          break;

        case 'ferramentas':
          let lanc_ferr = {ferramenta: String(nome_lancamento.value), valor: Number(valor_lancamento.value)}
          equipamentos.ferramentas.push(lanc_ferr);
          localStorage.setItem('equipamentos', JSON.stringify(equipamentos));
          resp_sucess.innerHTML = `<h1>LANÇAMENTO REALIZADO COM SUCESSO</h1>`;
          break;
      }
    }
  }


})



