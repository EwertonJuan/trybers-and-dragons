# Trybers and Dragons - Jogo de RPG em TypeScript

Bem-vindo ao repositório Trybers and Dragons! Este projeto é uma aplicação desenvolvida em TypeScript, utilizando a arquitetura SOLID e programação orientada a objetos (POO) para simular um jogo de RPG.

## Visão Geral

O Trybers and Dragons é um jogo de RPG que permite ao usuário instanciar novos personagens, cada um com suas próprias características, habilidades e estatísticas. É possível subir o nível desses personagens e os colocar em batalhas contra monstros ou outros personagens.

## Pré-requisitos

Para executar este projeto em sua máquina local, você precisará ter o Node.js instalado. Caso ainda não tenha o Node.js, você pode fazer o download em [nodejs.org](https://nodejs.org/).

## Como Iniciar

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/trybers-and-dragons.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd trybers-and-dragons
   ```
3. Instale as dependências:

# Sem Docker

   ```bash
   npm install
   ```
# Com Docker

> Rode o serviço `node` com o comando `docker-compose up -d`.
  - Esse serviço irá inicializar um container chamado `trybers_and_dragons`.
  - A partir daqui você pode rodar o container `trybers_and_dragons` via CLI ou abri-lo no VS Code.

  > Use o comando `docker exec -it trybers_and_dragons bash`.
  - Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

  > Instale as dependências com `npm install`
  
  ⚠ Atenção ⚠ Caso opte por utilizar o Docker, **TODOS** os comandos disponíveis no `package.json` (npm start, npm test, npm run dev, ...) devem ser executados **DENTRO** do container, ou seja, no terminal que aparece após a execução do comando `docker exec` citado acima. 
