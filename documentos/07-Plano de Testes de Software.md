# Plano de Testes de Software
CT-1
|Caso de Teste   | CT-1 - Verificar a funcionalidade de cadastrar uma conta. |
|:---|:---|
| Requisitos Associados | RF-01	A aplicação deve permitir ao usuário cadastrar uma conta. |
| Objetivo do Teste | Verificar se ao preencher os campos necessários para cadastro e clicar no botão "Cadastrar", é criada uma conta para o usuário. |
| Passos | 1 - Na tela de acesso clicar no botão "Cadastrar";<br> 2 - Preencher os campos "Email", "Nome", "Senha" e "Repetir senha";<br> 3 - Clicar no botão "Cadastrar"|
| Critérios de êxito | Ao preencher os campos necessários para cadastro e clicar em "Cadastrar", o usuário deve ser redirecionado para a tela de acesso.|
| Responsável pela elaboração do caso de Teste | Kiane Ramalho |
#### CT-2
|Caso de Teste    | CT-2 - Verificar a funcionalidade de fazer o login em uma conta. |
|:---|:---|
| Requisitos Associados | RF-02	A aplicação deve permitir ao usuário fazer o login da sua conta. |
| Objetivo do Teste | Verificar se ao preencher os campos necessários para login e clicar no botão "Entrar", o usuário terá êxito no acesso. |
| Passos | 1 - Na tela de acesso preencher os campos "Email" e "Senha";<br> 2 - Clicar no botão "Entrar";<br> |
| Critérios de êxito | Ao preencher os campos necessários para acesso e clicar em "Entrar", o usuário deve ser redirecionado para a tela inicial do portal.|
| Responsável pela elaboração do caso de Teste | Kiane Ramalho |

|Caso de Teste    | *CT-3 - Verificar a funcionalidade de restringir a busca com base em ingrediente. |
|:---|:---|
| Requisitos Associados |RF-03	A aplicação deve permitir ao usuário restringir a busca com base em ingrediente, tempo de preparo, técnica utilizada e nível de dificuldade. |
| Objetivo do Teste | Verificar se a aplicação permite aos usuários realizar buscas restritas de receitas conforme critérios estabelecidos, garantindo uma experiência eficiente de busca. |
| Passos | 1 - Na tela de acesso preencher os campos "Email" e "Senha";<br> 2 - Clicar no botão "Entrar";<br> |
| Critérios de êxito | Ao preencher os campos necessários para acesso e clicar em "Entrar", o usuário deve ser redirecionado para a tela inicial do portal.|
| Responsável pela elaboração do caso de Teste | Bernardo Soutelo |

|Caso de Teste    | *CT-4 - Verificar a funcionalidade de favoritar e salvar receitas. |
|:---|:---|
| Requisitos Associados | RF-04	A aplicação deve permitir ao usuário favoritar e salvar as receitas. |
| Objetivo do Teste | Assegurar que os usuários possam salvar e favoritar receitas de forma adequada, proporcionando uma gestão eficaz das preferências individuais. |
| Passos | 1 - Na tela de acesso preencher os campos "Email" e "Senha";<br> 2 - Clicar no botão "Entrar";<br> |
| Critérios de êxito | Ao preencher os campos necessários para acesso e clicar em "Entrar", o usuário deve ser redirecionado para a tela inicial do portal.|
| Responsável pela elaboração do caso de Teste | Adrian Sodré |

|Caso de Teste    | CT-5 - Verificar a funcionalidade de comentar nas receitas. |
|:---|:---|
| Requisitos Associados | RF-05	A aplicação deve permitir ao usuário comentar nas receitas. |
| Objetivo do Teste | Verificar se ao preencher o campo "Comentários" o comentário é publicado. |
| Passos | 1 - Acessar abas com as receitas publicadas onde contém o campo para comentários;<br> 2 - Clicar no ícone para enviar comentário após escrever o comentário|
| Critérios de êxito | Ao preencher o campo "Comentários" e clicar no ícone para enviar, o comentário deve ser exibido abaixo.  |
| Responsável pela elaboração do caso de Teste | Kiane Ramalho |

