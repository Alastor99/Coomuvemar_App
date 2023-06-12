import * as React from 'react';
import { View, StyleSheet, ScrollView, Image } from 'react-native';
import { Appbar, TextInput, PaperProvider, Card, RadioButton, Text, Button, Divider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Registros_administrativos = () => {

    //#region Variables for Inputs

    /*searchbar*/
    // BUSCAR PRODUCTOR
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);

    /*Radiobutton*/
    // 
    const [valueCard1, setValueCard1] = React.useState('first');
    //
    const [valueCard2, setValueCard2] = React.useState('first');
    //
    const [valueCard3, setValueCard3] = React.useState('first');

    /*TextImput*/

    // Observasion1
    const [Observacion1, setObservacion1] = React.useState("");
    const onChangeObservacion1 = observacion1 => setObservacion1(observacion1);

    // observacion1
    const [Observacion2, setObservacion2] = React.useState('');
    const onChangeObservacion2 = Observacion2 => setObservacion2(Observacion2);

    // observacion3
    const [Observacion3, setObservacion3] = React.useState('');
    const onChangeObservacion3 = Observacion3 => setObservacion3(Observacion3);



    /*date*/
    const date = new Date()
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
            marginVertical: 12,
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

        appHeader: {
            alignItems: 'center',
            justifyContent: 'center',
            borderColor:'',
            borderWidth:2,
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
                                variant="titleLarge" >Registros Administrativos</Text>
                        </View>

                        <Divider style={styles.divider} />

                        {/*El mapa de la finca esta actualizado?*/}
                        <Card style={styles.card}>
                            <Text>El mapa de la finca esta actualizado?</Text>

                            <RadioButton.Group
                                onValueChange={newValue => setValueCard1(newValue)}
                                value={valueCard1}>

                                <View style={styles.cardContent}>
                                    <RadioButton.Item color='blue' label='Si' value="first" />
                                    <RadioButton.Item color='red' label='NO' value="second" />
                                </View>

                            </RadioButton.Group>
                            {/*observacion 1*/}
                            <TextInput
                                style={styles.textinputs}
                                mode="outlined"
                                label="Observaciones"
                                value={Observacion1}
                                onChangeText={onChangeObservacion1} />
                        </Card>

                        {/*Conserva los recibos o facturas de Venta?*/}
                        <Card style={styles.card}>
                            <Text>Conserva los recibos o facturas de Venta?</Text>

                            <RadioButton.Group
                                onValueChange={newValue => setValueCard2(newValue)}
                                value={valueCard2}>

                                <View style={styles.cardContent}>
                                    <RadioButton.Item color='blue' label='Si' value="first" />
                                    <RadioButton.Item color='red' label='NO' value="second" />
                                </View>

                            </RadioButton.Group>

                            {/*observacion 2*/}
                            <TextInput
                                style={styles.textinputs}
                                mode="outlined"
                                label="Observaciones"
                                value={Observacion2}
                                onChangeText={onChangeObservacion2} />

                        </Card>

                        {/*El registro de cosecha esta actualizado?*/}
                        <Card style={styles.card}>
                            <Text>El registro de cosecha esta actualizado?</Text>

                            <RadioButton.Group
                                onValueChange={newValue => setValueCard3(newValue)}
                                value={valueCard3}>

                                <View style={styles.cardContent}>
                                    <RadioButton.Item color='blue' label='Si' value="first" />
                                    <RadioButton.Item color='red' label='NO' value="second" />
                                </View>

                            </RadioButton.Group>

                            {/*observacion 3*/}
                            <TextInput
                                style={styles.textinputs}
                                mode="outlined"
                                label="Observaciones"
                                value={Observacion3}
                                onChangeText={onChangeObservacion3} />
                        </Card>


                        {/*BOTÓN*/}
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

export default Registros_administrativos;

