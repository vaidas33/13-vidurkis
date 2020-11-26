import { skaiciai } from './data/skaiciai.js';
import { skaiciai2 } from './data/skaiciai2.js';
import { vidurkis } from './components/vidurkis/vidurkis.js';

const ats = vidurkis(skaiciai);
const ats2 = vidurkis(skaiciai2);

console.log(ats);
console.log (`Is pateiktu ${skaiciai.length} skaiciu, vidurkis gaunasi: ${ats}.`);

console.log (`Is pateiktu ${skaiciai2.length} skaiciu, vidurkis gaunasi: ${ats2}.`);