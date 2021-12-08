class Footer {
    constructor(){
        this.filtoTurbulencia = document.getElementById("filtro-turbulencia");
    }

    efeitoOnda (){
        TweenMax.to(this.filtoTurbulencia, 20, {
            attr: {
                baseFrequency: 0.03,
            },
            repeat: -1, 
            yoyo: true
        })

    }
}

export {
    Footer
}