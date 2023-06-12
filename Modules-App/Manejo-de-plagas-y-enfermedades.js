import * as React from 'react';
import { View, StyleSheet, ScrollView, Image } from 'react-native';
import { Appbar, TextInput, PaperProvider, Searchbar, Card, RadioButton, Text, Button, Divider } from 'react-native-paper';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const Manejo_de_plagas_y_Enfermedades = () => {

    //#region Variables

    /*Radiobutton*/
    // 
    const [valueCard1, setValueCard1] = React.useState('first');
    //
    const [valueCard2, setValueCard2] = React.useState('first');
    //
    const [valueCard3, setValueCard3] = React.useState('first');

    const [valueCard4, setValueCard4] = React.useState('first');
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
            marginVertical: 20,
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
            borderColor: '',
            borderBottomWidth: 2,
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
                                variant="titleLarge" >Manejo de plagas y Enfermedades</Text>
                        </View>

                        <Divider style={styles.divider} />

                        {/*El mapa de la finca esta actualizado?*/}
                        <Card style={styles.card}>
                            <Text>Taltuzas</Text>

                            <RadioButton.Group
                                onValueChange={newValue => setValueCard1(newValue)}
                                value={valueCard1}>

                                <View style={styles.cardContent}>
                                    <RadioButton.Item color='red' label='Alta' value="first" />
                                    <RadioButton.Item color='brown' label='Media' value="second" />
                                    <RadioButton.Item color='green' label='Baja' value="third" />
                                </View>

                            </RadioButton.Group>
                        </Card>

                        {/*Conserva los recibos o facturas de Venta?*/}
                        <Card style={styles.card}>
                            <Text>Pulgones</Text>

                            <RadioButton.Group
                                onValueChange={newValue => setValueCard2(newValue)}
                                value={valueCard2}>

                                <View style={styles.cardContent}>
                                    <RadioButton.Item color='red' label='Alta' value="first" />
                                    <RadioButton.Item color='brown' label='Media' value="second" />
                                    <RadioButton.Item color='green' label='Baja' value="third" />
                                </View>

                            </RadioButton.Group>
                        </Card>

                        {/*El registro de cosecha esta actualizado?*/}
                        <Card style={styles.card}>
                            <Text>Hormigas</Text>

                            <RadioButton.Group
                                onValueChange={newValue => setValueCard3(newValue)}
                                value={valueCard3}>

                                <View style={styles.cardContent}>
                                    <RadioButton.Item color='red' label='Alta' value="first" />
                                    <RadioButton.Item color='brown' label='Media' value="second" />
                                    <RadioButton.Item color='green' label='Baja' value="third" />
                                </View>

                            </RadioButton.Group>
                        </Card>

                        {/*Conserva los recibos o facturas de Venta?*/}
                        <Card style={styles.card}>
                            <Text>Otra plaga</Text>

                            <RadioButton.Group
                                onValueChange={newValue => setValueCard4(newValue)}
                                value={valueCard4}>

                                <View style={styles.cardContent}>
                                    <RadioButton.Item color='red' label='Alta' value="first" />
                                    <RadioButton.Item color='brown' label='Media' value="second" />
                                    <RadioButton.Item color='green' label='Baja' value="third" />
                                </View>

                            </RadioButton.Group>
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

export default Manejo_de_plagas_y_Enfermedades;

