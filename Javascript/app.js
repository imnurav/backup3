showNotes();

//  localStorage.clear()
console.log('hey this is my 3rd project ')
// localStorage.clear()
let addBtn = document.getElementById('addBtn')
addBtn.addEventListener("click", function (e) {
    let addTxt = document.getElementById('addTxt')
    let addTitle=document.getElementById('addTitle')
    let notes = localStorage.getItem('notes')
    if (notes == null) {
        bookObj = []
    }
    else {
        bookObj = JSON.parse(notes)
    }
    let myObj={
        title:addTitle.value,
        text:addTxt.value
    }
    bookObj.push(myObj);
     localStorage.setItem('notes', JSON.stringify(bookObj))
    addTxt.value = ""
    addTitle.value=""
    showNotes();

    console.log(bookObj)
})
function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        bookObj = [];
    } else {
        bookObj = JSON.parse(notes);
    }
    let html = "";
    bookObj.forEach(function (element, index) {
        html += `
            <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title"> ${element.title}</h5>
                        <p class="card-text"> ${element.text}</p>
                        <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button> 
                        <input type="checkbox" name="somename" id="thisid" unchecked>

                    </div>
                </div>`;
     
  });
    let notesElm = document.getElementById("notes");
    if (bookObj.length != 0) {
        notesElm.innerHTML = html;
    } else {
        notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
    }
}
function deleteNote(index) {
    let notes = localStorage.getItem("notes")
    if (notes == null) {
        bookObj = [];
    } else {
        bookObj = JSON.parse(notes);
    }

    bookObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(bookObj));
    showNotes();
}
let search = document.getElementById('searchTxt');
search.addEventListener("input", function () {

    let inputVal = search.value
    // console.log('Input event fired!', inputVal);
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function (element) {
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if (cardTxt.includes(inputVal)) {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }
        // console.log(cardTxt);
    })
})
let color = document.getElementById("thisid")
color.addEventListener("click", function () {
let bgcolor=document.getElementById('notes')
bgcolor.setAttribute('style','backgroud-color:red')
bgcolor.appendChild()
    console.log('you just clicked')
    
})