//Kommentar här
/**................ 
 * MultiLineComment 
 * ................
 */
 async function fetchTodos() {
    let res = await fetch('/rest/todos')
    let todos = await res.json()

    //console.log(todos)

    for(let todo of todos) {
        addTodo(todo)
    }   
}
