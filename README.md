# Observability
  
### O que é Observabilidade?
  
Observabilidade é a capacidade de entender o comportamento interno de um sistema com base em suas saídas. Em outras palavras, é a capacidade de entender o que está acontecendo dentro de um sistema com base em suas saídas.

### Por que é importante?

A observabilidade é importante porque permite que as equipes de operações e desenvolvimento entendam o comportamento interno de um sistema com base em suas saídas. Isso é importante porque permite que as equipes de operações e desenvolvimento entendam o comportamento interno de um sistema com base em suas saídas.

### Como podemos observar um sistema?

Podemos observar um sistema de várias maneiras, incluindo:

- Monitoramento
- Rastreamento
- Logs
- Métricas

### O que é monitoramento?

Monitoramento é a prática de observar um sistema para garantir que ele esteja funcionando corretamente. Isso pode incluir a verificação de métricas, logs e rastreamentos para garantir que o sistema esteja funcionando corretamente.

### O que é rastreamento(tracing)?

Rastreamento é a prática de observar o comportamento de um sistema ao longo do tempo. Isso pode incluir a observação de métricas, logs e rastreamentos para entender como o sistema está se comportando.

### O que são logs?

Logs são registros de eventos que ocorrem em um sistema. Eles podem ser usados para entender o comportamento de um sistema ao longo do tempo.

### O que são métricas?

Métricas são medidas quantitativas que podem ser usadas para entender o comportamento de um sistema. Elas podem incluir coisas como o tempo de resposta de um sistema, a taxa de erros e a utilização de recursos.

## Ferramentas de Observabilidade

### Prometheus

Prometheus é um sistema de monitoramento e alerta de código aberto. Ele coleta métricas de alvos configurados por meio de um modelo de coleta e armazenamento de séries temporais com um poderoso mecanismo de consulta.

**Documentações Importantes**

