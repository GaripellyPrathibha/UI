function findAge(age) {
    if (age < 13) {
        console.log("kid");
    } else if (age >= 13 && age <= 19) {
        console.log("teen");
    } else {
        console.log("adult");
    }
}

findAge(14);