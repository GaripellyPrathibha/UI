function areAnagrams(str1, str2) {
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();

    if (str1.length !== str2.length) {
        return false;
    }
    const charArr1 = str1.split('').sort();
    const charArr2 = str2.split('').sort();
    return charArr1.join('') === charArr2.join('');
}
const result = areAnagrams("Listen", "Silent");
console.log(result);