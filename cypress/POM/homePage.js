class HomePage{

    confiraBotao = '.mb-10 > .bg-red-600';
    
    botaoConfira(){
        cy.get(this.confiraBotao).click();
    }

    cachorroPequeno = '[href="/porte-pequeno"] > .flex > .bg-red-600';

    botaoCachorroPequeno(){
        cy.get(this.cachorroPequeno).click();
    }

    logoFastDog = 'a.flex > .text-2xl';

    botaoLogoFastDog(){
        cy.get(this.logoFastDog).click();
    }

    cachorroMedio = '[href="/porte-medio"] > .flex > .bg-red-600';

    botaoCachorroMedio(){
        cy.get(this.cachorroMedio).click();
    }

    buscarProduto = '.relative > .w-full';

    botaoBuscarProduto(){
        cy.get(this.buscarProduto).click().type('Aorta Bovina');
    }

    cachorroGrande = '[href="/porte-grande"] > .flex > .bg-red-600';

    botaoCachorroGrande(){
        cy.get(this.cachorroGrande).click();
    }

    buscarProduto = '.relative > .w-full';

    BuscarProduto(){
        cy.get(this.buscarProduto).click().type('Orelha Bovina');
    }

    instagram = ':nth-child(3) > .flex > .text-sm';
    
    botaoInstagram(){
        cy.get(this.instagram).click();
    }
}


export default HomePage;