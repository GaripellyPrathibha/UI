function findVowels(input)
{
   input = input.toLowerCase();
        const length = input.length;
        let count = 0;
        for (let i = 0; i < length; i++) {
            var alpha = input.charAt(i);
            if (alpha == 'a' || alpha == 'e' || alpha == 'i' || alpha == 'o' || alpha == 'u') {
                count++;
            }
        }
        return count;

}
const str="prathibha"
count=findVowels(str)
console.log(count)