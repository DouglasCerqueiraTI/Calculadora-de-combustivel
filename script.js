// =========================================================================
// 1. REQUISITO COMPLETO: Array e localStorage
// Tenta buscar cálculos salvos anteriormente no navegador.
// Se não existir nada salvo, inicia com uma lista (array) vazia [].
// =========================================================================
let historicoCalculos = JSON.parse(localStorage.getItem("meusCalculos")) || [];

// Assim que a página abre, desenha o histórico salvo na tela
renderizarHistorico();


// =========================================================================
// 2. REQUISITO MÍNIMO: Botão que muda a página usando if/else
// =========================================================================
function alternarTema() {
  // Pega o elemento <body> e o botão do tema
  const corpo = document.body;
  const botao = document.getElementById("btnTema");

  // Verifica se o body já possui a classe "tema-claro"
  if (corpo.classList.contains("tema-claro")) {
    // Se tiver, remove para voltar ao tema escuro
    corpo.classList.remove("tema-claro");
    botao.innerText = "☀️ Mudar para Tema Claro";
  } else {
    // Se não tiver, adiciona para ativar o tema claro
    corpo.classList.add("tema-claro");
    botao.innerText = "🌙 Mudar para Tema Escuro";
  }
}


// =========================================================================
// 3. REQUISITO INTERMEDIÁRIO: Leitura de campos e validação de erros
// =========================================================================
function calcularCombustivel() {
  // Lê o texto digitado nos inputs, remove espaços extras (.trim)
  // e troca vírgula por ponto (.replace) para aceitar tanto "12,5" quanto "12.5"
  const textoDistancia = document.getElementById("distancia").value.trim().replace(",", ".");
  const textoConsumo = document.getElementById("consumo").value.trim().replace(",", ".");
  const textoPreco = document.getElementById("preco").value.trim().replace(",", ".");

  const caixaResultado = document.getElementById("resultado");

  // Validação 1: Verifica se algum campo ficou vazio
  if (textoDistancia === "" || textoConsumo === "" || textoPreco === "") {
    mostrarMensagem("Preencha todos os campos antes de calcular.", "erro");
    return; // Interrompe a função aqui
  }

  // Converte os textos para números decimais (float)
  const distancia = parseFloat(textoDistancia);
  const consumo = parseFloat(textoConsumo);
  const preco = parseFloat(textoPreco);

  // Validação 2: Verifica se o usuário digitou letras (isNaN = Not a Number)
  // ou se digitou zero / número negativo (<= 0)
  if (
    isNaN(distancia) || distancia <= 0 ||
    isNaN(consumo) || consumo <= 0 ||
    isNaN(preco) || preco <= 0
  ) {
    mostrarMensagem("Digite apenas números válidos maiores que zero.", "erro");
    return; // Interrompe a função aqui
  }

  // Se passou pelas validações, realiza os cálculos matemáticos
  const litrosNecessarios = distancia / consumo;
  const custoTotal = litrosNecessarios * preco;

  // Formata os números para 2 casas decimais (.toFixed(2))
  const resumoTexto = `${distancia} km | ${litrosNecessarios.toFixed(2)} L | R$ ${custoTotal.toFixed(2)}`;

  // Mostra o resultado na tela
  mostrarMensagem(
    `<strong>Resultado da Viagem:</strong><br>
     Combustível necessário: <strong>${litrosNecessarios.toFixed(2)} litros</strong><br>
     Custo estimado: <strong>R$ ${custoTotal.toFixed(2)}</strong>`,
    "sucesso"
  );

  // Adiciona o novo cálculo no início do array (.unshift)
  historicoCalculos.unshift(resumoTexto);

  // Mantém apenas os 5 últimos cálculos na lista para não poluir a tela
  if (historicoCalculos.length > 5) {
    historicoCalculos.pop();
  }

  // Salva o array atualizado no localStorage (convertendo para texto JSON)
  localStorage.setItem("meusCalculos", JSON.stringify(historicoCalculos));

  // Atualiza a lista visível na tela
  renderizarHistorico();
}


// =========================================================================
// 4. FUNÇÕES AUXILIARES (Exibição de mensagens e laço for do histórico)
// =========================================================================
function mostrarMensagem(textoHTML, tipo) {
  const caixa = document.getElementById("resultado");
  caixa.innerHTML = textoHTML;
  // Aplica a classe "erro" ou "sucesso" e remove a classe "oculto"
  caixa.className = `caixa-resultado ${tipo}`;
}

function renderizarHistorico() {
  const listaUL = document.getElementById("listaHistorico");
  listaUL.innerHTML = ""; // Limpa a lista antes de redesenhar

  // Se o array estiver vazio, mostra um aviso simples
  if (historicoCalculos.length === 0) {
    listaUL.innerHTML = "<li>Nenhum cálculo realizado ainda.</li>";
    return;
  }

  // Laço de repetição (for) percorrendo cada item do array
  for (let i = 0; i < historicoCalculos.length; i++) {
    const itemLI = document.createElement("li");
    itemLI.innerText = historicoCalculos[i];
    listaUL.appendChild(itemLI);
  }
}

function limparHistorico() {
  historicoCalculos = []; // Esvazia o array
  localStorage.removeItem("meusCalculos"); // Apaga do navegador
  renderizarHistorico(); // Atualiza a tela
}