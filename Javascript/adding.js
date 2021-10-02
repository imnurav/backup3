console.log('hey')
let element = document.createElement('li')
let txt = document.createTextNode('hey how are you')
element.appendChild(txt)
element.className = "funny"
element.id = "man"
element.setAttribute('title', 'from mumbai')
let ul = document.querySelector('ul.this')
ul.appendChild(element)
console.log(ul)


let elem = document.createElement('h2')
elem.id = 'draw'
elem.className = 'back'
elem.setAttribute('info', 'from delhi')
let tnode = document.createTextNode('this is created by the text node creator')
elem.appendChild(tnode)
element.replaceWith(elem)
let myul = document.querySelector('#myul')
myul.replaceChild(element, document.getElementById('fui'))
console.log(myul)
myul.removeChild(document.getElementById('lui'))
let pr = elem.hasAttribute('href')
elem.setAttribute('title', 'myelemtitle')
elem.removeAttribute('id')
console.log(elem, pr)

let ele = document.createElement('h4');
ele.innerHTML = 'Go to CodeWithHarry';
ele.setAttribute('id', 'myid');
ele.setAttribute('class', 'myclass');

let variable = document.querySelector('body');
variable.appendChild(ele);

ele = document.createElement('a');
ele.innerHTML = '<b>Go Now</b>';
ele.setAttribute('href', 'https://www.codewithharry.com')
ele.setAttribute('id', 'myid1');
ele.setAttribute('class', 'myclass1');

variable.appendChild(ele);


function knowdate() {
    var start = new Date(prompt('month Day , year'))
    console.log(start)
    end = new Date(prompt('Enter the end date in the fotmat of month Day , year'))
    console.log(end)
    diff = 0;
    days = 1000 * 60 * 60 * 24
    diff = end - start
    result = Math.floor(diff / days) + 'days have passed'
    console.log(result + 'days have passed')
    let date1 = document.createElement('h1')
    var txtanswer = document.createTextNode(result)
    date1.setAttribute('id', 'days')
    date1.appendChild(txtanswer)
    document.getElementById('date').appendChild(date1)
}

function reset() {
    document.getElementById('days').remove()
}