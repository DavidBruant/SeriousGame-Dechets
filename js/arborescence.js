(function(global){
    "use strict";
    
    //finalités sans conséquences après
    
    global.destinations = Object.freeze({
        feu : "incineration",
        terre : "enfouissement",
        feuEtTerre : "incineration+enfouissement",
        bio : "valoration-biologique",
        matiere : "valoration-matiere",
        particulier : "Traitement Particulier",
        
        decheterie : "decheterie",
        
        good: {toString:function(){return 'GOOD';}},
        bad: {toString:function(){return 'BAD';}}
    });
 
    var D = global.destinations;

    //Déchets
    global.scenarios = {
        // default
        "default":{
            "grise" : D.feuEtTerre,
            // no default for decheterie
            "bac": D.matiere,
            "compost": D.bio
        },
        
        // garbage
        "banane": { // ok
            "decheterie" : [D.feuEtTerre, D.good],
            "bac": [D.feuEtTerre, D.bad],
        },

        "polystyrène": { // ok
            "decheterie" : [D.feuEtTerre, D.good],
            "bac": [D.feuEtTerre, D.bad],
            "compost": [D.feuEtTerre, D.bad]
        },

        "bocal": { // ok
            "grise" : [D.feuEtTerre, D.bad],
            "decheterie" : D.matiere,
            "bac": D.matiere,
            "compost": D.feuEtTerre
        },

        "shampooing": { // ok
            "grise" : [D.feuEtTerre, D.bad],
            "decheterie" : D.matiere,
            "bac": D.matiere,
            "compost": D.feuEtTerre
        },

        "brique-lait": { // ok
            "grise" : [D.feuEtTerre, D.bad],
            "decheterie" : D.matiere,
            "bac": D.matiere,
            "compost": D.feuEtTerre
        },

        "conserve": { // ok
            "grise" : [D.feuEtTerre, D.bad],
            "decheterie" : D.matiere,
            "bac": D.matiere,
            "compost": D.feuEtTerre
        },

        "chaise": { 
            "grise" : [D.feuEtTerre, D.bad],
            "decheterie" : D.matiere,
            "bac": [D.decheterie, D.matiere, D.good],
            "compost": D.feuEtTerre
        },

        "aerosol": { // ok
            "grise" : [D.feuEtTerre, D.bad],
            "decheterie" : D.matiere,
            "bac": D.matiere,
            "compost": D.feuEtTerre
        },

        "gravat": {
            "grise" : [D.feuEtTerre, D.bad],
            "decheterie" : [D.feuEtTerre, D.good],
            "bac": D.good,
            "compost": D.feuEtTerre
        },

        "journal": {
            "grise" : [D.feuEtTerre, D.bad],
            "decheterie" : [D.feuEtTerre, D.good],
            "bac": D.good
        },

        "matelas": {
            "grise" : [D.feuEtTerre, D.bad],
            "decheterie" : [D.feuEtTerre, D.good],
            "bac": D.good,
            "compost": D.feuEtTerre
        },

        "sapin": {
            "grise" : [D.feuEtTerre, D.bad],
            "decheterie" : [D.feuEtTerre, D.good],
            "bac": D.good
        },

        "sommier": {
            "grise" : [D.feuEtTerre, D.bad],
            "decheterie" : [D.feuEtTerre, D.good],
            "bac": D.good,
            "compost": D.feuEtTerre
        },

        "piles": {
            "grise" : [D.feuEtTerre, D.bad],
            "decheterie" : [D.feuEtTerre, D.good],
            "bac": D.good,
            "compost": D.feuEtTerre
        }
    };

    
    
})(this);

