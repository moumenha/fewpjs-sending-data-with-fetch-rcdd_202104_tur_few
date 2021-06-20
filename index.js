function submitData(name, email){
<<<<<<< HEAD
    return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
  },
      body: JSON.stringify({name: name, email: email})
    })
    .then(resp => resp.json())
    .then(data => document.body.innerHTML += `${data.id}`)
    .catch(error => {
      alert("Unauthorized Access");
      document.body.innerHTML += `${error.message}`;
    });
  }
  
=======
  return fetch("http://localhost:3000/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
},
    body: JSON.stringify({name: name, email: email})
  })
  .then(resp => resp.json())
  .then(data => document.body.innerHTML += `${data.id}`)
  .catch(error => {
    alert("Unauthorized Access");
    document.body.innerHTML += `${error.message}`;
  });
}
>>>>>>> 44d3bb40da96a44401670de1abbd2cff77f8d5c8
