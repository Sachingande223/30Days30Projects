const API_URL= 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=7879f741001f65cc8db38fa1071cbef5&page=1'
const IMG_PATH= 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API= 'https://api.themoviedb.org/3/search/movie?api_key=7879f741001f65cc8db38fa1071cbef5&query="'


const form= document.getElementById('form');
const search= document.getElementById('search')
const main = document.getElementById('main')

getMovies(API_URL)

async function getMovies(url){
    const res = await fetch(url)
    const data = await res.json()
    const result= data.results
    showMovies(result)
}

function showMovies(movies){
    main.innerHTML = ''
    movies.forEach((movie)=>{
        const { poster_path, title, overview, vote_average, backdrop_path } = movie
        const movieEL= document.createElement('div')
        movieEL.classList.add('movie')
        movieEL.innerHTML=`
        <img src="${IMG_PATH + poster_path}" alt="" onerror="this.src='No_Image_Available.jpg'">
        <div class="movie-info">
            <h3>${title}</h3>
            <span class="${getClassByRate(vote_average)}">${vote_average}</span>
        </div>
        <div class="overview">
            <h3>Overview</h3>
            ${overview}
        </div>
        `
        main.appendChild(movieEL)
    })

function getClassByRate(vote){
    if(vote>=7){
        return 'green'
    }else if(vote>=5){
        return 'orange'
    }else{
        return 'red'
    }
}     

}

form.addEventListener('submit', (e)=>{
    e.preventDefault()

    const searchTerm= search.value

    if(searchTerm && searchTerm !== ''){
        getMovies(SEARCH_API + searchTerm)

        searchTerm.value = ''
    }else{
        window.location.reload()
    }
})