#language: pt
Funcionalidade: Validar Produtos

Cenario: Incluir Produtos no carrinho
  Dado que eu acesse ao site automation practice
  Quando inserir o primeiro Produto ao carrinho de compras
  E adicionar o segundo produto ao carrinho de compras
  E avancar ate a tela de pagamento
  Entao os itens devem ser exibidos corretamente no carrinho na tela de pagamento