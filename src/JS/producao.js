// importando o objeto JSON do outro documento
import { contabilização } from "./dados_producao.js";

//importando e definindo os campos de html, para editar o valores
var total_de_agropecuaria = document.getElementById('tot_agropecuaria');
var total_de_pecuaria = document.getElementById('tot_pecuaria');
var total_de_colheita = document.getElementById('tot_colheita');
var total_de_abate = document.getElementById('tot_abate');
var total_de_esquipamento = document.getElementById('tot_equipamento');
var total_de_insumo = document.getElementById('tot_insumo');




// editando os valores do HTML, com as informações do objt JSON
total_de_agropecuaria.innerHTML = contabilização.Agropecuaria.length;
total_de_pecuaria.innerHTML = contabilização.Pecuaria.length;
total_de_colheita.innerHTML = contabilização.Colheita.length;
total_de_abate.innerHTML = contabilização.Abate.length;
total_de_esquipamento.innerHTML = contabilização.Equipamento.length;
total_de_insumo.innerHTML = contabilização.Insumos.length;



//soma da agropecuaria
var soma_valores_agropecuaria = 0;

for ( var i=0 ; i < contabilização.Agropecuaria.length ; i++){
    let valor = parseInt(contabilização.Agropecuaria[i].valor);
    soma_valores_agropecuaria += valor;
    }
    
total_de_agropecuaria.innerHTML = soma_valores_agropecuaria;

//soma da pecuaria
var soma_valores_pecuaria = 0;

for ( var i=0 ; i < contabilização.Pecuaria.length ; i++){
    let valor = parseInt(contabilização.Pecuaria[i].valor);
    total_de_pecuaria += valor;
    }
    
total_de_pecuaria.innerHTML = soma_valores_pecuaria;

//soma das colheitas
var soma_valores_colheita = 0;

for ( var i=0 ; i < contabilização.Colheita.length ; i++){
    let valor = parseInt(contabilização.Colheita[i].valor);
    soma_valores_colheita += valor;
    }
    
total_de_colheita.innerHTML = soma_valores_colheita;

//soma dos abates

var soma_valores_abates = 0;

for ( var i=0 ; i < contabilização.Abate.length ; i++){
    let valor = parseInt(contabilização.Abate[i].valor);
    soma_valores_abates += valor;
    }
    
total_de_abate.innerHTML = soma_valores_abates;

//gasto das equipamentos
var gasto_valores_equipamento = 0;

for ( var i=0 ; i < contabilização.Equipamento.length ; i++){
    let valor = parseInt(contabilização.Equipamento[i].valor);
    gasto_valores_equipamento += valor;
    }
    
total_de_esquipamento.innerHTML = soma_valores_equipamentos;

//gasto dos insumos
var gasto_valores_insumos = 0;

for ( var i=0 ; i < contabilização.Insumosnsumos.length ; i++){
    let valor = parseInt(contabilização.Insumos[i].valor);
    gasto_valores_insumos += valor;
    }
    
total_de_insumos.innerHTML = gasto_valores_insumos;

