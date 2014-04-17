document.addEventListener('DOMContentLoaded', function(){
    "use strict";

    $('.dechet').draggable();
    $('.depots > *').droppable({
        accept: ".dechet",
        drop: function(e, ui){
            var dechet = ui.draggable;
            var poubelle = this;

            //console.log('dechet', dechet);
            var typeDechet = $(dechet).attr('data-type');
            var typePoubelle = poubelle.getAttribute('data-type');

            // 'cause hmm... yeah.. CSS.. whatever...
            dechet.css({ 
                position: 'absolute',
                top: dechet.offset().top,
                left: dechet.offset().left,
            })

            var nextPos;

            var defaultScenario = scenarios['default'][typePoubelle];
            var scenario = scenarios[typeDechet][typePoubelle];


            console.log(typeDechet, typePoubelle, scenario, defaultScenario);

            /*
            @dechet element on screen to move around
            @dest string or array
            */
            function goTo(dechet, dest){

                var remainder;

                if(Array.isArray(dest)){
                    var tmp = dest.shift();
                    remainder = dest;
                    dest = tmp;
                }
                // dest is now a single destination (string)


                if(dest === destinations.feuEtTerre){
                    console.log('TODO DUPLICATION!');
                    dest = "incineration"; // temp rewrite
                }


                if(!Array.isArray(remainder) || remainder.length === 0){
                    remainder = [destinations.good];
                }

                var direction = $('.lieu-de-traitement[data-type="'+dest+'"]'); // test if redirection first
                if(direction.length === 0)
                    direction = $('.finalites > *[data-type="'+dest+'"]');

                var pos = $(direction).offset();

                dechet.animate({
                    top: pos.top,
                    left: pos.left
                }, function(){
                    setTimeout(function(){
                        if(remainder.length === 1 && (remainder[0] === destinations.good || remainder[0] === destinations.bad)){
                            console.log(String(remainder[0]));
                        }
                        else
                            goTo(dechet, remainder);

                    }, 300);
                });
            }
            console.log('typePoubelle', typePoubelle, scenario || defaultScenario)
            var path = [typePoubelle === 'grise' ? destinations.feuEtTerre : typePoubelle].concat(scenario || defaultScenario);
            console.log('path', path);
            goTo(dechet, path);
        }
    });
});