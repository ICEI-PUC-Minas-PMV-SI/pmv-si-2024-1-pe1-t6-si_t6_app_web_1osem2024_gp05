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
