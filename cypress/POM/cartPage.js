class CartPage {
    seleçãoProduto = ':nth-child(1) > .dark\\:bg-gray-700 > .p-4 > .w-full'

    botaoAdicionarProduto() {
        cy.get(this.seleçãoProduto).click();
    }

    carrinho = ':nth-child(7) > .relative';

    botaoCarrinho() {
        cy.get(this.carrinho).click();
    }

    campoCupom = '.flex-1 > .relative > .w-full';

    digiteCupomInvalido() {
        cy.get(this.campoCupom).type('FASTDOG');
    }

    botaoAplicar = '.space-x-2 > .bg-green-600';

    aplicarCupom() {
        cy.get(this.botaoAplicar).click();
    }

    digiteCEP = '.space-y-4 > :nth-child(2) > .w-full';

    campoCEP() {
        cy.get(this.digiteCEP).clear().type('05139-060');
    }

    botaoWPP = '.pt-0 > .block';

    botaoFinalizarWPP() {
        cy.get(this.botaoWPP).click();
    }

    campoCupom = '.flex-1 > .relative > .w-full';

    digiteCupomValido() {
        cy.get(this.campoCupom).clear().type('FASTDOG10');
    }
}

export default CartPage