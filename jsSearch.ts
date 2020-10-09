const table = document.querySelector('.result') as HTMLUListElement;
const char_num = document.getElementById('number_lr') as HTMLInputElement;
const keyword = document.getElementById('chars') as HTMLInputElement;
const button = document.getElementById('enter') as HTMLButtonElement;



async function getData() {
    table.innerHTML = '';

    if (keyword.value.length) {
        let data = await fetch('金庸小說集合.txt');
        let txt = await data.text();
        let result = regex(txt);

        if (result) {
            result.forEach((s) => {
                addChild(s)
            })
        } else {
            var row = document.createElement('li')
            var s = document.createTextNode('查無此詞')
            row.appendChild(s)
            table.appendChild(row)
        }

    } else {
        var row = document.createElement('li')
        var s = document.createTextNode('請輸入關鍵字')
        row.appendChild(s)
        table.appendChild(row)
    }

}

function addChild(sentense:string) {
    var row = document.createElement('li')
    var s = document.createTextNode(sentense)

    row.appendChild(s)
    row.innerHTML = row.innerHTML.replace(keyword.value, `<mark>${keyword.value}</mark>`)
    table.appendChild(row)
}

function regex(txt:string) {
    var str_patt = `.{${char_num.value}}${keyword.value}.{${char_num.value}}`
    var patt = new RegExp(str_patt, 'g');
    var results = txt.match(patt);
    return results;
}

button.addEventListener('click', function () {
    getData()
})