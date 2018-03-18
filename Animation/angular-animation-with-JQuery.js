var myapp = angular.module('myApp',['ngAnimate']);

myapp.animation('.my-class',function(){

    return {
        enter : function(elem,done){
            elem.css({
                background:'green',
                opacity:0
            });

            elem.animate({
                backgroundColor:'red',
                opacity:1,
            }, done);
        },
        leave : function(elem,done){
            elem.css({
                opacity:1
            });
                
            elem.animate({
                opacity:0
            }, done);
        },

        // move : function(element, done) { 
        //     done(); 
        // },

        // beforeAddClass : function(element, className, done) { 
        //     done(); 
        // },

        // addClass : function(element, className, done) { 
        //     done(); 
        // },
    
        // beforeRemoveClass : function(element, className, done){ 
        //     done(); 
        // },

        // removeClass : function(element, className, done) { 
        //     done(); 
        // }
        
    }
});