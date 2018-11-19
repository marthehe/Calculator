import {add} from './add';


describe('add', () => {
    it('should add two number', () => {
        expect(add(1,2)).toBe(3);
        expect(add(2,2)).toBe(4);
        expect(add(3,2)).toBe(5);
    });
    it('should not add strings', () => {
        expect(add(2,'2')).toBe(null);
    });
});

