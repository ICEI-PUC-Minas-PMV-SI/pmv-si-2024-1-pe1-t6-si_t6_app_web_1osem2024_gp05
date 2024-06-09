// importando o objeto JSON do outro documento
import { equipamentos } from "./dados_equipamentos.js";

//importando e definindo os campos de html, para editar o valores
var total_de_veiculos = document.getElementById('tot_veiculos');
var total_de_maquinas = document.getElementById('tot_maquinas');
var total_de_ferramentas = document.getElementById('tot_ferramentas');

var val_veiculos = document.getElementById('valores_veiculos');
var val_maquinas = document.getElementById('valores_maquinas');
var val_ferramentas = document.getElementById('valores_ferramentas');



// editando os valores do HTML, com as informações do objt JSON
total_de_veiculos.innerHTML = equipamentos.veiculos.length;
total_de_maquinas.innerHTML = equipamentos.maquinas.length;
total_de_ferramentas.innerHTML = equipamentos.ferramentas.length;



//somando os valores dos veiculos
var soma_valores_veiculos = 0;

for ( var i=0 ; i < equipamentos.veiculos.length ; i++){
    let valor = parseInt(equipamentos.veiculos[i].valor);
    soma_valores_veiculos += valor;
    }
    
val_veiculos.innerHTML = soma_valores_veiculos;

//somando os valores das maquinas
var soma_valores_maquinas = 0;

for ( var i=0 ; i < equipamentos.maquinas.length ; i++){
    let valor = parseInt(equipamentos.maquinas[i].valor);
    soma_valores_maquinas += valor;
    }
    
val_maquinas.innerHTML = soma_valores_maquinas;

//somando os valores das ferramentas
var soma_valores_ferramentas = 0;

for ( var i=0 ; i < equipamentos.ferramentas.length ; i++){
    let valor = parseInt(equipamentos.ferramentas[i].valor);
    soma_valores_ferramentas += valor;
    }
    
val_ferramentas.innerHTML = soma_valores_ferramentas;




//inserindo informações das manutenções

var ultima_manutencao = document.getElementById('ultima_manutencao');
var proxima_manutencao = document.getElementById('proxima_manutencao');
var gasto_manutencao = document.getElementById('gasto_manutencao');


ultima_manutencao.innerHTML = equipamentos.manutencao[equipamentos.manutencao.length -1].data;
proxima_manutencao.innerHTML = "05-07-2024";

var soma_valores_manutencao = 0;

for ( var i=0 ; i < equipamentos.manutencao.length ; i++){
    let valor = parseInt(equipamentos.manutencao[i].valor);
    soma_valores_manutencao += valor;
    }
    
gasto_manutencao.innerHTML = soma_valores_manutencao;




//fazendo o seletor da lista
var seletor = document.getElementById('seletor');
var dados = document.getElementById('dados');

seletor.addEventListener('change', function(){
    console.log(seletor.value)


    if (seletor.value =="veiculos_select"){
        dados.innerHTML = '';
        var controle = '';
        for ( var i=0 ; i < equipamentos.veiculos.length ; i++){
            let valor = equipamentos.veiculos[i].tipo;
            controle += `carro ${i + 1} é o ${valor} <br>`;
            }
        dados.innerHTML += controle;
    }

    if (seletor.value =="maquinas_select"){
        dados.innerHTML = '';
        var controle = '';
        for ( var i=0 ; i < equipamentos.maquinas.length ; i++){
            let valor = equipamentos.maquinas[i].tipo;
            controle += `Máquina ${i + 1} é o ${valor} <br>`;
            }
        dados.innerHTML += controle;
    }

    if (seletor.value =="ferramentas_select"){
        dados.innerHTML = '';
        var controle = '';
        for ( var i=0 ; i < equipamentos.ferramentas.length ; i++){
            let valor = equipamentos.ferramentas[i].tipo;
            controle += `Máquina ${i + 1} é o ${valor} <br>`;
            }
        dados.innerHTML += controle;
    }

})
