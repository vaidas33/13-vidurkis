function arPrasmingasSarasas(sarasas) {
    //jei tai nera skaiciu sarasas 
    if (!Array.isArray(sarasas)) {
        console.error('ERROR duotas ne array.');
        return false;
    }
    if (sarasas.length === 0) {
        console.error('ERROR duotas array yra tuscias.');
        return false;
    }

    return true;
}

function arNormalusSkaicius(skaicius, tikrinamoObjektoPavadinimas) {
    if (typeof tikrinamoObjektoPavadinimas !== 'string') {
        console.warn('WARNING skaiciaus tipo tikrinimui nera duotas tikrinamo objekto pavadinimas');
        tikrinamoObjektoPavadinimas = 'reiksme/objektas';
    }

    if (typeof skaicius !== 'number') {
        console.error(`ERROR gautas ${tikrinamoObjektoPavadinimas} nera skaiciaus tipo.`);
        return false;
    }

    // ar tai yra baigtine reiksme
    if (!isFinite(skaicius)) {
        console.error(`ERROR gautas ${tikrinamoObjektoPavadinimas} nera tikras skaicius.`);
        return false;
    }
    return true;
}

export { arPrasmingasSarasas, arNormalusSkaicius }