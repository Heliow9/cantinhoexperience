import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, ActivityIndicator, Modal, Pressable, ImageBackground, NativeModules, SafeAreaView } from 'react-native';
import favicon from './assets/favicon.png'
import xmlSat from './services/service_xmlSAT'
// import PrinterService from './services/service_printer';
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState, useRef } from 'react';
import drink from './assets/drink.png'
import pizza from './assets/pizza.png'
import pizza2 from './assets/twoflavor.png'
import cantinhobg from './assets/cantinhobk2.jpg'
import hamburguer from './assets/hamburguer.png'
import snacks from './assets/snacks.png'
import logocantinho from './assets/logocantinho.png'

export default function App() {
  // console.log('Native modules: ', NativeModulesE1);
  // var NativeModulesE1 = NativeModules.ToastModules;
  // const printerService = new PrinterService();





  const twoFlavorReturn = [
    {
      name: 'Calabresa',
      value: 29,
      detail: '(Queijo Mussarela, calabresa, cebola e oregano)',
      id: 1
    },
    {
      name: 'Presunto',
      value: 31,
      detail: '(Queijo Mussarela, Presunto, cebola e oregano)',
      id: 2
    },
    {
      name: 'Frango',
      value: 32,
      detail: '(Queijo Mussarela, Frango, cebola e oregano)',
      id: 3
    },
    {
      name: 'Napolitana',
      value: 33,
      detail: '(Queijo Mussarela, tomate e oregano)',
      id: 4
    },
    {
      name: 'Baianinha',
      value: 33,
      detail: '(Queijo Mussarela, Calabresa picadinha, pimenta do reino, cebola e oregano)',
      id: 5
    },
    {
      name: 'Marguerita',
      value: 34,
      detail: '(Queijo Mussarela, tomate e manjericão)',
      id: 6
    },
    {
      name: 'Milho',
      value: 38,
      detail: '(Queijo Mussarela, milho e oregano)',
      id: 7
    },
    {
      name: 'Mista',
      value: 35,
      detail: '(Queijo Mussarela, Calabresa picadinha, frango, presunto, milho, ervilha e orégano)',
      id: 8
    },
    {
      name: 'Frango com Catupiry',
      value: 35,
      detail: '(Queijo Mussarela, Frango, catupiry, azeitona e oregano)',
      id: 9
    },
    {
      name: 'Frango com Catupiry',
      value: 35,
      detail: '(Queijo Mussarela, Frango, catupiry, azeitona e oregano)',
      id: 10
    },
  ]


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

  const [pizzas, setPizzas] = useState([
    {
      name: 'Calabresa',
      value: 29,
      detail: '(Queijo Mussarela, calabresa, cebola e oregano)',
      id: 1
    },
    {
      name: 'Presunto',
      value: 31,
      detail: '(Queijo Mussarela, Presunto, cebola e oregano)',
      id: 2
    },
    {
      name: 'Frango',
      value: 32,
      detail: '(Queijo Mussarela, Frango, cebola e oregano)',
      id: 3
    },
    {
      name: 'Napolitana',
      value: 33,
      detail: '(Queijo Mussarela, tomate e oregano)',
      id: 4
    },
    {
      name: 'Baianinha',
      value: 33,
      detail: '(Queijo Mussarela, Calabresa picadinha, pimenta do reino, cebola e oregano)',
      id: 5
    },
    {
      name: 'Marguerita',
      value: 34,
      detail: '(Queijo Mussarela, tomate e manjericão)',
      id: 6
    },
    {
      name: 'Milho',
      value: 38,
      detail: '(Queijo Mussarela, milho e oregano)',
      id: 7
    },
    {
      name: 'Mista',
      value: 35,
      detail: '(Queijo Mussarela, Calabresa picadinha, frango, presunto, milho, ervilha e orégano)',
      id: 8
    },
    {
      name: 'Frango com Catupiry',
      value: 35,
      detail: '(Queijo Mussarela, Frango, catupiry, azeitona e oregano)',
      id: 9
    },
    {
      name: 'Frango com Catupiry',
      value: 35,
      detail: '(Queijo Mussarela, Frango, catupiry, azeitona e oregano)',
      id: 10
    },
  ])


  const [pizzasTwoFlavor, setPizzasTwoFlavor] = useState([
    {
      name: 'Calabresa',
      value: 29,
      detail: '(Queijo Mussarela, calabresa, cebola e oregano)',
      id: 1
    },
    {
      name: 'Presunto',
      value: 31,
      detail: '(Queijo Mussarela, Presunto, cebola e oregano)',
      id: 2
    },
    {
      name: 'Frango',
      value: 32,
      detail: '(Queijo Mussarela, Frango, cebola e oregano)',
      id: 3
    },
    {
      name: 'Napolitana',
      value: 33,
      detail: '(Queijo Mussarela, tomate e oregano)',
      id: 4
    },
    {
      name: 'Baianinha',
      value: 33,
      detail: '(Queijo Mussarela, Calabresa picadinha, pimenta do reino, cebola e oregano)',
      id: 5
    },
    {
      name: 'Marguerita',
      value: 34,
      detail: '(Queijo Mussarela, tomate e manjericão)',
      id: 6
    },
    {
      name: 'Milho',
      value: 38,
      detail: '(Queijo Mussarela, milho e oregano)',
      id: 7
    },
    {
      name: 'Mista',
      value: 35,
      detail: '(Queijo Mussarela, Calabresa picadinha, frango, presunto, milho, ervilha e orégano)',
      id: 8
    },
    {
      name: 'Frango com Catupiry',
      value: 35,
      detail: '(Queijo Mussarela, Frango, catupiry, azeitona e oregano)',
      id: 9
    },
    {
      name: 'Frango com Catupiry',
      value: 35,
      detail: '(Queijo Mussarela, Frango, catupiry, azeitona e oregano)',
      id: 10
    },
  ])

  const [pizzasSecondFlavorItems, setPizzasTwoFlavorItems] = useState()
  const [pizzasTwoFist, setPizzasTwoFist] = useState([])
  const [pizzasTwoSecond, setPizzasTwoSecond] = useState([])
  const [firstflavor, setFirstFlavor] = useState()
  const [secondflavor, setSecondFlavor] = useState()
  const [drinks, setDrinks] = useState([
    {
      name: 'Coca-cola 1LT',
      value: 7.80,
      id: 1
    },
    {
      name: 'Fanta 1LT',
      value: 7.80,
      id: 2
    },
    {
      name: 'Sprite 1LT',
      value: 7.80,
      id: 3
    },
    {
      name: 'Kuat 1LT',
      value: 7.80,
      id: 4
    },
    {
      name: 'Agua Mineral sem gás',
      value: 7.80,
      id: 5
    },
    {
      name: 'Agua Mineral com gás',
      value: 7.80,
      id: 6
    },

  ])

  const [producSelections, setProducSelections] = useState([])

  const [additionals, Setaddtionals] = useState([
    {
      Aditionalname: 'Catupiry',
      value: 8,
      id: 1
    },
    {
      Aditionalname: 'Cheddar',
      value: 7.80,
      id: 2
    },
    {
      Aditionalname: 'Quatro Queijos',
      value: 8,
      id: 3
    },


  ])


  const [bordas, SetBordas] = useState([
    {
      bordasName: ' Bordas de Catupiry',
      value: 3.80,
      id: 1
    },
    {
      bordasName: 'Bordas de Cheddar',
      value: 11.80,
      id: 2
    },
    {
      bordasName: 'Bordas de Quatro Queijos',
      value: 18,
      id: 3
    },


  ])
  const [taxm, setTax] = useState([
    {
      name: 'Embalagem',
      value: 2
    }
  ])


  const [menu, setMenu] = useState(pizzas)


  // selecionando itens da pizzas 
  const [selectedPizza, setSelectedPizza] = useState()
  const [selectedAditional, setSelectedAdtional] = useState()
  const [selectedBordas, setSelectedBordas] = useState()
  const [PaymentPix, setPaymentPix] = useState(false)
  const [statusQr, setStatusQr] = useState()
  const [paymentData, setPaymentData] = useState()
  const [totalTimeInSeconds, setTotaltimeInSeconds] = useState(5)
  const minutes = Math.floor(totalTimeInSeconds / 60)
  const secondes = totalTimeInSeconds % 60
  const [cartItems, setItemsCart] = useState([])
  const [totalValue, setTotalValue] = useState(0)
  const [increment, setIncrement] = useState(0)
  const [menuTitle, setMenuTitle] = useState()
  const [modalVisible, setModalVisible] = useState(false);

  function handlerAddtoCartFirstStep(item) {
    //adicionando item ao carrinho
    // setItemsCart([...cartItems, item])  
    setSelectedPizza(item)
    // handlerCalculateValue(item.value)
    setMenu(additionals)

  }

  function handlerAddtoCartSecondStep(adt) {
    //adicionando item ao carrinho
    // setItemsCart([...cartItems, item])  
    setSelectedAdtional(adt)
    // handlerCalculateValue(item.value)
    setMenu(bordas)

  }

  function finalStep(item) {
    if (firstflavor && secondflavor) {
      addToCartTwoFlavor(item)
      setMenu(pizzas)

    } else {
      addToCart(item)
      setMenu(pizzas)
    }

  }



  function addToCart(item) {

    item ? itemsPizza = {
      pizza: selectedPizza,
      adicional: selectedAditional,
      bordas: item ? item : null,
      travelTax: taxm
    } : itemsPizza = {
      pizza: selectedPizza,
      adicional: selectedAditional,
      travelTax: taxm
    }




    setItemsCart([...cartItems, itemsPizza])
    handlerCalculateValue(itemsPizza)
    setSelectedPizza([])
    setMenu(pizzas)
    console.log(cartItems)
  }

  function addToCartTwoFlavor(item) {

    const itemsPizza = {
      pizza: firstflavor,
      pizzatwo: secondflavor,
      adicional: selectedAditional,
      bordas: item ? item : null,
    }


    setItemsCart([...cartItems, itemsPizza])
    handlerCalculateValue(itemsPizza)
    setPizzasTwoFlavor(twoFlavorReturn)
    setMenu(pizzas)
    setFirstFlavor([])
    setSecondFlavor([])
    console.log(cartItems)
  }



  function HandlerAddTwoFirstStep(item, index) {
    if (!firstflavor) {
      setFirstFlavor(item)
    }
    const items = pizzasTwoFlavor;
    items.splice(index, 1)
    setPizzasTwoFlavor(items)
    setPizzasTwoFlavorItems(items)
    if (firstflavor) {
      setSecondFlavor(item)
      setMenu(additionals)
    }
  }


  function handlerClearCart() {
    setItemsCart([])
    setTotalValue(0)

  }

  function handlerClearItemCart(item) {
    const newItems = cartItems
    newItems.splice(item, 1)
    setItemsCart(newItems)
    setIncrement(increment + 1)
    handlerSubtrair(item)
  }

  function handlerCalculateValue(item) {


    var firstPizza = item;
    var addAdicional = firstPizza.adicional ? firstPizza.adicional.value : 0;
    var addPizza = firstPizza.pizza ? firstPizza.pizza.value : 0;
    var bordas = firstPizza.bordas ? firstPizza.bordas.value : 0;
    var initialValue = addAdicional + addPizza + bordas;
    var totalValue = cartItems.reduce(function (acc, pizza, index) {
      var adicionalValue = pizza.adicional ? pizza.adicional.value : 0;
      var bordasValue = pizza.bordas ? pizza.bordas.value : 0;
      var pizzaValue = pizza.pizza ? pizza.pizza.value : 0;
      return acc + adicionalValue + bordasValue + pizzaValue;
    }, initialValue);

    setTotalValue(totalValue)

  }

  function handlerSubtrair(initialValue) {
    var firstPizza = initialValue;
    var addAdicional = firstPizza.adicional ? firstPizza.adicional.value : 0;
    var addPizza = firstPizza.pizza ? firstPizza.pizza.value : 0;
    var bordas = firstPizza.borda ? firstPizza.borda.value : 0;
    var initialValue = addAdicional + addPizza + bordas;

    var totalValue = cartItems.reduce(function (acc, pizza, index) {
      var adicionalValue = pizza.adicional ? pizza.adicional.value : 0;
      var bordasValue = pizza.bordas ? pizza.bordas.value : 0;
      var pizzaValue = pizza.pizza ? pizza.pizza.value : 0;
      return acc - adicionalValue - bordasValue - pizzaValue;
    }, initialValue);

    setTotalValue(totalValue)


  }

  function handlerMenuTitle() {
    if (menu === pizzas) {
      return 'Pizzas de 1 sabor'
    }
    else if (menu === additionals) {
      return 'Selecione um tipo de adicional'
    } else if (menu === bordas) {
      return 'Selecione um tipo de borda'
    }
    else if (menu === pizzasTwoFlavor) {
      return 'Pizzas de 2 sabores'
    }
  }

  function handlerCreatePaymentPix() {
    // falta setar o modal.
    // setModalVisible(!modalVisible)

    if (totalValue > 8) {
      setPaymentPix(true)
      setMenu(pizzas,)
      axios.post('https://sandbox.api.pagseguro.com/orders', {

        "reference_id": "ex-00001",
        "customer": {
          "name": "Jose da Silva",
          "email": "email@test.com",
          "tax_id": "12345678909",
          "phones": [
            {
              "country": "55",
              "area": "11",
              "number": "999999999",
              "type": "MOBILE"
            }
          ]
        },
        "items": [
          {
            "name": "Pizza",
            "quantity": 1,
            "unit_amount": 500
          }
        ],
        "qr_codes": [
          {
            "amount": {
              "value": 500
            },
            "expiration_date": "2023-10-29T20:15:59-03:00"
          }
        ],
        "shipping": {
          "address": {
            "street": "Avenida Brigadeiro Faria Lima",
            "number": "1384",
            "complement": "apto 12",
            "locality": "Pinheiros",
            "city": "São Paulo",
            "region_code": "SP",
            "country": "BRA",
            "postal_code": "01452002"
          }
        },
        "notification_urls": [
          "https://meusite.com/notificacoes"
        ]

      }, { headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer 23E6B4C5F6AC445F9B1C3F5958E0E47B' } }).then((response) => {


        setPaymentPix(true)
        setStatusQr(response.data['qr_codes'][0]['links'][0]['href'])
        handlerCountPayment()

      }).catch((error) => { console.log(error); throw error })

    } else {
      console.log('valor menor que o permitido')
    }



  }

  function handlerCountPayment() {

    setTimeout(() => {
      setStatusQr(null)
      setPaymentPix(false)
      setItemsCart([])
    }, 5000)

  }


  function verifiSelectedFlavor() {
    if (!firstflavor) {
      return 'Selecione o 1º sabor'
    } else {
      return 'Selecione o 2º sabor'
    }
  }








  function handlerPrinter() {
    var data = new Date()
    var datahour = new Date().toLocaleTimeString('pt-BR')
    const datanow = data.toLocaleDateString('pt-BR')

    printerService.sendStartConnectionPrinterIntern()
    printerService.sendPrinterText('Cantinho da Praça       ', '1', true, false, 'Tahoma', 2)
    printerService.sendPrinterText('CNPJ: 26.181.882/0001-22       ', '1', false, false, 'Tahoma', 14)
    printerService.sendPrinterText(`Data:${datanow}     ${datahour} `, '1', false, false, 'Tahoma', 8)
    printerService.sendPrinterText(`------------------------------- `, '1', false, false, 'Tahoma', 8)
    printerService.jumpLine(4)
    cartItems.map((item, index) => {
      printerService.sendPrinterText(`Pizza:${item.name} x1    R$${item.value} `, '1', true, false, 'Tahoma', 12)
      item.bordas ? printerService.sendPrinterText(`Adicionais:                     `, '1', true, false, 'Tahoma', 12) : null

      item.bordas ? printerService.sendPrinterText(`Borda ${item.bordas} `, '10', false, false, 'Tahoma', 9) : null
      printerService.sendPrinterText(`------------------------------- `, '1', false, false, 'Tahoma', 8)
      printerService.jumpLine(1)
    })
    printerService.sendPrinterText(`Forma de Pagamento: Pix`, '1', true, false, 'Tahoma', 8)
    printerService.sendPrinterText(`Total:        R$150,00`, '1', true, false, 'Tahoma', 8)
    printerService.jumpLine(10)
    printerService.sendPrinterText(`Numero do Pedido: 28130`, '1', true, false, 'Tahoma', 2)
    printerService.cutPaper(19)
    printerService.printerStop()
  }


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true} translucent={true} />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Agora me diz ai, é pra agora ou viagem? </Text>
            <Text style={styles.modalText2}>Lembrando que se for pra viagem, tomos uma taxa de acrescimo de R$2,00 por embalagem. </Text>
            <View style={styles.buttomGroupModal}>
              <Pressable
                style={styles.consumerButtom}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>É pra já!</Text>
              </Pressable>
              <Pressable
                style={styles.travelButtom}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>É pra viagem!</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <ImageBackground style={styles.topViewerBarTransparence} source={cantinhobg}>
        <View style={styles.topViewerBar}>
          <View style={styles.ViewBarLeft}>
            <Text style={styles.topBrand}>Cantinho da Praça</Text>
            <View style={styles.topMenuList}>
              <TouchableOpacity onPress={() => setMenu(pizzas)} >
                <View style={styles.buttomView}>
                  <Image source={pizza} style={styles.buttomImage} />
                  <Text style={styles.textItemButtom}>Pizza-G 1 Sabor</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => [setMenu(pizzasTwoFlavor), setFirstFlavor()]}>
                <View style={styles.buttomView}>
                  <Image source={pizza2} style={styles.buttomImage} />
                  <Text style={styles.textItemButtom}>Pizza-G 2 Sabores</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.buttomView}>
                  <Image source={hamburguer} style={styles.buttomImage} />
                  <Text style={styles.textItemButtom}>Hamburguer</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.buttomView}>
                  <Image source={snacks} style={styles.buttomImage} />
                  <Text style={styles.textItemButtom}>Snacks</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setMenu(drinks)} >
                <View style={styles.buttomView}>
                  <Image source={drink} style={styles.buttomImage} />
                  <Text style={styles.textItemButtom}>Bebidas</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <Image style={styles.logoIcon} source={logocantinho} />
          </View>
        </View>
      </ImageBackground>

      <View style={styles.bodyContainer}>
        <View>
          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.menuTitle}>{handlerMenuTitle()}</Text>
            {menu === pizzasTwoFlavor ? <Text style={styles.menuTitleSecundary}>{verifiSelectedFlavor()}</Text> : null}

          </View>
          <View style={styles.productContainer}>
            {
              menu === drinks ? <View>
                <FlatList
                  data={menu}
                  numColumns={3}
                  renderItem={(pizza) => (

                    <TouchableOpacity onPress={() => handlerAddtoCartFirstStep(pizza.item)} >
                      <View style={styles.itemViewer}>
                        <Text style={styles.flavorName}>{pizza.item.name}</Text>
                        <Text style={styles.flavorPrice}>R${pizza.item.value.toFixed(2)}</Text>
                      </View>
                    </TouchableOpacity>

                  )

                  }
                  keyExtractor={pizza => pizza.id}
                />
              </View> : null


            }
            {
              menu === pizzas ? <View>
                <FlatList
                  data={menu}
                  numColumns={3}
                  renderItem={(pizza) => (

                    <TouchableOpacity onPress={() => handlerAddtoCartFirstStep(pizza.item)} >
                      <View style={styles.itemViewer}>
                        <Text style={styles.flavorName}>{pizza.item.name}</Text>
                        <Text style={styles.flavorPrice}>R${pizza.item.value.toFixed(2)}</Text>
                      </View>
                    </TouchableOpacity>

                  )

                  }
                  keyExtractor={pizza => pizza.id}
                />
              </View> : null


            }
            {
              menu === pizzasTwoFlavor ? <View>
                <FlatList
                  data={menu}
                  numColumns={3}
                  renderItem={(pizza) => (

                    <TouchableOpacity onPress={() => HandlerAddTwoFirstStep(pizza.item, pizza.index)} >
                      <View style={styles.itemViewer}>
                        <Text style={styles.flavorName}>{pizza.item.name}</Text>
                        <Text style={styles.flavorPrice}>R${pizza.item.value.toFixed(2)}</Text>
                      </View>
                    </TouchableOpacity>

                  )

                  }
                  keyExtractor={pizza => pizza.id}
                />
              </View> : null


            }

            {
              menu === additionals ? <View>
                <FlatList
                  data={menu}
                  numColumns={3}
                  renderItem={(adtionals) => (

                    <TouchableOpacity onPress={() => handlerAddtoCartSecondStep(adtionals.item)} >
                      <View style={styles.itemViewer}>
                        <Text style={styles.flavorName}>{adtionals.item.Aditionalname}</Text>
                        <Text style={styles.flavorPrice}>R${adtionals.item.value.toFixed(2)}</Text>
                      </View>
                    </TouchableOpacity>
                  )
                  }

                  keyExtractor={adtionals => adtionals.id}
                />
              </View> : null


            }
            {
              menu === bordas ? <View>
                <FlatList
                  data={menu}
                  numColumns={3}
                  renderItem={(item, index) => (

                    <TouchableOpacity onPress={() => finalStep(item.item)} >
                      <View style={styles.itemViewer}>
                        <Text style={styles.flavorName}>{item.item.bordasName}</Text>
                        <Text style={styles.flavorPrice}>{item.item.value.toFixed(2)}</Text>
                      </View>
                    </TouchableOpacity>

                  )

                  }
                  keyExtractor={bordas => bordas.id}
                />
              </View> : null


            }

            {
              menu === additionals ? <View>
                <TouchableOpacity onPress={() => firstflavor && secondflavor ? handlerAddtoCartSecondStep() : setMenu(bordas)} >
                  <View style={styles.itemViewerCancel}>
                    <Text style={styles.flavorName} >Não desejo Adicional!</Text>
                  </View>
                </TouchableOpacity>
              </View> : null
            }


            {
              menu === bordas ? <View>
                <TouchableOpacity onPress={() => addToCart()}  >
                  <View style={styles.itemViewerCancel}>
                    <Text style={styles.flavorName}>Não desejo Bordas!</Text>
                  </View>
                </TouchableOpacity>
              </View> : null
            }
          </View>
          <View style={styles.payments}>
            <Text>Pagamentos</Text>
            <TouchableOpacity>
              <View style={styles.buttonPayment}>
                <Text style={styles.buttonPaymentText}>C.Crédito</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity >
              <View style={styles.buttonPayment}>
                <Text style={styles.buttonPaymentText}>C.Debito</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handlerCreatePaymentPix()} >
              <View style={styles.buttonPayment}>
                <Text style={styles.buttonPaymentText}>Pix - Online</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.CartContainer}>
          {
            statusQr ? <Text style={{ alignSelf: 'center' }}>Scanei o qrCode abaixo para pagamento!</Text> : <Text>Itens Adicionados:</Text>
          }

          {
            !PaymentPix ?
              cartItems.length == [] ? <View style={styles.noItem}>
                <Text style={styles.noItemCart}>Você ainda não adicionou nenhum item ao carrinho!</Text>
              </View> : <FlatList
                data={cartItems}
                extraData={increment}
                numColumns={1}
                showsVerticalScrollIndicator

                renderItem={(item, index) => (

                  <View>



                    <View style={styles.itemCart}>
                      <Text style={styles.itemCartName} >{item.item.pizza && item.item.pizzatwo ? `1/2 ${item.item.pizza.name} 1/2${item.item.pizzatwo.name}` : item.item.pizza.name} </Text>
                      <View style={styles.cartValueDecrement}>
                        <Text>R${item.item.pizza.value.toFixed(2)}</Text>
                        <View style={styles.decrement}><Text style={styles.decrementText}>-</Text></View>
                      </View>
                      <View>
                        <Text>R${item.item.pizza.value + (item.item.bordas ? item.item.bordas.value : 0) + (item.item.adicional ? item.item.adicional.value : 0)}</Text>
                        <Text>Quant: 1</Text>
                      </View>
                      <View style={styles.cartValueIncrement}>
                        <View style={styles.increment}><Text style={styles.incrementText}>+</Text></View>
                        <TouchableOpacity onPress={() => handlerClearItemCart(item.index)}>
                          <View><Ionicons name="trash-bin-outline" size={24} color="#910c0c" /></View>
                        </TouchableOpacity>

                      </View>
                    </View>
                    <View style={styles.itemDescription}><Text style={styles.itemDescriptionText}>{item.item.pizza && item.item.pizzatwo ? `1/2- ${item.item.pizza.name}${item.item.pizza.detail}  1/2- ${item.item.pizzatwo.name}${item.item.pizzatwo.detail}` : item.item.pizza.detail}</Text></View>
                    <View >
                      {item.item.bordas || item.item.adicional ? <Text style={styles.itemAditionals}>Adicionais:</Text> : null}
                      {
                        item.item.adicional ? <View style={styles.itemAditional}>
                          <Text style={styles.aditionalInfor}>{item.item.adicional.Aditionalname}</Text>
                          <Text style={styles.aditionalInfor}>R${item.item.adicional.value.toFixed(2)}</Text>
                        </View> : null
                      }
                      {
                        item.item.bordas ? <View style={styles.itemAditional}>
                          <Text style={styles.aditionalInfor}>{item.item.bordas.bordasName}</Text>
                          <Text style={styles.aditionalInfor}>R${item.item.bordas.value.toFixed(2)}</Text>
                        </View> : null
                      }
                      <View style={styles.separator}></View>
                    </View>
                  </View>
                )}
                keyExtractor={(item, index) => index}
              /> : <View style={styles.PaymentContent}>
                {
                  !statusQr ? <View>
                    <Text style={styles.progressText}>Estamos gerando seu qrcode pix aguarde um instante!</Text>
                    <ActivityIndicator size="large" color='#315236' />
                  </View> :
                    <View>
                      {
                        <View>
                          <Image source={statusQr ? { uri: statusQr } : pizza} style={styles.qrcodeImage} />
                          <Text style={{ alignSelf: 'center', marginBottom: 10 }}>Seu pagamento foi gerado no valor de R${totalValue.toFixed(2)}</Text>
                          <TouchableOpacity style={styles.cancelPayment}>
                            <View><Text style={styles.textCancelPayment}>Cancelar pagamento  {minutes.toString().padStart(2, '0')} : {secondes.toString().padStart(2, '0')}  </Text></View>
                          </TouchableOpacity>
                        </View>
                      }
                    </View>
                }


              </View>
          }




          <View style={styles.cartInfors}>
            <Text>Subtotal: R${totalValue.toFixed(2)}</Text>
            <TouchableOpacity onPress={() => handlerClearCart()}>
              <View>
                <Ionicons name="trash-bin-outline" size={24} color="#910c0c" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'space-between',

  },
  topViewerBar: {
    backgroundColor: '#315236',
    width: '100%',
    height: 140,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: 'center',
    resizeMode: 'cover'
  },

  ViewBarLeft: {
    height: 130,
    justifyContent: "space-between",
  },
  topBrand: {
    color: 'white',
    fontSize: 17,
    marginLeft: 10,
    marginTop: 8,
    fontWeight: 'bold'
  },

  logoIcon: {
    width: 100,
    height: 100,
    marginRight: 12,
    resizeMode: 'contain'
  },
  topMenuList: {
    marginLeft: 20,
    paddingBottom: 7,
    flexDirection: 'row'
  },
  buttomView: {
    width: 90,
    height: 70,
    backgroundColor: 'white',
    justifyContent: "center",
    alignItems: 'center',
    borderRadius: 4,
    marginRight: 8,

  },
  buttomImage: {
    width: 34,
    height: 34,
    resizeMode: 'contain'
  },
  textItemButtom: {
    fontSize: 10,
    marginTop: 7
  },
  bodyContainer: {
    flex: 1,
    display: "flex",
    flexDirection: 'row',
    justifyContent: 'space-between',



  },
  productContainer: {
    width: 410,
    height: 320,
    elevation: 4,

  },
  menuTitle: {
    fontSize: 16,
    marginLeft: 10,
    fontWeight: 'bold'
  },
  menuTitleSecundary: {
    color: '#910c0c',
    fontWeight: 'bold'
  },
  itemViewer: {
    width: 120,
    height: 90,
    backgroundColor: '#910c0c',
    margin: 8,
    display: "flex",
    alignItems: 'center',
    borderRadius: 8,
    justifyContent: 'center'
  },
  itemViewerCancel: {
    width: 120,
    height: 90,
    backgroundColor: '#315236',
    margin: 8,
    display: "flex",
    justifyContent: "center",
    alignItems: 'center'
  },
  flavorName: {
    color: 'white',
    fontWeight: '800',


  },
  flavorPrice: {
    alignSelf: 'flex-start',
    color: "white",
    marginTop: 20,
    marginLeft: 8,
  },

  payments: {
    position: 'absolute',
    top: 360,
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 20,
  },
  buttonPayment: {
    marginRight: 12,
    marginLeft: 10,
    backgroundColor: '#315236',
    padding: 10,
    borderRadius: 3
  },
  buttonPaymentText: {
    color: 'white',
    fontWeight: 'bold'
  },

  progressText: {
    fontSize: 12,
    marginBottom: 10,
    alignSelf: "center"
  },

  noItem: {
    flex: 1,
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center'
  },

  noItemCart: {
    fontWeight: 'bold'
  },

  CartContainer: {
    flex: 1,
    height: 400,
    height: 320,
    padding: 8
  },

  PaymentContent: {
    flex: 1,
    height: 400,
    height: 320,
    padding: 8,
    justifyContent: 'center',
    textAlign: 'center'
  },
  itemCart: {
    display: "flex",
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10

  },
  itemCartName: {
    width: 150,
    fontWeight: 'bold'
  },


  itemAditionals: {
    width: 150,
    fontSize: 12,
    marginLeft: 5,

  },

  itemAditional: {
    display: "flex",
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 180,
    alignItems: 'center'
  },
  aditionalInfor: {
    fontSize: 11
  },
  separator: {
    borderBottomColor: '#008000',
    borderBottomWidth: 1,
    paddingBottom: 3
  },


  itemDescription: {
    alignItems: 'flex-start',
    // borderBottomColor: '#008000',
    // borderBottomWidth: 1,
    // paddingBottom: 3
  },

  itemDescriptionText: {
    fontSize: 11,
    width:308,
    fontWeight:'bold'
  },

  cartValueDecrement: {
    flexDirection: 'row',
    alignItems: "center"
  },

  cartValueIncrement: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  decrement: {
    width: 25,
    height: 25,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    marginLeft: 12
  },
  decrementText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  },
  increment: {
    width: 25,
    height: 25,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    marginRight: 12
  },
  incrementText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  },





  cartInfors: {
    position: 'absolute',
    top: 380,
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 20,
    width: 490,
    justifyContent: 'space-between'
  },

  modalView: {
    alignSelf: 'center',
    width: 320,
    height: 180,
    marginTop: 150,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttomGroupModal: {
    flexDirection: 'row',
    margin: 10
  },
  consumerButtom: {
    flexDirection: 'row',
    backgroundColor: '#315236',
    width: 80,
    height: 35,
    justifyContent: "center",
    alignItems: 'center',
    borderRadius: 10
  },
  travelButtom: {
    flexDirection: 'row',
    backgroundColor: '#910c0c',
    width: 'auto',
    paddingHorizontal: 8,
    height: 35,
    justifyContent: "center",
    alignItems: 'center',
    borderRadius: 10,
    left: 20
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  modalText2: {
    fontSize: 10,
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 9,
    textAlign: 'center',
  },

  qrcodeImage: {
    width: 180,
    height: 180,
    alignSelf: 'center'
  },
  cancelPayment: {
    backgroundColor: '#910c0c',
    width: 195,
    alignItems: 'center',
    justifyContent: "center",
    textAlign: 'center',
    height: 33,
    alignSelf: 'center',
    borderRadius: 3
  },
  textCancelPayment: {
    color: 'white',
  }

});
