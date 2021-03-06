/**................ 
 *  @Author: Erik Torres Puente
 * ................
 */
let Level;
const selectAll = document.querySelectorAll(".selection");
const predictButton = document.querySelector(".predict-btn");

predictButton.addEventListener("click",async ()=>{
    
    let testValues = {Level};
        
    
    let res = await fetch('/api/predict', {
        method: 'POST',
        body: JSON.stringify(testValues)
    });
    let prediction = await res.json();
    console.log(prediction)
    $('#textarea-one').html(`
    ${prediction['prediction']}`);
    console.log('hej')

})
 selectAll.forEach((selection) => {
     const valuesWrapper = selection.previousElementSibling;
     const values = valuesWrapper.querySelectorAll(".option");
     
     selection.addEventListener("click", () => {
         if(valuesWrapper.classList.contains("active")) {
             valuesWrapper.classList.remove("active");
         } else {
             let statusActive = document.querySelector(".values-wrapper.active");
 
             if (statusActive) {
                 statusActive.classList.remove("active");
             }
 
             valuesWrapper.classList.add("active");
         }
     });
     
     values.forEach((v) => {
         v.addEventListener("click", () => {
            let option = v.querySelector("label")
            selection.innerHTML = option.innerHTML;
            valuesWrapper.classList.remove("active");
            let dataLevel = option.getAttribute("data-level")
            if (dataLevel){
                Level = dataLevel

            }
         });
     });
 })
 
 var ctx = document.getElementById('canvas').getContext('2d');
 var myChart = new Chart(ctx, {
     type: 'line',
     data: {
         labels: ['Platform', 'Publisher', 'Genre', 'Green', 'Purple', 'Orange'],
         datasets: [{
             label: 'Video Game Sales (2000-2010)',
             data: [12, 19, 3, 5, 2, 3],
             backgroundColor: "transparent",
             borderColor: "red",
             borderWidth: 1
         },
         {
             label: 'Video Game Sales (2010-2021)',
             data: [12, 19, 3, 5, 2, 3],
             backgroundColor: "transparent",
             borderColor: "green",
             borderWidth: 1
         }]
     },
     options: { 
         elements:{
             line:{
                 tension:0
             }
         },
         scales: {
             y: {
                 beginAtZero: true
             }
         }
     }
 });
 
 