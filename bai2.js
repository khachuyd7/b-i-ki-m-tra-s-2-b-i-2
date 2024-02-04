const searchInput=document.querySelector(".button");

// searchInput.addEventListener("change", ()=>{
// async function pokemon(event){
//    try{
 
//     const pokemon= await fetch("  https://pokeapi.co/api/v2/pokemon/ditto");
//     const spokemon= await pokemon.json();
//     console.log (spokemon);
    
//     const name=document.querySelector("#name")
    
   
//  const names=spokemon.form.name
// let results=spokemon.results;
// for (i=0;i<=results.length;i++){
//     const names=spokemon.results[i].name;
    
 
// console.log(names)
// }
// name.innerHTML=spokemon.names;
    
// }
// catch (err) {
//     console.error("Da xay ra mot loi", err);
//   }
//    };
// pokemon();
// });
searchInput.addEventListener("click",getPokemon)

function getPokemon(e){
    const name= document.querySelector(".Search").value;
    
     fetch(`  https://pokeapi.co/api/v2/pokemon/${name}`)
  .then((response)=>response.json()) 
 
  .then ((data) =>{
    document.querySelector(".img").innerHTML= `<div class="img">
    <img 
    src="${data.sprites.other["official-artwork"].front_default}" 
    alt="${data.name}"/>
    </div>
    <div class="inf"> 
        `
        document.querySelector("#name").innerHTML=  ` <p class="value" id="name">${data.name}</p>  `
        document.querySelector("#weight").innerHTML=   `<div >
     
        <div class="value" id="weight">${data.weight}lbs</div>
      
    </div>`
    document.querySelector("#height").innerHTML= `   <div class="value" id="height">${data.height}0cm</div>`
 ;
 document.querySelector("#type").innerHTML=` <div class="value" id="type">${data.types[0].type.name}</div>`
  })
  .catch((err)=>{
    console.log("có lỗi",err);
  });

}
getPokemon()