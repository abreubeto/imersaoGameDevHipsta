class Pontuacao {
   constructor() {
     this.pontos = 0;
   }
  
  exibe() {
    textAlign(RIGHT);
    textSize(50);
    fill('#fff');
    text(parseInt(this.pontos), width - 30, 50);
  }
  
  adicionarPonto() {
    this.pontos = this.pontos + 0.2;
    
  }
}