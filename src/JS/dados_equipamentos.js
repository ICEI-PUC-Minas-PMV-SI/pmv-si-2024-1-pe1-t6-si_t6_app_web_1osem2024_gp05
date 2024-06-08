var equipamentos = {
    veiculos: [
        {
            marca: 'fiat',
            ano: '2020',
            valor: '1000'
        },
        {
            marca: 'volks',
            ano: '2015',
            valor: '2000'
        }
    ],
    maquinas: [
        {
            tipo: 'cortador de grama',
            valor: '200'
        },{
            tipo: 'roçadeira',
            valor: '500'
        },{
            tipo: 'triturador',
            valor: '900'
        }
    ],
    ferramentas: [
        {
            nome: 'enchada',
            valor: '8000'
        },{
            nome: 'serrote',
            valor: '100'
        },{
            nome: 'alicate',
            valor: '50'
        }
    ],

};


console.log(equipamentos.veiculos[1].ano);
console.log(equipamentos.ferramentas[2].valor);