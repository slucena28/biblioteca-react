# Biblioteca React + TypeScript

Aplicação de gerenciamento de livros utilizando React, TypeScript, Axios e integração com a API do crudcrud.

## Tecnologias utilizadas

- React
- TypeScript
- Vite
- Axios

## Instalação

Clone o projeto:

```bash
git clone URL_DO_REPOSITORIO
```

Acesse a pasta do projeto:

```bash
cd biblioteca-react
```

Instale as dependências:

```bash
npm install
```

## Configuração da API

Acesse o site:

https://crudcrud.com

Copie sua URL exclusiva e substitua em:

```ts
src/services/api.ts
```

Exemplo:

```ts
export const API_URL =
  "https://crudcrud.com/api/SEU_ENDPOINT/livros";
```

## Executando o projeto

```bash
npm run dev
```

## Funcionalidades

- Listar livros
- Adicionar livros
- Remover livros
- Integração com API REST
- Componentização
- Tipagem com TypeScript

## Estrutura do projeto

```txt
src/
├── components/
├── services/
├── types/
├── App.tsx
└── main.tsx
```
