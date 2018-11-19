import {multiply} from './multiply';


describe('multiply', () => {
    it('should multiply two number', () => {
        expect(multiply(2,2)).toBe(4);
        expect(multiply(-4,2)).toBe(-8);
        expect(multiply(-3,-2)).toBe(6);
    });
    it('should not multiply strings', () => {
        expect(multiply(2,'2')).toBe(null);
    });
});

