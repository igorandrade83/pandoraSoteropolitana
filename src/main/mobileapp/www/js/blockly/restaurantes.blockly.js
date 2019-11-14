window.blockly = window.blockly || {};
window.blockly.js = window.blockly.js || {};
window.blockly.js.blockly = window.blockly.js.blockly || {};
window.blockly.js.blockly.Restaurantes = window.blockly.js.blockly.Restaurantes || {};

/**
 * localizacao
 */
window.blockly.js.blockly.Restaurantes.linkRestaurantes2 = function() {
 var qs;
  qs = this.cronapi.screen.getParam('qs');
  if (qs == '2') {
    this.cronapi.screen.changeContent("titleLocal", 'Pelourinho', 'false');
    this.cronapi.screen.changeAttrValue("img_restaurante", 'src', 'img/restaurantes_pelourinho.JPG');
    this.cronapi.screen.changeContent("resumoLocalizacao", 'Restaurantes do Pelourinho.', 'false');
  } else if (qs == '1') {
    this.cronapi.screen.changeContent("titleLocal", 'Elevador', 'false');
    this.cronapi.screen.changeAttrValue("img_restaurante", 'src', 'img/restaurantes_elevador.JPG');
    this.cronapi.screen.changeContent("resumoLocalizacao", 'Restaurantes próximos do Elevador Lacerda.\n', 'false');
  } else if (qs == '3') {
    this.cronapi.screen.changeContent("titleLocal", 'Farol da Barra', 'false');
    this.cronapi.screen.changeAttrValue("img_restaurante", 'src', 'img/restaurantes_farol.JPG');
    this.cronapi.screen.changeContent("resumoLocalizacao", 'Restaurantes próximos ao Farol da Barra', 'false');
  }
}
