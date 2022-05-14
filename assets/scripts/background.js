/* shuffle background images order */


window.onload = () => {
   // might be biased but it's good enough man
   const shuffle = array => array.sort(() => .5 - Math.random());


   // changing the number of backgrounds?
   // gotta change its css too!
   // here's the super awesome stackoverflow post for it below~
   // https://stackoverflow.com/questions/43607856/css-crossfade-animation
   const backgrounds = shuffle([
      `./assets/backgrounds/background-1.png`,
      `./assets/backgrounds/background-2.png`,
      `./assets/backgrounds/background-3.png`,
      `./assets/backgrounds/background-4.png`,
      `./assets/backgrounds/background-5.png`,
      `./assets/backgrounds/background-6.png`
   ]);


   for (let i = 0; i < backgrounds.length; i ++) {
      document.getElementById(`backgrounds`).innerHTML += `<img src="${backgrounds[i]}">`;
   }
};