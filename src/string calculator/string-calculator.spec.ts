import { add } from './string-calculator';

describe('add', () => {
    it("should exist", () => {
        expect(add).toBeDefined();
    });

    it("empty string should return zero", () => {
        expect(add("")).toBe(0);
    });

    it("string of one should return one", () => {
        expect(add("1")).toBe(1);
    });

    it("string of two should return two", () => {
        expect(add("2")).toBe(2);
    });

    it("string with two numbers should return three", () => {
        expect(add("1,2")).toBe(3);
    });

    it("string with two additional numbers should return twenty", () => {
        expect(add("0,20")).toBe(20);
    });

    it("string with multiple numbers numbers should sum", () => {
        expect(add("0,20,7,11")).toBe(38);
        expect(add("1,2,3,4,5,6")).toBe(21);
    });

    it("should return sum when newline is present", () => {
        expect(add("1\n2,3")).toBe(6);
    });

    it("should return sum when newline is present without commas", () => {
        expect(add("1\n2\n3\n4")).toBe(10);
    });

    it("should return sum when delimiter is present", () => {
        expect(add("//;\n1;2")).toBe(3);
    });

    it("should return sum when delimiter is present", () => {
        expect(add("//dogecoin\n1dogecoin2")).toBe(3);
    });
});