# live-nodebr-graphql

> Live da comunidade NodeBR sobre GraphQL do dia 11/04

<!-- TOC -->

- [live-nodebr-graphql](#live-nodebr-graphql)
  - [Rodando](#rodando)
  - [Referências](#referências)

<!-- /TOC -->

## Rodando

1. Tenha o Docker Compose instalado
2. Execute `docker-compose up -d` no diretório raiz
  - Isto vai criar um banco MongoDB na porta 64193 sem usuário nem senha
3. `npm install`
4. `npm start`
5. Acesse `localhost:4545/graph` para o endpoint não visual e `localhost:4545/graphiql` para o endpoint visual

> Bater na rota `/` só vai retornar uma mensagem de funcionamento

## Referências

- https://www.apollographql.com/docs/apollo-server/
- https://www.apollographql.com/docs/apollo-server/example.html
- https://graphql.org
- https://speakerdeck.com/khaosdoctor/graphql-para-iniciantes
- https://github.com/khaosdoctor/gotql

Você pode assistir a live [neste link](https://www.youtube.com/watch?v=GU2nu9u7qOA)

Para dúvidas e qualquer outra coisa, posso ser encontrado em [@_staticvoid](https://twitter.com/_staticvoid) ou no [meu site](https://lsantos.me).
