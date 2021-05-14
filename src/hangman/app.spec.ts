import { Hangman } from './app';

describe('hangman', () => {
    it("should exist", () => {
        expect(Hangman).toBeDefined();
    });

    describe('game', () => {
        var hangman = new Hangman("word", 5);

        it("should accept a secret word and store it in ALLCAPS", () => {
            expect(hangman.secretWord).toBe("WORD");
        });

        it("should indicate number of incorrect guesses that will result in losing the game", () => {
            expect(hangman.maxIncorrectGuesses).toBe(5);
        });

        it("should indicate that the game is in progress", () => {
            expect(hangman.isInProgress).toBeTruthy();
        });
    });

    describe('guess', () => {
        it("should accept a letter", () => {
            var hangman = new Hangman("word", 5);
            expect(hangman.Guess('a')).toBe('VALID');
        });

        it("when supplied invalid character should return invalid result", () => {
            var hangman = new Hangman("word", 5);
            expect(hangman.Guess('1')).toBe('INVALID');
        });

        it("when supplied previously guessed valid character should return a duplicate guess result", () => {
            var hangman = new Hangman("word", 5);
            hangman.Guess('A');
            expect(hangman.Guess('A')).toBe('DUPLICATE');
        });

        it("when supplied previously guessed invalid character should return a duplicate guess result", () => {
            var hangman = new Hangman("word", 5);
            hangman.Guess('1');
            expect(hangman.Guess('1')).toBe('DUPLICATE');
        });
    });

    describe('gamestate', () => {
        it("when letter has been guessed game state should be won", () => {
            var hangman = new Hangman("e", 2);
            hangman.Guess('e');
            expect(hangman.gameState).toBe('WON');
            expect(hangman.isInProgress).toBeFalsy();
        });

        it("when all letters have been guessed game state should be won", () => {
            var hangman = new Hangman("be", 2);
            hangman.Guess('b');
            hangman.Guess('e');
            expect(hangman.gameState).toBe('WON');
            expect(hangman.isInProgress).toBeFalsy();
        });

        it("when total incorrect guesses equals the max guesses, the game state should be lost", () => {
            var hangman = new Hangman("be", 2);
            hangman.Guess('x');
            hangman.Guess('y');
            hangman.Guess('z');
            expect(hangman.gameState).toBe('LOST');
            expect(hangman.isInProgress).toBeFalsy();
        });

        it("when total incorrect guesses is less than max guesses, the game state should be in progress", () => {
            var hangman = new Hangman("be", 3);
            hangman.Guess('b');
            hangman.Guess('y');
            expect(hangman.gameState).toBe('IN_PROGRESS');
            expect(hangman.isInProgress).toBeTruthy();
        });
    });

});