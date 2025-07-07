var acenumber = 1;
var acelevel;
var acehealth = 100;
var aceStamina = 100;

var acecombactcheck = 0;

var aceawake = 0; 
var playerawake = 0;


var acePunch = 15;
var aceBarragePunch = 21;
var aceKick = 25;
var aceSpinKick = 35;

function acefight(){
    acecombactcheck = 1;
    fightsoundjs.play();



    document.getElementById('Player').style.left='20%';
    document.getElementById('Enemy').style.opacity='1';
    document.getElementById('Stats').style.opacity='1';
    document.getElementById('enemyStats').style.opacity='1';
    document.getElementById('punchace').style.opacity='1';
    document.getElementById('barrageace').style.opacity='1';
    document.getElementById('kickace').style.opacity='1';
    document.getElementById('spinkickace').style.opacity='1';
    document.getElementById('movelog').style.opacity='1';
    document.getElementById('xprichiesta').style.opacity='1';

    document.getElementById('nomeenemy').style.opacity='1';

    document.getElementById('lore').style.opacity='0';
    document.getElementById('lore').style.zIndex = -1;
    document.getElementById('lore').style.width = "0%";
    document.getElementById('lore').style.heaight = "0%";
    document.getElementById('lore').style.left = "0%";
    document.getElementById('lore').style.top = "0%";
    


    ///fai dei pulsanti sotto agl'altri e quando attachi gli ace gli cambi la Z cosi clicci quelli che attaccano l'ACE

    //e vedi le controparti delle funzioni degli ACE se sono messi bene

    document.getElementById("punch").disabled = true;
    document.getElementById("barrage").disabled = true;
    document.getElementById("kick").disabled = true;
    document.getElementById("spinkick").disabled = true;

    document.getElementById("punch").style.zIndex = -1;
    document.getElementById("barrage").style.zIndex = -1;
    document.getElementById("kick").style.zIndex = -1;
    document.getElementById("spinkick").style.zIndex = -1;


    document.getElementById("realoadbutton").disabled = true;
    document.getElementById("revivebutton").disabled = true;

    document.getElementById("fightbutton").disabled = true;
    document.getElementById("fightasso").disabled = true;

    document.getElementById("punchace").disabled = false;
    document.getElementById("barrageace").disabled = false;
    document.getElementById("kickace").disabled = false;
    document.getElementById("spinkickace").disabled = false;

    document.getElementById("punchace").style.zIndex = 5;
    document.getElementById("barrageace").style.zIndex = 5;
    document.getElementById("kickace").style.zIndex = 5;
    document.getElementById("spinkickace").style.zIndex = 5;

    if(acenumber == 1){


        acelevel = "H-Health";
        acehealth = 250;
        aceStamina = 100;
        
        acePunch = 35;
        aceBarragePunch = 36;
        aceKick = 50;
        aceSpinKick = 60;

        document.getElementById('nomeenemy').innerHTML = "Esrever Esruc";
        document.getElementById('Enemy').src = "img/ace1.png";

    }
    if(acenumber == 2){

        acelevel = "K-Kick";
        acehealth = 250;
        aceStamina = 100;

        aceKick = 90;
        aceSpinKick = 100;

        document.getElementById('nomeenemy').innerHTML = "Leg Amreg";
        document.getElementById('Enemy').src = "img/ace2.png";

    }
    if(acenumber == 3){

        acelevel = "M-Miss";
        acehealth = 350;
        aceStamina = 100;

        acePunch = 60;
        aceBarragePunch = 60;
        aceKick = 60;
        aceSpinKick = 60;

        document.getElementById('nomeenemy').innerHTML = "Sir. Sim";
        document.getElementById('Enemy').src = "img/ace3.png";

    }
    if(acenumber == 4){

        acelevel = "D-Defend";
        acehealth = 555;
        aceStamina = 100;

        acePunch = 60;
        aceBarragePunch = 60;
        aceKick = 60;
        aceSpinKick = 60;

        document.getElementById('nomeenemy').innerHTML = "El Buod";
        document.getElementById('Enemy').src = "img/ace4.png";

    }
    if(acenumber == 5){

        acelevel = "A-Awake";
        acehealth = 1000;
        aceStamina = 100;

        acePunch = 60;
        aceBarragePunch = 70;
        aceKick = 90;
        aceSpinKick = 100;

        document.getElementById('nomeenemy').innerHTML = "Donatello";
        document.getElementById('Enemy').src = "img/ace5.png";

    }





    updateAce();
    resetace();
}

function updateAce(){

    document.getElementById('level').innerHTML = level;
    document.getElementById('Health').innerHTML = health;
    document.getElementById('Stamina').innerHTML = stamina;
    document.getElementById('xp').innerHTML = Xp;
    document.getElementById('xpneed').innerHTML = XpNeed;
    
    
    document.getElementById('enemylevel').innerHTML = acelevel;
    document.getElementById('enemyhealth').innerHTML = acehealth;
    document.getElementById('enemystamina').innerHTML = aceStamina;


}

function  resetace(){
    
    acehealth = acehealth;
    aceStamina = 100;
    health = maxhealth;
    stamina = 100;
    
}


function WinLoseace(){
    
    
    
    if(acehealth <= 0){
        
        acehealth = 0;
        
        
        acecombactcheck = 0;

        xpget = Math.round(XpNeed*(acenumber*3), XpNeed*(acenumber*4));
        document.getElementById('rewardlog').style.opacity='1';
        document.getElementById('reward').innerHTML = xpget;
        Xp = Xp + xpget;
        

       acenumber = acenumber  + 1;


        levelupfunction();
        document.getElementById("punchace").disabled = true;
        document.getElementById("barrageace").disabled = true;
        document.getElementById("kickace").disabled = true;
        document.getElementById("spinkickace").disabled = true;


        document.getElementById("punch").disabled = true;
        document.getElementById("barrage").disabled = true;
        document.getElementById("kick").disabled = true;
        document.getElementById("spinkick").disabled = true;
        document.getElementById("fightbutton").disabled = true;
        document.getElementById("accept").disabled = false;
        document.getElementById("accept").style.opacity = "1" ;


        
    }
    else{
        acecombact();
    }
    
    if(health <= 0){
        
        death();
        
        
        
    }
    
    
    
}


