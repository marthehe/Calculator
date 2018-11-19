import {substract} from './substract';


describe('substract', () => {
    it('should substract two number', () => {
        expect(substract(1,2)).toBe(-1);
        expect(substract(2,2)).toBe(0);
        expect(substract(3,2)).toBe(1);
    });
    it('should not substract strings', () => {
        expect(substract(2,'2')).toBe(null);
    });
});

