//Kommentar här
/**................ 
 * MultiLineComment 
 * ................
 */
 //async function fetchTodos() {
    //let res = await fetch('/rest/todos')
    //let todos = await res.json()

    //console.log(todos)

    //for(let todo of todos) {
        //addTodo(todo)
    //}   
//}

let chart = new Chart("chart",{
    type:"bar",
    data:{
        labels:["Red", "Blue", "Yellow", "Green"],
        datasets: [
            {
                order: 1,
                label: "Data",
                borderWidth: 3,
                data: [30, 10,20,35],
                backgroundColor:["red", "blue", "yellow", "green"]
            }
        ]
    },
    options: {
        onClick(e){
            console.log(chart.getElementAtEvent(e)[0])
            let point = console.log(chart.getElementAtEvent(e)[0])

            if(point){
                let label = chart.data.labels[point.index]
                let value = chart.data.datasets[point.datasetIndex].data[point_index]
                console.log(label,value)
            }
        },

        onHover(e){
            let point = chart.getElementAtEvent(e)[0]

            if (point){
                e.target.style.cursor = "pointer"
            } else{
                e.target.style.cursor = "default"
            }
        }
    }
})

function addChartData(label, color, data){
    let chartDataset = chart.data.datasets[0]
    
    chart.data.labels.push(label)
chartDataset.data.push(data)
chartDataset.backgroundColor.push(color)
chart.update()
}

addChartData("Purple", "purple", "15")
addChartData("Orange", "orange", "35")

function addLineDataset(){
    chart.data.datasets.push({
        label: "Line Dataset",
        data: [90, 32,5,15,45,62],
        type: "line",
        backgroundColor: ["rgba(0,0,0,0"],
        borderColor: ["#03a5fc"],
        order: 0,
        pointRadius: 10,
        pointBorderColor: "black",          
    })

    chart.update()
}

addLineDataset()

