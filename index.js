// Create one dimensional array
var gfg = new Array(3);
  
document.write("Creating 2D array <br>");
  
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

for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
        gfg[i][j].addEventListener("click", function(){
            if(gfg[i][j].textContent == ""){
                if(jogador == 1){
                    gfg[i][h].textContent = "X";
                    jogador++;
                }
                else{
                    gfg[i][j].textContent = "O";
                    jogador--;
                }
            }
            else{
                console.log(gfg[i][j]);
            }
        });
    }
}