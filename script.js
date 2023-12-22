// function calculo() {
//     var valorEquipamento = parseFloat(document.getElementById("equipamento").value);
//     var valorSucata = parseFloat(document.getElementById("sucata").value);
//     var vidaUtil = parseFloat(document.getElementById("vida_util").value);
//     var tempoUso = parseFloat(document.getElementById("tempo_uso").value);

//     if (
//         isNaN(valorEquipamento) ||
//         isNaN(valorSucata) ||
//         isNaN(vidaUtil) ||
//         isNaN(tempoUso)
    
//     ) {
//         alert("Digite Números Válidos");
//         return;
//     }

//     var vidaTotal = vidaUtil * 12
//     var taxaDepreciacaoAnual = (valorEquipamento - valorSucata) / vidaTotal;
//     var depreciacaoTotal = taxaDepreciacaoAnual * tempoUso;
//     var taxaDepreciacaoMensal = depreciacaoTotal / 12
//     var resultadoAnual = "Depreciacao Total Anual: R$" + depreciacaoTotal.toFixed(2);
//     var resultadoMensal = "Depreciacao Total Mensal: R$" + taxaDepreciacaoMensal.toFixed(2);


//     document.getElementById("resultado1").innerHTML = resultadoAnual;
//     document.getElementById("resultado2").innerHTML = resultadoMensal;

// }

// document.addEventListener("keypress", function(e) {
//     if(e.key === 'Enter') {

//         const btn = document.querySelector(".btn");
        
//         btn.click();

//     } 
// });

// document.addEventListener("DOMContentLoaded", function() {
//     // Aguarda o carregamento completo do DOM
  
//     // Adiciona um ouvinte de evento ao botão
//     document.getElementById("limparCampos").addEventListener("click", function() {
//       // Limpa os valores dos campos de entrada
//       document.getElementById("equipamento").value = "";
//       document.getElementById("sucata").value = "";
//       document.getElementById("vida_util").value = "";
//       document.getElementById("tempo_uso").value = "";
//       document.getElementById("resultado1").value = "";
//       document.getElementById("resultado2").value = "";
//     });
//   });

function calculo() {
    var valorEquipamento = parseFloat(document.getElementById("equipamento").value);
    var valorSucata = parseFloat(document.getElementById("sucata").value);
    var vidaUtil = parseFloat(document.getElementById("vida_util").value);
    var tempoUso = parseFloat(document.getElementById("tempo_uso").value);

    if (
        isNaN(valorEquipamento) ||
        isNaN(valorSucata) ||
        isNaN(vidaUtil) ||
        isNaN(tempoUso)
    ) {
        alert("Digite Números Válidos");
        return;
    }

    var vidaTotal = vidaUtil * 12;
    var taxaDepreciacaoAnual = (valorEquipamento - valorSucata) / vidaTotal;
    var depreciacaoTotal = taxaDepreciacaoAnual * tempoUso;
    var taxaDepreciacaoMensal = depreciacaoTotal / 12;
    var resultadoAnual = "Depreciação Total Anual: R$" + depreciacaoTotal.toFixed(2);
    var resultadoMensal = "Depreciação Total Mensal: R$" + taxaDepreciacaoMensal.toFixed(2);

    document.getElementById("resultado1").value = resultadoAnual;
    document.getElementById("resultado2").value = resultadoMensal;
}

document.addEventListener("keypress", function(e) {
    if (e.key === 'Enter') {
        calculo();
    }
});

document.addEventListener("DOMContentLoaded", function() {
    // Aguarda o carregamento completo do DOM
  
    // Adiciona um ouvinte de evento ao botão
    document.getElementById("limparCampos").addEventListener("click", function() {
      // Limpa os valores dos campos de entrada e resultados
      document.getElementById("equipamento").value = "";
      document.getElementById("sucata").value = "";
      document.getElementById("vida_util").value = "";
      document.getElementById("tempo_uso").value = "";
      document.getElementById("resultado1").value = "";
      document.getElementById("resultado2").value = "";
    });
});
