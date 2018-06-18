/*--------------------
CALL FUNCTION
--------------------*/
$(document).ready(function () {
    $('.cls-event').on('click',function () {
        let me = $(this);
        let type = me.data('type');
        let event = me.data('event');
        if(type && event){
            if(type.toUpperCase() == "FP" && window.fbq ){
                fbq('track', event);
            }else if(type.toUpperCase() == "GA" && window.ga){

            }
        }

        return true;
    });
});