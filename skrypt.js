function calculateBMI() {
    var waga = document.getElementById('weight').value;
    var wzrost = document.getElementById('height').value;
    var BMI_raw = ((waga / (wzrost * wzrost)) * 10000);
    var BMI = Math.round(BMI_raw * 10) / 10;

    var result = "Twoja waga to: " + waga + " kg.<br>" + "Twój wzrost to: " + wzrost + " cm.<br>" + "Twoje BMI wynosi: " + BMI;

    if (BMI < 16){
        result += "<br><h3>Anoreksja<h3>";
    } else if (BMI > 16 && BMI <= 16.9){
        result += "<br>Wychudzenie.";
    } else if (BMI > 17 && BMI <= 18.5){
        result += "<br>Niedowaga";
    } else if (BMI > 18.5 && BMI <= 24.9){
        result += "<br>Waga prawidłowa";
    } else if (BMI > 25.0 && BMI <= 29.9){
        result += "<br>Nadwaga";
    } else if (BMI > 30 && BMI <= 34.9){
        result += "<br>Otyłość I stopnia";
    } else if (BMI > 35.0 && BMI <= 39.9){
        result += "<br>Otyłość II stopnia";
    } else if (BMI >= 40) {
        result += "<br>Otyłość III stopnia";
    }

    document.getElementById('demo').innerHTML = result;
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
