var table = document.querySelector('.result');
var char_num = document.getElementById('number_lr');
var keyword = document.getElementById('chars');
var button = document.getElementById('enter');

async function getData(){
    table.innerHTML = '';
    var data = await fetch('金庸小說集合.txt')
    .then(res => res.text())
    .then(data => {
        d = regex(char_num, keyword, data)
        d.forEach(s => {
          addChild(s)  
        });
    })
    .catch(e=>{
        var row = document.createElement('li')
        var s = document.createTextNode('查無此詞')
        row.appendChild(s)
        table.appendChild(row) 
    })
}

function addChild(sentense){
    var row = document.createElement('li')
    var s = document.createTextNode(sentense)
    row.appendChild(s)
    table.appendChild(row)
}

function regex(char_num, keyword, data){
    var str_patt = `.{${char_num.value}}${keyword.value}.{${char_num.value}}`
    var patt = new RegExp(str_patt, 'g');
    var results = data.match(patt);
    console.log(patt)
    return results;
}

button.addEventListener('click', function(){
    console.log(char_num)
    getData()
})

