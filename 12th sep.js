async function foo(){
    let res=await fetch("https://api.chucknorris.io/jokes/random")
    let res1= await res.json();
    return res1;
}

async function bar(){
    try{
        let ans=await foo();
        console.log(ans);
        let b = document.createElement("div");
        b.setAttribute("id","divb")


        let a = document.createElement("div");
        a.setAttribute("id","div")
a.innerHTML= `<div class="card text-white bg-primary mb-3" style="max-width: 18rem;">

<div class="card-body">
  
  <p class="card-text">${ans.value}</p>
</div>
</div>`
b.append(a);
document.body.append(b);


    }
    catch(error){
console.log(error);
    }
}
bar()
