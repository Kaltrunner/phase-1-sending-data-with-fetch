// Add your code here
// const creatingAnElement = {
//     method: "POST",
//     header:{
//         "Content-Type": "application/json",
//         "Accept": "application/json",
//     },
//     body: JSON.stringify({
//         dogName: "Sid",
//         dogBreed: "PitBull",
//       }),

      
// }

// fetch("http://localhost:3000/dogs", creatingAnElement)
// .then(res => res.json)

function submitData(name, email) {
    fetch("http://localhost:3000/users", {
        method: "POST",
        headrs: {
            "Content-Type": "application/json",
        "Accept": "application/json"
        },
        body: JSON.stringify({
            name,
            email,
        })
    })
    .then(res => res.json())
    .then(data => document.body.innerHTML = data[id])
    .catch(error => document.body.innerHTML = error.message)
    console.lob(data)
}