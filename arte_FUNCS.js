//PRJ.ARTE  - FUNCIONALIDADES

//******** variáveis públicas ********

//guarda o indice do pintor e indice da obra;
var pintorVar, obra;

//*********** inicialização **********

function inic() {
	refID("rightIntrod").innerHTML = textIntrod();
	refID("leftIntrod").innerHTML = connectIntrod();
	cIntrod();
}

//*********** input/output ***********

//output de um conteúdo num contentor HTML, dados o ID do contentor e o conteúdo (boleano, número ou string)
function out(idCont, conteudo) {
	document.getElementById(idCont).innerHTML = conteudo;
}

//************* processos ************

//referência a um objeto HTML, dado o seu ID
function refID(idObj) {
	return document.getElementById(idObj);
}

function beginning() {
	cPainter(pintorVar);
}

// Função auxiliar para alterar a visualização
function toggleView(elementId, display) {
    refID(elementId).style.display = display;
}

// Função auxiliar para se deslocar para o topo da página
function scrollToTop() {
    scrollTo(0, 0);
}

// ******** Funções de exibição de vistas ********

//Vista da introdução (esconde as outras vistas)
function cIntrod() {
	//mostar a vista da introdução e esconde a vista dos pintores e das obras
	toggleView("introd", "block");
    toggleView("pintores", "none");
    toggleView("obras", "none");
}

//Mostra a vista dos pintores
function cPainter(pintor) {
	//Esconde a vista da introdução e das obras e mostra a vista dos pintores
	toggleView("introd", "none");
    toggleView("pintores", "block");
    toggleView("obras", "none");
	
	ddPainter(pintor)
	connectArt(pintor)
	pintorVar = pintor;
	infoPainter(pintor);

	//Ao ser clicado um seletor da scroll para o topo da pagina
	scrollToTop();
}

//Mostra a vista das obras
function cArt(obra){
	//mostra a vista das obras e esconde a vista de introdução e dos pintores
	toggleView("introd", "none");
    toggleView("pintores", "none");
    toggleView("obras", "block");
	
	obraVar = obra;
	
	ddArt();
	infoArt(obra);

	scrollToTop();
}

// ******** Funções de geração de código HTML ********

//Código HTML do texto da introdução 
function textIntrod() {
	var codHTML = '';

	// Gerar o título usando a função collectionTitle
    codHTML += `<h1>${collectionTitle()}</h1>`;

    // Gerar o subtítulo usando a função collectionSubtitle
    codHTML += `<h2>${collectionSubtitle()}</h2>`;

	// Define o innerHTML do elemento rightIntrod com o título e o subtítulo
	refID("rightIntrod").innerHTML = codHTML;

	// Percorrer o número de parágrafos conforme determinado pela função 
    for (let cont = 0; cont < introParagraphCount(); cont++) {
        // Adiciona cada parágrafo à string codHTML usando a função introParagraph
        codHTML += `<p>${introParagraph(cont)}</p>`;
    }

    // Retorna a string codHTML final com todos os parágrafos adicionados
    return codHTML;
}

// Gera o código HTML dos seletores para cada pintor
function connectIntrod() {
    var codHTML = '';

    // Percorre o número de pintores determinado pela função painterCount
    for (let cont = 0; cont < painterCount(); cont++) {
        // Define o evento onclick para chamar a função cPainter com o valor de cont
        codHTML += `<div id="vista" onclick="cPainter(${cont})">`;

        // Adiciona a imagem de cada pintor usando a função painterPhotoRef
        codHTML += `<img src="${painterPhotoRef(cont)}"/>`;

        // Adiciona a identificação de cada pintor usando a função painterName
        codHTML += painterName(cont);

        // Fecha a DIV na classe "conectIntrod"
        codHTML += `</div>`;
    }

    // Retorna o código HTML final com todos os seletores de pintores adicionados
    return codHTML;
}

// Gera o código HTML dos seletores para cada obra de um pintor específico
function connectArt(pintor) {
    var codHTML = '';

    // Percorre o número de obras do pintor determinado pela função painterWorkCount
    for (let cont = 0; cont < painterWorkCount(pintor); cont++) {
        // Define o evento onclick para chamar a função cArt com o valor de cont
        codHTML += `<div id="vista" onclick="cArt(${cont});">`;

        // Adiciona a imagem de cada obra usando a função workPhotoRef
        codHTML += `<img src="${workPhotoRef(pintor, cont)}" />`;

        // Adiciona o título de cada obra usando a função painterWorkData
        codHTML += painterWorkData(pintor, cont, "nomeObra");

        // Fecha a DIV na classe "conectObras"
        codHTML += `</div>`;
    }

    // Define o innerHTML do elemento cLeftPainter com o código HTML gerado
    refID("cLeftPainter").innerHTML = codHTML;
}

