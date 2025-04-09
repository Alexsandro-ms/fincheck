# 🚀 Fincheck API

API para controle financeiro pessoal, com gerenciamento de contas bancárias, autenticação JWT e documentação completa via Swagger.

---

## 📦 Tecnologias Utilizadas

- **NestJS** – Framework para construção de APIs escaláveis
- **PostgreSQL** – Banco de dados relacional
- **Prisma ORM** – ORM para manipulação de dados
- **Swagger** – Documentação automática da API
- **JWT** – Autenticação baseada em tokens

---

## ⚙️ Requisitos

- Node.js 18+
- PostgreSQL instalado e rodando
- Yarn ou NPM

---

## 💻 Instalação Rápida

```bash
  git clone https://github.com/Alexsandro-ms/fincheck.git
  cd fincheck/api

  npm install

  cp .env.example .env

  npx prisma migrate dev

  npm run start:dev
```

---

## 📁 Variáveis de Ambiente

Arquivo .env.example:

```env
  DATABASE_URL="postgresql://root:root@localhost:5432/fincheck?schema=public"

  JWT_SECRET="secure_jwt_secret"
```

---

## 📘 Documentação Swagger

A documentação da API está disponível em:

http://localhost:3000/docs

Você pode definir a porta padrão nas variáveis de ambiente.

Todas as rotas públicas e privadas estão listadas.

Clique em "Authorize" e insira o token JWT para testar rotas autenticadas.

Exemplo de token JWT:

```nginx
  Bearer seu_token_jwt_aqui
```

---

## 🛠️ Scripts Úteis

- npm run start:dev Inicia a API em modo desenvolvimento
- npx prisma migrate dev Roda as migrations
- npx prisma studio Abre o painel visual do banco de dados

## ✍️ Observações

O header Authorization é obrigatório em rotas privadas.

A documentação foi customizada com a identidade visual do projeto.

O projeto segue boas práticas com DTOs, decorators e módulos bem isolados.

## 👤 Autor

Feito por Alexsandro Martins,
Contribuições são bem-vindas!
