console.log("working");
const url = "https://rickandmortyapi.com/api/character"
let container = document.getElementById('container')

fetch(url)
    .then((response) => response.json())
    .then((data) => {
        console.log(data.results)
        data.results.map((element) => {
            let div = document.createElement('div')
            
            let title = document.createElement('h3')
            title.innerText = element.name
            div.appendChild(title)
            let img = document.createElement('img')
            img.src = element.image
            div.appendChild(img)

            div.classList.add('singleDiv');

            container.appendChild(div);
        })
    })

