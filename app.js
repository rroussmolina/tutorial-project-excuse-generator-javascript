window.onload = () => {
    document.querySelector("#btn").addEventListener("click", ()  =>{
        document.querySelector("#excuse").innerHTML = generateExcuse();
        console.log(randomNumber);
    });
    
}

let generateExcuse = () =>{

    //let excuse = [];
    let who = ['the dog','my granma','his turtle','my bird'];
    let what = ['eat','pissed','crushed','broked'];
    let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];

    let whoIndex = Math.floor(Math.random()* who.length);
    let whatIndex = Math.floor(Math.random()* what.length);
    let whenIndex = Math.floor(Math.random()* when.length);

    return who[whoIndex] + " " + what[whatIndex] + " " + when[whenIndex];
}





// for (let i = 0; i < who.length; i++) {
//     for (let j = 0; j < what.length; j++) {
//         for (let k = 0; k < when.length; k++) {
//             let excuses = who[i] + what[j] + when[k]
            
//         }
   
//     } 
// }