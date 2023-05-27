function calculateBMI() {
    var waga = document.getElementById('weight').value;
    var wzrost = document.getElementById('height').value;
    var BMI_raw = ((waga / (wzrost * wzrost)) * 10000);
    var BMI = Math.round(BMI_raw * 10) / 10;

    var result = "Twoja waga to: " + waga + " kg.\n" + "Twój wzrost to: " + wzrost + " cm.\n" + "Twoje BMI wynosi: " + BMI;
    console.log(result);

    if (BMI < 16){
        result += "<br><h3>Anoreksja<h3>";
        console.log("Anoreksja");
    } else if (BMI > 16 && BMI <= 16.9){
        result += "<br>Wychudzenie.";
        console.log("Wychudzenie.");
    } else if (BMI > 17 && BMI <= 18.5){
        result += "<br>Niedowaga";
        console.log("Niedowaga");
    } else if (BMI > 18.5 && BMI <= 24.9){
        result += "<br>Waga prawidłowa";
        console.log("Waga prawidłowa");
    } else if (BMI > 25.0 && BMI <= 29.9){
        result += "<br>Nadwaga";
        console.log("Nadwaga");
    } else if (BMI > 30 && BMI <= 34.9){
        result += "<br>Otyłość I stopnia";
        console.log("Otyłość I stopnia");
    } else if (BMI > 35.0 && BMI <= 39.9){
        result += "<br>Otyłość II stopnia";
        console.log("Otyłość II stopnia");
    } else if (BMI >= 40) {
        result += "<br>Otyłość III stopnia";
        console.log("Otyłość III stopnia");
    }

    document.getElementById('demo').innerHTML = result;
}
