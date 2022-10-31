function primeiroTurno() {
  axios
    .get(
      "https://resultados.tse.jus.br/oficial/ele2022/544/dados-simplificados/br/br-c0001-e000544-r.json"
    )
    .then((response) => {
      console.log("Resultados 1° turno");
      console.table(
        response.data.cand.map((teste) => ({
          Partido: teste.cc,
          Status: teste.dvt,
          Numero: teste.n,
          nomeCandidato: teste.nm,
          Posicao: teste.seq,
          Porcentagem: teste.pvap,
          totalVotos: teste.vap,
          Vice: teste.nv,
        }))
      );
    });
}

primeiroTurno();
//setTimeout(primeiroTurno, 60000 ) //atualiza a cada 60 segundos

function segundoTurno() {
  axios
    .get(
      "https://resultados.tse.jus.br/oficial/ele2022/545/dados-simplificados/br/br-c0001-e000545-r.json"
    )
    .then((response) => {
      console.log("Resultados 2° turno");
      console.table(
        response.data.cand.map((element) => ({
          Partido: element.cc,
          Status: element.dvt,
          Numero: element.n,
          nomeCandidato: element.nm,
          Posicao: element.seq,
          Porcentagem: element.pvap,
          totalVotos: element.vap,
          Vice: element.nv,
        }))
      );
    });
}

segundoTurno();
