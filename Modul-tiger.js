class Tiger {
  constructor() {
    this.strength = Math.floor(Math.random() * 100);
  }

  growl() {
    return 'AUMMMMM!';
  }
}

module.exports = Tiger; // TODO 1: Mengexport class Tiger