|Caso de Teste    | *CT-6 - Verificar a funcionalidade de postar uma própria receita. |
|:---|:---|
| Requisitos Associados | RF-06	A aplicação deve permitir ao usuário postar sua própra receita. |
| Objetivo do Teste | Garantir que os usuários possam contribuir com suas próprias receitas, testando a funcionalidade de postagem na aplicação. |
| Passos | 1- Acesse a tela do perfil do usuário.;<br> 2 - Clique em "Publicar Nova Receita;<br> 3 - Preencha todos os campos obrigatórios; <br> 4 - Clique em "Publicar";<br>  |
| Critérios de êxito | O teste RF-06 é bem-sucedido se os usuários conseguirem postar novas receitas, preenchendo corretamente todos os campos obrigatórios, e a aplicação impedir postagens com campos não preenchidos, exibindo mensagens de erro apropriadas, além de bloquear postagens sem a inclusão de uma imagem, comunicando claramente a necessidade dessa adição. |
| Responsável pela elaboração do caso de Teste | Bernardo Soutelo |
#### CT-7
|Caso de Teste    | CT-7 - Verificar a apresentação de uma foto da receita. |
|:---|:---|
| Requisitos Associados | RF-07	A aplicação deve apresentar uma foto da receita. |
| Objetivo do Teste | Assegurar que a aplicação exiba corretamente as imagens associadas às receitas, contribuindo para uma experiência visual atraente e informativa. |
| Passos |  1- Acesse a tela do perfil do usuário.;<br> 2 - Clique em "Publicar Nova Receita;<br> 3 - Preencha todos os campos obrigatórios; <br> 4 - Clique em "Publicar";<br> |
| Critérios de êxito | O teste RF-06 é bem-sucedido se os usuários conseguirem postar novas receitas, preenchendo corretamente todos os campos obrigatórios, e a aplicação impedir postagens com campos não preenchidos, exibindo mensagens de erro apropriadas, além de bloquear postagens sem a inclusão de uma imagem, comunicando claramente a necessidade dessa adição. |
| Responsável pela elaboração do caso de Teste | Marcelly Maia|
#### CT-8
|Caso de Teste    | CT-8 - Verificar o suporte para navegadores. |
|:---|:---|
| Requisitos Associados | RF-08	A aplicação deve ser compativel com outros tipos de navegadores independente da plataforma. |
| Objetivo do Teste | Seu objetivo é garantir que a aplicação funcione corretamente em diferentes navegadores, assegurando que todos os recursos e funcionalidades sejam exibidos de forma consistente para proporcionar uma experiência de usuário satisfatória, independentemente do navegador utilizado pelo usuário. |
| Passos |  1- Escolha o dispositivo de sua preferencia (computador ou celular).; <br>2- Acesse o navegador de sua escolha.; <br>3- Pesquise o nome do site 'Cumbuca'. |
| Critérios de êxito | O teste RNF-01 é bem-sucedido se os usuários conseguirem acessar a aplicação web nos principais navegadores em qualquer máquina e/ou dispositivo móvel. |
| Responsável pela elaboração do caso de Teste | Isaque Gonçalves|
#### CT-9
|Caso de Teste    | CT-9 - Verificar a funcionalidade do botão de curtida. |
|:---|:---|
| Requisitos Associados | RF-08	A aplicação deve permitir ao usuário curtir outras postagens e/ou a propria.|
| Objetivo do Teste |Garantir que os usuários possam contribuir avaliando a postagem de acordo com a sua necessidade. |
| Passos |  1- Vá para a barra de pesquisa; <br>2- Acesse a receita desejada; <br>3- Clique na receita caso tenha achado útil.|
| Critérios de êxito | Ao curtir a postagem, alem do usuário que curtiu outros usuários poderão vizualizar fazendo com a receita de certo usuário tenha mais engajamento no ambiente da aplicação. |
| Responsável pela elaboração do caso de Teste | Isaque Gonçalves|
 
