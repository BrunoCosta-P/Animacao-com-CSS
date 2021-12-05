class Cards{
    constructor(){
        this.posiçaoSectionDicas = document.getElementById('section-dicas');
        this.cardEsq = document.querySelector('.card-esq');
        this.cardDir = document.querySelector('.card-dir');

    }

    scrollCards(){
        window.requestAnimationFrame(this.calculoScroll.bind(this))
    }


    calculoScroll () {
        const posicao = this.posiçaoSectionDicas.getBoundingClientRect() ['y'];
        //console.log(posicao);

        if(posicao >= 111 )  {
            this.cardEsq.style.transform = `translate(${(-posicao + 111 ) /10}%)`;
            this.cardDir.style.transform = `translate(${(posicao - 111) /10 }%)`;
        }


    } 

}

export {Cards}