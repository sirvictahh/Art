// PRJ.ARTE  - PARSING DOS DADOS

/* 1. Funções relacionadas à introdução */

// Retorna o título da coleção
function collectionTitle() {
    return introd.titulo;
}

// Retorna o subtítulo da introdução da coleção
function collectionSubtitle() {
    return introd.subtitulo;
}

// Retorna o número de parágrafos na introdução da coleção
function introParagraphCount() {
    return introd.textoIntrod.length;
}

// Retorna o conteúdo de um parágrafo na introdução da coleção, dado o índice do parágrafo
function introParagraph(iParag) {
    return introd.textoIntrod[iParag];
}

/* 2. Funções relacionadas aos pintores */

// Retorna o nome de um pintor, dado o índice do pintor
function painterName(iPintor) {
    return pintores[iPintor].nomePintor;
}

// Retorna o número de pintores representados na coleção
function painterCount() {
    return pintores.length;
}

// Retorna o conteúdo de um parágrafo sobre um pintor, dado o índice do pintor e o índice do parágrafo
function painterParagraph(iPintor, iParag) {
    return pintores[iPintor].textoPintor[iParag];
  }

// Retorna o número de parágrafos sobre um pintor, dado o índice do pintor
function painterParagraphCount(iPintor) {
    return pintores[iPintor].textoPintor.length;
}

// Retorna a referência completa da foto de um pintor, dado o índice do pintor
function painterPhotoRef(iPintor) {
    return pintores[iPintor].fotoPintor;
}

/* 3. Funções relacionadas às obras dos pintores */

// Retorna o nome de uma obra, dados o índice do pintor e o índice da obra
function workName(iPintor, iObra) {
    return pintores[iPintor].obrasPintor[iObra].nomeObra;
}

// Retorna o ano de uma obra, dados o índice do pintor e o índice da obra
function workYear(iPintor, iObra) {
    return pintores[iPintor].obrasPintor[iObra].anoObra;
}

// Retorna o texto sobre uma obra, dados o índice do pintor e o índice da obra
function workText(iPintor, iObra) {
    return pintores[iPintor].obrasPintor[iObra].textoObra;
}

// Retorna o número de obras de um pintor, dado o índice do pintor
function painterWorkCount(iPintor) {
  return pintores[iPintor].obrasPintor.length;
}

// Retorna a descrição de uma obra de um pintor, dados o índice do pintor, o índice da obra e a designação técnica do descritor
function painterWorkData(iPintor, iObra, iDescr) {
  return pintores[iPintor].obrasPintor[iObra][iDescr];
}

// Retorna a referência completa da foto de uma obra, dados o índice do pintor e o índice da obra
function workPhotoRef(iPintor, iObra) {
  return pintores[iPintor].obrasPintor[iObra].fotoObra;
}