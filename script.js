


function runSpeechRecognition() {
var output = document.getElementById("output");
var action = document.getElementById("action");
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var recognition = new SpeechRecognition();

recognition.onresult = function(event) {
var transcript = event.results[0][0].transcript;
output.innerHTML = "<b>Text:</b> "  + transcript 
output.classList.remove("hide");
console.log(transcript); //<<<<<<< Aici afiseaza textul in consola
voice = transcript;
 };
// start recognition
recognition.start();








                







function compareResult(){

            function caisa(){
       
                  
               
            

 // ===================PROMISES=====================
//  let waitCheck = new Promise((res, rej) => {
  
//     if(caisa == err){
//         res("succes")
//     }else{
//         rej("faild")
//     }
//     })
//     waitCheck.then((message) => {
//         console.log("este ok " + message);
        
//           }).catch((message) => {
//         console.log("nu este ok " + message);
              
//           })
      // ===================PROMISES=====================  
  


  var expr = voice;
switch (expr) {

case 'bună':
let beat = new Audio('media/buna.mp4');
beat.play();
function Crefresh() {
                      return window.location.reload();
                     }
                     setTimeout(Crefresh, 5000);
break;

case 'Andreea':
let beat2 = new Audio('media/imi_pare_bine_de_cunost.mp4')
beat2.play();
let beat3 = new Audio('media/vrei_sa_fim_prietene.mp4')
function beat33() {
    return beat3.play(); 
}
setTimeout(beat33, 3000);
function Crefresh() {
    return window.location.reload();
}
    setTimeout(Crefresh, 9000);

break;

case 'nu vreau':
let beat5 = new Audio('media/de_ce_nu_vrei.mp4');
beat5.play();
function Crefresh() {
    return window.location.reload();
    }
    setTimeout(Crefresh, 3000);
 
break;

case 'bine vreau':
let beat6 = new Audio('media/spune_mi_un_secret.mp4');
beat6.play();
function Crefresh() {
        return window.location.reload();
        }
        setTimeout(Crefresh, 5000);

break;

default:
console.log("default");

}}
try{
let z = caisa(voice,"bună")
 console.log(z);
}catch(error){
    let beat12 = new Audio('media/nu_am_inteles.mp4');
    beat12.play();
    function Crefresh() {
                          return window.location.reload();
                         }
                         setTimeout(Crefresh, 10000);
    
}




}
setTimeout(compareResult, 6000);



       


            
}

setTimeout(runSpeechRecognition, 3700);