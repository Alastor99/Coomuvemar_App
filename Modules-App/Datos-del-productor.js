import * as React from 'react';
import { View, StyleSheet, ScrollView, Image } from 'react-native';
import { Appbar, TextInput, PaperProvider, Searchbar, Card, RadioButton, Text, Button, Divider } from 'react-native-paper';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const Datos_Productor = () => {

  //#region Variables

  /*searchbar*/
  // Buscar productor
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);

  /*TextImput*/

  // Codigo del productor
  const [CodigoProductor, setCodigoProductor] = React.useState("");
  const onChangeCodigoProductor = CodigoProductor => setCodigoProductor(CodigoProductor);

  // Nombre del Productor
  const [NombreProductor, setNombreProductor] = React.useState('');
  const onChangeNombreProductor = NombreProductor => setNombreProductor(NombreProductor);

  // Cedula 
  const [Cedula, setCedula] = React.useState('');
  const onChangeCedula = Cedula => setCedula(Cedula);

  // Telefono
  const [Telefono, setTelefono] = React.useState('');
  const onChangeTelefono = Telefono =>  setTelefono(Telefono);

  // Fecha e ingreso al programa de certificacion
  const [FechaIngreso, setFechaIngreso] = React.useState('');
  const onChangeFechaIngreso = FechaIngreso => setFechaIngreso(FechaIngreso);

  /*Radiobutton*/
  // Estado de la certificacion
  const [value, setValue] = React.useState('first');

  //#endregion

  //#region Styles
  const styles = StyleSheet.create({

    content: {
      justifyContent: 'space-evenly',
      padding: 10,
      backgroundColor: '#ddd',
    },

    contentTitle: {
      padding: 10,
      backgroundColor: '#ddd',
      justifyContent: 'space-evenly',
      alignItems: 'center',
    },

    contentSearchbar: {
      padding: 10,
    },

    Title: {
      fontFamily: 'sans-serif-light',
      fontWeight: 'bold',

    },

    divider: {
      height: 5,
      borderRadius: 50,
      backgroundColor: '#ffffff',
      marginHorizontal: 12,
    },

    card: {
      marginTop: 15,
      flexDirection: 'row',
      padding: 10,
      // borderColor:'blue',
      // borderWidth:1,
    },

    cardContent: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      padding: 10,
    },

    buttonContainer: {
      flexDirection: 'row-reverse',
      justifyContent: 'space-evenly',
      alignContent: 'center',
      marginVertical: 30,
    },

    buttons: {
      marginTop: 14,
      width: '45%',
      height: 50,
      justifyContent: 'center',
    },

    textinputs: {
      marginVertical: 12,
      fontSize: 15,
      fontFamily: 'sans-serif-light',
      fontWeight: 'normal',
    },

    appHeader: {
      alignItems: 'center',
      justifyContent: 'center',
      borderColor:'',
      borderBottomWidth:2,
    },
    
    imageStyle: {
      width: '39%',
      height: 37,
    },

  });
  //#endregion

  return (

    <PaperProvider>
      <SafeAreaProvider>

        <Appbar mode='small' style={styles.appHeader}>
          <Image
            source={require('../assets/Imagen1.png')}
            style={styles.imageStyle}
          />
        </Appbar>
        <ScrollView>
          <View style={styles.content}>

            <View style={styles.contentTitle}>
              <Text
                style={styles.Title}
                variant="titleLarge" >Datos del productor</Text>
            </View>

            {/*Buscar productor*/}
            <View style={styles.contentSearchbar}>
              <Searchbar
                placeholder="Buscar Productor"
                value={searchQuery}
              />
            </View>

            <Divider style={styles.divider} />

            {/*Codigo del productor*/}
            <TextInput
              style={styles.textinputs}
              mode="outlined"
              placeholder=""
              right={<TextInput.Affix text="" />}
              label="Codigo del productor"
              value={CodigoProductor}
              onChangeText={onChangeCodigoProductor} />

            {/* Nombre del Productor*/}
            <TextInput
              style={styles.textinputs}
              mode="outlined"
              placeholder=""
              right={<TextInput.Affix text="" />}
              label="Nombre del productor"
              value={NombreProductor}
              onChangeText={onChangeNombreProductor} />

            {/*Cedula*/}
            <TextInput
              style={styles.textinputs}
              mode="outlined"
              placeholder=""
              right={<TextInput.Affix text="" />}
              label="Cedula"
              value={Cedula}
              onChangeText={onChangeCedula} />

            {/*Telefono*/}
            <TextInput
              style={styles.textinputs}
              mode="outlined"
              placeholder=""
              right={<TextInput.Affix text="" />}
              label="Telefono"
              value={Telefono}
              onChangeText={onChangeTelefono} />

            {/*Fecha e ingreso al programa de certificacion*/}
            <TextInput
              style={styles.textinputs}
              // disabled={true}
              mode="outlined"
              label="Fecha de ingreso al programa de certificación"
              value={FechaIngreso}
              onChangeText={onChangeFechaIngreso} />

            {/*Estado de la certificacion*/}
            <Card style={styles.card}>
              <Text>Estado de la certificación:</Text>

              <RadioButton.Group
                onValueChange={newValue => setValue(newValue)}
                value={value}>

                <View style={styles.cardContent}>
                  <RadioButton.Item color='blue' label='T1' value="first" />
                  <RadioButton.Item color='blue' label='T2' value="second" />
                  <RadioButton.Item color='blue' label='T3' value="third" />
                  <RadioButton.Item color='brown' label='Organico' value="fourth" />
                </View>

              </RadioButton.Group>
            </Card>

            <View style={styles.buttonContainer}>

              {/*Boton siguiente*/}
              <Button
                style={styles.buttons}
                mode="contained"
                icon="arrow-right-bold"
                buttonColor='#000000'
                contentStyle={{ flexDirection: 'row-reverse' }}
                onPress={() => console.log('Pressed')}>Siguiente</Button>


              {/*Boton cancelar*/}
              <Button
                style={styles.buttons}
                mode="contained"
                icon="arrow-left-bold"
                buttonColor='#000000'
                onPress={() => console.log('Pressed')}>Cancelar</Button>

            </View>

          </View>
        </ScrollView>
      </SafeAreaProvider >
    </PaperProvider>
  );
};

export default Datos_Productor;

