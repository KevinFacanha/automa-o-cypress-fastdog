class HeaderPage {
  Catalogo = ':nth-child(3) > .text-green-800';
  home = '.space-x-6 > :nth-child(1) > .text-green-800';
  produtos = '#products-button';
  sobre = ':nth-child(4) > .text-green-800';

  botaoCatalogo() {
    cy.get(this.Catalogo).click();
  }

  baixarCatalogos() {
    const seletores = [
      ':nth-child(1) > .p-5 > .inline-flex',
      ':nth-child(2) > .p-5 > .inline-flex',
      ':nth-child(3) > .p-5 > .inline-flex',
    ];

    seletores.forEach((seletor) => {
      cy.get(seletor).click();
    });
  }

  botaoHome() {
    cy.get(this.home).click();
  }

  botaoProdutos() {
    cy.get(this.produtos).click();
  }

  acessarTodosSubmenusProdutos() {
    const links = [
      'a[href="/treats"]',
      'a[href="/chewables"]',
      'a[href="/chewers"]'
    ];

    links.forEach((selector) => {
      cy.get(selector).click();
      cy.wait(1000);
      cy.go('back'); 
      this.botaoProdutos(); 
    });


  }

      botaoSobre() {
        cy.get(this.sobre).click();
    }

    darkmode = ':nth-child(5) > .p-2'

    botaoDarkMode() {
        cy.get(this.darkmode).click();
    }

    favoritos = ':nth-child(6) > .relative'

    botaoAmei() {
        cy.get(this.favoritos).click();
    }
}

export default HeaderPage;