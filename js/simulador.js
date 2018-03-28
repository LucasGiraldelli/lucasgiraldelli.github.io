var response;

function chamaPerguntaUm(){
  document.getElementById("pergunta1").style.display="block";
  document.getElementById("pergunta2").style.display="none";
  document.getElementById("pergunta10").style.display="none";
}
function chamaPerguntaDoisResidencia(){
  document.getElementById("residencia").checked = true;
  document.getElementById("empresa").checked = false;
  // document.getElementById("integralHome").style.display="block";
  // document.getElementById("integralIndustrias").style.display="none";
  // document.getElementById("integralNegocios").style.display="none";
  setTimeout(function(){chamaPerguntaDois();}, 1000);
response+=",Residência";
}
function chamaPerguntaDoisEmpresa(){
  document.getElementById("empresa").checked = true;
  document.getElementById("residencia").checked = false;
  // document.getElementById("integralNegocios").style.display="block";
  // document.getElementById("integralHome").style.display="none";
  // document.getElementById("integralIndustrias").style.display="none";
  setTimeout(function(){chamaPerguntaDez();}, 1000);
  response+=",Empresa";
}

function chamaPerguntaDois(){
  document.getElementById("pergunta2").style.display="block";
  document.getElementById("pergunta1").style.display="none";
  document.getElementById("pergunta3").style.display="none";

}

function chamaPerguntaTresApartamento(){
  document.getElementById("apartamento").checked = true;
  document.getElementById("casa").checked = false;
  setTimeout(function(){chamaPerguntaTres();}, 1000);
      response+=",Apartamento";
}

function chamaPerguntaTresCasa(){
  document.getElementById("casa").checked = true;
  document.getElementById("apartamento").checked = false;
  setTimeout(function(){chamaPerguntaTres();}, 1000);
    response+=",Casa";
}

function chamaPerguntaTres(){
  document.getElementById("pergunta2").style.display="none";
  document.getElementById("pergunta3").style.display="block";
  document.getElementById("pergunta4").style.display="none";
}

function chamaPerguntaQuatroHabitual(){
  document.getElementById("habitual").checked = true;
  document.getElementById("segunda").checked = false;
  setTimeout(function(){chamaPerguntaQuatro();}, 1000);
  response+=",Residência";
}

function chamaPerguntaQuatroSegunda(){
  document.getElementById("segunda").checked = true;
  document.getElementById("habitual").checked = false;
  setTimeout(function(){chamaPerguntaQuatro();}, 1000);
    response+=",Segunda Residência";
}

function chamaPerguntaQuatro(){
  document.getElementById("pergunta3").style.display="none";
  document.getElementById("pergunta4").style.display="block";
  document.getElementById("pergunta5").style.display="none";
}

function chamaPerguntaCincoDentro(){
  document.getElementById("dentro").checked = true;
  document.getElementById("fora").checked = false;
  setTimeout(function(){chamaPerguntaCinco();}, 1000);
  response+=",Residência Dentro do núcleo urbano";
}

function chamaPerguntaCincoFora(){
  document.getElementById("fora").checked = true;
  document.getElementById("dentro").checked = false;
  setTimeout(function(){chamaPerguntaCinco();}, 1000);
    response+=",Residência Fora do núcleo urbano";
}

function chamaPerguntaCinco(){
  document.getElementById("pergunta4").style.display="none";
  document.getElementById("pergunta5").style.display="block";
  document.getElementById("pergunta6").style.display="none";
}

function chamaPerguntaSeisApe(){
  document.getElementById("ape").checked = true;
  document.getElementById("vigiada").checked = false;
  document.getElementById("naovigiada").checked = false;
  setTimeout(function(){chamaPerguntaSeis();}, 1000);
    response+=",Ir até Residência Andando";
}

function chamaPerguntaSeisVigiada(){
  document.getElementById("vigiada").checked = true;
  document.getElementById("ape").checked = false;
  document.getElementById("naovigiada").checked = false;
  setTimeout(function(){chamaPerguntaSeis();}, 1000);
    response+=",Residência Vigiada";
}

function chamaPerguntaSeisNaoVigiada(){
  document.getElementById("naovigiada").checked = true;
  document.getElementById("ape").checked = false;
  document.getElementById("vigiada").checked = false;
  setTimeout(function(){chamaPerguntaSeis();}, 1000);
  response+=",Residência Não vigiada";
}

