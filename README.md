# Como usar o useContext
---
Repositório com algumas ideias de como utilizar o useContext

1. Criar uma pasta para guardar todos os contextos do projeto
- `contexts` é uma boa opção

2. Criar um arquivo `.js` na pasta onde os contextos estão sendo guardados
- é bom nomeá-lo de maneira explícita, `testeContext.js` por exemplo

3. Para manter um código mais organizado, uma boa ideia é imaginar o contexto como um componente react, que vai receber componentes filhos e renderizá-los dentro do provider, evitando retrabalho durante o uso.

4. Um ponto importante é que não é possível utilizar o valor do contexto em um componente que não está dentro do contexto, ou utilizar o valor do contexto na mesma camada em que o contexto foi criado. 

[Documentação oficial do useContext](https://pt-br.reactjs.org/docs/hooks-reference.html#usecontext)
