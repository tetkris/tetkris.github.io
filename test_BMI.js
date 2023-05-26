function testBMI() {
    for (var i = 0; i < 100; i++) {
        var waga = Math.random() * (600 - 10) + 10;  // losowa waga od 10 kg do 600 kg
        var wzrost = Math.random() * (220 - 80) + 80;  // losowy wzrost od 80 cm do 220 cm

        var BMI_raw = ((waga / (wzrost * wzrost)) * 10000);
        var BMI = Math.round(BMI_raw * 10) / 10;

        console.log("Test #" + i);
        console.log("Waga: " + waga);
        console.log("Wzrost: " + wzrost);
        console.log("BMI: " + BMI);
        
        if (BMI < 16){
            console.log("Anoreksja");
        }
        else if (BMI > 16 && BMI <= 16.9){
            console.log("Wychudzenie");
        }
        else if (BMI > 17 && BMI <= 18.5){
            console.log("Niedowaga");
        }
        else if (BMI > 18.5 && BMI <= 24.9){
            console.log("Waga prawidłowa");
        }
        else if (BMI > 25.0 && BMI <= 29.9){
            console.log("Nadwaga");
        }
        else if (BMI > 30 && BMI <= 34.9){
            console.log("Otyłość I stopnia");
        }
        else if (BMI > 35.0 && BMI <= 39.9){
            console.log("Otyłość II stopnia");
        }
        else if (BMI >= 40) {
            console.log("Otyłość III stopnia");
        }
    }
}

testBMI();
