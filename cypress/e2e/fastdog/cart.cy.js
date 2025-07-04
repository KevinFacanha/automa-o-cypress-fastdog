import CartPage from "../../POM/cartPage";

describe('Carrinho', () => {
  const cartPage = new CartPage();  

  it('Navegação', () => {
    cy.visit('https://www.fastdognaturalpet.com.br/');
    cartPage.botaoAdicionarProduto();
    cartPage.botaoCarrinho();
    cartPage.digiteCupomInvalido();
    cartPage.aplicarCupom();
    cartPage.campoCEP();
    cartPage.botaoFinalizarWPP();
    cartPage.digiteCupomValido();
    cartPage.aplicarCupom();
    cartPage.botaoFinalizarWPP();
  });
});