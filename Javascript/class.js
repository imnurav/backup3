console.log('hey this is me varun kumar')
document.getElementById('heading').addEventListener('click', function (e) {
    console.log('you just clicked here')
    // location.href='//facebook.com'
    let variable = e.target.className
    variable = e.target.classList
variable=e.offsetX
variable=e.offsetY
variable=e.clientX
variable=e.clientY



    console.log(variable)
    variable = Array.from(e.target.classList)
    console.log(variable)
})
imparray=['ram','laxman','bharat','satrughan']
document.getElementById ('btn')
btn.addEventListener('click',func1)
function func1(e){
console.log('thanks for clicking',e)
}
localStorage.setItem('name2','arun')
localStorage.setItem('name','varun')
localStorage.setItem('godnames',JSON.stringify(imparray))

// localStorage.clear()
// localStorage.removeItem('name')
let name=localStorage.getItem('name')
console.log(name)

name=JSON.parse(localStorage.getItem('godnames'))
console.log(name)

sessionStorage.setItem('sessionname2','arun')
sessionStorage.setItem('sessionname','varun')
sessionStorage.setItem('sessiongodname',JSON.stringify(imparray)
)
let color=document.getElementById('heading')
color.setAttribute('style','border:2px solid black;background-color:red')