- [Instrumentação](https://prometheus.io/docs/instrumenting/clientlibs/)
- [Queries](https://prometheus.io/docs/prometheus/latest/querying/basics/)
- [Operadores](https://prometheus.io/docs/prometheus/latest/querying/operators/)
- [Funções](https://prometheus.io/docs/prometheus/latest/querying/functions/)
- [Grafana Exemplos](https://play.grafana.org/d/000000012/grafana-play-home?orgId=1)  
- [Grafana Dashboards](https://grafana.com/grafana/dashboards/)
- [Loading Test Grafana k6](https://grafana.com/docs/k6/latest/get-started/installation/)

### Tipos de métricas
- Contadores
- Histogramas
- Sumários
- Temporais

#### Contadores
Contadores são métricas que representam um valor que pode aumentar ou diminuir ao longo do tempo. Eles são usados para medir coisas como o número de solicitações recebidas por um servidor ou o número de erros que ocorrem em um sistema.

#### Histogramas
Histogramas são métricas que representam a distribuição de valores em um conjunto de dados. Eles são usados para medir coisas como o tempo de resposta de um servidor ou a utilização de recursos de um sistema.

#### Sumários
Sumários são métricas que representam a distribuição de valores em um conjunto de dados. Eles são usados para medir coisas como o tempo de resposta de um servidor ou a utilização de recursos de um sistema.

#### Temporais
Métricas temporais são métricas que representam um valor que muda ao longo do tempo. Elas são usadas para medir coisas como o tempo de resposta de um servidor ou a utilização de recursos de um sistema.

 
### Tipos de alvos(Targets)
- Servidores
- Bancos de dados
- Aplicações
- Serviços

#### Servidores
Servidores são alvos que podem ser monitorados para garantir que estejam funcionando corretamente. Isso pode incluir a verificação de métricas, logs e rastreamentos para garantir que o servidor esteja funcionando corretamente.

#### Bancos de dados
Bancos de dados são alvos que podem ser monitorados para garantir que estejam funcionando corretamente. Isso pode incluir a verificação de métricas, logs e rastreamentos para garantir que o banco de dados esteja funcionando corretamente.

#### Aplicações
Aplicações são alvos que podem ser monitorados para garantir que estejam funcionando corretamente. Isso pode incluir a verificação de métricas, logs e rastreamentos para garantir que a aplicação esteja funcionando corretamente.

#### Serviços
Serviços são alvos que podem ser monitorados para garantir que estejam funcionando corretamente. Isso pode incluir a verificação de métricas, logs e rastreamentos para garantir que o serviço esteja funcionando corretamente.

### Tipos de alertas

- Alertas de limiar
- Alertas de anomalia
- Alertas de tendência
- Alertas de correlação


#### Alertas de limiar
Alertas de limiar são alertas que são acionados quando uma métrica ultrapassa um determinado limite. Eles são usados para alertar as equipes de operações e desenvolvimento sobre problemas em um sistema.

#### Alertas de anomalia
Alertas de anomalia são alertas que são acionados quando uma métrica se desvia significativamente de seu comportamento normal. Eles são usados para alertar as equipes de operações e desenvolvimento sobre problemas em um sistema.

#### Alertas de tendência
Alertas de tendência são alertas que são acionados quando uma métrica mostra uma tendência significativa ao longo do tempo. Eles são usados para alertar as equipes de operações e desenvolvimento sobre problemas em um sistema.

#### Alertas de correlação
Alertas de correlação são alertas que são acionados quando duas ou mais métricas mostram um comportamento correlacionado. Eles são usados para alertar as equipes de operações e desenvolvimento sobre problemas em um sistema.

### Tipos de consultas
- Consultas de agregação
- Consultas de filtro
- Consultas de projeção
- Consultas de transformação

#### Consultas de agregação
Consultas de agregação são consultas que são usadas para calcular estatísticas sobre um conjunto de dados. Elas são usadas para calcular coisas como a média, a mediana e o desvio padrão de um conjunto de dados.

#### Consultas de filtro
Consultas de filtro são consultas que são usadas para filtrar um conjunto de dados com base em um critério específico. Elas são usadas para filtrar coisas como solicitações de um determinado tipo ou erros de um determinado tipo.

#### Consultas de projeção
Consultas de projeção são consultas que são usadas para selecionar um subconjunto de colunas de um conjunto de dados. Elas são usadas para selecionar coisas como o tempo de resposta de um servidor ou a utilização de recursos de um sistema.

#### Consultas de transformação
Consultas de transformação são consultas que são usadas para transformar um conjunto de dados em um formato diferente. Elas são usadas para transformar coisas como o tempo de resposta de um servidor ou a utilização de recursos de um sistema.

### Tipos de visualizações

- Gráficos de linha
- Gráficos de barras
- Gráficos de pizza
- Gráficos de dispersão

#### Gráficos de linha
Gráficos de linha são gráficos que são usados para mostrar a mudança de uma métrica ao longo do tempo. Eles são usados para mostrar coisas como o tempo de resposta de um servidor ou a utilização de recursos de um sistema.

#### Gráficos de barras
Gráficos de barras são gráficos que são usados para mostrar a distribuição de uma métrica em um conjunto de dados. Eles são usados para mostrar coisas como o número de solicitações recebidas por um servidor ou o número de erros que ocorrem em um sistema.

#### Gráficos de pizza
Gráficos de pizza são gráficos que são usados para mostrar a distribuição de uma métrica em um conjunto de dados. Eles são usados para mostrar coisas como o número de solicitações recebidas por um servidor ou o número de erros que ocorrem em um sistema.

#### Gráficos de dispersão
Gráficos de dispersão são gráficos que são usados para mostrar a relação entre duas métricas em um conjunto de dados. Eles são usados para mostrar coisas como a relação entre o tempo de resposta de um servidor e a utilização de recursos de um sistema.

### Tipos de métricas
- Métricas de contagem
- Métricas de tempo
- Métricas de porcentagem
- Métricas de proporção


#### Métricas de contagem
Métricas de contagem são métricas que representam a contagem de algo. Elas são usadas para medir coisas como o número de solicitações recebidas por um servidor ou o número de erros que ocorrem em um sistema.

#### Métricas de tempo
Métricas de tempo são métricas que representam a duração de algo. Elas são usadas para medir coisas como o tempo de resposta de um servidor ou o tempo que um sistema leva para processar uma solicitação.

#### Métricas de porcentagem
Métricas de porcentagem são métricas que representam a proporção de algo em relação a um todo. Elas são usadas para medir coisas como a utilização de recursos de um sistema ou a taxa de erro de um sistema.

#### Métricas de proporção
Métricas de proporção são métricas que representam a relação entre duas métricas. Elas são usadas para medir coisas como a relação entre o tempo de resposta de um servidor e a utilização de recursos de um sistema.

### Tipos de logs
- Logs de aplicativos
- Logs de infraestrutura
- Logs de segurança
- Logs de auditoria