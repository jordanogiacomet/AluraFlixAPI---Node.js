# API AluraFlix

![Badge em Desenvolvimento](http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN)

## Stack utilizada

* `Node.js` v21.7.1
* `express` v4.10.2
* `sequelize` v6.37.1
* `myslq2` v3.9.3

### Instalação do projeto

Este projeto está pronto para ser executado em um ambiente Docker. Por este motivo, será necessária apenas a instalação do Docker, não sendo necessária a instalação manual do projeto via `npm install`; também não será necessária a instalação manual do banco de dados utilizado(MySQL).

Caso não tenha o Docker instalado, siga as instruções para seu sistema operacional na [documentação oficial do Docker](https://docs.docker.com/get-docker/).

Para executar em ambiente de desenvolvimento:

* Faça o `fork` e `clone` este repositório em seu computador;
* Entre no diretório local onde o repositório foi clonado;
* Utilize o comando `sudo docker-compose up` para "build" e subir o servidor local e expor a porta 3000 em `localhost`. O comando também subirá o serviço `db` com o banco de dados de desenvolvimento.

Este projeto utiliza o Nodemon para gerenciar as mudanças na base de código e reiniciar o servidor automaticamente.

> **IMPORTANTE:** Esta API está programada para ser acessada a partir de `http://localhost:3000`. Certifique-se de que não existem outros recursos ocupando a porta `3000` antes de subir o projeto.> **IMPORTANTE:** Esta API está programada para ser acessada a partir de `http://localhost:3000`. Certifique-se de que não existem outros recursos ocupando a porta `3000` antes de subir o projeto.

A API expõe os seguintes *endpoints* a partir da *base URL* `localhost:3000`:

Ainda não foram implementados endpoints nessa API.

### Consulta aos bancos

Este projeto utiliza o MySQL como gerenciador de banco de dados SQL.

#### Desenvolvimento com MySQL

O projeto utiliza um volume Docker para armazenar os dados e um serviço MySQL do Docker para subir um servidor de banco de dados atrelado à API.

## Roadmap

* Migrations
* Seeders
* Models
* Services
* Controllers
* Autenticação
* Tratamento de erros
* Testes
* Validações
