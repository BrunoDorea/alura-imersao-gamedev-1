class Personagem extends Animacao {
    constructor(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite) {
        super(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite)
        
        this.yInicial = height - this.altura
        this.y = this.yInicial

        this.gravidade = 3
        this.velocidadeDoPulo = 0
    }
    pula() {
        this.velocidadeDoPulo = -30
    }

    aplicaGravidade() {
        this.y = this.y + this.velocidadeDoPulo
        this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade

        if(this.y > this.yInicial) {
            this.y = this.yInicial
        }
    }

    estaColidindo() {
        const precisao = 0.7
        const colisao = collideRectRect(
            this.x,
            this.y,
            this.largura * precisao,
            this.altura * precisao,
            inimigo.y,
            inimigo.x,
            inimigo.largura * precisao,
            inimigo.altura * precisao
            )

            return colisao
    }

}