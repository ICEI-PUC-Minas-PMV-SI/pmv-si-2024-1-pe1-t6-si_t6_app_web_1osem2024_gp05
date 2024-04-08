# Especificações do Projeto

A falta de tecnologia no agronegócio limita a capacidade dos agricultores de melhorar sua produtividade, eficiência e sustentabilidade, dificulta a capacidade de competir em um mercado cada vez mais globalizado e tecnologicamente avançado. O objetivo deste projeto é desenvolver um aplicativo móvel para facilitar e melhorar a gestão de fazendas e atividades agrícolas em áreas rurais. O aplicativo visa fornecer aos agricultores uma ferramenta intuitiva e abrangente para, gerenciar recursos, acessar informações relevantes sobre cultivo e mercado, além de promover a comunicação e a colaboração entre os agricultores.


## Personas
1°Persona

Marcelo é dono de uma plantação agrícola de uma empresa de pequeno porte que se dedica ao cultivo de soja em uma região consolidada Ele precisa lidar com uma grande quantidade de dados e informações relacionadas à gestão da produção agrícola, incluindo dados sobre o balanço de entradas e saídas de insumos, e combustível gastos. Por isso ele busca uma solução tecnológica que possa ajudá-lo a otimizar o planejamento e a gestão da produção agrícola da empresa, proporcionando maior eficiência e controle sobre as operações.

2° Persona

Viviane é gerente de produção em uma empresa de médio porte que se dedica ao cultivo de café em uma região montanhosa com clima favorável para a plantação ela possui uma sólida formação em administração rural e agricultura, adquirida ao longo de décadas de experiência no setor cafeicultor. Viviane é responsável por coordenar todas as operações relacionadas ao cultivo de café na empresa, como: o planejamento de insumos, a gestão da colheita e o controle de qualidade dos grãos. No entanto Viviane enfrenta o desafio de e equilibrar a oferta e demanda de insumos agrícolas, garantindo que a empresa tenha os recursos necessários para manter a produtividade da plantação de café.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Empresario   | Registrar balanço de entrade e saidas            |Cumprimento Fiscal e legal              |
|Administrador       | Alterar permissões                 | Permitir que possam administrar contas |

Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.


## Requisitos
As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade | 
|------|-----------------------------------------|----| 
|RF-001| A aplicação deve permitir que o usuário publique no seu feed | ALTA |  
|RF-002| A aplicação deve permitir a vizualização do feed de notícias atualizado   | ALTA | 
|RF-003| A aplicação deve permitir a inserção dos dados financeiros da fazenda, como entradas e saídas de capital  | ALTA |
|RF-004| A aplicação deve permitir inserção dos dados de insumos, resultados de colheita, manutenção dos veículos | ALTA |
|RF-005| A aplicação deve fornecer informações climáticas atualizadas para a região do usuário | MEDIA |
|RF-006| A aplicação deve fornecer informações economicas atualizadas para o nicho explorado pelo usuário | MEDIA |
|RF-007| A aplicação deve emitir retórios informativos de resultados do controle da fazenda | MEDIA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| A aplicação deve ser responsiva | MÉDIA | 
|RNF-002| A aplicação deve processar requisições do usuário em no máximo 3s |  BAIXA | 
|RNF-003| A aplicação deve estar sempre disponível para fornecer informações atualizadas | ALTA |
|RNF-004| A aplicação deve ser segura e confiável, para que os usuários confiem em colocar informções sensíveis | ALTA |
|RNF-005| O sistema deve atender os requisitos de compatibilidade com o maior número de dispositivos, para que todos possam ter acesso | MEDIA |
|RNF-006| O sistema deve ser robusto e escalável, para que todos os usuários consigam utilizar simultaneamente | ALTA |
|RNF-007| A aplicação deve apresentar uma interface amigavel, intuitiva, e de fácil aprendizado | MEDIA |


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |
|03| Por ser um sistema Online, deve ser utilizado sempre com acesso a internet|
|04| Como utiliza localização, o sistema precisa de acesso ao GPS do dispositivo|
