let myArray = [{ name: "Goodness", track: "Web Development", Sex: "Female", favouriteFood: "Rice", pic: "goodness"},
{ name: "Emmanuel", track: "Web Development", Sex: "Male", favouriteFood: "Rice", pic: "emmanuel"},
{ name: "Jane", track: "Web Development", Sex: "Female", favouriteFood: "Rice", pic: "tilda" },
{ name: "Grace", track: "Web Development", Sex: "Female", favouriteFood: "Rice", pic: "grace" },
{ name: "Valentine", track: "Web Development", Sex: "Male", favouriteFood: "Rice", pic: "lastman" },
{ name: "Tilda", track: "Web Development", Sex: "Female", favouriteFood: "Rice", pic: "brenda" },
]


let thecards = document.querySelector('.thecards')
console.log(thecards)

let cardholder = ''
myArray.forEach((trainee) => {
    console.log(trainee)
    cardholder += `
    <div class="card">
    <div class="card-box">
        <img src="img/${trainee.pic}.jpg" alt="" class="people">
    </div>
    <p>Name: ${trainee.name}</p>
    <p>Track: ${trainee.track}</p>
    <p>Sex: ${trainee.Sex}</p>
    <p>Favourite Food: ${trainee.favouriteFood}</p>
</div>
`
})

thecards.innerHTML = cardholder


