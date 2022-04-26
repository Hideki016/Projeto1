function getMovieInfosOMDB(title){
    const url = `http://www.omdbapi.com/?t=${title}&apikey=790af7bc`  //ferramenta que recebe a informacoes do filme
       
    fetch(url)// fornece uma interface javacript para acessar e manipular partes do pipeline http 
    .then(response => response.json())//serve para comparar o que o usuario digitol com a lista dos filmes
    .then(data => {

        if(data.Response == 'False'){//usado para quando nao encontrar o filme 
            descriptionBodyNotFound.textContent = "Filme não encontrado! Tente novamente.";
            descriptionBodyNotFound.style.marginBottom = '30px'
            movieTitle.textContent = ""
            movieYear.textContent = ""
            movieGenre.textContent = ""
            movieRuntime.textContent = ""
            imdbRating.textContent = "Score"
            movieInfo.textContent = ""
            movieWriter.textContent = ""
            movieDirector.textContent = ""
            remover1.textContent = ""
            moviePoster.style.backgroundImage = `url(filmeNaoEncontrado.png)`

        } else { //usado para quando for encontrado o filme 
            descriptionBodyNotFound.textContent = "";
            
            movieTitle.textContent = data.Title
            movieYear.textContent = data.Year
            movieGenre.textContent = data.Genre
            movieRuntime.textContent = data.Runtime
            imdbRating.textContent = data.imdbRating
            movieInfo.textContent = data.Plot
            movieWriter.textContent = "Escrito por: " + data.Writer
            movieDirector.textContent = "Dirigido por:" + data.Director
            moviePoster.style.backgroundImage = `url(${data.Poster})`
        }
        
        
     })  
}

var form = document.getElementById('formSearch'); //variavel form recebe as informacoes do filme
var title = document.getElementById('title');//variavel title recebe o nome do filme com base no id dele 

form.addEventListener('submit', function(e) {//permite  configurar funcoes a serem chamadas quando um evento especificado acontece  
    
    getMovieInfosOMDB(title.value)
    // impede o envio do form
    e.preventDefault();


});