import { arPrasmingasSarasas, arNormalusSkaicius } from '../validacijos/validacijos.js';

function sarasoSuma(skaiciuSarasas) {

    //paklausiam ar prasmingas sarasas, jei atsako ne, funkcija baigia darba ir grazina false (iskarto baigia darba)
    if (!arPrasmingasSarasas(skaiciuSarasas)) {
        return false;
    }

    let suma = 0;

    for(let i = 0; i < skaiciuSarasas.length; i++) {
        const skaicius = skaiciuSarasas[i];
        
        if (typeof skaicius !== 'number') {
            console.warn('WARNING skaiciu sarase rasta ne skaiciaus tipo reiksme.');
            continue; // jei ne skaicius jo neskaiciuoja, pereina prie sekancio elemento
        }

        suma += skaicius;
    }

    // ar suma yra normalus skaicius jei ne tada funkcija nutrauks darba, grazindama false
    if (!arNormalusSkaicius(suma, 'sumos rezultatas')) {
        return false;
    }

    return suma;
}

export { sarasoSuma }