function chamaPerguntaSeis(){
  document.getElementById("pergunta5").style.display="none";
  document.getElementById("pergunta6").style.display="block";
  document.getElementById("pergunta7").style.display="none";
}

function chamaPerguntaSeteJardimTerreno(){
  document.getElementById("jardimterreno").checked = true;
  document.getElementById("varandaterraco").checked = false;
  document.getElementById("naopossui").checked = false;
  setTimeout(function(){chamaPerguntaSete();}, 1000);
  response+=",Acesso secundário jardim ou terreno";
}

function chamaPerguntaSeteVarandaTerraco(){
  document.getElementById("varandaterraco").checked = true;
  document.getElementById("jardimterreno").checked = false;
  document.getElementById("naopossui").checked = false;
  setTimeout(function(){chamaPerguntaSete();}, 1000);
  response+=",Acesso secundário Varanda ou Terraço";
}

function chamaPerguntaSeteNaoPossui(){
  document.getElementById("naopossui").checked = true;
  document.getElementById("jardimterreno").checked = false;
  document.getElementById("varandaterraco").checked = false;
  setTimeout(function(){chamaPerguntaSete();}, 1000);
    response+=",Acesso secundário nâo possui";
}

function chamaPerguntaSete(){
  document.getElementById("pergunta6").style.display="none";
  document.getElementById("pergunta7").style.display="block";
  document.getElementById("pergunta8").style.display="none";
}

function chamaPerguntaOitoSimPerguntaSete(){
  document.getElementById("simpergunta7").checked = true;
  document.getElementById("naopergunta7").checked = false;
  setTimeout(function(){chamaPerguntaOito();}, 1000);
    response+=",Janelas possuem grade";
}

function chamaPerguntaOitoNaoPerguntaSete(){
  document.getElementById("naopergunta7").checked = true;
  document.getElementById("simpergunta7").checked = false;
  setTimeout(function(){chamaPerguntaOito();}, 1000);
    response+=",Janelas não possuem grade";
}

function chamaPerguntaOito(){
  document.getElementById("pergunta7").style.display="none";
  document.getElementById("pergunta8").style.display="block";
  document.getElementById("pergunta9").style.display="none";
}

function chamaPerguntaNoveSempreHaAlguem(){
  document.getElementById("semprehaalguem").checked = true;
  document.getElementById("menosduashoras").checked = false;
  document.getElementById("entreduasecinco").checked = false;
  document.getElementById("maisdecincohoras").checked = false;
  setTimeout(function(){chamaPerguntaNove();}, 1000);
    response+=",Sempre há alguem na casa";
}

function chamaPerguntaNoveMenosDuasHoras(){
  document.getElementById("menosduashoras").checked = true;
  document.getElementById("semprehaalguem").checked = false;
  document.getElementById("entreduasecinco").checked = false;
  document.getElementById("maisdecincohoras").checked = false;
  setTimeout(function(){chamaPerguntaNove();}, 1000);
    response+=",Há alguem menos de 2 horas por dia";
}

function chamaPerguntaNoveEntreQuaseCinco(){
  document.getElementById("entreduasecinco").checked = true;
  document.getElementById("semprehaalguem").checked = false;
  document.getElementById("menosduashoras").checked = false;
  document.getElementById("maisdecincohoras").checked = false;
  setTimeout(function(){chamaPerguntaNove();}, 1000);
  response+=",Há alguem entre 2 e 5 horas";
}

function chamaPerguntaNoveMaisDeCincoHoras(){
  document.getElementById("maisdecincohoras").checked = true;
  document.getElementById("semprehaalguem").checked = false;
  document.getElementById("menosduashoras").checked = false;
  document.getElementById("entreduasecinco").checked = false;
  setTimeout(function(){chamaPerguntaNove();}, 1000);
    response+=",Há alguem  mais de 5 horas";
}

function chamaPerguntaNove(){
  document.getElementById("pergunta8").style.display="none";
  document.getElementById("pergunta9").style.display="block";
}

function chamaPerguntaFimSimPerguntaNove(){
  document.getElementById("simpergunta9").checked = true;
  document.getElementById("naopergunta9").checked = false;
  setTimeout(function(){chamaPerguntaFim();}, 1000);
}

