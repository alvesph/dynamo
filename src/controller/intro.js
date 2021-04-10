const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const { promisify } = require('util')
const sleep = promisify(setTimeout)
const fs = require('fs');

let html_file = fs.readFileSync('part0029.html', 'utf-8');
const document = new JSDOM(html_file).window.document;

const mostra = async () => {
    for (const element of document.querySelectorAll('p, title')) {
        //console.log(element.textContent); 
        const cut = element.textContent.split(' ');
        const lengttText = cut.length;
        console.clear()
        console.log(lengttText);
        
        const count = (lengttText * 60000) / 150;
        console.log(count/1000 + ' seg');
        console.log(element.textContent);
        await sleep(count);
    }
}
mostra()