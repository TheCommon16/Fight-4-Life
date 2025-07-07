//stats
//user
var level = 1;
var health = 100;
var stamina = 100;
var maxhealth = 100;
			
var Xp = 0;           //modifica per livelli
var xpget = 0;
var XpNeed = 100;
			
var Punch = 15;
var BarragePunch = 21;
var Kick = 25;
var SpinKick = 35;
			
var PunchStamina = 15;
var BarragePunchStamina = 20;
var KickStamina = 25;
var SpinKickStamina = 35;

var PunchMiss = 4;
var BarragePunchMiss = 5;
var KickMiss = 5;
var SpinKickMiss = 6;

//

function levelupfunction(){

    while(Xp >= XpNeed){
            level = level + 1;
            maxhealth = maxhealth + 5;
            Punch = Punch + 1;
            BarragePunch = BarragePunch + 1;
            Kick = Kick + 1;
            SpinKick = SpinKick + 1;

            Xp = Xp - XpNeed;
            XpNeed = XpNeed + Math.round(XpNeed/10);


    }


    enemyupgrader();
}

function playerattackjs(dmg, missmove,staminaneed){
				
    miss = rando(1, 10);
    console.log(miss);
    if(stamina >= staminaneed){
        
        if(miss >= missmove){
            stamina = stamina - staminaneed;
            enemyhealth = enemyhealth - dmg;
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
    
    if(stamina >= 100){
        stamina = 100;
    }
    

    
    WinLose(); 
    //<!-- Funzione di quando il nemico arriva sotto lo 0 di vita -->
    
    UpdateStats();
    
}
//-----------------------------------------------------


