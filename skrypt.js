var waga = prompt("Podaj swoją wagę: ");
console.log(waga);
var wzrost = prompt("Podaj swój wzrost: ");
console.log(wzrost);

var BMI_raw = ((waga / (wzrost * wzrost)) * 10000);
var BMI = Math.round(BMI_raw * 10) / 10;
    
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

document.write(podajWage());
document.write(podajWzrost());
document.write(twojeBmi()); 

if (BMI < 16){
    document.write("<br><h3>Anoreksja<h3>");
    console.log()
}
else if (BMI > 16 && BMI <= 16.9){
    document.write("<br>Wychudzenie.");
}
else if (BMI > 17 && BMI <= 18.5){
    document.write("<br>Niedowaga");
}
else if (BMI > 18.5 && BMI <= 24.9){
    document.write("<br>Waga prawidłowa");
}
else if (BMI > 25.0 && BMI <= 29.9){
    document.write("<br>Nadwaga");
}
else if (BMI > 30 && BMI <= 34.9){
    document.write("<br>Otyłość I stopnia");
}
else if (BMI > 35.0 && BMI <= 39.9){
    document.write("<br>Otyłość II stopnia");
}
else if (BMI >= 40) {
    document.write("<br>Otyłość III stopnia");
}

      /*
     * <16,0 anoreksja
     * 16,0 – 16,9 wychudzenie
     * 17,0 - 18,5 niedowaga
     * 18,5–24,9 waga prawidlowa
     * 25,0–29,9 nadwaga
     * 30,0–34,9 otylosc I stopnia
     * 35,0–39,9 otylosc II stopnia
     * ≥40 otylosc III stopnia
     */