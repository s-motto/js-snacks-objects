const listaAnimali = [

    {
        nome: 'leone',
        famiglia: 'felidi',
        classe: 'mammiferi'
    },

    {
        nome: 'cane',
        famiglia: 'canidi',
        classe: 'mammiferi'
    },

    {
        nome: 'gallina',
        famiglia: 'fasianidi',
        classe: 'uccelli'
    },

    {
        nome: 'geotritone',
        famiglia: 'pletodontidi',
        classe: 'anfibi'
    },

    {
        nome: 'lucertola',
        famiglia: 'lacertidi',
        classe: 'rettili'
    },

    {
        nome: 'cinghiale',
        famiglia: 'suidi',
        classe: 'mammiferi'
    },

    {
        nome: 'capriolo',
        famiglia: 'cervidi',
        classe: 'mammiferi'
    },
];

console.log(listaAnimali);

const listaMammiferi = [];

for (i = 0; i < listaAnimali.length; i++) {
    const classeAnimali = listaAnimali[i];

    if (classeAnimali.classe === 'mammiferi') {
        listaMammiferi.push(classeAnimali);
    };
}

console.log(listaMammiferi);