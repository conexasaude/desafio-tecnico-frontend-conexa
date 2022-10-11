# Bem vindo ao desafio Front-end Conexa!

### O Caso

Precisamos construir um front onde nossos médicos de plantão consigam ver as consultas agendadas e agendar novas consultas.

<div width="100%" >
    <img src="/images/login_320x568px.png" width="40%"  />
    <img src="/images/home_320x568px.png" width="40%" align="right"/>
</div>

Será necessário ter uma tela de login para que médicos da clínica consigam acessar a aplicação, utilizando email e senha ([credenciais para teste](#credenciais-para-teste)).

A response do login será um token de validação e o nome do médico.

O médico poderá listar e cadastrar consultas.

No projeto há um diretório com o backend com os dados mockados. Basta, dentro do diretório /backend, rodar:

```bash
yarn
```

...para instalar as dependências, e logo após rodar:

```bash
yarn start
```

...para rodar o servidor em http://localhost:3333.

### Recursos

Endpoints:

- Fazer Login => POST http://localhost:3333/login
- Buscar Consultas => GET http://localhost:3333/consultations?_expand=patient
- Nova Consulta => POST http://localhost:3333/consultations
  - Deve usar o token fornecido pelo login
  - body: {
    "patientId": 1,
    "date": "Fri Feb 05 2021 10:20:00 GMT-0300 (Brasilia Standard Time)"
    }

### O que você deve fazer

- Fazer o Fork do repositório, criar uma nova branch e abrir um merge request para a master do nosso repositório quando concluir
- Desenvolver essa aplicação usando ReactJs
- Atender os requisitos descritos no Caso

### O que será avaliado

- Se os requisitos foram atendidos
- Conhecimento de git
- Documentação
- Clareza e qualidade do código
- Estrutura da aplicação
- Bom uso das features da linguagem
- Aplicação bem testada
- Fidelidade ao layout
- O uso de typescript nos deixará mais feliz :)

#### Não se limite aos requisitos básicos. Dê o seu melhor! ;)

Em caso de dúvidas sobre o desafio, entre em contato.

### Layout

[Figma](https://www.figma.com/file/eaD2LIOcswFJO2SblVyIeq/Desafio-frontend-Conexa?node-id=1%3A446)

Obs.: A funcionalidade de agendar uma nova consulta deverá ser um modal (Não presente no layout) com os campos necessários, incluindo Datepicker; seguindo mesma linha do layout fornecido.

### Credenciais para teste

email: gandalf@mail.com
senha: 123456


### Frontend

```bash
yarn
```
...para instalar as dependências, e logo após rodar:

```bash
yarn dev
```

### O que foi utilizado: 

- Para o ambiente de desenvolvimento utilizei o ViteJs
- Foi utilizado typescript para uma melhor construção do codigo e organização
- Foi utilizado Styled Component