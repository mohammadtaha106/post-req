

const createTodo = async (todo) => {
    let options = {
        method : 'POST',
        headers :{
            'Content Type': 'application/json'
        },
        body : 
            JSON.stringify(todo)
    
    }
     let p = await fetch('https://jsonplaceholder.typicode.com/posts', options)
     let response = await p.json()
    return response
    
    
     }
    const getTodo = async (id) => {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts/'+ id)
    let r = await response.json()
    return r
    }
    const mainFunc = async () => { 
        let todo = {
            "userId": 10,
            "title": "Moosa",
            "body": "Antankwadi",
            "id" : 105
          }
          let todor = await createTodo(todo)
          console.log(todor);
          console.log(await getTodo(105));
    
     }
     mainFunc()
    