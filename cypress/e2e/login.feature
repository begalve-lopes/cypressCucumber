Feature: Login

  Scenario: Teste de login positivo
    Given Acessar a pagina de login
    When Preencher o campo email "student" e password "Password123"
    And clico no botão Entrar
    Then devo visualizar a página inicial com a mensagem "Logged In Successfully"
    And clicar no botão Sair
    Then visualisa a pagina e o titulo "Test login"

  Scenario: Teste de nome de usuário negativo 
    Given Acessar a pagina de login
    When Preencher o campo email "incorrectUser" e password "Password123"
    And clico no botão Entrar
    Then devo visualizar a mensagem de erro "Your username is invalid!"

  Scenario: Teste de nome de password negativo 
    Given Acessar a pagina de login
    When Preencher o campo email "student" e password "passwordIcorrect"
    And clico no botão Entrar
    Then devo visualizar a mensagem de erro "Your password is invalid!"