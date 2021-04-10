const { promisify } = require('util')
const sleep = promisify(setTimeout)
var fs = require('fs');

fs.readFile('../output/part0000.html', 'utf-8', function (err, data) {
  if(err) throw err;
  const cutTab = data.replace(/(\r\n|\n|\r)/gm, "");
  const clearText = cutTab.replace(/<p( [a-zA-Z]+="[a-zA-Z]+-[a-zA-Z]+-[a-zA-Z]+">)|<p class="[a-zA-Z]+">|<em class="[a-zA-Z]+">|<\/em>|-|\s+/g, ' ');
  const clearSpace = clearText.replace(/\s+/g, ' ')
  const endLine= cutTab.replace(/(<\/p>)/g, "</p>#@");

  const cutWord = clearSpace.split('#');
  
  console.log(clearSpace);
  const cut = clearSpace.split('</p>');
  const lengttText = cut.length;
  var i = 0 ;
  
  const mostra = async () => {
    while (i < lengttText) {
      const x = cut[i].split(' ');
      const cc = x.length;
      console.clear()
      const amount = cc - 1;
      console.log(amount + ' Palavras\n')
      console.log(cut[i]+'\n')
      const count = (amount * 60000) / 150;
      console.log(count/1000 + ' seg');
      await sleep(count)
      i++;
    }
    
  }
  mostra()
});










