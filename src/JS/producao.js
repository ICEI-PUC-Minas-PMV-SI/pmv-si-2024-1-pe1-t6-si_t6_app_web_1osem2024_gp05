// importando o objeto JSON do outro documento
import { contabilização } from "./dados_producao.js";

//importando e definindo os campos de html, para editar o valores
var total_de_receita = document.getElementById('tot_receita');
var total_de_custo = document.getElementById('tot_custo');
var total_de_lucro = document.getElementById('tot_lucro');
var total_de_plantio = document.getElementById('tot_plantio');



var val_receita = document.getElementById('valores_plantio');
var val_custo = document.getElementById('valores_animal');
var val_lucro = document.getElementById('valores_colheita');
var valores_plantio = document.getElementById('valores_plantio');





// editando os valores do HTML, com as informações do objt JSON
total_de_receita.innerHTML = contabilização.receita.length;
total_de_custo.innerHTML = contabilização.custo.length;
total_de_lucro.innerHTML = contabilização.lucro.length;
total_de_plantio.innerHTML = contabilização.plantio.length;




//soma da receita
var soma_valores_receita = 0;

for ( var i=0 ; i < contabilização.receita.length ; i++){
    let valor = parseInt(contabilização.receita[i].valor);
    soma_valores_receita += valor;
    }
    
val_receita.innerHTML = soma_valores_receita;

//soma da plantio
var soma_valores_plantio = 0;

for ( var i=0 ; i < contabilização.plantio.length ; i++){
    let valor = parseInt(contabilização.plantio[i].valor);
    soma_valores_plantio += valor;
    }
    
valores_plantio.innerHTML = soma_valores_plantio;

//soma do custo
var soma_valores_custo = 0;

for ( var i=0 ; i < contabilização.custo.length ; i++){
    let valor = parseInt(contabilização.custo[i].valor);
    soma_valores_custo += valor;
    }
    
val_custo.innerHTML = soma_valores_custo;

//soma do lucro
var soma_valores_custo = 0;

for ( var i=0 ; i < contabilização.custo.length ; i++){
    let valor = parseInt(contabilização.custo[i].valor);
    soma_valores_custo += valor;
    }
    
val_lucro.innerHTML = soma_valores_custo;

