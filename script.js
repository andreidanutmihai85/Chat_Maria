
		    function runSpeechRecognition() {
		        // get output div reference
		        var output = document.getElementById("output");
		        // get action element reference
		        var action = document.getElementById("action");
                // new speech recognition object
                var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
                var recognition = new SpeechRecognition();
            
                // This runs when the speech recognition service starts
                // recognition.onstart = function() {
                //     action.innerHTML = "<small>Te ascult, vorbeste...</small>";
                
                // };
                
         

                //======================================
              
                // This runs when the speech recognition service returns result
                recognition.onresult = function(event) {
                    var transcript = event.results[0][0].transcript;
                    // var confidence = event.results[0][0].confidence;

                    output.innerHTML = "<b>Text:</b> "  + transcript 
                    
           
                    output.classList.remove("hide");

                    console.log(transcript); //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Aici afiseaza textul in consola

                    voice = transcript;

                  
                 
                 
                  
                  
                   
                };
              
                 // start recognition
                 
	

                 recognition.start();

      

        
            

            function compareResult(){
                function caisa(){


                //  if(a==b){
                    

                //     let beat = new Audio('media/buna.mp4');
                //                beat.play();

                //                function Crefresh() {
                //                 return window.location.reload();
                //             }
                //             setTimeout(Crefresh, 7000);

                    

                //     }else{
           
                //         let beat = new Audio('media/nu_am_inteles.mp4');
                //         beat.play();

                //         function Crefresh() {
                //             return window.location.reload();
                //         }
                //         setTimeout(Crefresh, 3000);

const expr = voice;
switch (expr) {
  case 'bună':
    let beat = new Audio('media/buna.mp4');
    beat.play();
    function Crefresh() {
                    return window.location.reload();
                }
                setTimeout(Crefresh, 6000);
 
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
            setTimeout(Crefresh, 3000);

      

break;

  default:
    let beat4 = new Audio('media/nu_am_inteles.mp4');
    beat4.play();
    function Crefresh() {
        return window.location.reload();
    }
    setTimeout(Crefresh, 3000);

}

                }










                let z = caisa(voice,"bună")
                console.log(z);

           

 
                        }
                        
         
                        setTimeout(compareResult, 5000);
                   
                    }



                
                  
                
                
