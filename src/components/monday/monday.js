import fetch from "node-fetch";

let query = '{ boards (limit:5) {name id} }';

const monday = () => {
    fetch ("https://api.monday.com/v2", {
  method: 'post',
  headers: {
    'Content-Type': 'application/json',
    'Authorization' : 'eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjEyNzgxMzk1OSwidWlkIjoyMjA4NjY3NiwiaWFkIjoiMjAyMS0xMC0wN1QxOTozNDozOS4wMDBaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6ODk4NDAzOCwicmduIjoidXNlMSJ9.FnNvJeTlFqsHS7WOP9868JpfIidZvhfBVRcUH1O8nwg'
   },
   body: JSON.stringify({
     'query' : query
   })
  })
   .then(res => res.json())
   .then(res => console.log(JSON.stringify(res, null, 2)));
}

monday()