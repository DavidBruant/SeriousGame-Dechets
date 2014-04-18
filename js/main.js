document.addEventListener('DOMContentLoaded', function(){
    "use strict";

    var PAUSE_DELAY = 300;
    var ANIMATION_TIME = 700;
    
	var gameOffset = $('.game').offset();

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
                left: dechet.offset().left
            });

            var nextPos;

            var defaultScenario = scenarios['default'][typePoubelle];
            var scenario = scenarios[typeDechet][typePoubelle];


            //console.log(typeDechet, typePoubelle, scenario, defaultScenario);

            /*
            @dechet element on screen to move around
            @dest string or array
            */
            function goTo(dechet, dest){
                var remainder;
                var clone;
                
                if(Array.isArray(dest)){
                    var tmp = dest.shift();
                    remainder = dest;
                    dest = tmp;
                }
                // dest is now a single destination (string)


                if(dest === destinations.feuEtTerre || dest === destinations.terreEtMatiere){
                    console.log('yo');
                    var dests = dest.split('+');
                    dest = dests[0];
                    
                    clone = $(dechet).clone().appendTo('.game');
                    goTo(clone, dests[1]);
                    setTimeout(function(){
                        clone.remove();
                    }, ANIMATION_TIME + PAUSE_DELAY)
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
                }, ANIMATION_TIME, function(){
                    setTimeout(function(){
                        if(remainder.length === 1 && (remainder[0] === destinations.good || remainder[0] === destinations.bad)){
                            setTimeout(function(){
                                if(remainder[0] === destinations.good){
                                    $(dechet).fadeOut();
                                    $(dechet).parent().remove();
                                }
                                else{ // bad
                                    $(dechet).css({
                                        position: 'relative',
                                        top: 0,
                                        left: 0
                                    });
                                    $(dechet).draggable();
                                }
                            })
                        }
                        else
                            goTo(dechet, remainder);

                    }, PAUSE_DELAY);
                });
            }
            
            var path = (typePoubelle === 'grise' ? [] : [typePoubelle]).concat(scenario || defaultScenario);
            goTo(dechet, path);
        }
    });
});