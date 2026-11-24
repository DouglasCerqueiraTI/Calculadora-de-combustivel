# ⛽ Calculadora de Combustível

Aplicação web desenvolvida para calcular a quantidade de litros necessários e o custo estimado de uma viagem com base na distância percorrida, no consumo médio do veículo e no preço do combustível.

🔗 **Acesse o projeto online:** https://douglascerqueirati.github.io/Calculadora-de-combustivel/

---

## 🚀 Funcionalidades

- **Cálculo de Consumo e Custo:** Calcula automaticamente os litros necessários (`distância / consumo`) e o valor total estimado (`litros * preço`).
- **Alternância de Tema (Claro/Escuro):** Botão interativo que altera dinamicamente o esquema de cores da interface utilizando manipulação de classes no DOM com `if/else`.
- **Validação de Dados:** Verifica campos vazios, valores menores ou iguais a zero e entradas não numéricas (`isNaN`), além de converter vírgulas em pontos automaticamente[cite: 4].
- **Histórico Persistente:** Armazena os últimos 5 cálculos realizados em um `array` e os salva no `localStorage` do navegador, exibindo a lista na tela por meio de um laço de repetição (`for`)[cite: 4].

---

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Estrutura semântica da página e formulário de entrada (`index.html`)[cite: 4].
- **CSS3:** Estilização responsiva, variáveis visuais e classes para tema claro e escuro (`estilo.css`)[cite: 4].
- **JavaScript (ES6+):** Lógica de cálculo, validação de formulários, manipulação do DOM e persistência de dados (`script.js`)[cite: 4].
- **GitHub Pages:** Hospedagem gratuita e publicação contínua da página web[cite: 2, 4].

---

## 📂 Estrutura de Arquivos

```text
Calculadora de combustivel/
├── index.html   # Estrutura principal da aplicação
├── estilo.css   # Estilos visuais, layout e temas (claro/escuro)
├── script.js    # Lógica de cálculo, validações, array e localStorage
└── README.md    # Documentação do projeto
