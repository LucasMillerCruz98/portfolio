class MyPhoto extends HTMLElement {
  constructor() {
    super()
    
    this.build()
  }

  build() {
    const shadow = this.attachShadow({ mode: 'open' })

    shadow.appendChild(this.styles())

    const img = this.createImg()
    const figure = this.createFigure()
    const sectionPhoto = this.createContainer()
    
    shadow.appendChild(sectionPhoto)
    shadow.appendChild(figure)
    sectionPhoto.appendChild(figure)
    figure.appendChild(img)

    return shadow
  }

  createContainer() {
    const section = document.createElement('section')
    section.classList.add('program-section-right')

    return section
  }

  createImg() {
    const img = document.createElement('img')
    img.setAttribute('src', './images/icon-web.png')
    img.setAttribute('alt', 'Minha foto')
    
    return img
  }

  createFigure() {
    const figure = document.createElement('figure')

    return figure
  }
  
  styles() {
    const style = document.createElement('style')
    style.textContent = `
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
    `

    return style
  }
}

customElements.define('my-photo', MyPhoto)