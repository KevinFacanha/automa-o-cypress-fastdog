import HomePage from "../../POM/homePage";

describe('Navegação', () => {
  const homePage = new HomePage();  

  it('Navegação', () => {
    cy.visit('https://www.fastdognaturalpet.com.br/');
    homePage.botaoConfira();
    homePage.botaoCachorroPequeno();
    homePage.botaoLogoFastDog();
    homePage.botaoCachorroMedio();
    homePage.botaoBuscarProduto();
    homePage.botaoLogoFastDog();
    homePage.botaoCachorroGrande();
    homePage.BuscarProduto();
    homePage.botaoLogoFastDog();
    homePage.botaoInstagram();
  });
});