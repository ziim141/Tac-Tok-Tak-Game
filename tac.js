let button=document.querySelectorAll("button");
let h2=document.getElementById('h2');
let values=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
let str=true;
button.forEach((btn)=>{
    btn.addEventListener('click',()=>{
            if(str===true){
                btn.innerHTML='X';
                str=false;
            }else{
                btn.innerHTML='0';
                str=true;
            }
            checkwinner();
            btn.disabled=true;
    });
});

function checkwinner(){
    for(let saim of values){
        let parr1=button[saim[0]].innerHTML;
        let parr2=button[saim[1]].innerHTML;
        let parr3=button[saim[2]].innerHTML;
        if(parr1 !=''&& parr2 !='' && parr3 !=''){
            if(parr1===parr2 && parr2===parr3){
                console.log("winner");
                close();
                return;
            }
        }
    }
}

function close(){
    for(let ha of button){
        ha.disabled=true;
        h2.style.display='block';
    }
}