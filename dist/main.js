/**................ 
 *  @Author: Erik Torres Puente
 * ................
 */

 const selectAll = document.querySelectorAll(".selection");

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
             selection.innerHTML = v.querySelector("label").innerHTML;
             valuesWrapper.classList.remove("active");
         });
     });
 })
 
     
 var ctx = document.getElementById('canvas').getContext('2d');
 var myChart = new Chart(ctx, {
     type: 'line',
     data: {
         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
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
 
 