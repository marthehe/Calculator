import {divide} from './divide';


describe('divide', () => {
    it('should divide two number', () => {
        expect(divide(2,2)).toBe(1);
        expect(divide(-4,2)).toBe(-2);
        expect(divide(-3,-2)).toBe(1.5);
    });
    it('should not divide strings', () => {
        expect(divide(2,'2')).toBe(null);
    });
});

