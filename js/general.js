
			
function pagestart(){

    levelupfunction();
    enemyupgrader();
    resetstats();
    
   
    
    document.getElementById("punch").disabled = true;
    document.getElementById("barrage").disabled = true;
    document.getElementById("kick").disabled = true;
    document.getElementById("spinkick").disabled = true;

    document.getElementById("punchace").disabled = true;
    document.getElementById("barrageace").disabled = true;
    document.getElementById("kickace").disabled = true;
    document.getElementById("spinkickace").disabled = true;
    
    document.getElementById("realoadbutton").disabled = true;
    document.getElementById("revivebutton").disabled = true;


} 


function  resetstats(){
    
    enemyhealth = enemymaxhealth;
    enemyStamina = 100;
    health = maxhealth;
    stamina = 100;
    
}


function UpdateStats(){

    document.getElementById('level').innerHTML = level;
    document.getElementById('Health').innerHTML = health;
    document.getElementById('Stamina').innerHTML = stamina;
    document.getElementById('xp').innerHTML = Xp;
    document.getElementById('xpneed').innerHTML = XpNeed;
    
    
    document.getElementById('enemylevel').innerHTML = enemylevel;
    document.getElementById('enemyhealth').innerHTML = enemyhealth;
    document.getElementById('enemystamina').innerHTML = enemyStamina;



}

function WinLose(){
    
    
    
    if(enemyhealth <= 0){
        
        enemyhealth = 0;
        

        xpget = Math.round(rando(XpNeed/5, XpNeed/3));
        document.getElementById('rewardlog').style.opacity='1';
        document.getElementById('reward').innerHTML = xpget;
        Xp = Xp + xpget;
        

       

        levelupfunction();



        document.getElementById("punch").disabled = true;
        document.getElementById("barrage").disabled = true;
        document.getElementById("kick").disabled = true;
        document.getElementById("spinkick").disabled = true;
        document.getElementById("fightbutton").disabled = true;
        document.getElementById("accept").disabled = false;
        document.getElementById("accept").style.opacity = "1" ;


        
    }
    else{
        enemycombact();
    }
    
    if(health <= 0){
        
       

        death();
        
    }
    
    
    
}

function aaccept(){
    
    document.getElementById('rewardlog').style.opacity='0';
    document.getElementById('accept').style.opacity='0';
    document.getElementById('Enemy').style.opacity='0';
    document.getElementById('enemyStats').style.opacity='0';
    document.getElementById('nomeenemy').style.opacity='0';


    document.getElementById("accept").disabled = true;
    document.getElementById("fightbutton").disabled = false;
    document.getElementById("fightasso").disabled = false;
    resetstats();
    UpdateStats();
    
}

function fight(){

    //<!-- fai una funzione per le mosse e altro -->

    fightsoundjs.play();



    document.getElementById('Player').style.left='20%';
    document.getElementById('Enemy').style.opacity='1';
    document.getElementById('Stats').style.opacity='1';
    document.getElementById('enemyStats').style.opacity='1';
    document.getElementById('punch').style.opacity='1';
    document.getElementById('barrage').style.opacity='1';
    document.getElementById('kick').style.opacity='1';
    document.getElementById('spinkick').style.opacity='1';
    document.getElementById('movelog').style.opacity='1';
    document.getElementById('divdeath').style.opacity='0';
    document.getElementById('xprichiesta').style.opacity='1';
    
    
    
    document.getElementById('nomeenemy').style.opacity='1';

    document.getElementById('nomeenemy').innerHTML = "Enemy";

    document.getElementById('Enemy').src = "img/enemy.png";
    document.getElementById('Player').src = "img/player.png";

    document.getElementById('lore').style.opacity='0';
    document.getElementById('lore').style.zIndex = -1;
    document.getElementById('lore').style.width = "0%";
    document.getElementById('lore').style.heaight = "0%";
    document.getElementById('lore').style.left = "0%";
    document.getElementById('lore').style.top = "0%";

    document.getElementById("realoadbutton").disabled = true;
    document.getElementById("revivebutton").disabled = true;

    document.getElementById("fightbutton").disabled = true;
    document.getElementById("fightasso").disabled = true;

    document.getElementById("punch").disabled = false;
    document.getElementById("barrage").disabled = false;
    document.getElementById("kick").disabled = false;
    document.getElementById("spinkick").disabled = false;
  

    
    document.getElementById("punch").style.zIndex = 5;
    document.getElementById("barrage").style.zIndex = 5;
    document.getElementById("kick").style.zIndex = 5;
    document.getElementById("spinkick").style.zIndex = 5;

    
    document.getElementById("punchace").disabled = true;
    document.getElementById("barrageace").disabled = true;
    document.getElementById("kickace").disabled = true;
    document.getElementById("spinkickace").disabled = true;

    document.getElementById("punchace").style.zIndex = -1;
    document.getElementById("barrageace").style.zIndex = -1;
    document.getElementById("kickace").style.zIndex = -1;
    document.getElementById("spinkickace").style.zIndex = -1;
    //<!--   -->
    
    UpdateStats();
    
    
}





function death(){
    health = 0;
    document.getElementById("fightbutton").disabled = true;
    document.getElementById("fightasso").disabled = true;

    document.getElementById("punch").disabled = true;
    document.getElementById("barrage").disabled = true;
    document.getElementById("kick").disabled = true;
    document.getElementById("spinkick").disabled = true;
    document.getElementById("punchace").disabled = true;
    document.getElementById("barrageace").disabled = true;
    document.getElementById("kickace").disabled = true;
    document.getElementById("spinkickace").disabled = true;
    document.getElementById("accept").disabled = true;


    document.getElementById("divdeath").style.opacity='1';
    document.getElementById("realoadbutton").disabled = false;
    if(acecombactcheck != 1){
    document.getElementById("revivebutton").disabled = false;
    }


}



function revive(){
    resetstats();
    fight();


}