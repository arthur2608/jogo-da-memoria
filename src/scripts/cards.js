    class CardManager{

        flippedCards = new Set();
        urlFactory;

        constructo(factory){
            this.urlFactory = factory;
        }
gen(heroNumber){
    let template = document.getElementById("cardtemplate");
    let clone = template.content.cloneNode(true);
    
    clone.childre[0].addEventListener('click', event => this.onClick(event));

    return clone;
}      

   onClick(event) {
    this.flip(event.target);
   }

   flip(cardNode) {
    cardNode.childre[0].classList.add('selected');
    this.flippedCards.add(cardNode);
   }

    unflip(cardNode) {
        cardNode.childre[0].classList.remove.add('matched');
    }

    disable(cardNode) {
        
    }
    }
