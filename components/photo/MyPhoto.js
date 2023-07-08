class MyPhoto extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.innerHTML = `
      <style>
        .program-section-right figure img {
          width: 44rem;
          border-radius: 2rem;
        }

        .program-section-right figure {
          margin-bottom: 0;
        }
        
        @media(max-width: 1097px) {
        
          .program-section-right figure img {
            width: 37rem;
          }
        
          .program-section-right figure {
            margin: 1rem 0;
          }
        }
      </style>
      
      <section class="program-section-right">
        <figure>
          <img src="./images/icon-web.png" alt="Minha foto">
        </figure>
      </section>
    `
  }
}

customElements.define('my-photo', MyPhoto)