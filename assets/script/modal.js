window.addEventListener(`load`, async () => {
   // insert the modal at the end of the html's body code
   const modalCode = `
      <div id="modal-background">
         <div id="modal">

            <div class="large-corner-border">
               <div class="large-border box">

                  <span id="modal-content">
                     
                  </span>

                  <div class="grid">
                     <div class="corner-border" style="--border-colour: #f60000;">
                        <a class="border large-button" id="close-modal" style="--border-colour: #f60000;" draggable="false">
                           <img class="emoji" src="/assets/emoji/mutant_standard/bomb.webp" alt="bomb" title=":bomb:" draggable="false"/>
                           <div>
                              <strong>close modal</strong>
                           </div>
                        </a>
                     </div>
                  </div>

               </div>
            </div>
   
         </div>
      </div>
   `;

   document.body.innerHTML += modalCode;


   // api requests for the modal content
   const file = window.location.pathname.split(`/`).pop() || `index`;
   const filename = file.endsWith(`.html`)
      ? file
      : `${file}.html`;

   const [ pageCommitSha, pageCommitMessage, pageLastUpdated ] = await (async () => {
      const response = await fetch(`https://api.github.com/repos/magicalbunny31/magicalbunny31.github.io/commits?path=${filename}` , {
         headers: {
            "User-Agent": `nuzzles.dev (https://github.com/magicalbunny31/magicalbunny31.github.io)`
         }
      });

      if (!response.ok)
         return [ `idk`, `idk`, `idk` ];

      const [ data ] = await response.json();
      return [ data?.sha || `idk`, data?.commit.message || `idk`, data?.commit.author.date || `idk` ];
   })();


   // html to load for the modal
   const info = `
      <h2>
         <img class="emoji" src="/assets/emoji/mutant_standard/red_question_mark.webp" alt="red question mark" title=":red_question_mark:" draggable="false"/>
         questions? issues? something you wanna BARK at??
      </h2>
      <ul>
         <li>
            keep all that yapping in the
            <a href="https://github.com/magicalbunny31/magicalbunny31.github.io/issues" target="_blank">issue tracker</a>~
         </li>
      </ul>
      <div class="grid">
         <div class="corner-border" style="--border-colour: #171515;">
            <a class="border large-button" href="https://github.com/magicalbunny31/magicalbunny31.github.io/issues" target="_blank" style="--border-colour: #171515;" draggable="false">
               <img class="emoji" src="/assets/logo/github.png" alt="github logo" title="github" draggable="false"/>
               <div>
                  <strong>issues</strong>
                  <br/>
                  @magicalbunny31/magicalbunny31.github.io
               </div>
            </a>
         </div>
      </div>
      <h2>
         <img class="emoji" src="/assets/emoji/mutant_standard/curled_page.webp" alt="curled page" title=":curled_page:" draggable="false"/>
         site info
      </h2>
      <ul>
         <li>
            <code>version</code> <a href="/" target="_blank">nuzzles.dev</a> v4
         </li>
         <li>
            <code>commit</code> ${pageCommitSha} "${pageCommitMessage}"
         </li>
         <li>
            <code>updated at</code> ${pageLastUpdated}
         </li>
      </ul>
      <h2>
         <img class="emoji" src="/assets/emoji/mutant_standard/bust_in_silhouette.webp" alt="bust in silhouette" title=":bust_in_silhouette:" draggable="false"/>
         whoami
      </h2>
      <ul>
         <li>
            <code>user-agent</code> ${window.navigator.userAgent}
         </li>
      </ul>
   `;

   const attribution = `
      <h2>
         <img class="emoji" src="/assets/emoji/mutant_standard/2_busts_in_silhouette.webp" alt="2 busts in silhouette" title=":2_busts_in_silhouette:" draggable="false"/>
         site contributors
      </h2>
      <ul>
         <li>
            🦊 <a href="https://nuzzles.dev" target="_blank">magicalbunny31</a>
         </li>
      </ul>
      <h2>
         <img class="emoji" src="/assets/emoji/mutant_standard/mutant_standard.webp" alt="mutant standard emoji logo" title=":mutant_standard:" draggable="false"/>
         mutant standard emoji
      </h2>
      <ul>
         <li>
            <code>creator</code> © <a href="https://nocturne.works" target="_blank">Caius Nocturne</a> 2017 - 2024
         </li>
         <li>
            <code>license</code> <a href="https://creativecommons.org/licenses/by-nc-sa/4.0" title="Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International" target="_blank">CC BY-NC-SA 4.0</a>
         </li>
         <li>
            <code>examples</code>
            <img class="emoji" src="/assets/emoji/mutant_standard/fox.webp"          alt="fox"        title=":fox:"          draggable="false"/>
            <img class="emoji" src="/assets/emoji/mutant_standard/bun_paw_wave.webp" alt="waving paw" title=":bun_paw_wave:" draggable="false"/>
            <img class="emoji" src="/assets/emoji/mutant_standard/laptop.webp"       alt="laptop"     title=":laptop:"       draggable="false"/>
         </li>
         <li>
            <code>source</code> <a href="https://mutant.tech" target="_blank">https://mutant.tech</a>
         </li>
      </ul>
      <h2>
         <img class="emoji" src="/assets/emoji/pulexart/pulex.png" alt="pulex logo" title="pulex" draggable="false"/>
         pulexart
      </h2>
      <ul>
         <li>
            <code>creator</code> <a href="https://www.patreon.com/Pulex" target="_blank">Pulex</a>
         </li>
         <li>
            <code>example</code>
            <img class="emoji" src="/assets/emoji/pulexart/happ.png" alt="smiling fox" title=":happ:" draggable="false"/>
         </li>
         <li>
            <code>source</code> <a href="https://www.pulexart.com" target="_blank">https://www.pulexart.com</a>
         </li>
      </ul>
      <h2>
         <img class="emoji" src="/assets/logo/twitter.png" alt="twitter logo" title="twitter" draggable="false"/>
         twemoji
      </h2>
      <ul>
         <li>
            <code>creators</code> © <a href="https://opensource.twitter.dev" target="_blank">Twitter</a> 2014 - 2021, © Jason Sofonia & <a href="https://github.com/jdecked" target="_blank">Justine De Caires</a> 2022 - present
         </li>
         <li>
            <code>licenses</code>
            <a href="https://github.com/jdecked/twemoji/blob/master/LICENSE" title="The MIT License" target="_blank">MIT</a>,
            <a href="https://creativecommons.org/licenses/by-nc-sa/4.0" title="Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International" target="_blank">CC BY-NC-SA 4.0</a>
         </li>
         <li>
            <code>examples</code>
            <img class="emoji" src="/assets/emoji/twemoji/flag_gb.webp"      alt="flag of the United Kingdom" title=":flag_gb:"      draggable="false"/>
            <img class="emoji" src="/assets/emoji/twemoji/flag_ph.webp"      alt="flag of the Philippines"    title=":flag_ph:"      draggable="false"/>
            <img class="emoji" src="/assets/emoji/twemoji/rainbow_flag.webp" alt="rainbow pride flag"         title=":rainbow_flag:" draggable="false"/>
         </li>
         <li>
            <code>source</code> <a href="https://github.com/jdecked/twemoji" target="_blank">https://github.com/jdecked/twemoji</a>
         </li>
      </ul>
   `;


   // when the modal's open button is pressed, open the modal and load the correct content
   const modalBackground = document.getElementById(`modal-background`);
   const modalContent = document.getElementById(`modal-content`);

   const openModalButtons = document.getElementsByClassName(`modal-button`);
   for (const openModalButton of openModalButtons)
      openModalButton.onclick = () => {
         modalBackground.style.display = `block`;

         const content = (() => {
            switch (openModalButton.id) {
               case `info`:        return info;
               case `attribution`: return attribution;
            };
         })();

         modalContent.innerHTML = content;
      };


   // when the modal's close button is pressed, close the modal
   const closeModalButton = document.getElementById(`close-modal`);
   closeModalButton.onclick = () => {
      modalBackground.style.display = `none`;
   };


   // when the user clicks out of the modal, close the modal
   const modal = document.getElementById(`modal`);
   window.onclick = event => {
      if (event.target == modal)
         modalBackground.style.display = `none`;
   };
});