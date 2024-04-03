## Desafio 01

Criar um dashboard de observabilidade com base nas melhores práticas, usando métricas do Prometheus, para monitorar um sistema composto por uma API Rest em Python, um Worker em Node.js, um Frontend em Node.js, um banco de dados PostgreSQL e um Redis pode ser dividido em várias etapas.

### 1. Definição de Objetivos e Requisitos

-   Identificar os principais componentes do sistema a serem monitorados (API, Worker, Frontend, PostgreSQL, Redis).
-   Definir os KPIs e as métricas essenciais para monitorar o desempenho e a saúde do sistema.
-   Especificar os painéis e visualizações necessárias para cada contexto (API, Worker, Frontend, Bancos de Dados, Cache).

### 2. Configuração do Prometheus

-   Configurar o Prometheus para coletar métricas dos componentes do sistema. Isso pode envolver a definição de alvos de coleta, regras de alerta e configuração de retenção de dados.
-   Usar etiquetas (labels) para adicionar metadados às métricas, permitindo uma segmentação eficaz dos dados.

### 3. Desenvolvimento do dashboard Grafana

-   Criar um dashboard principal com base nos quatro sinais dourados da observabilidade: latência, tráfego, erros e saturação.
-   Para cada contexto do sistema (API, Worker, Frontend, Banco de Dados, Redis), criar painéis individuais com métricas específicas e relevantes para aquele componente.
-   Personalizar os painéis com gráficos, tabelas, alertas e outros elementos visuais para representar as métricas de forma clara e informativa.

### 4. Configuração de alertas

-   Definir regras de alerta com base nos limiares definidos para cada métrica.
-   Configurar notificações para alertar a equipe responsável em caso de problemas ou degradação do sistema.
-   Garantir que os alertas sejam claros, acionáveis e escalonáveis.

### 5. Testes e monitoramento contínuo (K6/Seed)

-   Realizar testes para garantir que todas as métricas estejam sendo coletadas corretamente e que os painéis de visualização estejam funcionando conforme o esperado.
-   Implementar monitoramento contínuo para garantir que o dashboard esteja sempre atualizado e refletindo com precisão o estado do sistema.
-   Revisar e iterar sobre o dashboard conforme necessário para incluir novas métricas ou ajustar limiares de alerta com base no feedback e na evolução do sistema.


## KPIs e métricas essenciais:

**KPIs (Key Performance Indicators)** são indicadores-chave que medem o desempenho e o sucesso de um sistema ou processo em alcançar seus objetivos. Para monitorar o desempenho e a saúde do sistema composto por uma API Rest em Python, um Worker em Node.js, um Frontend em Node.js, um banco de dados PostgreSQL e um Redis, podemos considerar os seguintes KPIs e métricas essenciais:

1.  **Latência da API**:
    
    -   Métricas: Tempo médio de resposta das solicitações, tempo máximo de resposta, distribuição de tempo de resposta por intervalo.
    -   KPI: Tempo médio de resposta das solicitações deve ser mantido abaixo de um limite definido.

2.  **Taxa de Erros da API**:
    
    -   Métricas: Número total de erros, distribuição de tipos de erros (por exemplo, erros 4xx, 5xx), taxa de erros por solicitação.
    -   KPI: A taxa de erros por solicitação deve ser mantida abaixo de um limite definido.

3.  **Utilização do Worker e do Frontend**:
    
    -   Métricas: Utilização da CPU, utilização da memória.
    -   KPI: Utilização da CPU e da memória deve ser mantida dentro de limites aceitáveis para evitar sobrecarga.

4.  **Desempenho do Banco de Dados**:
    
    -   Métricas: Tempo de resposta das consultas, número de consultas por segundo, tamanho do cache de consultas.
    -   KPI: Tempo médio de resposta das consultas deve ser mantido abaixo de um limite definido.

5.  **Desempenho do Redis**:
    
    -   Métricas: Taxa de hits e misses no cache, utilização da memória.
    -   KPI: Taxa de hits no cache deve ser mantida alta para garantir uma boa taxa de cache.

## Use  quatro(4) sinais dourado como base

1.  **Latência**: Gráfico de linhas mostrando a latência média da API ao longo do tempo, com alertas configurados para disparar se a latência exceder um limite definido.
    
2.  **Tráfego**: Gráfico de barras exibindo o número de solicitações HTTP recebidas pela API, separadas por código de status (200 OK, 4xx, 5xx), para entender a carga de tráfego e identificar possíveis problemas de roteamento ou sobrecarga.
    
3.  **Erros**: Gráfico de pizza mostrando a distribuição de tipos de erros (por exemplo, erros de servidor, erros de validação) gerados pela API, com alertas configurados para acionar se o número de erros aumentar repentinamente.
    
4.  **Saturação**: Gráfico de área exibindo a utilização de CPU e memória do Worker e do Frontend, com linhas de tendência para identificar padrões de uso e alertas configurados para disparar se a utilização atingir níveis críticos.
    
## Especificação dos painéis e visualizações necessárias:

Para cada contexto do sistema (API, Worker, Frontend, Bancos de Dados, Cache), podemos especificar os seguintes painéis e visualizações:

1.  **API**:
    
    -   Gráfico de linhas para acompanhar a latência ao longo do tempo.
    -   Gráfico de barras para monitorar o número de solicitações e erros.
    -   Tabela com detalhes de erros recentes.

2.  **Worker e Frontend**:
    
    -   Gráfico de área para visualizar a utilização da CPU e memória.
    -   Gráfico de pizza para mostrar a distribuição de recursos por processo ou tarefa.

3.  **Bancos de Dados**:
    
    -   Gráfico de linha para mostrar o tempo de resposta das consultas.
    -   Gráfico de barras para monitorar o número de consultas por segundo.
    -   Gráfico de área para exibir o tamanho do cache de consultas.

4.  **Cache (Redis)**:
    
    -   Gráfico de área para mostrar a taxa de hits e misses no cache.
    -   Gráfico de linha para visualizar a utilização da memória.

### Considerações finais:

-   O roteiro acima é uma orientação geral e pode ser adaptado de acordo com as necessidades que você achar necessário.
-   É importante manter o dashboard e as configurações de alerta atualizadas à medida que o sistema evolui e novas métricas se tornam relevantes.



### Referências

**Documentação do Grafana**

https://grafana.com/docs/grafana/latest/getting-started/build-first-dashboard/

https://grafana.com/docs/grafana/latest/alerting/

**Curso de Observabilidade Adatech**

https://comunidade.ada.tech/cursos/1eebae37-f785-6880-157f-4e35fb7219d4
