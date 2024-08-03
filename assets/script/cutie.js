window.addEventListener(`load`, () => {
   // log stuff to the console
   const cutie = `hey cutie~`;
   console.info(cutie);
   

   // on the "do not click ,," button click..
   const button = document.getElementById(`cutie`);

   if (button)
      button.onclick = (() => {
         button.className += ` disabled`;
         button.style = `background-color: #d6a4db;pointer-events: none;--border-colour: #fe83c6;`;
         button.parentElement.style = `--border-colour: #fe83c6;`
         const img = document.querySelector(`#cutie img`);
         img.src = `./assets/emoji/pulexart/happ.png`;
         img.alt = `smiling fox`;
         img.title = `:happ:`;
         document.querySelector(`#cutie strong`).outerHTML = `<em><b>you're cute now !</b></em> ✨`;
         button.removeAttribute(`href`);
      });
});