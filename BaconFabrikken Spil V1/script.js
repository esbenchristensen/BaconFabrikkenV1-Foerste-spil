var bacon = 0;
var baconPrClick = 1;
var knifePrice = 3;
var extraKnifePrice = 5;
var slaugtherMachinePrice = 1;
var counterForSlaughterMachine = 1;
var hasSlaugtherMachine = false;
var hasBigKnife = false;
var hasExtraKnife = false;

function getBacon(){
    bacon += baconPrClick;
    document.getElementById("baconContainer").innerHTML = "Din baconbeholder: " + bacon;
}

function bigKnife(){
    if (hasExtraKnife == false && knifePrice <= bacon) {
        hasBigKnife = true;
        baconPrClick += 2;
        bacon -= knifePrice;
        document.getElementById("baconContainer").innerHTML = "Din baconbeholder: " + bacon;
        alert("Du har købt en større kniv.");
    }
        else{ 
            alert("Du har allerede købt den store kniv ellers har du ikke nok bacon.")
    }
}

function extraKnife(){
    if (hasExtraKnife == false && extraKnifePrice <= bacon) {
        hasExtraKnife = true;
        baconPrClick += 2;
        bacon -= extraKnifePrice;
        document.getElementById("baconContainer").innerHTML = "Din baconbeholder: " + bacon;
        alert("Du har købt en ekstra kniv.");
    }
        else{ 
            alert("Du har allerede købt en ekstra kniv ellers har du ikke nok bacon.")
    }
}


    function slaugtherMachineLoop() {
            setTimeout(function() { 
                bacon += 10;
                console.log('Tilføjet 10 Bacon');
                document.getElementById("baconContainer").innerHTML = "Din baconbeholder: " + bacon;  
                counterForSlaughterMachine++;                   
                if (counterForSlaughterMachine > 0) {          
                  slaugtherMachineLoop();           
                }                 
              }, 500) //tid indtil den looper igen (millisekunder)
            }

        function slaugtherMachine() {
            if(hasSlaugtherMachine == false && slaugtherMachinePrice <= bacon) {
                hasSlaugtherMachine = true;
                bacon-= slaugtherMachinePrice;
                document.getElementById("baconContainer").innerHTML = "Din baconbeholder: " + bacon;
                slaugtherMachineLoop();
                alert("Du har købt en slagtemaskine.");
            }
            else{
                alert("Du har allerede købt en slagtemaskine ellers har du ikke nok bacon")
            }
        }