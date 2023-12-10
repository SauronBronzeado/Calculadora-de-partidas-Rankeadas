// Calculadora de partidas Rankeadas

// --------------------------------------------------------------------------------------
// Declaração Variaveis
let Level = " "
let Score = 0
let TotalVictorys = 0;
let TotalDefeats = 0;
let games = ["v","v", "d","d","d","v","d","d","v","d","v","d"] // historico partidas

// --------------------------------------------------------------------------------------
// Calcula pontos de Vitorias e Derrotas
for(let i=0; i < games.length; i++)
{
    if(games[i] === "v") TotalVictorys += 10 // Vitorias + 10 pontos
    if(games[i] === "d") TotalDefeats += 5   // Derrotas - 5 pontos
}

// --------------------------------------------------------------------------------------
// Function Calcula Pontos Totais = Vitorias - Derrotas
Score = Ranck(TotalVictorys,TotalDefeats)

// --------------------------------------------------------------------------------------
// Atribuição de Nivel
if      (Score > 100)   Level = "Imortal"
else if (Score > 90)    Level = "Lendário"
else if (Score > 80)    Level = "Diamante"
else if (Score > 50)    Level = "Ouro"
else if (Score > 20)    Level = "Prata"
else if (Score > 10)    Level = "Bronze"
else                    Level = "Ferro"

// --------------------------------------------------------------------------------------
// Declaração de Funções
function Ranck(QuantVictory, QuantDefeat){
return QuantVictory - QuantDefeat
}


// --------------------------------------------------------------------------------------
// Saida Terminal
console.log(`O Herói tem saldo de ${Score} pontos, Está no nível de ${Level}`)