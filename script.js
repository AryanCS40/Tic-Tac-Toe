console.log("Hello");
let btns = document.querySelectorAll(".btn");
let reset = document.querySelector(".reset");
let newbtn = document.querySelector(".new");
let msg = document.querySelector(".msg");

let turnX = true;
let winPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]


 btns.forEach((btn) => {
btn.addEventListener("click" , ()=> {
        if(turnX){
        btn.innerText = "X"
        turnX = false;
    }
    else{
        btn.innerText = "O"
        turnX = true;
    }
    btn.disabled = true
    checkWinner();
})
 })

const  btndisable = () =>{
    for (const btn of btns) {
        btn.disabled = true
    }
}

const  btnEnable = () =>{
    for (const btn of btns) {
        btn.disabled = false;
        btn.innerText = "";
    }
}

const showmsg = (winner)=>{
    btndisable()
    msg.innerText = `Congratulations, Winner is ${winner}`
    msg.classList.remove("hide");  
    newbtn.classList.remove("hide");
    reset.classList.add('hide');  
}

const resetGame = () =>{
    turnX = true
    btnEnable();
    msg.classList.add("hide")
    reset.classList.remove('hide');
    newbtn.classList.add('hide')  
}

 const checkWinner=()=>{
    for (let pattern of winPattern) {
        let pos1 =btns[pattern[0]].innerText;
        let pos2 =  btns[pattern[1]].innerText;
        let pos3 =  btns[pattern[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1===pos2 && pos2 === pos3){
                showmsg(pos1)
            }
        }
    }
 }
 newbtn.addEventListener('click', resetGame)
 reset.addEventListener('click', resetGame)
