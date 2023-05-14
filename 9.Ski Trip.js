function skiTrip(input) {

    let dayForRest = Number(input[0]);
    let typeOfRoom = input[1];
    let rating = input[2];

    let price = 0;
    let nightForRest = dayForRest - 1;

    switch (typeOfRoom) {
        case "room for one person":
            price = nightForRest * 18 ;
            break;
        case "apartment":
            price = nightForRest * 25;
            if (dayForRest < 10){
                price *= 0.7 ;
            } else if (dayForRest >= 10 && dayForRest <= 15){
                price *= 0.65;
            } else {
                price *= 0.50;
            }
            break;
        case "president apartment":
            price = nightForRest * 35;
            if (dayForRest < 10){
                price *= 0.9 ;
            } else if (dayForRest >= 10 && dayForRest <= 15){
                price *= 0.85;
            } else {
                price *= 0.80;
            }
            break;
    }

    if (rating === "positive"){
        price *= 1.25 ;
    } else {
        price *= 0.9 ;
    }

    console.log(price.toFixed(2));
}

skiTrip(["14", "apartment", "positive"])

skiTrip(["30", "president apartment", "negative"])

skiTrip(["12", "room for one person", "positive"])
