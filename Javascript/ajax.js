console.log("i am studying Ajax")
let fetchBtn = document.getElementById('fetchBtn')
fetchBtn.addEventListener('click', buttonhandler)
function buttonhandler() {
    console.log('you have clicked the fetchbtn')
    const xhr = new XMLHttpRequest();
    // xhr.open('GET','varun.txt',true)
    //  xhr.open('GET','https://jsonplaceholder.typicode.com/todos/1',true)
      xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true)
    //  xhr.open('GET', 'https://newsapi.org/v2/top-headlines?sources=the-times-of-india&apiKey=6346092ff1974cd0862384e4fe73ef53', true)

    xhr.getResponseHeader('content-type', 'application/json')

    // xhr.onreadystatechange = function () {
    //     console.log('ready state is ', xhr.readyState)
    // }

    xhr.onprogress = function () {
        console.log('on progress')
    }

    xhr.onload = function () {
        if (this.status === 200) {
            console.log(this.responseText)
        }
        else {
            console.error('some error occured')
        }
    }

     param = `{"name":"test","salary":"123","age":"23"}`
    // xhr.send()
    xhr.send(param)

    console.log('we are done')
}

let popBtn = document.getElementById('popBtn')
popBtn.addEventListener('click', popHandler)
function popHandler() {
    console.log('You have clicked the pop handler');

    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    // Open the object
    xhr.open('GET', 'json.json', true);


    // What to do when response is ready
    xhr.onload = function () {
        if(this.status === 200){
            let obj = JSON.parse(this.responseText);
            console.log(obj);
            let list = document.getElementById('list');
            str = "";
            for (key in obj)
            {
                str += `<li>${obj[key].employee_name} </li>`;
            }
            list.innerHTML = str;
        }
        else{
            console.log("Some error occured")
        }
    }

    // send the request
    xhr.send();
    console.log("We are done fetching employees!");
    
}