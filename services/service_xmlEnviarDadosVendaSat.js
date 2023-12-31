export default class xmlEnviarDadosVendaSat {
  constructor() {
    this.xml =
      '<?xml version="1.0"?>' +
      '<CFe>' +
      '<infCFe versaoDadosEnt="0.07">' +
      '<ide>' +
      '<CNPJ>16716114000172</CNPJ>' +
      '<signAC>SGR-SAT SISTEMA DE GESTAO E RETAGUARDA DO SAT</signAC>' +
      '<numeroCaixa>001</numeroCaixa>' +
      '</ide>' +
      '<emit>' +
      '<CNPJ>14200166000166</CNPJ>' +
      '<IE>111111111111</IE>' +
      '<indRatISSQN>N</indRatISSQN>' +
      '</emit>' +
      '<dest>' +
      '</dest>' +
      '<det nItem="1">' +
      '<prod>' +
      '<cProd>00000000000001</cProd>' +
      '<xProd>PRODUTO NFCE 1</xProd>' +
      '<NCM>94034000</NCM>' +
      '<CFOP>5102</CFOP>' +
      '<uCom>UN</uCom>' +
      '<qCom>1.0000</qCom>' +
      '<vUnCom>3.51</vUnCom>' +
      '<indRegra>T</indRegra>' +
      '</prod>' +
      '<imposto>' +
      '<ICMS>' +
      '<ICMS00>' +
      '<Orig>0</Orig>' +
      '<CST>00</CST>' +
      '<pICMS>7.00</pICMS>' +
      '</ICMS00>' +
      '</ICMS>' +
      '<PIS>' +
      '<PISAliq>' +
      '<CST>01</CST>' +
      '<vBC>6.51</vBC>' +
      '<pPIS>0.0165</pPIS>' +
      '</PISAliq>' +
      '</PIS>' +
      '<COFINS>' +
      '<COFINSAliq>' +
      '<CST>01</CST>' +
      '<vBC>6.51</vBC>' +
      '<pCOFINS>0.0760</pCOFINS>' +
      '</COFINSAliq>' +
      '</COFINS>' +
      '</imposto>' +
      '</det>' +
      '<total>' +
      '<DescAcrEntr>' +
      '<vDescSubtot>0.51</vDescSubtot>' +
      '</DescAcrEntr>' +
      '<vCFeLei12741>0.56</vCFeLei12741>' +
      '</total>' +
      '<pgto>' +
      '<MP>' +
      '<cMP>01</cMP>' +
      '<vMP>6.51</vMP>' +
      '</MP>' +
      '</pgto>' +
      '<infAdic>' +
      '<infCpl>Trib aprox R$ 0,36 federal, R$ 1,24 estadual e R$ 0,00 municipal CAIXA: 001 OPERADOR: ROOT</infCpl>' +
      '</infAdic>' +
      '</infCFe>' +
      '</CFe>';
  }

  getXmlEnviarDadosVendaSat() {
    return this.xml;
  }
}
