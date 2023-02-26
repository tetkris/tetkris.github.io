var waga = prompt("Podaj swoją wage: ");
    console.log(waga);
var wzrost = prompt("Podaj swój wzrost: ");
    console.log(wzrost);
var number = 201;
var BMI = ((waga / (wzrost * wzrost)) * 10000);
    
    function podajWage(){
        return "Twoja waga to: " + waga + " kg.<br>";
    }
    console.log("Twoja waga to: " + waga + "kg.");
      
    function podajWzrost(){
        return "Twój wzrost to: " + wzrost + " cm.<br>";
    }
    console.log("Twój wzrost to: " + wzrost + " cm.");
    
    function twojeBmi(){
        return "<b>Twoje BMI wynosi: </b>" + BMI;
    }
    console.log("Twoje BMI wynosi: " + BMI);

    if (BMI < 30){
        console.log("Twoja waga jest w normie.");
        
    }
    else {
       console.log("Jestes grubasem."); 
    }
    
    
    document.write(podajWage());
    document.write(podajWzrost());
    document.write(twojeBmi()); 
    if (BMI > 30){
        document.write("<br><h3>Jestes grubasem!!!<h3>");
    }
    else {
        document.write("<br>Twoja waga jest w normie.");
    }