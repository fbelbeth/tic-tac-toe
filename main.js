// Create one dimensional array
var gfg = new Array(3);
  
// Loop to create 2D array using 1D array
for (var i = 0; i < gfg.length; i++) {
    gfg[i] = new Array(3);
}
  
var h = 1;
  
// Loop to initialize 2D array elements.
for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
        gfg[i][j] = document.querySelector("#posicao" + h);
        h++;
    }
}
//1 = x
//2 = o
let jogador = 1

 gfg[0][0].addEventListener("click", function(){
            if(gfg[0][0].textContent == ""){
                if(jogador == 1){
                    gfg[0][0].textContent = "X";
                    jogador++;
                }
                else{
                    gfg[0][0].textContent = "O";
                    jogador--;
                }
            }
            else{
                console.log(gfg[0][0]);
            }
 });

 gfg[0][1].addEventListener("click", function(){
    if(gfg[0][1].textContent == ""){
        if(jogador == 1){
            gfg[0][1].textContent = "X";
            jogador++;
        }
        else{
            gfg[0][1].textContent = "O";
            jogador--;
        }
    }
    else{
        console.log(gfg[0][1]);
    }
});

gfg[0][2].addEventListener("click", function(){
    if(gfg[0][2].textContent == ""){
        if(jogador == 1){
            gfg[0][2].textContent = "X";
            jogador++;
        }
        else{
            gfg[0][2].textContent = "O";
            jogador--;
        }
    }
    else{
        console.log(gfg[0][2]);
    }
});

gfg[1][0].addEventListener("click", function(){
    if(gfg[1][0].textContent == ""){
        if(jogador == 1){
            gfg[1][0].textContent = "X";
            jogador++;
        }
        else{
            gfg[1][0].textContent = "O";
            jogador--;
        }
    }
    else{
        console.log(gfg[1][0]);
    }
});

gfg[1][1].addEventListener("click", function(){
    if(gfg[1][1].textContent == ""){
        if(jogador == 1){
            gfg[1][1].textContent = "X";
            jogador++;
        }
        else{
            gfg[1][1].textContent = "O";
            jogador--;
        }
    }
    else{
        console.log(gfg[1][1]);
    }
});

gfg[1][2].addEventListener("click", function(){
    if(gfg[1][2].textContent == ""){
        if(jogador == 1){
            gfg[1][2].textContent = "X";
            jogador++;
        }
        else{
            gfg[1][2].textContent = "O";
            jogador--;
        }
    }
    else{
        console.log(gfg[1][2]);
    }
});

gfg[2][0].addEventListener("click", function(){
    if(gfg[2][0].textContent == ""){
        if(jogador == 1){
            gfg[2][0].textContent = "X";
            jogador++;
        }
        else{
            gfg[2][0].textContent = "O";
            jogador--;
        }
    }
    else{
        console.log(gfg[2][0]);
    }
});


gfg[2][1].addEventListener("click", function(){
    if(gfg[2][1].textContent == ""){
        if(jogador == 1){
            gfg[2][1].textContent = "X";
            jogador++;
        }
        else{
            gfg[2][1].textContent = "O";
            jogador--;
        }
    }
    else{
        console.log(gfg[2][1]);
    }
});


gfg[2][2].addEventListener("click", function(){
    if(gfg[2][2].textContent == ""){
        if(jogador == 1){
            gfg[2][2].textContent = "X";
            jogador++;
        }
        else{
            gfg[2][2].textContent = "O";
            jogador--;
        }
    }
    else{
        console.log(gfg[2][2]);
    }
});


