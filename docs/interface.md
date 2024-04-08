
# Projeto de Interface

Visão geral da interação do usuário pelas telas do sistema e protótipo interativo das telas com as funcionalidades que fazem parte do sistema (wireframes).

 A seguir, apresentamos as principais interfaces do sistema, e como foram elaboradas para atender aos requisitos funcionais, não funcionais, e história dos usuários.
 
1. **Login**:
   - Essa tela tem o objetivo de ser simples e intuitiva, onde o objetivo é apenas que o usuário forneça suas credenciais para acessar o sistema, caso já tenha o cadastro. Caso não tenha, que o faça.
  
2. **Tela Inicial (HOME)**:
   - Nessa tela, será dividida em três blocos principais, o bloco fixado a esquerda, onde serão exibidas as infirmações do usuário logado, e abaixo teremos os botões para navegação em alguns dos menus do sistema (o menu "controle da fazenda" e o menu "economia") assim como a tela de configurações.
   - no centro, teremos o "FEED de notícias", onde será apresentado as atualizações dos outros usuários, em forma de postagens, que podem ser tanto somente com textos sobre algum assunto específico, ou fotos, links para notícias ou sites úteis.
   - A direita, ficará o menu para abertura da tela de "CLIMA", que, mesmo fechado apresentará as informações de condição climática e temperatura atual na região, e terá um botão para abertura dessa tela com maiores informações.
  
3.  **tela CLIMA**:
   - Nessa tela, quando aberta, apresentará as funcionalidade referentes ao clima.
   - na parte superior, será apresentado a condição climática e temperatura atuais.
   - no centro, teremos a previsão do tempo para os próximos sete dias.
   - abaixo, estarão os gráficos de chuvas e temperaturas para os próximos dias, ou semanas.

4. **controle da fazenda**:
   - Essa tela, quando aberta em um primeiro momento, irá apresentar um panorama geral do que está sendo controlado pelo sistema na fazenda. A princípio serão quatro controles distintos - Balanço, Equipamentos, Funcionários, Produção.
   - em balanço, estarão as informações de entrada/saída de capital, e o resultado financeiro do último mês.
   - Em Equipamentos, estarão as informações de última manutenção dos equipamentos, gasto com combustível, quantidade.
   - funcionários deve apresentar a quantidade de funcionários, total de salários.
   - em produção, estará a quantidade total de hectares plantados, gasto com insumos no ultimo mes, e como está o estoque desses produtos.
   - clicando em qualquer uma dessas opções, a tela se expandirá, com as informações mais completas de cada um dos aspectos.
  
4-1. **Abrindo Balanço, por exemplo**:
   - Ao abrir uma das telas no menu anterior, será expandido, apresentando informações mais completos daquela parte do sistema, aqui, vamos esmiuçar a tela "balanço".
   - onde expandido, trará as informações que foram apresentadas anteriormente, mas também outras informações complementares relacionadas ao balanço e controle de gastos, entradas e saídas, em um período determinado, que pode ser escolhido conforme necessidade.
  
5. **Economia**:
   - A tela economia, será como um feed de notícias, específicas para economia,que não será gerado por outros usuarios mas o proprios sistema vai consumir dados de APIs especificos da area do agronegocio, e lançar essas noticias que sejam relevantes para aquele usuário.


O sistema será desenvolvido visando atender todos os requisitos funcionais, onde o usuário consiga utilzar todas as ferramentas de maneira intuitiva, e de forma completa, a fim de fornecer um ambiente em que o agricultor consiga ter um controle sobre o seu negócio, visão ampla do clima, e ainda interagir com seus pares para obter melhores resultados, e participar de processos de forma interativa. O requisitos não funcionais terão serão contemplados, principalmente os de segurança e privacidade, já que o sistema vai armazenar informações sensíveis do negócio, mas também usabilidade, confiabilidade, disponibilidade, etc.   

## User Flow

![userflow](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe1-t6-si_t6_app_web_1osem2024_gp05/blob/main/docs/img/userflow.png)



Acima, está o projeto do userflow do sistema, visando navegação fácil e intuitiva pelo usuário, onde o menu principal estará sempre disponível a esquerda da tela.


## Wireframes

Os Wireframes foram definidos da seguinte forma:

### TELA PRINCIPAL

   Nessa tela, teremos ao centro, de forma mais enfática, o feed de notícias, que será apresentado e atualizado por ordem cronológica, sendo os mais recentes ao topo.
   O menu principal a esquerda, com as opções de navegação e informações do usuário, e informações climática, a direita, com opção para expandir e ver mais detalhes sobre o clima. Será possível clicar sobre o nome dos usuários no feed, para verificar cada perfil, e informações desse usuário, tal como localização, tipo de negócio desenvolvido, e alguns resultados, que serão apresentados conforme escolha desse usuário.

![feed](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe1-t6-si_t6_app_web_1osem2024_gp05/blob/main/docs/img/feed.png)


### TELA CLIMA

   Aqui na tela clima, estará o informativo completo sobre o clima naquela região, no momento da vizualização, assim como previsão para os próximos dias, e o histórico das chuvas e temperaturas.

![clima](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe1-t6-si_t6_app_web_1osem2024_gp05/blob/main/docs/img/TELA%20CLIMA.png)


### CONTROLE DA FAZENDA

  Essa tela será onde o usuário terá a visão resumida das características do seu negócio, tanto financeiras, como quantidade de funcionários, colheita, manutenção de equipamentos, etc. Aqui será o coração do sistema, e deverá ser alimentado pelo próprio usuário de forma frequente, para ter sempre os dados atualizados.
  Onde cada tela pode ser expandida para obter maiores informações, mais completas, e em períodos definidos daquele aspecto.
  Essas informações podem ser compartilhadas ou não com outros usuários, conforme definição e preferência do usuário.

![controle fazenda](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe1-t6-si_t6_app_web_1osem2024_gp05/blob/main/docs/img/CONTROLE%20DA%20FAZENDA.png)

### ECONOMIA

  Essa tela, será um espécie de feed de notícias, com informações e notícias relacionadas com o interesse do usuário, que deve mostrar informações pertinentes e relevantes para o seu trabalho.

  ![economia](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe1-t6-si_t6_app_web_1osem2024_gp05/blob/main/docs/img/ECONOMIA.png)

