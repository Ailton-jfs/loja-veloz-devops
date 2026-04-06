# Loja Veloz DevOps

## Sobre o projeto

Este projeto foi desenvolvido com o objetivo de aplicar, na prática, conceitos básicos de DevOps. A ideia foi construir uma aplicação simples dividida em serviços independentes e depois trabalhar com conteinerização e orquestração.

A aplicação simula um sistema de e-commerce com três partes principais.

---

## Estrutura

O sistema foi separado em três serviços:

* pedidos: responsável por receber e processar pedidos
* pagamentos: simula o processamento de pagamentos
* estoque: controla a disponibilidade de produtos

Cada serviço é uma aplicação simples em Node.js utilizando Express.

---

## Execução local

Para rodar um serviço individualmente, entre na pasta correspondente e execute:

```bash
npm install
node app.js
```

Exemplo (serviço de pedidos):

```bash
cd pedidos
npm install
node app.js
```

---

## Docker

Cada serviço possui um Dockerfile, permitindo que seja executado em container.

Exemplo de build e execução:

```bash
docker build -t pedidos ./pedidos
docker run -p 3001:3001 pedidos
```

---

## Docker Compose

Para subir todos os serviços ao mesmo tempo, foi utilizado Docker Compose.

Na raiz do projeto:

```bash
docker-compose up --build
```

Após executar, os serviços ficam disponíveis em:

* http://localhost:3001
* http://localhost:3002
* http://localhost:3003

---

## Kubernetes

Também foi feita a implantação no Kubernetes, utilizando Deployment e Service.

Para aplicar:

```bash
kubectl apply -f k8s/
```

Para verificar os pods:

```bash
kubectl get pods
```

Para verificar os serviços:

```bash
kubectl get services
```

---

## Acesso

Após subir no Kubernetes, o serviço pode ser acessado via:

http://localhost:30007

---

## Tecnologias utilizadas

* Node.js
* Express
* Docker
* Docker Compose
* Kubernetes

---

## Objetivo

O principal objetivo foi entender, de forma prática:

* como criar e organizar serviços separados
* como utilizar containers com Docker
* como subir múltiplos serviços com Docker Compose
* como utilizar Kubernetes para orquestração e exposição da aplicação

---

## Observações

Este projeto foi desenvolvido com fins acadêmicos, com foco no aprendizado dos conceitos de DevOps e não em regras de negócio complexas.

---

## Autor

Projeto desenvolvido para fins de estudo.
