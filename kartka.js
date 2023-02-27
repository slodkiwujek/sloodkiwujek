import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";

// initialize kaboom context
kaboom();

loadSprite("bg","swieta-swietka.png")
loadSprite("cwaniak","cwaniak.png")
loadSprite("cwaniak2","cwaniak2.png")

add([
    sprite("bg"),
    pos(0, 0),
]);

const cwaniak = add([
    sprite("cwaniak"),
    pos(300, 100),
])



 
let pierwszy = true
 loop(1,() =>{
    if(pierwszy)
    
    {
        cwaniak.use(sprite("cwaniak2"))
        pierwszy = false 
    }
    
    else 

    {
        cwaniak.use(sprite("cwaniak"))
        pierwszy = true
    }
}
    )
    
//

//onUpdate((y)=>{

   // if(cwaniak.pos.x<300) cwaniak.pos.x=cwaniak.pos.x+1

    //if(pierwszy) cwaniak.use(sprite("cwaniak2"))

    // {loop(1) => {
      //   add
        //sprite("cwaniak2")
        //pos(300,100)}
//}

//else cwaniak.use(sprite("cwaniak"))

//})