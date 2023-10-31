import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, NativeModules, TouchableOpacity } from 'react-native';
import favicon from './assets/favicon.png'
import xmlSat from './services/service_xmlSAT'
var NativeModulesE1 = NativeModules.ToastModules;
import PrinterService from './services/service_printer';
import { useState } from 'react';
export default function App() {
  console.log('Native modules: ', NativeModulesE1);
  const printerService = new PrinterService();


  const [dataPizza, setPizza] = useState([
    {
      name: 'Calabresa',
      valueItem: 10,
      quantity: 2,
      bordas: 'Frango com catupiry'
    },
    {
      name: 'Frango',
      valueItem: 17,
      quantity: 1,

    },
    {
      name: 'Quatro queijos',
      valueItem: 10,
      quantity: 2,
      bordas: 'quatro-queijos'
    }
  ])

  function handlerPrinter() {
    var data = new Date()
    var datahour = new Date().toLocaleTimeString('pt-BR')
    const datanow = data.toLocaleDateString('pt-BR')
    console.log(datanow)
    printerService.sendStartConnectionPrinterIntern()
    printerService.sendPrinterText('Cantinho da Praça       ', '1', true, false, 'Tahoma', 2)
    printerService.sendPrinterText('CNPJ: 26.181.882/0001-22       ', '1', false, false, 'Tahoma', 14)
    printerService.sendPrinterText(`Data:${datanow}     ${datahour} `, '1', false, false, 'Tahoma', 8)
    printerService.sendPrinterText(`------------------------------- `, '1', false, false, 'Tahoma', 8)
    printerService.jumpLine(4)
    dataPizza.map((item, index) => {
      printerService.sendPrinterText(`Pizza:${item.name} x${item.quantity}    R$${item.valueItem} `, '1', true, false, 'Tahoma', 12)
    item.bordas ?  printerService.sendPrinterText(`Adicionais:                     `, '1', true, false, 'Tahoma', 12) : null

      item.bordas ? printerService.sendPrinterText(`Borda ${item.bordas} `, '10', false, false, 'Tahoma', 9) : null
      printerService.sendPrinterText(`------------------------------- `, '1', false, false, 'Tahoma', 8)
      printerService.jumpLine(1)
    })
    printerService.cutPaper(20)
    printerService.printerStop()
  }


  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => handlerPrinter()}><Text>Imprimir</Text></TouchableOpacity>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  ); z
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
