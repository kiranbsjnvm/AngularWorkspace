describe('controllers',function(){

    beforeEach(module('MyApp'));

    describe('MyController tests',function(){

        var controller;
        beforeEach(inject(function($controller){
            controller = $controller('MyController');
        }));

        it('Mode should be fun',function(){
            expect(controller.mode).toBe('fun');
        });

    });

});