// Gera o código HTML com informações do pintor e suas obras
function infoPainter(pintor) {
    let codHTML = '';

    // Abre a DIV no id "cardPintor"
    codHTML += '<div id="cardPintor">';

    // Adiciona a imagem de cada pintor usando a função painterPhotoRef
    codHTML += `<img src="${painterPhotoRef(pintor)}" width="100%" />`;

    // Adiciona o nome do pintor usando a função painterName
    codHTML += `<h2>${painterName(pintor)}</h2>`;

    // Fecha a DIV no id "cardPintor"
    codHTML += '</div>';

    // Iteração: mostra os parágrafos de texto de cada pintor
    for (let cont = 0; cont < painterParagraphCount(pintor); cont++) {
        codHTML += `<p>${painterParagraph(pintor, cont)}</p>`;
    }

    // Define o innerHTML do elemento cRightPainter com o código HTML gerado
    refID("cRightPainter").innerHTML = codHTML;

    // Define o valor selecionado do elemento painterID com o valor de pintor
    refID("painterID").selectedIndex = pintor;
}

//codigo HTML que amplia a imagem da obra e apresenta um texto sobre a obra
function infoArt(obra){
    var codHTML = '';

    // Adiciona a imagem da obra usando a função workPhotoRef
    codHTML += `<img id="obra" src="${workPhotoRef(pintorVar, obra)}"/>`;

    // Adiciona o nome, título, nome do autor e ano da obra
    codHTML += `<h2><span style="font-style: italic;">${workName(pintorVar, obra)}</span>, ${workYear(pintorVar, obra)}, ${painterName(pintorVar)}</h2>`;

    // Adiciona o texto sobre a obra usando a função workText
    codHTML += `<p>${workText(pintorVar, obra)}</p>`;

    // Define o innerHTML do elemento cArtwork com o código HTML gerado
    refID("cArtwork").innerHTML = codHTML;

    // Define o valor selecionado do elemento artID com o valor de obra
    refID("artID").selectedIndex = obra;

    // Ao ser clicado um seletor da obra, volta para o topo da página
	scrollToTop();
}

// ******** Funções de navegação e seleção ********

// Carrega as opções na lista drop-down (que é permanente) da vista de pintores
function ddPainter(){
	var codHTML = '';

    // Itera sobre o número de pintores determinado pela função painterCount
    for (let cont = 0; cont < painterCount(); cont++) {
        // Adiciona uma opção à lista com o nome do pintor usando a função painterName
        codHTML += `<option>${painterName(cont)}</option>`;
    }

    // Define o innerHTML do elemento painterID com o código HTML gerado
    refID("painterID").innerHTML = codHTML;
}

// Mostra um pintor a partir da escolha na lista drop-down
function choosePainter() {
    // Chama a função cPainter com o valor selecionado no elemento painterID
    cPainter(refID("painterID").selectedIndex);

    // Rola a página para o topo
	scrollToTop();
}

// Mostra um pintor de índice anterior ou posterior (com escolha em círculo), dado o avanço (-1 ou 1)
function nextPainter(avanco) {
    const numPint = painterCount();
    let pint = refID("painterID").selectedIndex;

    // Atualiza o índice do pintor com base no avanço (ap)
    pint += avanco;

    // Ajusta o índice para criar um ciclo entre os pintores
    if (pint == -1) {
        pint = numPint - 1;
    }
    if (pint == numPint) {
        pint = 0;
    }

    // Chama a função cPainter com o novo índice do pintor
    cPainter(pint);
}

// Carrega as opções na lista drop-down das obras de um pintor
function ddArt() {
    let codHTML = '';
    let numObras = painterWorkCount(pintorVar);

    // Itera sobre o número de obras do pintor determinado pela função painterWorkCount
    for (let cont = 0; cont < numObras; cont++) {
        // Adiciona uma opção à lista com o nome da obra usando a função painterWorkData
        codHTML += `<option>${painterWorkData(pintorVar, cont, "nomeObra")}</option>`;
    }

    // Define o innerHTML do elemento artID com o código HTML gerado
    out("artID", codHTML);
}
  
// Mostra uma obra a partir da escolha na lista drop-down
function chooseArt() {
    // Chama a função cArt com o valor selecionado no elemento artID
    cArt(refID("artID").selectedIndex);

    // Rola a página para o topo
	scrollToTop();
}

// Mostra uma obra de índice anterior ou posterior (com escolha em círculo), dado o avanço (-1 ou 1)
function nextArt(avanco) {
    // Atualiza o índice da obra com base no avanço
    obraVar += avanco;

    // Ajusta o índice para criar um ciclo entre as obras do pintor
    if (obraVar == painterWorkCount(pintorVar)) {
        obraVar = 0;
    }
    if (obraVar == -1) {
        obraVar = painterWorkCount(pintorVar) - 1;
    }

    // Chama a função cArt com o novo índice da obra
    cArt(obraVar);
}