% Minicurso MERN: MongoDB
% Claudia L. P. Sampedro; Igor N. Faustiono
% Haken Empresa Junior

# Introdução

## NoSQL
- é um banco de dados não relacional
- Mais rapido
- Redundancia de dados

## Coleções
- As "tabelas" são chamadas de coleções
    - Representam uma coleção de objetos

## Objetos
- São os dados propriamente ditos
    - Em uma mesma coleção, os objetos não precisam seguir a mesma estrutura

# Exemplo

```
- Coleção de Pessoas
    |
    -- Pessoa1 (Nome, Telefone, Amigos)
    |
    -- Pessoa2 (Nome, Sobrenome)
    |
    -- Pessoa3 (Nome, Emprego, NomeCachorro)
```

# MongoDB

- Armajena objetos na estrutura `JSON`
- Cada objeto pode ter até 16 MB de tamanho
- Alta performace
- Facil para escalar

# Mongoose

- Ajuda a manipular o MongoDB e seus objetos em projetos de NodeJS