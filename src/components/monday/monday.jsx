import { useEffect } from "react"



const Monday = () => {
    let query = '{ boards (limit:5) {name id} }';
    console.log('Monday is being called')

    useEffect(() => {
        fetch ("https://api.monday.com/v2", {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : ''
            },
            body: JSON.stringify({
                'query' : query
            })
            })
        .then(res => res.json())
        .then(res => console.log(JSON.stringify(res, null, 2)));
   
    })

    return "monday api return here"
    
}

export default Monday