class Personagem extends Animacao {
  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite) {
    super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite);
    this.variacaoY = variacaoY;
    this.yInicial = height - this.altura - this.variacaoY;
    this.y = this.yInicial;

    
    this.velocidadeDoPulo = 0;
    this.gravidade = 5;
    this.alturaDoPulo = -50;
    this.pulos = 0;
    this.invencivel = false;
  }

  pula() {
    if (this.pulos < 2) {
      this.velocidadeDoPulo = this.alturaDoPulo;
      this.pulos++;
    }
  }

  aplicaGravidade() {
    this.y = this.y + this.velocidadeDoPulo;
    this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade;

    if (this.y > this.yInicial) {
      this.y = this.yInicial
      this.pulos = 0;
    }
  }
  
  tornarInvencivel(){
    this.invencivel = true;
    this.imagem = imagemPersonagemInvencivel;
    setTimeout(() => {
      this.invencivel = false;
      this.imagem = imagemPersonagem;
    }, 1000);
  }
  
  estaColidindo(inimigo) {
    if(this.invencivel) {
      return false;
    }
    const precisao = .6;
    noFill();
    const colisao = collideRectRect(
      this.x+(this.largura*(1-precisao)/2),
      this.y+(this.altura*(1-precisao)/2),
      this.largura*precisao,
      this.altura*precisao,
      inimigo.x+(inimigo.largura*(1-precisao)/2),
      inimigo.y+(inimigo.altura*(1-precisao)/2),
      inimigo.largura*precisao,
      inimigo.altura*precisao);
    return colisao;
  }

}




// fim