//player attack ace
function playeraceattackace(dmg, missmove,staminaneed){


				
    miss = rando(1, 10);
    console.log(miss);
    if(stamina >= staminaneed){
        
        if(miss >= missmove){
            stamina = stamina - staminaneed;
            if(acenumber != 4){
                acehealth = acehealth - dmg;
            }
            else{
                acehealth = Math.round(acehealth - (dmg/2));
            }
            document.getElementById('playerAttack').innerHTML = "Hit";
            punchsoundjs.cloneNode(true).play();
        }
        else{
            stamina = stamina - staminaneed;
            document.getElementById('playerAttack').innerHTML = "Miss";
            //<!-- l'hai mancato -->
        }
    }
    else{
    document.getElementById('playerAttack').innerHTML = "Stamina";
        //<!-- non hai stamina -->
    }
    
  

    


    stamina = stamina + 5;

    if(playerawake == 1){
        stamina = stamina + 5;

    }
    
    if(stamina >= 100){
        stamina = 100;
    }
    

    if(acehealth <= 1 && acenumber == 5 && aceawake == 0){
        acehealth = 1;
    }
    
    WinLoseace(); 
    //<!-- Funzione di quando il nemico arriva sotto lo 0 di vita -->
    
    updateAce();
    

}
/////////////


//ace attack
function acecombact(){
				
			
	if(acenumber != 3){
        miss = rando(1, 10);
    }
    else if(acenumber == 5 && aceawake == 1){
        miss = rando(3,10);
    }
    else{
        miss = 10;
    }

    console.log(miss);
    if(acenumber != 2){
        var aceattack = rando(1, 4);
    }
    else{
        var aceattack = rando(3, 4);
    }

    if(aceattack == 1){
            
        if(aceStamina >= 15){
        
            if(miss >= 4){
                
                aceStamina = aceStamina - 15;
                health = health - acePunch;
                document.getElementById('enemyAttack').innerHTML = "Hit";
            }
            else{
                aceStamina = aceStamina - 15;
                
                document.getElementById('enemyAttack').innerHTML = "Miss";
                //<!-- hai mancato -->
            }
        
        }else{	
            document.getElementById('enemyAttack').innerHTML = "Stamina";
            //<!-- non hai stamina -- >
        }
        
    }
    
    
    if(aceattack == 2){
            
        if(aceStamina >= 20){
        
            if(miss >= 5){
                
                aceStamina = aceStamina - 20;
                health = health - aceBarragePunch;
                document.getElementById('enemyAttack').innerHTML = "Hit";
            }
            else{
                aceStamina = aceStamina - 20;
                
                document.getElementById('enemyAttack').innerHTML = "Miss";
                //<!-- hai mancato -->
            }
        
        }else{	
            document.getElementById('enemyAttack').innerHTML = "Stamina";
            //<!-- non hai stamina -- >
        }
        
    }
    
    if(aceattack == 3){
            
        if(aceStamina >= 25){
        
            if(miss >= 5){
                
                aceStamina = aceStamina - 25;
                health = health - aceKick;
                document.getElementById('enemyAttack').innerHTML = "hit";
            }
            else{
                aceStamina = aceStamina - 25;
                document.getElementById('enemyAttack').innerHTML = "Miss";
                //<!-- hai mancato -->
            }
        
        }else{	
            document.getElementById('enemyAttack').innerHTML = "Stamina";
            //<!-- non hai stamina -- >
        }
        
    }
    
    if(aceattack == 4){
            
        if(aceStamina >= 35){
        
            if(miss >= 6){
                
                aceStamina = aceStamina - 35;
                health = health - aceSpinKick;
                document.getElementById('enemyAttack').innerHTML = "Hit";
            }
            else{
                aceStamina = aceStamina - 35;
                document.getElementById('enemyAttack').innerHTML = "Miss";
                //<!-- hai mancato -->
            }
        
        }else{	
            document.getElementById('enemyAttack').innerHTML = "Stamina";
            //<!-- non hai stamina -- >
        }
        
    }
    
    
    


 
    aceStamina = aceStamina + 5;
    
    if(aceawake == 1 && acenumber == 5){
        aceStamina = aceStamina + 5;
    }





    if(aceStamina >= 100){
        aceStamina = 100;
    }

    if(aceStamina >= 35 && aceawake == 1){
        aceStamina = 35;
    }

    if(health <= 1 && playerawake == 0 && acenumber == 5 && level >= 100){
        playerawake = 1;
        
        health = 777;
        stamina = 100;

        document.getElementById('Player').src = "img/playerawake.png";
    }

    aceability();
    
   
}


function aceability(){

    if(acenumber == 1){
        acehealth = acehealth + 7;

    }

    if(acenumber == 2){
        aceStamina = 100;
    }

    if(acenumber == 5 && acehealth <= 1 && aceawake == 0){
        aceawake = 1;

        acehealth = 2000;
        aceStamina = 75;

        acePunch = 100;
        aceBarragePunch = 120;
        aceKick = 150;
        aceSpinKick = 170;

        document.getElementById('nomeenemy').innerHTML = "Er Donaro";
        document.getElementById('Enemy').src = "img/ace5awake.png";

    }
    
}
//--------------------------------------------------