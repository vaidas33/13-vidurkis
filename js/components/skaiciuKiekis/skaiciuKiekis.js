import { arPrasmingasSarasas, arNormalusSkaicius } from '../validacijos/validacijos.js';

function skaiciuKiekis(skaiciuSarasas) {

    //paklausiam ar prasmingas sarasas, jei atsako ne, funkcija baigia darba ir grazina false (iskarto baigia darba)
    if (!arPrasmingasSarasas(skaiciuSarasas)) {
        return false;
    }

    let kiekis = 0;

    for (let i = 0; i < skaiciuSarasas.length; i++) {
        const skaicius = skaiciuSarasas[i];
        if ( typeof skaicius !== 'number') {
            continue; //pereinam prie kito atvejo
        }
        kiekis++ //priesingu atveju kieki padidinu 1 vienetu
    }


        // ar suma yra normalus skaicius jei ne tada funkcija nutrauks darba, grazindama false
        if (!arNormalusSkaicius(kiekis, 'kiekio rezultatas')) {
            return false;
        }

        //jeigu viskas gerai rezultatas yra grazinamas
    return kiekis;
}

export { skaiciuKiekis }