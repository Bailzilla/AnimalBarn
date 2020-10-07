//function will take the activity and pet chosen by the user from the dropdown menus. 
//From there it assesses the selections and responds with the chosen pet's reaction to the activity.

function goAdv() {
    let loc = document.getElementById('activity').value;
    let who = document.getElementById('who').value;
    document.getElementById("responseText").innerHTML = pets[who].resp[loc]
    document.getElementById("response").src = pets[who].react[loc] 
}