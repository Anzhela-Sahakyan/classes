class Shiritori {
  constructor() {
    this.words = [];
    this.game_over = false;
  }
  play(word) {
    if (this.words.length) {
      const lastChar = this.words[this.word.length - 1][length - 1];
      const firstChar = word[0].toLowerCase();
      if (lastChar === firstChar && !this.words.includes(word)) {
        this.words.push(word);
        return words;
      }
      this.game_over = true;
      return "game over";
    } else {
      this.words.push(word);
    }
  }
  restart() {
    this.words = [];
    this.game_over = false;
  }
}

let game = new Shiritori();

game.play("Moskva");
game.play("Amsterdam");
console.log(game.words);
