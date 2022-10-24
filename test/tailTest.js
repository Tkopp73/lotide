const assertEqual = require('../assertEqual');
const tail = require('../tail');

assertEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), "Lighthouse, Labs");