const month = new Date().getMonth();
let magicalbunny31 = `magicalbunny31`;


const matchesNumber = (number, ...numbers) => numbers.includes(number);


// seasonal emojis
if (matchesNumber(month, 11, 0, 1)) // winter
   magicalbunny31 += ` ❄`;
if (matchesNumber(month, 2, 3, 4)) // spring
   magicalbunny31 += ` 🍃`;
if (matchesNumber(month, 5, 6, 7)) // summer
   magicalbunny31 += ` ☀`;
if (matchesNumber(month, 8, 9, 10)) // autumn
   magicalbunny31 += ` 🍂`;


// month emojis
switch (month) {
   case 0: // january
      magicalbunny31 += `🎆`;
      break;

   case 1: // february
      magicalbunny31 += `🌸`;
      break;

   case 2: // march
      magicalbunny31 += `🍰`;
      break;

   case 3: // april
      magicalbunny31 += `🌧`;
      break;

   case 4: // may
      magicalbunny31 += `🌺`;
      break;

   case 5: // june
      magicalbunny31 += `🌻`;
      break;

   case 6: // july
      magicalbunny31 += `🏖`;
      break;

   case 7: // august
      magicalbunny31 += `🌇`;
      break;

   case 8: // september
      magicalbunny31 += `🌃`;
      break;

   case 9: // october
      magicalbunny31 += `🎃`;
      break;

   case 10: // november
      magicalbunny31 += `☕`;
      break;

   case 11: // december
      magicalbunny31 += `🎄`;
      break;
};


document.title = magicalbunny31;