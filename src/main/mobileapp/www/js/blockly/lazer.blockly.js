window.blockly = window.blockly || {};
window.blockly.js = window.blockly.js || {};
window.blockly.js.blockly = window.blockly.js.blockly || {};
window.blockly.js.blockly.Lazer = window.blockly.js.blockly.Lazer || {};

/**
 * localizacao
 */
window.blockly.js.blockly.Lazer.linkLazer = function() {
 var qs;
  qs = this.cronapi.screen.getParam('qs');
  if (qs == '2') {
    this.cronapi.screen.changeContent("titleLocal", 'Pelourinho', 'false');
    this.cronapi.screen.changeAttrValue("img_lazer", 'src', 'img/lazer_pelo.JPG');
    this.cronapi.screen.changeContent("resumoLocalizacao", 'Localização do Pelourinho.', 'false');
  } else if (qs == '1') {
    this.cronapi.screen.changeContent("titleLocal", 'Elevador', 'false');
    this.cronapi.screen.changeAttrValue("img_lazer", 'src', 'img/lazer_elevador.JPG');
    this.cronapi.screen.changeContent("resumoLocalizacao", 'Localização do Elevador Lacerda.\n', 'false');
  } else if (qs == '3') {
    this.cronapi.screen.changeContent("titleLocal", 'Farol da Barra', 'false');
    this.cronapi.screen.changeAttrValue("img_lazer", 'src', 'img/lazer_farol.jpg');
    this.cronapi.screen.changeContent("resumoLocalizacao", 'Localização do Farol da Barra', 'false');
  }
}
