for (let i = 4; i >= 0; i--) {
    let output = '';
    for (let j = 0; j < i; j++) {
        output += '+';
    }
    for (let k = 0; k < 4 - i; k++) {
        output += '-';
    }
    console.log(output);
}