export class Hangman {
    public isInProgress: boolean;
    public numGuesses: number;
    public gameState: GameState;
    private previousGuesses: string[];

    public constructor(public readonly secretWord: string, public readonly maxIncorrectGuesses: number) {
        this.secretWord = secretWord.toUpperCase();
        this.isInProgress = true;
        this.gameState = 'IN_PROGRESS';
        this.numGuesses = 0;
        this.previousGuesses = [];
    }

    Guess(guess: string): Result {
        const formattedGuess = guess.toUpperCase();
        const result = this.previousGuesses.includes(formattedGuess) ? 'DUPLICATE' : formattedGuess.match(/[A-Z]/i) ? 'VALID' : 'INVALID';

        this.previousGuesses.push(formattedGuess);
        this.numGuesses++;

        const secretWordUnique = this.secretWord.split("").filter((v, i, a) => a.indexOf(v) === i).sort();
        const guessesUnique = this.previousGuesses.filter((v, i, a) => a.indexOf(v) === i).sort();

        if (JSON.stringify(secretWordUnique) === JSON.stringify(guessesUnique)) {
            this.gameState = 'WON';
            this.isInProgress = false;
        }
        else if (this.numGuesses >= this.maxIncorrectGuesses) {
            this.gameState = 'LOST';
            this.isInProgress = false;
        }

        return result as Result;
    }
}

export type Result = 'DUPLICATE' | 'INVALID' | 'VALID'

export type GameState = 'WON' | 'IN_PROGRESS' | 'LOST';