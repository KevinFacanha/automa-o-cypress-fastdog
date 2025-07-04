import HeaderPage from "../../POM/headerPage";

describe('Header', () => {
  const headerPage = new HeaderPage();  

  it('Navegação', () => {
    cy.visit('https://www.fastdognaturalpet.com.br/');
    headerPage.botaoCatalogo();
    headerPage.baixarCatalogos();
    headerPage.botaoHome();
    headerPage.botaoProdutos();
    headerPage.acessarTodosSubmenusProdutos();
    headerPage.botaoSobre();
    headerPage.botaoDarkMode();
    headerPage.botaoAmei();
  });
});