const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const fs = require('fs');

// ler o arquivo html
let html_file = fs.readFileSync('part0029.html', 'utf-8');
// obter o document do arquivo
const document = new JSDOM(html_file).window.document;

// A partir do document, você pode buscar facilmente pelas tags
// Ex: procurando por todas as tags "p" ou "title"
for (const element of document.querySelectorAll('p, title')) {
    console.log(element.textContent); // obtendo o texto da tag

}