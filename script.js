let movies1 = {
    name: "tokyo revengers",
    src: "https://animehunch.com/wp-content/uploads/2021/06/Screenshot-144.jpg"
}
let movies2 = {
    name:"death not",
    src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSwX0pCF4gzynmcfMGFfFF8pzKl3AEjD5W_A&usqp=CAU"
}
let movies3 = {
    name:"my hero academia",
    src:"https://cdn.myanimelist.net/images/anime/1911/113611.jpg"
}
let movies =[];
movies.push(movies1,movies2,movies3);
let movieContainer =document.getElementById(Container)

movies.forEach((movie) => {
    movieContainer.innerhtml +=`
    <div class="movie">
   <img src="${movie.src}" alt="movie picture" />
   <h2>${movie.name} </h2>
    </div>
`
});