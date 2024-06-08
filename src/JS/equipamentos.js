// importando o objeto JSON do outro documento
import { equipamentos } from "./dados_equipamentos.js";

//importando e definindo os campos de html, para editar o valores
var total_de_veiculos = document.getElementById('tot_veiculos');
var total_de_maquinas = document.getElementById('tot_maquinas');
var total_de_ferramentas = document.getElementById('tot_ferramentas');

var val_veiculos = document.getElementById('valores_veiculos');



// editando os valores do HTML, com as informações do objt JSON
total_de_veiculos.innerHTML = equipamentos.veiculos.length;
total_de_maquinas.innerHTML = equipamentos.maquinas.length;
total_de_ferramentas.innerHTML = equipamentos.ferramentas.length;


