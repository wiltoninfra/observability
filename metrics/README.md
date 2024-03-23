# Prometheus Monitoring Stack

Prometheus Monitoring Stack é um conjunto abrangente de ferramentas para monitoramento e alertas em sistemas distribuídos modernos. Ele fornece recursos robustos de coleta de métricas, visualização e alertas, essenciais para garantir a confiabilidade e o desempenho dos aplicativos.
 
**Componentes**
- Prometheus
- Grafana
- Alertmanager
- Node Exporter
- Blackbox Exporter
- Cadvisor
- Redis Exporter
- Postgres Exporter

**Leituras Importantes**

-   [Monitoring distributed systems Google SRE](https://sre.google/sre-book/monitoring-distributed-systems/): Um guia essencial sobre a monitorização de sistemas distribuídos, do Google SRE.
-   [Awesome Prometheus](https://github.com/roaldnefs/awesome-prometheus): Uma lista curada de recursos, ferramentas e bibliotecas relacionadas ao Prometheus.
-   [Trainning Introduction Prometheus](https://robustperception.teachable.com/p/introduction-to-prometheus): Um curso introdutório ao Prometheus, oferecido pela Robust Perception.
-   [The best Blog Prometheus](https://www.robustperception.io/blog/): Um blog mantido pela Robust Perception com artigos detalhados sobre Prometheus e tópicos relacionados.
-   [Grafana Foundations](https://grafana.com/tutorials/grafana-fundamentals/): Tutoriais fundamentais sobre Grafana, que ajudam a compreender melhor a ferramenta de visualização de métricas.

### Iniciando Stack prometheus
Em caso de conflito ao inicializar o docker com a stack de estudos de prometheus com grafana, tente remover todos os containers e imagens e volumes do docker.

**Reset do docker**
```ssh
$ docker system prune -a
```
 
**Inicializando stack prometheus**
```ssh
 $ docker-compose -up -d 
```
Após inicializar você pode executar o K6 Grafana para executar testes de carga.
[Link instalação K6](https://k6.io/docs/get-started/installation/)
```ssh
$ k6 run ./script.js
```
> Não esqueça de apontar o caminho arquivo `script.js`

**Execute test usando K6**

```bash
k6 run script.js
```