function chamaPerguntaFimNaoPerguntaNove(){
  document.getElementById("naopergunta9").checked = true;
  document.getElementById("simpergunta9").checked = false;
  setTimeout(function(){chamaPerguntaFim();}, 1000);
}


function chamaPerguntaDez(){
  document.getElementById("pergunta1").style.display="none";
  document.getElementById("pergunta10").style.display="block";
  document.getElementById("pergunta11").style.display="none";
}

function chamaPerguntaOnzeRua(){
  document.getElementById("rua").checked = true;
  document.getElementById("centrocomercial").checked = false;
  document.getElementById("poligonoindustrial").checked = false;
  document.getElementById("edificio").checked = false;
  setTimeout(function(){chamaPerguntaOnze();}, 1000);
    response+=",Empresa é Comércio de Rua";
}

function chamaPerguntaOnzeCentroComercial(){
  document.getElementById("centrocomercial").checked = true;
  document.getElementById("rua").checked = false;
  document.getElementById("poligonoindustrial").checked = false;
  document.getElementById("edificio").checked = false;
  setTimeout(function(){chamaPerguntaOnze();}, 1000);
    response+=",Empresa é Centro Comercial";
}

function chamaPerguntaOnzePoligonoIndustrial(){
  document.getElementById("poligonoindustrial").checked = true;
  document.getElementById("rua").checked = false;
  document.getElementById("centrocomercial").checked = false;
  document.getElementById("edificio").checked = false;
  setTimeout(function(){chamaPerguntaOnze();}, 1000);
    response+=",Empresa é Fábrica Poligono industrial";
}

function chamaPerguntaOnzeEdificio(){
  document.getElementById("edificio").checked = true;
  document.getElementById("rua").checked = false;
  document.getElementById("centrocomercial").checked = false;
  document.getElementById("poligonoindustrial").checked = false;
  setTimeout(function(){chamaPerguntaOnze();}, 1000);
  response+=",Emrpresa em escritório em um edifício empresarial";
}

function chamaPerguntaOnze(){
  document.getElementById("pergunta10").style.display="none";
  document.getElementById("pergunta11").style.display="block";
  document.getElementById("pergunta12").style.display="none";
}

function chamaPerguntaDozeDentroCidade(){
  document.getElementById("dentrocidade").checked = true;
  document.getElementById("foracidade").checked = false;
  setTimeout(function(){chamaPerguntaDoze();}, 1000);
    response+=",Empresa dentro da cidade";
}

function chamaPerguntaDozeForaCidade(){
  document.getElementById("foracidade").checked = true;
  document.getElementById("dentrocidade").checked = false;
  setTimeout(function(){chamaPerguntaDoze();}, 1000);
    response+=",Empresa Fora da cidade";
}

function chamaPerguntaDoze(){
  document.getElementById("pergunta11").style.display="none";
  document.getElementById("pergunta12").style.display="block";
  document.getElementById("pergunta13").style.display="none";
}

function chamaPerguntaTrezeUmFuncionario(){
  document.getElementById("umfuncionario").checked = true;
  document.getElementById("doisacinco").checked = false;
  document.getElementById("maisdecinco").checked = false;
  setTimeout(function(){chamaPerguntaTreze();}, 1000);

  response+=",Possui Um funcionario";
}
function chamaPerguntaTrezeDoisaCinco(){
  document.getElementById("doisacinco").checked = true;
  document.getElementById("umfuncionario").checked = false;
  document.getElementById("maisdecinco").checked = false;
  setTimeout(function(){chamaPerguntaTreze();}, 1000);
  response+=",Possui Dois a Cinco funcionario";
}
function chamaPerguntaTrezeMaisDeCinco(){
  document.getElementById("maisdecinco").checked = true;
  document.getElementById("umfuncionario").checked = false;
  document.getElementById("doisacinco").checked = false;
  setTimeout(function(){chamaPerguntaTreze();}, 1000);
  response+=",Possui Mais de cinco funcionario";
}

function chamaPerguntaTreze(){
  document.getElementById("pergunta12").style.display="none";
  document.getElementById("pergunta13").style.display="block";
  document.getElementById("pergunta14").style.display="none";
}

