import * as React from 'react';
import { View, StyleSheet, ScrollView, Image } from 'react-native';
import { Appbar, TextInput, PaperProvider, IconButton, MD3Colors, Text, Button, Divider } from 'react-native-paper';
import { SafeAreaProvider, } from 'react-native-safe-area-context';

const Aplicación_de_Fertilizantes_Edáficos_y_Foliares = () => {

    //#region Variables for Inputs

    /*TextImput*/

    // Nombre del Abono
    const [NombreAbono, setNombreAbono] = React.useState("");
    const onChangeNombreAbono = NombreAbono => setCNombreAbonor(NombreAbono);

    // Cantidad Aplicada
    const [CantidadAplicada, setCantidadAplicada] = React.useState('');
    const onChangeCantidadAplicada = CantidadAplicada => setCantidadAplicada(CantidadAplicada);

    // Origen
    const [Origen, setOrigen] = React.useState('');
    const onChangeOrigen = Origen => setOrigen(Origen);

    // Mes en que Aplico
    const [MesAplico, setMesAplico] = React.useState('');
    const onChangeMesAplico = MesAplico => setMesAplico(MesAplico);

    // A que Cultivo
    const [AqueCultivo, setAqueCultivo] = React.useState('');
    const onChangeAqueCultivo =AqueCultivo => setAqueCultivo(AqueCultivo);

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
            marginVertical: 12,
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

        buttonAgregar: {
            marginTop:25,
            width: '100%',
            height: 50,
        },

        textinputs: {
            marginVertical: 15,
            fontSize: 16,
            fontFamily: 'sans-serif-light',
            fontWeight: 'normal',
        },

        appHeader: {
            alignItems: 'center',
            justifyContent: 'center',
            borderColor:'',
            borderWidth:2
            //backgroundColor: '#000000',
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
                                variant="titleLarge" >Aplicación de Fertilizantes Edáficos y Foliares</Text>

                        </View>

                        <Divider style={styles.divider} />

                        {/*Nombre del Abono*/}
                        <TextInput
                            style={styles.textinputs}
                            mode="outlined"
                            placeholder=""
                            right={<TextInput.Affix text="" />}
                            label="Nombre del Abono"
                            value={NombreAbono}
                            onChangeText={onChangeNombreAbono} />

                        {/*Cantidad Aplicada*/}
                        <TextInput
                            style={styles.textinputs}
                            mode="outlined"
                            placeholder=""
                            right={<TextInput.Affix text="" />}
                            label="Cantidad Aplicada"
                            value={CantidadAplicada}
                            onChangeText={onChangeCantidadAplicada} />

                        {/*Origen*/}
                        <TextInput
                            style={styles.textinputs}
                            mode="outlined"
                            placeholder=""
                            right={<TextInput.Affix text="" />}
                            label="Origen"
                            value={Origen}
                            onChangeText={onChangeOrigen} />

                        {/*Mes en que Aplico*/}
                        <TextInput
                            style={styles.textinputs}
                            mode="outlined"
                            placeholder=""
                            right={<TextInput.Affix text="" />}
                            label="Mes en que Aplico"
                            value={MesAplico}
                            onChangeText={onChangeMesAplico} />

                             {/*A que Cultivo*/}
                        <TextInput
                            style={styles.textinputs}
                            mode="outlined"
                            placeholder=""
                            right={<TextInput.Affix text="" />}
                            label="A que Cultivo"
                            value={AqueCultivo}
                            onChangeText={onChangeAqueCultivo} />

                         {/*Boton Agregar*/}
                         <Button
                            style={styles.buttonAgregar}
                            mode="contained"
                            buttonColor='#000000'
                            onPress={() => console.log('Pressed')}>Agregar</Button>

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
                                onPress={() => console.log('Pressed')}>Anterior</Button>

                        </View>
                    </View>
                </ScrollView>
            </SafeAreaProvider >
        </PaperProvider>
    );
};

export default Aplicación_de_Fertilizantes_Edáficos_y_Foliares;
