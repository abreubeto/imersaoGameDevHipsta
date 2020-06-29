function preload(){
  imagemCenario = loadImage('imagens/cenario/floresta.png'); 
  imagemTelaInicial = loadImage('imagens/cenario/telaInicial.png');
  imagemVida = loadImage('imagens/assets/coracao.png');
  imagemGameOver = loadImage('imagens/assets/game-over.png');
 
  fonteTelaInicial = loadFont('imagens/assets/fonteTelaInicial.otf');

  imagemPersonagem = loadImage('imagens/personagem/correndo.png'); 
  imagemPersonagemInvencivel = loadImage('imagens/personagem/correndoPlus.png'); 
  
  imagemInimigo = loadImage('imagens/inimigos/gotinha.png'); 
  imagemInimigoGrande = loadImage('imagens/inimigos/troll.png'); 
  imagemInimigoVoador = loadImage('imagens/inimigos/gotinha-voadora.png'); 
  
  fita = loadJSON('fita/fita.json');
  somDoJogo = loadSound('sons/trilha_jogo.mp3');
  somDoPulo = loadSound('sons/somPulo.mp3');
}
