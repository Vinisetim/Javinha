let voos = "Nacional";
let regiao = "Norte";
let classe = "Econoica";
let adultos = 2
let criancas = 1
let valorcriancaseconorte = 1800*criancas
let valoradultoseconorte = 2500*adultos
let valorcriancasexenorte = ((1800*10)/100)+valoradultoseconorte*criancas
let valoradultosexenorte = ((2500*20)/100)+valorcriancaseconorte*adultos
let valorcriancasecosul = 1800*criancas
let valoradultosecosul = 2500*adultos
let valorcriancasexesul = ((1800*10)/100)+valoradultosecosul*criancas
let valoradultosexesul = ((2500*20)/100)+valorcriancasecosul*adultos



if(voos == "Nacional") {
console.log(`Seu voo está definido como: ${voos}`)
    if (regiao == "Norte"){
        console.log(`A região selecionada foi: ${regiao}`)
            if (classe == "Economica"){
                console.log(`A classe selecionada é economica. A quantidade de passageiros é ${adultos+criancas}, sendo ${criancas} crianças e ${adultos} adultos. O valor total ficou ${valoradultoseconorte+valorcriancaseconorte} reais`) 
    } 
    else{ 
        console.log(`A quantidade de passageiros é ${adultos+criancas}, sendo ${criancas} crianças e ${adultos} adultos. O valor total ficou ${valoradultosexenorte+valorcriancasexenorte} reais`)}
}
else if (regiao == "Sul"){
    console.log(`A região selecionada foi: ${regiao}`)
    if (classe == "Economica"){
        console.log(`A classe selecionada é economica. A quantidade de passageiros é ${adultos+criancas}, sendo ${criancas} crianças e ${adultos} adultos. O valor total ficou ${valoradultoseconorte+valorcriancaseconorte} reais`) 
} 
else{ 
console.log(`A quantidade de passageiros é ${adultos+criancas}, sendo ${criancas} crianças e ${adultos} adultos. O valor total ficou ${valoradultosexenorte+valorcriancasexenorte} reais`)}
}
}