function chamaPerguntaQuatorzeManha(){
  document.getElementById("manha").checked = true;
  document.getElementById("tarde").checked = false;
  document.getElementById("manhatarde").checked = false;
  document.getElementById("noturno").checked = false;
  document.getElementById("24horas").checked = false;
  setTimeout(function(){chamaPerguntaQuatorze();}, 1000);
  response+=",Empresa funciona somente pela manhã";
}
function chamaPerguntaQuatorzeTarde(){
  document.getElementById("tarde").checked = true;
  document.getElementById("manha").checked = false;
  document.getElementById("manhatarde").checked = false;
  document.getElementById("noturno").checked = false;
  document.getElementById("24horas").checked = false;
  setTimeout(function(){chamaPerguntaQuatorze();}, 1000);
    response+=",Empresa funciona somente a tarde";
}
function chamaPerguntaQuatorzeManhaTarde(){
  document.getElementById("manhatarde").checked = true;
  document.getElementById("tarde").checked = false;
  document.getElementById("manha").checked = false;
  document.getElementById("noturno").checked = false;
  document.getElementById("24horas").checked = false;
  setTimeout(function(){chamaPerguntaQuatorze();}, 1000);
    response+=",Empresa funciona manhã e tarde";
}
function chamaPerguntaQuatorzeNoturno(){
  document.getElementById("noturno").checked = true;
  document.getElementById("tarde").checked = false;
  document.getElementById("manhatarde").checked = false;
  document.getElementById("manha").checked = false;
  document.getElementById("24horas").checked = false;
  setTimeout(function(){chamaPerguntaQuatorze();}, 1000);
    response+=",Empresa noturno";
}
function chamaPerguntaQuatorzeVinteQuatroHoras(){
  document.getElementById("24horas").checked = true;
  document.getElementById("tarde").checked = false;
  document.getElementById("manhatarde").checked = false;
  document.getElementById("noturno").checked = false;
  document.getElementById("manha").checked = false;
  setTimeout(function(){chamaPerguntaQuatorze();}, 1000);
    response+=",Empresa 24 horas";
}

function chamaPerguntaQuatorze(){
  document.getElementById("pergunta13").style.display="none";
  document.getElementById("pergunta14").style.display="block";
  document.getElementById("pergunta15").style.display="none";
}

function chamaPerguntaQuinzeGrandeValor(){
  document.getElementById("grandevalor").checked = true;
  document.getElementById("mediovalor").checked = false;
  document.getElementById("baixovalor").checked = false;
  setTimeout(function(){chamaPerguntaQuinze();}, 1000);

    response+=",Empresa comercializa grande valor";
}
function chamaPerguntaQuinzeMedioValor(){
  document.getElementById("mediovalor").checked = true;
  document.getElementById("grandevalor").checked = false;
  document.getElementById("baixovalor").checked = false;
  setTimeout(function(){chamaPerguntaQuinze();}, 1000);
  response+=",Empresa comercializa médio valor";
}
function chamaPerguntaQuinzeBaixoValor(){
  document.getElementById("baixovalor").checked = true;
  document.getElementById("mediovalor").checked = false;
  document.getElementById("grandevalor").checked = false;
  setTimeout(function(){chamaPerguntaQuinze();}, 1000);
  response+=",Empresa comercializa baixo valor";
}

function chamaPerguntaQuinze(){
  document.getElementById("pergunta14").style.display="none";
  document.getElementById("pergunta15").style.display="block";
  document.getElementById("pergunta16").style.display="none";
}
function perguntaFimSimQuinze(){
  document.getElementById("pergunta15sim").checked = true;
  document.getElementById("pergunta15nao").checked = false;
  // document.getElementById("integralIndustrias").style.display="block";
  // document.getElementById("integralNegocios").style.display="none";
  // document.getElementById("integralHome").style.display="none";
  setTimeout(function(){chamaPerguntaFim();}, 1000);
  response+=",Negócios próximos têm sido";
}
function perguntaFimNaoQuinze(){
  document.getElementById("pergunta15nao").checked = true;
  document.getElementById("pergunta15sim").checked = false;
  setTimeout(function(){chamaPerguntaFim();}, 1000);
  response+=",Negócios próximos não há roubos ";
}

function chamaPerguntaFim(){
  setTimeout(function(){
    document.getElementById("pergunta9").style.display="none";
    document.getElementById("pergunta15").style.display="none";
    document.getElementById("perguntaFim").style.display="block";}
    , 1000);
}

function print_response(){
  console.log("response "+response);


}
