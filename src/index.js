// write your code here
const baseURL =  "http://localhost:3000/ramens"
const ramenMenu = document.getElementById("ramen-menu")
fetch(baseURL)
.then(response => response.json())
.then(jsonData => {
   imager(jsonData)
//adding form inputs to the DOM and displaying each on the sections requested
   const form = document.querySelector("#new-ramen")
   form.addEventListener("submit", (e) => {
       //prevent defuault refreshing
       e.preventDefault();
       //make inputs from the form an manipulatable object
       const mealsObj = {}
       mealsObj.name = document.getElementById("new-name").value;
       mealsObj.restaurant = document.getElementById("new-restaurant").value;
       mealsObj.image = document.getElementById("new-image").value;
       mealsObj.rating = document.getElementById("new-rating").value;
       mealsObj.comment = document.getElementById("new-comment").value;

       displayerRamen(mealsObj);
   })
})

//A function that can be used by new inputs and server's data to display images and descriptions on the DOM.

function displayerRamen(meal){
    const imgTag = document.createElement("img");
    imgTag.src = meal.image;

    imgTag.addEventListener("click",() => {
    document.querySelector(".detail-image").src = meal.image;
    document.querySelector(".name").innerHTML = meal.name;
    document.querySelector(".restaurant").innerHTML = meal.restaurant;
    document.querySelector("#rating-display").innerHTML = meal.rating;
    document.querySelector("#comment-display").innerHTML = meal.comment;
    })

    ramenMenu.append(imgTag)
        

}
//iterator function
function imager(arrayOfData){
    arrayOfData.forEach(meal => {

    displayerRamen(meal);

    });
}


