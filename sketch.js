function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(40);

  telaInicial = new TelaInicial();
  
  
  somDoJogo.loop();
  jogo = new Jogo();
  jogo.setup();
  cenas = {
    jogo,
    telaInicial
  };
  botaoGerenciador = new BotaoGerenciador('Iniciar', width/2, height/2);
}

function keyPressed() {
  jogo.keyPressed(key);
}

function draw() {
  cenas[cenaAtual].draw();
}  
  
  