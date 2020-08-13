//function will take the activity and pet chosen by the user from the dropdown menus. 
//From there it assesses the selections and responds with the chosen pet's reaction to the activity.

function goAdv() {

    let loc = document.getElementById('activity').value;
    let pet = document.getElementById('pet').value;
        
        if (loc == 1 && pet == 1){
             document.getElementById("responseText").innerHTML = "Great choice! Sweet Dee loves going for a ride, just be sure to crack the window so she can feel the breeze";
             document.getElementById("response").src = "pics/DeeRide.jpg";
        } else if (loc == 1 && pet == 2){
            document.getElementById("responseText").innerHTML =  ("As an ambulance siren goes by, Dennis begins to howl from the depth of his chest. Your ear drums are ratteld, but you ultimately walk away okay.")
            document.getElementById("response").src = "pics/Dennis.jpg";
        } else if (loc == 1 && pet == 3){
            document.getElementById("responseText").innerHTML = ("Mac is cautiously excited. She paces back and forth from window to window in the backseat, absorbing everything that comes her way.")
            document.getElementById("response").src = "pics/Mac.jpg";
        } else if (loc == 1 && pet == 4){
            document.getElementById("responseText").innerHTML = ("Artie is NOT happy with you. At a red light she cralwls into your lap and goes to the bathroom :/")  
            document.getElementById("response").src = "pics/ArtieCar.jpg";
        } else if (loc == 2 && pet == 1){
            document.getElementById("responseText").innerHTML = ("Dee howls uncontrollably as you strap on her lead. Away you go, hope you brought the right shoes!")  
            document.getElementById("response").src = "pics/DeeWalk.jpg";
        } else if (loc == 2 && pet == 2){
            document.getElementById("responseText").innerHTML = ("Dennis smiles and stays by your side throughout the walk :)")  
            document.getElementById("response").src = "pics/side-walk.jpg";
        } else if (loc == 2 && pet == 3){
            document.getElementById("responseText").innerHTML = ("Mac begins barking as soon as she sees you with her leash. Along the walk she zig-zags across the sidewalk, smelling everything in her path.")  
            document.getElementById("response").src = "pics/MacWalk.jpg";
        } else if (loc == 2 && pet == 4){
            document.getElementById("responseText").innerHTML = ("Artie may not do collars, but she is a willing follower in a walk around the block. She stalks 10 yards behind you, lurking from porch to porch.")  
            document.getElementById("response").src = "pics/Artie.jpg";
        } else if (loc == 3 && pet == 1){
            document.getElementById("responseText").innerHTML = ("Dee is scared as she hears the bath water. She tries to run, but you are able to wrangle her; eventually she calms down and enjoys the warm water.")  
            document.getElementById("response").src = "pics/DeeBath.jpg";
        } else if (loc == 3 && pet == 2){
            document.getElementById("responseText").innerHTML = ("Dennis is hesitant at first, but he calms down once he feels the water. Good boy :)")  
            document.getElementById("response").src = "pics/DenBath.jpg";
        } else if (loc == 3 && pet == 3){
            document.getElementById("responseText").innerHTML = ("Mac enjoys the feel of the water and is a trooper through the process.")  
            document.getElementById("response").src = "pics/MacBath.jpg";
        } else if (loc == 3 && pet == 4){
            document.getElementById("responseText").innerHTML = ("Artie cleans herself, and is therefore above being bathed by a mere human. She uses her elusiveness to disapear.")  
            document.getElementById("response").src = "pics/Artie2.jpg";
        } 
}