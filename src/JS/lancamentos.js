import { equipamentos } from "./dados_equipamentos.js";




var seletor_lancamento = document.getElementById('seletor_lancamento');
var seletor_movimento = document.getElementById('seletor_movimento');
var btn_lancamento = document.getElementById('btn_lancamento');
var nome_lancamento = document.getElementById('nome_lancamento');
var valor_lancamento = document.getElementById('valor_lancamento');

var id = document.getElementById('teste_0');

seletor_lancamento.addEventListener('change', function(){
    console.log(seletor_lancamento.value)

   if (seletor_lancamento.value == "equipamentos_select") {


    seletor_movimento.addEventListener('change', function(){
        console.log(seletor_movimento.value)

        if (seletor_movimento.value == "compra_select"){

            btn_lancamento.addEventListener('click', function(){
                var tipo0 = nome_lancamento.value;
                var valor0 = valor_lancamento.value;


                equipamentos.veiculos.push('TESTE');


            })




            console.log("VVVV");
        }






        })
    }
    
})
    
