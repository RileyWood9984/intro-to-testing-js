// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});
describe('sayHello', function() {
    it('should be a defined function', function () {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function(){
        expect(typeof sayHello()).toBe("string");
    });
    it('should return the string "Hello, Jane!" when executed', function() {
        expect(sayHello('Jane')).toBe("Hello, Jane!");
    });
    it('should return the string "Hello, Alex!" when executed', function() {
        expect(sayHello('Alex')).toBe("Hello, Alex!");
    });
    it('should return the string "Hello, Pat!" when executed', function() {
        expect(sayHello('Pat')).toBe("Hello, Pat!");
    });
    it('should return "Hello,World" without a valid input.', function(){
        expect(sayHello()).toBe("Hello, World!");
    });
});
describe('isFive', function() {
    it('should be a defined function', function () {
        expect(typeof isFive).toBe('function');
    });
    it('should be a boolean',function(){
        expect(typeof isFive()).toBe('boolean');
    });
    it('should be true if 5',function(){
        expect(isFive(5)).toBe(true);
    });
    it('should be true if it is a string 5, ie: "5"',function(){
        expect(isFive("5")).toBe(true);
    });
});
describe( 'isVowel',function(){
    it ('should be a defined function',function(){
        expect(typeof isVowel).toBe('function');
    });
    it('should return a boolean', function (){
        expect(typeof isVowel('')).toBe('boolean');
    });
    it('should return true if "a"', function (){
        expect(isVowel('a')).toBe(true);
    });
    it('should return true if "A"', function (){
        expect(isVowel('A')).toBe(true);
    });
    it('should return false if "y"', function (){
        expect(isVowel('y')).toBe(false);
    });
    it('should return false if "4"', function (){
        expect(isVowel('4')).toBe(false);
    });
});