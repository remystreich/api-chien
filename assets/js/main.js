let race = ""
let score = 0
function displayDog() {
    document.getElementById('score').innerText = "Score : " +score
    let dogImg = fetch(`https://dog.ceo/api/breeds/image/random`).then(data => {
        data.json().then(res => {
            console.log(res);
            race = res.message
            let imgContainer = document.getElementById('imgContainer');
            imgContainer.innerHTML= ""
            let dogPicture = document.createElement('img');
            dogPicture.src = res.message
            dogPicture.classList.add('mx-auto')
            imgContainer.appendChild(dogPicture);
            console.log(res.message);
        })
    })
};
displayDog()

function submitChoice() {
    exactRace = race.split("/")
    let guess = document.getElementById('name').value
    if (exactRace[4]== guess) {
        document.getElementById('result').innerText = "Gagné"
        score++
        document.getElementById('score').innerText = score
        document.getElementById('result').classList.add('text-success')
    }
    else {
        console.log('perdu');
        document.getElementById('result').innerText = "Perdu"
        document.getElementById('result').classList.add('text-danger')
    }

    displayDog()
}

