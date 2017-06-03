var myHeading = document.getElementById('biginsult');
var myTrans = document.getElementById('engtrans');
var myLipsum = document.getElementById('lipsumholder');

var btn = document.getElementById('btn');
var help = document.getElementById('help');

var json_de = eval("(" + insultstxt + ")");
var json_en = eval("(" + transtxt + ")");

// Generate main insult
function generate() {
    var rand = Math.floor((Math.random() * 600) + 1);           // generate random number
    
    var result = json_de["insults"][rand];                      // set insult & translation
    var translation = json_en["trans"][rand];
    
    myHeading.textContent = result+"!";                         // display insult & translation & images link
    myTrans.textContent = "🇬🇧☛ "+translation;
    help.href="http://images.google.com/search?tbm=isch&q="+result;
}

// Generate lorem ipsum
var sent = "";
var opening = ["Pass auf, ", "Halt die Klappe, ", "Hör' auf, ", "Verpiss dich, ", "Hau ab, "];
var lipsumresult = [];
var formality;
var numparagraphs;

function lipsum() {
    myLipsum.innerHTML = "";
    numparagraphs = document.querySelector('input[name = "paragraphs"]').value;
    formality = document.querySelector('input[name = "formality"]:checked').value;
    for(i=0; i<numparagraphs; i++) {
        for(j=0; j<3; j++){
            var rand = Math.floor((Math.random() * 5));
            if(j==0) {
                sent += opening[rand];
            }
            else {
                sent += " "+opening[rand];
            }
            
            for(k=0; k<4; k++){
                var rand = Math.floor((Math.random() * 600) + 1);
                var result = json_de["insults"][rand];
                if(formality=="du") {
                    if(k==3) {
                        sent += "du "+result+". ";
                    }
                    else {
                        sent += "du "+result+", ";
                    }
                }
                else if(formality=="sie") {
                    if(k==3) {
                        sent += "Sie "+result+". ";
                    }
                    else {
                        sent += "Sie "+result+", ";
                    }
                }
            }
        }
        lipsumresult.push(sent);
        sent="";

        myLipsum.innerHTML += lipsumresult[i];
        myLipsum.innerHTML += "<br><br>";
    }
    lipsumresult = [];
}

var form = document.getElementById("lipsumform");
document.getElementById("lipsumsub").addEventListener("click", function () {
    lipsum();
});

btn.onclick = generate;
generate();