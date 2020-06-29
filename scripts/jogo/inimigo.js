class Inimigo extends Animacao {
  constructor(matirz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, velocidade){
    super(matirz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite)
    
    this.velocidade = velocidade;
    this.x = width;
  }
  
  move() {
    this.x = this.x - this.velocidade * ( Math.ceil(pontuacao.pontos/200) ); 
  }
  
  aparece() {
    this.x = width;
  }
}
