# Projeto Prefeitura Ionic

## Como rodar localmente o projeto

Para executar este projeto Ionic localmente no seu computador, siga os passos abaixo:

### Pré-requisitos

Antes de iniciar, você precisará ter os seguintes itens instalados em seu sistema:

- [Node.js](https://nodejs.org/en/): Um ambiente de execução JavaScript para o servidor.
- [npm](https://www.npmjs.com/): Gerenciador de pacotes do Node.js. Normalmente, ele é instalado junto com o Node.js.
- [Ionic CLI](https://ionicframework.com/docs/cli): A linha de comando do Ionic Framework.
- Um editor de código de sua preferência (recomendo [Visual Studio Code](https://code.visualstudio.com/)).

### Instalação

1. **Clonar o repositório**

   Primeiro, clone este repositório no seu sistema local usando o seguinte comando no terminal:

   ```sh
   git clone https://github.com/LucasFernandesBrazil/ionic-study-project.git

2. **Instalar dependências**

   Primeiro entre na pasta do projeto com o seguinte comando:

   ```sh
   cd /Prefeitura
   ```

   Após isso faça a instalação das dependências do projeto utilizando o NPM:

   ```sh
   npm install

2. **Executar projeto**

   Foi utilizado o JSON SERVER para simulação do backend com dados mockados, antes de iniciar a aplicação você terá que iniciar o servidor do JSON SERVER com o seguinte comando:

   ```sh
   json-server --watch db.json --port 5000
   ```

   Após iniciar o servidor na porta 5000, você poderá iniciar a aplicação com o seguinte comando:

   ```sh
   ionic server

