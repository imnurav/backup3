console.log('hiiiiii')
async function abhinash() {
    console.log('inside harry')
    const response = await fetch('https://api.github.com/users')
    const users = await response.json()
    return users;
    // return 'harry'
}
console.log('before calling')
let a = abhinash()
console.log('after calling')
console.log(a)
a.then(data => console.log(data))
console.log('last line of the js file')
