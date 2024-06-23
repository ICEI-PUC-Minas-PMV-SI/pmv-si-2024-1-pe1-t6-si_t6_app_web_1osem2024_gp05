// importando o objeto JSON do outro documento


//importando e definindo os campos de html, para editar o valores
const total_de_veiculos = document.getElementById('tot_veiculos');
const total_de_maquinas = document.getElementById('tot_maquinas');
const total_de_ferramentas = document.getElementById('tot_ferramentas');

const val_veiculos = document.querySelector('#valores_veiculos');
const val_maquinas = document.getElementById('valores_maquinas');
const val_ferramentas = document.getElementById('valores_ferramentas');

const num_total_equipamento = document.querySelector('#num_total_equipamento');
const valor_total_equipamentos = document.querySelector('#valor_total_equipamentos');


var equipamentos_2;
var str_equipamentos = {veiculos: [], maquinas: [], ferramentas: []};

if (localStorage.getItem('equipamentos') == undefined){
    localStorage.setItem('equipamentos', JSON.stringify(str_equipamentos));
  }

var equipamentos_2 = JSON.parse(localStorage.getItem('equipamentos'));

// editando os valores do HTML, com as informações do objt JSON
total_de_veiculos.innerHTML = equipamentos_2.veiculos.length;
total_de_maquinas.innerHTML = equipamentos_2.maquinas.length;
total_de_ferramentas.innerHTML = equipamentos_2.ferramentas.length;

num_total_equipamento.innerHTML = (equipamentos_2.veiculos.length + equipamentos_2.maquinas.length + equipamentos_2.ferramentas.length)



//somando os valores dos veiculos
var soma_valores_veiculos = 0;

function soma_veiculos () {

    for (var i=0 ; i < equipamentos_2.veiculos.length ; i++){
        
        soma_valores_veiculos += equipamentos_2.veiculos[i].valor;

    }
}
soma_veiculos()

val_veiculos.innerHTML = soma_valores_veiculos;


//somando os valores das maquinas
var soma_valores_maquinas = 0;

function soma_maquinas () {

    for (var i=0 ; i < equipamentos_2.maquinas.length ; i++){
        
        soma_valores_maquinas += equipamentos_2.maquinas[i].valor;

    }
}
soma_maquinas()
    
val_maquinas.innerHTML = soma_valores_maquinas;


//somando os valores das ferramentas
var soma_valores_ferramentas = 0;

function soma_ferramentas () {

    for (var i=0 ; i < equipamentos_2.ferramentas.length ; i++){
        
        soma_valores_ferramentas += equipamentos_2.ferramentas[i].valor;

    }
}
soma_ferramentas()
    
val_ferramentas.innerHTML = soma_valores_ferramentas;


valor_total_equipamentos.innerHTML = (soma_valores_veiculos + soma_valores_maquinas + soma_valores_ferramentas)








//fazendo o seletor da lista
var seletor = document.getElementById('seletor');
var dados = document.getElementById('dados');

seletor.addEventListener('change', function(){
    console.log(seletor.value)


    if (seletor.value =="veiculos_select"){
        dados.innerHTML = '';
        var controle = '';
        for ( var i=0 ; i < equipamentos_2.veiculos.length ; i++){
            let valor = equipamentos_2.veiculos[i].carro;
            controle += `veiculo ${i + 1} é o ${valor} <br>`;
            }
        dados.innerHTML += controle;
    }

    if (seletor.value =="maquinas_select"){
        dados.innerHTML = '';
        var controle = '';
        for ( var i=0 ; i < equipamentos_2.maquinas.length ; i++){
            let valor = equipamentos_2.maquinas[i].maquina;
            controle += `Máquina ${i + 1} é o ${valor} <br>`;
            }
        dados.innerHTML += controle;
    }

    if (seletor.value =="ferramentas_select"){
        dados.innerHTML = '';
        var controle = '';
        for ( var i=0 ; i < equipamentos_2.ferramentas.length ; i++){
            let valor = equipamentos_2.ferramentas[i].ferramenta;
            controle += `ferramenta ${i + 1} é o ${valor} <br>`;
            }
        dados.innerHTML += controle;
    }

})
