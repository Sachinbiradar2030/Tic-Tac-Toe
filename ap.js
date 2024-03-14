let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#resetbtn");
let newBtn=document.querySelector("#newbtn");
let msgcont=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");


let turnO=true;

//all possible for winning pattern
const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
//reset the game 
const resetGame=()=>{
    turnO=true;
    enableboxes();
    msgcont.classList.add("hide");

}
//forEach traves the element for all buttons
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        //if true print 'o'
    if(turnO){
        box.innerText="O";
        // if onec again clicked false
        turnO=false;
    }
    //else  false print  'x'
    else{
        box.innerText="X";
    turnO=true;
    }
    //if click button onece again that time disabled
    box.disabled=true;

    checkWinner();
    });
});

const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showinner=(winner)=>{
    msg.innerText=`Congratulation, winner is ${winner}`;
    msgcont.classList.remove("hide");
    disableboxes();
}

//checking the winner for the function
   const checkWinner=()=>{
    //traves the possible winnerPattern
    for( let pattern of winPattern){
        // console.log(boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]]);
        //to acces the inner text for example if i click o postion print 'o'
       let pos1= boxes[pattern[0]].innerText;
       let pos2= boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        //should not be empty than check the another condition
        if(pos1!=""&&pos2!=""&&pos3!=""){
            //if is equal than show the winner
            if(pos1===pos2&&pos2===pos3){
                console.log("winner",pos1);
                showinner(pos1);
            }
        }
        
    }
 }
 newBtn.addEventListener("click",resetGame);
 resetBtn.addEventListener("click",resetGame)