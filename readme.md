# :butterfly: Two Days of Practical React Code

Um exercício, que consiste em revisar conceitos importantes em React. Este repositório é inspirado pelo Diego Fernandes! :)

## :seedling: Dia 1

Estrutura foi feita utilizandop PNPM, Vite, TailwindCSS, entre outras tecnologias que serão citadas em breve.

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

### :crab: **JSON Server** é uma ferramenta de desenvolvimento para criar uma API REST com base em um arquivo JSON:

➜ É frequentemente usado para desenvolvimento front-end, especialmente quando precisa-se simular uma API enquanto trabalha no desenvolvimento do front-end da aplicação.

➜ É uma ferramenta para criação rápida de uma API, ou seja, pode-se criar rapidamente uma API RESTful completa apenas definindo a estrutura de seus dados em um arquivo JSON. Isso é extremamente útil durante o desenvolvimento de frontend, pois permite que você comece a trabalhar com dados reais sem ter que configurar um servidor backend.

➜ As rotas podem ser personalizadas. Além das rotas geradas automaticamente com base na estrutura do arquivo JSON, o JSON Server permite definir rotas personalizadas para manipular solicitações HTTP de maneira específica. Isso é útil para implementar lógica personalizada ou simular diferentes cenários de resposta da API.

➜ O JSON suporta consultas complexas, permitindo filtrar, classificar e paginar os dados retornados pela API. Isso é útil para testar a integração do front-end com a API em diferentes situações.

➜ E por fim, o JSON Server também suporta a persistência de dados em um arquivo JSON ou em um banco de dados NoSQL, como MongoDB. Isso permite que você mantenha o estado dos dados entre as reinicializações do servidor.

Assim, o JSON Server é uma ferramenta poderosa e flexível para criar APIs RESTful de maneira rápida e fácil durante o desenvolvimento frontend. É amplamente utilizado na comunidade de desenvolvimento web para acelerar o processo de desenvolvimento e facilitar a colaboração entre equipes frontend e backend.

No caso, o arquivo criado Server JSON para o presente projeto front-end React pode ser um exemplo que pode ser usado para diversas finalidades, dependendo das necessidades específicas do projeto. Este arquivo pode ser útil, pois:

➜ Para configurar um ambiente, o arquivo **server.json** pode conter configurações específicas do ambiente, como variáveis de ambiente, configurações de servidor ou outras informações relacionadas ao ambiente de desenvolvimento, teste ou produção. Isso permite que você tenha diferentes configurações para diferentes ambientes sem modificar diretamente o código fonte.

➜ Pode ser utilizado como mock de dados, definindo endpoints de API falsos ou mockados durante o desenvolvimento. Isso é útil quando você está trabalhando em um frontend antes que a API real esteja pronta ou para simular diferentes cenários de resposta da API.

➜ Se o desenvolvedor estiver construíndo um frontend que precisa se comunicar com um backend em um domínio diferente (por exemplo, um frontend React consumindo uma API Node.js), o server.json pode ser usado para configurar um **proxy** para redirecionar solicitações para o servidor de backend durante o desenvolvimento. Isso evita problemas de **CORS** (Cross-Origin Resource Sharing) durante o desenvolvimento local.

➜ Pode-se usar, ainda, o server.json para definir regras de roteamento para servir diferentes arquivos ou direcionar solicitações para diferentes manipuladores de rota durante o desenvolvimento. Isso pode ser útil para simular diferentes cenários de roteamento ou para criar configurações específicas para rotas no ambiente de desenvolvimento.

Um arquivo server.json em um projeto frontend React pode ser uma ferramenta poderosa para configurar o ambiente de desenvolvimento, simular serviços ou endpoints de API, definir regras de roteamento ou lidar com outras configurações específicas do projeto. Ele oferece flexibilidade e controle adicionais sobre o ambiente de desenvolvimento, permitindo que você se adapte às necessidades do seu projeto.

### :chocolate_bar: **TypeScript** é uma linguagem de programação que é uma extensão do JavaScript:

➜ Desenvolvida pela Microsoft, o TypeScript adiciona tipos estáticos opcionais à linguagem. Isso significa que pode-se definir tipos para as variáveis, parâmetros de função, retorno de função e muito mais, o que ajuda a detectar erros em tempo de compilação e fornece uma melhor documentação do código. Em um contexto de TypeScript, a palavra "compilação" refere-se ao processo pelo qual o código TypeScript é transformado em código JavaScript. Este processo é realizado pelo compilador TypeScript, chamado tsc.

:mag_right: CURIOSIDADE: Quando escreve-se um código em TypeScript, adiciona-se tipos estáticos à linguagem JavaScript. No entanto, os navegadores da web e o ambiente Node.js não entendem TypeScript diretamente - somente podem interpretar e executar o código JavaScript. Portanto, antes de executar TypeScript em um navegador ou ambiente Node.js, é necessário "compilar" o código TypeScript em JavaScript. Durante a compilação, o compilador TypeScript (tsc) verifica a sintaxe do código TypeScript, realiza a verificação de tipos estáticos e, em seguida, gera um ou mais arquivos JavaScript correspondentes ao código TypeScript. Este processo é conhecido como "transpilação", pois o código TypeScript é transformado em código JavaScript equivalente. Uma vez compilado, o código JavaScript resultante pode ser executado em qualquer ambiente que suporte JavaScript, como um navegador da web ou um servidor Node.js.

➜ O TypeScript, portanto, pode adicionar tipos estáticos aos seus componentes, props e estado. Isso ajuda a detectar erros de tipo em tempo de compilação, reduzindo a chance de bugs relacionados a tipos durante a execução do código.

➜ Melhora, inclusive, o autocompletamento em editores de código, como o Visual Studio Code. Isso permite acelerar o desenvolvimento, pois é possível ver sugestões de propriedades e métodos disponíveis enquanto digita o código.

➜ Com os tipos estáticos, é possível refatorar com mais segurança, sabendo que o TypeScript detectará qualquer uso incorreto de variáveis ou funções após a refatoração.

➜ A adição de tipos fornece uma documentação embutida no código-fonte, o que pode tornar mais fácil entender o que uma função faz e quais tipos ela espera e retorna.

➜ TypeScript torna o código mais explícito e legível, o que pode facilitar a manutenção do código ao longo do tempo, especialmente em projetos grandes e complexos.

➜ Muitas bibliotecas populares do ecossistema React têm tipos TypeScript disponíveis, o que significa que você pode ter uma experiência de desenvolvimento mais consistente e segura ao usar essas bibliotecas em seus projetos TypeScript.

TypeScript pode ser uma escolha valiosa para projetos React, pois adiciona uma camada de segurança e robustez ao código, facilita o desenvolvimento e a manutenção do código e melhora a experiência geral do desenvolvedor.

## :sunflower: Pontos Interessantes a entender:

Listagem de Dados deve seguir boas práticas para que o funcionamento não traga surpresas ou erros durante a paginação, como ao manter o número da página correta, não voltando à primeira, caso o link seja compartilhado, por exemplo.

conceitos importantes URL state, HTTP state, etc.
Squeleton Screen em React.

Para filtrar os dados que vêm do server, sendo utilizado o json-server, pode-se usar a paginação.

http://localhost:3333/tags
?\_page=1&\_per_page=5
