# :butterfly: Two Days of Practical React Code

Um exercício, que consiste em revisar conceitos importantes em React. Este repositório é inspirado pelo Diego Fernandes! :)

## :seedling: Dia 1

Estrutura foi feita em Vite, Tailwind.

### :snail: **Vite** é uma ferramenta para desenvolvimento de aplicações web:

➜ Advém da palavra francesa "Vite", que significa rápido.

➜ Vite é um bundler, (empacotador) e um build tool (ferramenta de construção), para o desenvolvimento de aplicações web modernas. É reconhecida por ser rápida e eficiente durante o processo de desenvolvimento.

➜ O Vite difere do Webpack, outro bundler tradicional que compila e empacota todo o código do projeto antes de servir para o navegador, uma vez que o Vite adota uma abordagem de "module streaming", ou transmissão de módulos, onde cada módulo é servido individualmente durante o desenvolvimento. Isso resulta em tempos de compilação muito mais rápidos, pois apenas os módulos que foram modificados precisam ser recompilados.

➜ Vite suporta vários tipos de projetos, incluindo aplicações Vue.js, React, Preact e Svelte, entre outros. Ele também oferece um ecossistema de plugins para estender suas funcionalidades.

### :pig_nose: **PNPM** ou Plug'n'Play Package Manager, um gerenciador de pacotes para Node.js:

➜ O PNPM é uma alternativa ao gerenciador de pacotes NPM (Node Package Manager), o qual oferece algumas diferenças fundamentais em relação ao NPM.

➜ Uma das diferenças é relativa ao espaço em disco, uma vez que o PNPM usa um espaço em disco significativamente menor em comparação ao NPM. Isso ocorre porque o PNPM adota uma abordagem de compartilhamento de pacotes entre projetos. Em vez de instalar uma cópia de cada pacote para cada projeto, o PNPM mantém apenas uma cópia de cada versão de pacote no sistema e cria links simbólicos para eles em cada projeto que os utiliza.

➜ Além disso, a velocidade de instalação é mais rápida que o NPM, devido à maneira como o PNPM gerencia os pacotes e usa links simbólicos. Isso é notável em projetos que utilizam muitas dependências ou em projetos com builds frequentes em contâiners Docker, nos quais a velocidade de instalação pode ser crítica.

➜ O PNPM mantém um cache centralizado dos pacotes instalados a nível do usuário, o que permite compartilhar eficientemente os pacotes entre projetos e reduz o tempo de instalação.

➜ Ainda, o PNPM é capaz de atualizar apenas os pacotes que foram modificados ou adicionados desde a última instalação, tornando o processo de atualização mais rápido e eficiente.

➜ Por fim, o PNPM oferece suporte nativo para workspaces, permitindo que o desenvolvedor gerencie vários pacotes relacionados em um único repositório de forma mais eficiente.

Apesar disso, o NPM é amplamente utilizado e suportado pela comunidade de desenvolvimento Node.js. A escolha entre NPM ou PNPM depende das necessidades específicas do projeto e das preferências da equipe de desenvolvimento.

### :lady_beetle: **TailwindCSS** é uma biblioteca que permite utilizar classes utilitárias:

➜ No contexto de desenvolvimento web front-end, uma classe utilitária refere-se a uma classe CSS que fornece uma única funcionalidade ou estilo específico. Essas classes são geralmente projetadas para serem reutilizáveis e aplicadas diretamente a elementos HTML, para fornecer estilos ou funcionalidades específicas de maneira rápida e eficiente.

➜ Este termo advém de **utility-first**, a qual é uma abordagem de desenvolvimento que enfatiza o uso extensivo de classes utilitárias para criar interfaces de usuários. Ao adotar essa abordagem, os desenvolvedores criam um conjunto abrangente de classes utilitárias que podem ser combinadas e aplicadas de forma modular para estilizar os elementos da interface. Isso geralmente resulta em um código mais limpo, conciso e fácil de aplicar manutenção.

➜ Tailwind CSS, por sua vez, é um framework de CSS que segue a abordagem utility-first. Ele fornece um conjunto abrangente de classes utilitárias que abrangem uma ampla gama de estilos e funcionalidades. Com o Tailwind CSS, os desenvolvedores podem construir interfaces de usuário rapidamente, aplicando essas classes diretamente ao elemento HTML, em vez que escrever CSS personalizado. Isso torna o desenvolvimento mais eficiente e permite uma maior flexibilidade no design da interface do usuário.

## :sunflower: Pontos Interessantes a entender:

Listagem de Dados - conceitos importantes URL state, HTTP state, etc.
Squeleton Screen em React.
