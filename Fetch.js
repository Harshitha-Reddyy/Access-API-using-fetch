fetch('https://jsonplaceholder.typicode.com/comments').then((data)=>{
    return data.json();
}).then((completedata)=>{
    let data1="";
    completedata.map((values)=>{
        data1+=`<div class="card">
        <p class="id">${values.id}</p>
        <h1 class="tittle">${values.name}</h1>
        <p class="email">${values.email}</p>
        <p>${values.body}</p>
       
        

    </div>

</div>`
    });
    document.getElementById("cards").innerHTML=data1;

}).catch((err)=>{
    console.log(err);


})
 