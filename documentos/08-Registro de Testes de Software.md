# Registro de Testes de Software

Relatório com as evidências dos testes de software realizados na aplicação pela equipe, baseado no plano de testes pré-definido.

Os resultados dos testes funcionais realizados na aplicação são descritos a seguir.

|Caso de Teste    | CT-1 - Verificar a funcionalidade de cadastrar uma conta. |
|:---|:---|
| Resultados obtidos | 1- Ao preencher corretamente todos os campos necessários,  o cadastro é realizado com sucesso e é exibido um alerta com esta afirmação;<br><img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t1-cumbuca/blob/main/documentos/img/Teste%201%20-%20Cadastro%20realizado.png?raw=true" alt="Cadastro realizado"><br> 2- Ao não preencher um campo, é exibido um alerta e não é permitido fazer o cadastro;<br><img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t1-cumbuca/blob/main/documentos/img/Teste%201%20-%20Alerta%20preencha%20este%20campo.png?raw=true" alt="Campo não prenchido"><br> 3- Inserindo um e-mail já cadastrado, é exibido um alerta e não é permitido fazer novo cadastro com o mesmo e-mail;<br><img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t1-cumbuca/blob/main/documentos/img/Teste%201%20-%20Alerta%20Email%20j%C3%A1%20cadastrado.png?raw=true" alt="Email já cadastrado"><br> 4- Como um campo "senha" foi preenchido incorretamente, é exibido um alerta informando que as senhas não coincidem e não é permitido criar o cadastro.<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t1-cumbuca/blob/main/documentos/img/Teste%201%20-%20Alerta%20Senhas%20nao%20coicidem.png?raw=true" alt="Senhas não coicidem"> |
| Responsável pela execução do caso de Teste | Kiane Ramalho |

|Caso de Teste    | CT-2 - Verificar a funcionalidade de fazer o login em uma conta. |
|:---|:---|
| Resultados obtidos | 1- Os campos necessários para acesso foram preenchidos corretamente e, ao clicar em "Entrar", o usuário foi redirecionado para a tela inicial do portal;<br><img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t1-cumbuca/blob/main/documentos/img/Teste%20RF%2002_Autentica%C3%A7%C3%A3o%201%20%20-%20Logar%20no%20site.png?raw=true" alt="Logar"><br><img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t1-cumbuca/blob/main/documentos/img/Teste%20RF%2002_Autentica%C3%A7%C3%A3o%202%20%20-%20Usu%C3%A1rio%20Logado.png?raw=true" alt="Usuário Logado"><br> 2- O usuário preenchendo uma senha incorreta, é exibido o alterta e não é feito o login;<br><img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t1-cumbuca/blob/main/documentos/img/Teste%20RF%2002_Autentica%C3%A7%C3%A3o%201%20%20-%20Erro%20Senha.png?raw=true" alt="Senha incorreta"><br> 3- Quando o preenchimento do e-mail é feito de forma incorreta, é exibido um alerta e não é feito o login;<br><img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t1-cumbuca/blob/main/documentos/img/Teste%20RF%2002_Autentica%C3%A7%C3%A3o%201%20%20-%20Erro%20Email.png?raw=true" alt="Erro e-mail">|
| Responsável pela execução do caso de Teste | Kiane Ramalho |

|Caso de Teste    | CT-3 - Verificar a funcionalidade de restringir a busca com base em ingrediente. |
|:---|:---|
| Resultados obtidos | ----- |
| Responsável pela execução do caso de Teste | Bernardo Sotelo |

|Caso de Teste    | CT-4 - Verificar a funcionalidade de favoritar e salvar receitas. |
|:---|:---|
| Resultados obtidos | ----- |
| Responsável pela execução do caso de Teste | Adrian Sodré |

|Caso de Teste    | CT-5 - Verificar a funcionalidade de comentar nas receitas. |
|:---|:---|
| Resultados obtidos | 1- Ao escrever um comentário e clicar no ícone para enviar, o comentário é postado abaixo;<br><img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t1-cumbuca/blob/main/documentos/img/Teste%205%20Comentar%20Receita.png?raw=true" alt="Comentar receita"><br><img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t1-cumbuca/blob/main/documentos/img/Teste%205%20Coment%C3%A1rio%20postado.png?raw=true" alt="Comentário postado">|
| Responsável pela execução do caso de Teste | Kiane Ramalho |

|Caso de Teste    | CT-1 - Teste para curtir post |
|:---|:---|
| Resultados obtidos | Após minuciosos testes na seção de curtidas do projeto do site 'Cumbuca', notou-se que a funcionalidade de curtida é simbolizada por uma sugestiva 'coxinha de frango', que remete diretamente ao contexto de receitas. Durante os testes, foi confirmado que os usuários podem interagir positivamente ('curtir') com as receitas postadas no site. No entanto, identificou-se a ausência da opção correspondente para 'descurtir' o conteúdo, o que pode limitar a experiência do usuário. Essa lacuna sugere a necessidade de implementar essa função para garantir uma interação mais completa e satisfatória  |
| Responsável pela execução do caso de Teste | Isaque Gonçalves Ferreira |

[Inserir aqui as evidências de teste que podem ser apresentadas por print de telas ou por .gif de execução de teste]
