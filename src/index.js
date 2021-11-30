console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

document.addEventListener('DOMContentLoaded', function () {
    fetch(imgUrl)
    .then((resp) => resp.json())
    .then((json) => {
        console.log(json);
        json.message.forEach(url => {
            let image = document.createElement('img');
            image.src = url;
            document.getElementById("dog-image-container").append(image);
        })
    });

    fetch(breedUrl)
    .then((resp) => resp.json())
    .then((json) => {
        console.log(json);
        for (breed in json.message) {
            let breedName = document.createElement('li');
            breedName.textContent = breed;
            document.getElementById('dog-breeds').append(breedName);
        }
       
        let lis = document.querySelectorAll('li');
        lis.forEach((li) => {
            li.addEventListener('click', (e) => {
                e.target.style.color = 'blue';
            })
        })

        let dropDown = document.getElementById('breed-dropdown');
        let options = document.querySelectorAll('option');
        dropDown.addEventListener('change', (e) => {
            
            let selection = e.target.value;
            lis.forEach((li) => {
                if (li.innerText[0] !== selection) {
                    li.remove();
                } 
                else if (li.innerText[0] === selection) {
                    document.getElementById('dog-breeds').append(li);
                }
            })
        })


    })
})


