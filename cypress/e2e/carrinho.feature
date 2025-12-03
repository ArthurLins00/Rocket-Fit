# language: pt
Funcionalidade: Gestão do Carrinho de Compras
  Para garantir que posso comprar meus suplementos
  Como um cliente fitness
  Eu quero adicionar e visualizar itens no carrinho

  Cenário: Adicionar Whey Protein ao carrinho com sucesso
    Dado que eu estou na página inicial do Rocket Fit
    Quando eu clico no produto "Whey Protein 1kg"
    E eu clico no botão "Adicionar ao carrinho"
    Então o contador do carrinho no menu deve mostrar "1" item
    E eu devo ver "Whey Protein 1kg" listado na página do carrinho

  Cenário: Verificar carrinho vazio
    Dado que eu estou na página inicial do Rocket Fit
    Quando eu clico no ícone do carrinho no menu superior
    Então eu devo ver a mensagem "Seu carrinho está vazio."