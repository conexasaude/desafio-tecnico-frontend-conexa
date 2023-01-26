# Desafio Ténico Conexa: Front-end
## Resumo
O objetivo do desafio era construir uma interface coerente com o [figma](https://www.figma.com/file/eaD2LIOcswFJO2SblVyIeq/Desafio-frontend-Conexa?node-id=1:446) apresentado, que se trata de uma aplicação teórica de como seria o fluxo de um médico ao efetuar login, listar consultas e criar uma nova, utilizando principalmente Reactjs para a criação e gerenciamento de componentes JSX, consumindo uma API falsa e sendo livre para a aplicação de demais tecnologias que não fujam do escopo do mesmo. As seguintes tecnologias foram aplicadas:

- Reactjs
- Typescript
- React Router Dom
- React Select
- Toastify
- React Hook Form
- Yup
- React Calendar
- React Icons
- Tailwind CSS
- Framer Motion
- Axios
- Zustand
- Storybook

### Como Executar
1. Clone o repositório, navegue até a pasta do mesmo, depois para a pasta "frontend" e crie um arquivo .env com a variável:
 ```javascript 
 VITE_API_URL=http://localhost:3333
 ```
2. Execute o comando: 
```bash 
yarn && yarn dev
```
3. Abra um novo terminal, navegue até a pasta frontend novamente e execute o comando a seguir para abrir o storybook:
```bash 
yarn storybook
```
4. Abra um novo terminal, navegue até a pasta "backend" e execute o seguinte comando para executar o servidor:
```bash 
yarn && yarn dev
```