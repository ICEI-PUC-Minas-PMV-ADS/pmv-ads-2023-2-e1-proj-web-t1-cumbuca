
# Metodologia

Esta seção descreve a organização da equipe para a execução das tarefas do projeto e as ferramentas utilizadas para a manutenção dos códigos e demais artefatos.


## Gerenciamento de Projeto
O Scrum é uma abordagem ágil de gerenciamento de projetos que é usada principalmente no desenvolvimento de software, mas também pode ser aplicada em outros contextos. Ele se baseia em equipes auto-organizadas que trabalham em ciclos curtos e iterativos chamados de "sprints", geralmente com duração de 2 a 4 semanas. Aqui estão os principais componentes do Scrum contextualizados com o nosso projeto:

*Product Backlog para o Software de Criação de Receitas:* Comece com um Product Backlog que liste todas as funcionalidades e recursos que o software precisa ter para permitir aos usuários criar e compartilhar suas receitas.

*Sprint Planning para o Desenvolvimento do Software:* Em cada Sprint Planning, a equipe seleciona um conjunto de funcionalidades a serem desenvolvidas durante o próximo sprint. Isso pode incluir a criação da interface de usuário, a implementação de recursos de edição de receitas, a capacidade de adicionar ingredientes, etc...

*Daily Standup para Desenvolvimento:* A equipe de desenvolvimento realiza reuniões diárias para discutir o progresso na criação do software. Eles compartilham atualizações sobre o desenvolvimento de funcionalidades, identificam obstáculos e colaboram para garantir que o software esteja sendo construído conforme o planejado.

*Sprint de Desenvolvimento do Software:* Durante o sprint, a equipe trabalha no desenvolvimento das funcionalidades selecionadas, garantindo que o software permita aos usuários criar e editar receitas de forma eficaz.

*Sprint Review do Software:* Após o sprint, a equipe realiza uma revisão para demonstrar as funcionalidades desenvolvidas aos stakeholders (os usuários, neste caso) e coletar feedback sobre a usabilidade e a funcionalidade do software.

*Sprint Retrospective do Software:* A equipe analisa o que funcionou bem no desenvolvimento do software e o que pode ser melhorado. Eles podem fazer ajustes no processo para os próximos sprints.

*Incremento do Software:* Ao final de cada sprint, o software terá um incremento de funcionalidades que foram desenvolvidas durante o sprint, permitindo aos usuários criar e compartilhar suas receitas.

Esta abordagem Scrum permitirá que a equipe de desenvolvimento entregue um software de criação de receitas de forma iterativa e adaptável, respondendo às necessidades dos usuários à medida que o projeto avança.



### Divisão de Papéis

A equipe utiliza o Scrum como base para definição do processo de desenvolvimento.
[Adicione informações abaixo sobre a divisão de papéis entre os membros da equipe.]
- Scrum Master: Nome de um membro da equipe, principal responsável pela gestão do projeto.
- Product Owner: Nome de um membro da equipe, representante dos interesses de todos os envolvidos (Stakeholders), define as funcionalidades do produto e prioriza os itens de Product Backlog.
- Equipe de Desenvolvimento: Nomes de todos os membros da equipe, pois todos os membros deverão implementar uma tela/funcionalidade.
- Equipe de Design: Nomes dos membros da equipe que trabalharão com design.

> **Links Úteis**:
> - [11 Passos Essenciais para Implantar Scrum no seu 
> Projeto](https://mindmaster.com.br/scrum-11-passos/)
> - [Scrum em 9 minutos](https://www.youtube.com/watch?v=XfvQWnRgxG0)

### Processo

[Adicione informações sobre detalhes da implementação do Scrum seguido pela equipe. A equipe poderá fazer uso de ferramentas on-line (GitHub Project ou Trello) para acompanhar o andamento do projeto, a execução das tarefas e o status de desenvolvimento da solução. O quadro Kanban deverá apresentar a estrutura abaixo. Inserir despois das informações uma imagem do Kanban do projeto.]
- Backlog: recebe as tarefas a serem trabalhadas e representa o Product Backlog. Todas as atividades identificadas no decorrer do projeto também devem ser incorporadas a esta lista. 
- To Do: Esta lista representa o Sprint Backlog. Este é o Sprint atual que estamos trabalhando. 
- Doing: Quando uma tarefa tiver sido iniciada, ela é movida para cá. 
- Done: nesta lista são colocadas as tarefas que passaram pelos testes e controle de qualidade e estão prontos para ser entregues ao usuário. Não há mais edições ou revisões necessárias, ele está agendado e pronto para a ação.

> **Links Úteis**:
> - [Project management, made simple](https://github.com/features/project-management/)
> - [Sobre quadros de projeto](https://docs.github.com/pt/github/managing-your-work-on-github/about-project-boards)
> - [Como criar Backlogs no Github](https://www.youtube.com/watch?v=RXEy6CFu9Hk)
> - [Tutorial Slack](https://slack.com/intl/en-br/)


### Etiquetas
<p>As tarefas são, ainda, etiquetadas em função da natureza da atividade e seguem o seguinte esquema de cores/categorias:</p>

<ul>
  <li>Bug (Erro no código)</li>
  <li>Desenvolvimento (Development)</li>
  <li>Documentação (Documentation)</li>
  <li>Gerência de Projetos (Project Management)</li>
  <li>Infraestrutura (Infrastructure)</li>
  <li>Testes (Tests)</li>
</ul>

<figure> 
  <img src="https://user-images.githubusercontent.com/100447878/164068979-9eed46e1-9b44-461e-ab88-c2388e6767a1.png"
    <figcaption>Figura 3 - Tela do esquema de cores e categorias</figcaption>
</figure> 
  
### Ferramentas

[Descreva aqui as ferramentas empregadas no projeto e os ambiente de trabalho utilizados pela  equipe para desenvolvê-lo. Abrange a relação de ambientes utilizados, a estrutura para gestão do código fonte, além da definição do processo e ferramenta através dos quais a equipe se organiza (Gestão de Times).]

As ferramentas são de extrema importancia, pois elas tem o objetivo de ajudar as equipes a planejar, projetar, implementar, testar e manter o software, as ferramentas são utilizadas com o intuito de melhora a eficiência, colaboração e qualidade dos processos de desenvolvimento.

Os artefatos do projeto são desenvolvidos a partir de diversas plataformas e a relação dos ambientes com seu respectivo propósito é apresentada na tabela que se segue.

| AMBIENTE                            | PLATAFORMA                         | LINK DE ACESSO                         |
|-------------------------------------|------------------------------------|----------------------------------------|
| Repositório de código fonte         | GitHub                             | http://....                            |
| Documentos do projeto               | GitHub                             | http://....                            |
| Projeto de Interface                | Figma                              | http://....                            |
| Gerenciamento do Projeto            | GitHub Projects                    | http://....                            |
| Hospedagem                          | GitHub Pages                       | http://....                            |


### Estratégia de Organização de Codificação 

Todos os artefatos relacionados a implementação e visualização dos conteúdos do projeto do site deverão ser inseridos na pasta [codigo-fonte](http://https://github.com/ICEI-PUC-Minas-PMV-ADS/WebApplicationProject-Template-v2/tree/main/codigo-fonte). Consulte também a nossa sugestão referente a estratégia de organização de codificação a ser adotada pela equipe de desenvolvimento do projeto.
