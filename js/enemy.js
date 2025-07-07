//enemy
var enemylevel = 1;
var enemyhealth = 100;
var enemyStamina = 100;
var enemymaxhealth = 100;

var enemyPunch = 15;
var enemyBarragePunch = 21;
var enemyKick = 25;
var enemySpinKick = 35;
//

function enemyupgrader(){

    while(level > enemylevel + 5){

        enemylevel = enemylevel + 1;
        enemymaxhealth = enemymaxhealth + 5;

        enemyPunch = enemyPunch + 1;
        enemyBarragePunch = enemyBarragePunch + 1;
        enemyKick = enemyKick + 2;
        enemySpinKick = enemySpinKick + 2;

    }
    

}

function enemycombact(){
				
			
				
    miss = rando(1, 10);

    console.log(miss);
        
    var enemyattack = rando(1, 4);
    
    if(enemyattack == 1){
            
        if(enemyStamina >= 15){
        
            if(miss >= 4){
                
                enemyStamina = enemyStamina - 15;
                health = health - enemyPunch;
                document.getElementById('enemyAttack').innerHTML = "Hit";
            }
            else{
                enemyStamina = enemyStamina - 15;
                
                document.getElementById('enemyAttack').innerHTML = "Miss";
                //<!-- hai mancato -->
            }
        
        }else{	
            document.getElementById('enemyAttack').innerHTML = "Stamina";
            //<!-- non hai stamina -- >
        }
        
    }
    
    
    if(enemyattack == 2){
            
        if(enemyStamina >= 20){
        
            if(miss >= 5){
                
                enemyStamina = enemyStamina - 20;
                health = health - enemyBarragePunch;
                document.getElementById('enemyAttack').innerHTML = "Hit";
            }
            else{
                enemyStamina = enemyStamina - 20;
                
                document.getElementById('enemyAttack').innerHTML = "Miss";
                //<!-- hai mancato -->
            }
        
        }else{	
            document.getElementById('enemyAttack').innerHTML = "Stamina";
            //<!-- non hai stamina -- >
        }
        
    }
    
    if(enemyattack == 3){
            
        if(enemyStamina >= 25){
        
            if(miss >= 5){
                
                enemyStamina = enemyStamina - 25;
                health = health - enemyKick;
                document.getElementById('enemyAttack').innerHTML = "hit";
            }
            else{
                enemyStamina = enemyStamina - 25;
                document.getElementById('enemyAttack').innerHTML = "Miss";
                //<!-- hai mancato -->
            }
        
        }else{	
            document.getElementById('enemyAttack').innerHTML = "Stamina";
            //<!-- non hai stamina -- >
        }
        
    }
    
    if(enemyattack == 4){
            
        if(enemyStamina >= 35){
        
            if(miss >= 6){
                
                enemyStamina = enemyStamina - 35;
                health = health - enemySpinKick;
                document.getElementById('enemyAttack').innerHTML = "Hit";
            }
            else{
                enemyStamina = enemyStamina - 35;
                document.getElementById('enemyAttack').innerHTML = "Miss";
                //<!-- hai mancato -->
            }
        
        }else{	
            document.getElementById('enemyAttack').innerHTML = "Stamina";
            //<!-- non hai stamina -- >
        }
        
    }
    
    
    
    
    enemyStamina = enemyStamina + 5;
    
    if(enemyStamina >= 100){
        enemyStamina = 100;
    }
    
    
    
}