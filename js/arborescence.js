(function(global){
    "use strict";
    
    //finalités sans conséquences après
    
    global.destinations = Object.freeze({
        feu : "incineration",
        terre : "enfouissement",
        feuEtTerre : "incineration+enfouissement",
        terreEtMatiere : "enfouissement+valoration-matiere",
        bio : "valoration-biologique",
        matiere : "valoration-matiere",
        particulier : "particulier",
        
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
            "compost": [D.feuEtTerre, D.bad]
        },

        "shampooing": { // ok
            "grise" : [D.feuEtTerre, D.bad],
            "decheterie" : D.matiere,
            "bac": D.matiere,
            "compost": [D.feuEtTerre, D.bad]
        },

        "brique-lait": { // ok
            "grise" : [D.feuEtTerre, D.bad],
            "decheterie" : D.matiere,
            "bac": D.matiere,
            "compost": [D.feuEtTerre, D.bad]
        },

        "conserve": { // ok
            "grise" : [D.feuEtTerre, D.bad],
            "decheterie" : D.matiere,
            "bac": D.matiere,
            "compost": [D.feuEtTerre, D.bad]
        },

        "chaise": { // ok
            "grise" : [D.feuEtTerre, D.bad],
            "decheterie" : D.matiere,
            "bac": [D.decheterie, D.matiere, D.good],
            "compost": [D.feuEtTerre, D.bad]
        },

        "aerosol": { // ok
            "grise" : [D.feuEtTerre, D.bad],
            "decheterie" : D.matiere,
            "bac": D.matiere,
            "compost": [D.feuEtTerre, D.bad]
        },

        "gravat": { // ok
            "grise" : [D.feuEtTerre, D.bad],
            "decheterie" : [D.terreEtMatiere, D.good],
            "bac": [D.decheterie, D.terreEtMatiere, D.good],
            "compost": [D.feuEtTerre, D.bad]
        },

        "journal": { // ok
            "grise" : [D.feuEtTerre, D.bad],
            "decheterie" : D.matiere,
            "bac": D.matiere
        },

        "matelas": { // ok
            "grise" : [D.feuEtTerre, D.bad],
            "decheterie" : [D.feuEtTerre, D.good],
            "bac": [D.decheterie, D.feuEtTerre, D.good],
            "compost": [D.feuEtTerre, D.bad]
        },

        "sapin": { // ok
            "grise" : [D.feuEtTerre, D.bad],
            "decheterie" : [D.bio, D.good],
            "bac": [D.decheterie, D.bio, D.good]
        },

        "sommier": { // ok
            "grise" : [D.feuEtTerre, D.bad],
            "decheterie" : [D.matiere, D.good],
            "bac": [D.decheterie, D.matiere, D.good],
            "compost": [D.feuEtTerre, D.bad]
        },

        "piles": {
            "grise" : [D.feuEtTerre, D.bad],
            "decheterie" : [D.particulier, D.good],
            "bac": [D.particulier, D.good],
            "compost": [D.feuEtTerre, D.bad]
        }
    };

    
    
})(this);

