(function () {
    'use strict';

    describe('App : demoApp',function () {

        it('exists',function () {
            expect(true).toBe(true);
        });
    });

    /* sample calculator */

    var calculator = {
        sum : function (x,y) {
            return x+y;
        },
        subtract: function (x, y) {
            return x - y;
        }
    };

    describe('sample test',function () {
        it('sample',function () {
            expect(1+1).toBe(2);
            expect(true).toBe(true);
            expect(false).not.toBe(true);
            expect(1).toEqual(1);
            expect('foo').toEqual('foo');
            expect('foo').not.toEqual('bar');
        });

    });

    describe('sum', function () {
        it('1 + 1 should equal 2', function () {
            expect(calculator.sum(1, 1)).toBe(2);
        });
    });

    describe('subtract', function () {
        it('3 - 2 should equal 1', function () {
            expect(calculator.subtract(3, 2)).toBe(1);
        });
    });

}());