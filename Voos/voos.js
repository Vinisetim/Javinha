let voos = "Internacional";/*Defina o tipo de voo entre Nacional e Internacional*/

/*Variaveis para voos Nacionais*/
let regiao = "Norte";/*Defina a região do voo entre "Norte" ou "Sul"*/
let classe = "Executiva";/*Defina a classe do voo entre "Executiva" ou "Economica"*/
let adultos = 2 /*Defina a quantidade de passegeiros adultos e crinças*/
let criancas = 1

let a = 2500
let c = 1800
let valorcriancaseconorte = 1800*criancas
let valoradultoseconorte = 2500*adultos
let valorcriancasexenorte = (((1800*10)/100)+c)*criancas
let valoradultosexenorte = (((2500*20)/100)+a)*adultos
let valorcriancasecosul = 1800*criancas
let valoradultosecosul = 2500*adultos
let valorcriancasexesul = ((1800*10)/100)+valoradultosecosul*criancas
let valoradultosexesul = ((2500*20)/100)+valorcriancasecosul*adultos

/*variáveis para voos internacionais*/
let continente = "Asia" /*defina os continentes entre "Ásia, Europa e África"*/
let passageiros = 4 /* quantidade de passageiros*/
 
let valorasiaeco = (4.600 * passageiros)
let valorafricaeco = (4.200* passageiros)
let valoreuropaeco = (5.800*passageiros)
let valorasiaexe = (6.000*passageiros)
let valorafricaexe = (6.900*passageiros)
let valoreuroexe = (7300*passageiros)


/*processamentos de dados para voos nacionais*/
if (voos == "Nacional") {
console.log(`Seu voo está definido como: ${voos}`)
console.log (" ")

/*processamento de dados para região norte*/    
if (regiao == "Norte"){
        console.log(`A região selecionada foi: ${regiao}`)
        console.log (" ")
            if (classe == "Economica"){
                console.log (" ")
                console.log(`A classe selecionada é economica.`);
                console.log(" ");
                console.log (` A quantidade de passageiros é ${adultos+criancas}`)
                console.log (" ")
                console.log (` O valor total ficou ${valoradultoseconorte+valorcriancaseconorte} reais`);
    } 
    else{ 
        console.log(`A quantidade de passageiros é ${adultos+criancas}, sendo ${criancas} crianças e ${adultos} adultos. O valor total ficou ${valoradultosexenorte+valorcriancasexenorte} reais`)}
}
/*processamento de dados região*/
else if (regiao == "Sul"){
    console.log(`A região selecionada foi: ${regiao}`)
    if (classe == "Economica"){
        console.log(`A classe selecionada é economica.`) 
        console.log(" ")
        console.log (` A quantidade de passageiros é ${adultos+criancas} A quantidade de passageiros é ${adultos+criancas}`)
        console.log(" ")
        console.log (` O valor total ficou ${valoradultoseconorte+valorcriancaseconorte} reais`)
} 
else{ 
console.log(`A quantidade de passageiros é ${adultos+criancas}, sendo ${criancas} crianças e ${adultos} adultos. O valor total ficou ${valoradultosexenorte+valorcriancasexenorte} reais`)}
}
}
/*processamentos de dados para voos internacionais*/
if(voos == "Internacional"){ 
    console.log(`Seu voo está definido como: ${voos}`)
    console.log (" ")
    /*continente asiatico*/
        if (continente == "Asia"){
            console.log(`O seu continente ente selecionado foi: ${continente}`)
            console.log(" ")
                if (classe == "Economica"){
                    console.log(`A classe selecionada é economica.`) 
                    console.log(" ")
                    console.log (` A quantidade de passageiros é ${passageiros}.`);
                    console.log(" ")
                    console.log (`O valor total ficou ${valorasiaeco} mil reais`)
        } 
        else {
            console.log(`A classe selecionada é executiva.`) 
            console.log(" ")
            console.log (` A quantidade de passageiros é ${passageiros}.`);
            console.log(" ")
            console.log (`O valor total ficou ${valorasiaexe} mil reais`)
        }
    }
    /*continente africano*/
        else if (continente == "África"){ 
            console.log(`O seu continente selecionado foi: ${continente}`)
                if (classe == "Economica"){
                    console.log(`A classe selecionada é economica.`) 
                    console.log(" ")
                    console.log (` A quantidade de passageiros é ${passageiros}.`);
                    console.log(" ")
                    console.log (`O valor total ficou ${valorafricaeco} mil reais`)
        }
        else {
            console.log(`A classe selecionada é executiva.`) 
            console.log(" ")
            console.log (` A quantidade de passageiros é ${passageiros}.`);
            console.log(" ")
            console.log (`O valor total ficou ${valorafricaexe} mil reais`)
        }
    }
    /*continente europeu*/
             else if (continente == "Europa"){ 
                    console.log(`O seu continente selecionado foi: ${continente}`)
                if (classe == "Economica"){
                     console.log(`A classe selecionada é economica.`) 
                    console.log(" ")
                    console.log (` A quantidade de passageiros é ${passageiros}.`);
                    console.log(" ")
                    console.log (`O valor total ficou ${valoreuropaeco} mil reais`)
    }
    else {
        console.log(`A classe selecionada é executiva.`) 
        console.log(" ")
        console.log (` A quantidade de passageiros é ${passageiros}.`);
        console.log(" ")
        console.log (`O valor total ficou ${valoreuroexe} mil reais`)
    }
}
}
