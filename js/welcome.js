
let user;
let Welcome = document.getElementById("Welcome");
let logOut = document.getElementById("logOut");
let exit = document.getElementById("exit");

(async function () {
    let movies = new Array();

    let data = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=b4be5e9fac54eadd9f47fa9cae006a09`);
    let movie = await data.json();
    movies = movie.results;

    display();
    function display() {
        let content = ``;

        for (let i = 0; i < movies.length; i++) {
            content += `
            <div class="col-md-4 ">
                <div class="item position-relative text-white text-center overflow-hidden rounded">

                    <img src="https://image.tmdb.org/t/p/w500/${movies[i].poster_path} " class="w-100" alt="">
                    <div class="item-cap position-absolute">
                        <h3>${movies[i].title} </h3>
                        <p class="py-5 px-3">${movies[i].overview}</p>
                        <div class="vote position-absolute d-flex justify-content-center align-items-center mr-4">${movies[i].vote_average}</div>
                    </div>
                    

                </div>
            </div>`
                ;
        }
        document.getElementById("myRow").innerHTML = content;
    }
})();

if (localStorage.getItem("userEnter") == null) {
    user = `Not Found`;
} else {
    user = JSON.parse(localStorage.getItem("userEnter"));
}

Welcome.innerHTML = `<h1 class="p-3"> Welcome ${user} ^_^ </h1> <br /> <h3> Enjoy with New News</h3>`;

function removeUser() {
    localStorage.removeItem("userEnter");
}

logOut.addEventListener("click", removeUser);
exit.addEventListener("click", removeUser);