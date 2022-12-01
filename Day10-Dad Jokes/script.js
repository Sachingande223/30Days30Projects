const jokesEL = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJokes)
generateJokes()

//Using ASYNC/AWAIT
async function generateJokes(){
    const config = {
        headers:{
            Accept: 'application/json'
        }}

    const res= await fetch('https://icanhazdadjoke.com', config)
    const data= await res.json()
    jokesEL.innerHTML = data.joke
    
}

// Using fetch()
// function generateJokes(){
//     const config = {
//         headers:{
//             Accept: 'application/json'
//         }}

//     fetch('https://icanhazdadjoke.com', config)
//     .then(res => res.json())
//     .then(data => {
//         jokesEL.innerHTML = data.joke
//     })
// }