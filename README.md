# AllowMe Blog - Frontend
 
## Sobre

Essa é o web frontend de uma aplicação de blog pessoal e meu primeiro projetinho em React com Typescript.
O backend está em um repositório diferente, clique [nesse link](https://github.com/nathborges/allowme-blog/tree/main) para acessá-lo.

## Como iniciar o projeto

1. Adicione um arquivo .env na raiz do projeto com as variáveis de ambiente. Você pode usar o .env.example como exemplo. Só duplicar o arquivo e tirar a palavra 'example', ficando assim apenas um '.env';
2. O [backend](https://github.com/nathborges/allowme-blog/tree/main) desse projeto precisa estar rodando, seja no docker ou no ambiente de desenvolvimento.
3. O backend e frontend compartilham uma api key para segurança dos dados de nossos usuários. Verifique o .env do repositório de backend e o .env desse repositório, as api keys devem ser iguais.
5. Para rodar no ambiente de desenvolvimento, siga esses passos:

O projeto usa o node 18.19.0. Caso você não tenha o nvm (aplicação de versionamento de node) na sua máquina, seu ambiente precisa estar settado com essa versão.

No mais, utilize os seguintes comandos: 
```
nvm use .
npm i
npm run dev
```
5. A aplicação está rodando ✨

Como padrão, é possível acessar a aplicação pela url: http://localhost:5173.

8. Para rodar no ambiente de produção, siga esses passos.
```
npm run build
npm run preview
```
 
 ## Tecnologias usadas

 <div style="display:flex">
<a href="https://reactjs.org/"><img src="https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB" alt="React"></a>
<a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript"></a>
<a href="https://developer.mozilla.org/pt-BR/docs/Web/CSS"><img src="https://img.shields.io/badge/CSS-239120?style=flat-square&logo=css3&logoColor=white" alt="CSS"></a>
</div>

## Próximos Passos
- Deixar o código mais modularizado, reutilizando partes que são comuns.
- Adicionar a aba de login, cadastro e criação de posts.
- Deixar os dropdowns escondidos quando o usuário clicar fora dele.
- Ajustar o bug do filtro de autores e data de postagem, sendo assim, ambos agregativos.
- Criar testes, testes e testes.

P.S.: Clique nos ícones das redes sociais hehe
