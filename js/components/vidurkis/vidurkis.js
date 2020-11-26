import { sarasoSuma } from '../sumavimas/sumavimas.js';
import { skaiciuKiekis } from '../skaiciuKiekis/skaiciuKiekis.js';
import { arPrasmingasSarasas, arNormalusSkaicius } from '../validacijos/validacijos.js';

// Reikia gauti skaiciu sarasa(array)

function vidurkis(skaiciuSarasas) {

    //paklausiam ar prasmingas sarasas, jei atsako ne, funkcija baigia darba ir grazina false (iskarto baigia darba)
    if (!arPrasmingasSarasas(skaiciuSarasas)) {
        return false;
    }

    const suma = sarasoSuma(skaiciuSarasas);
    const kiekis = skaiciuKiekis(skaiciuSarasas);

    const vid = suma / kiekis;

    // ar suma yra normalus skaicius jei ne tada funkcija nutrauks darba, grazindama false
    if (!arNormalusSkaicius(vid, 'vidurkio rezultatas')) {
        return false;
    }

    return vid;
}

export { vidurkis }