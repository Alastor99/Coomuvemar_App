import * as React from 'react';
import { View, StyleSheet, ScrollView, Image } from 'react-native';
import { Appbar, TextInput, PaperProvider, IconButton, MD3Colors, Text, Button, Divider, Card, RadioButton } from 'react-native-paper';
import { SafeAreaProvider, } from 'react-native-safe-area-context';

const Cosecha_y_pos_cosecha_del_cacao = () => {

    //#region Variables

    /*TextImput*/

    // Frecuencia de corte
    const [Frecuencia_corte, setFrecuencia_corte] = React.useState("");
    const onChangeFrecuencia_corte = Frecuencia_corte => setFrecuencia_corte(Frecuencia_corte);

    // Herramientas usadas
    const [HerramientasUsadas, setHerramientasUsadas] = React.useState('');
    const onChangeHerramientasUsadas = HerramientasUsadas => setHerramientasUsadas(HerramientasUsadas);

    // Material usado para envase
    const [MaterialUsado, setMaterialUsado] = React.useState('');
    const onChangeMaterialUsado = MaterialUsado => setMaterialUsado(MaterialUsado);

    // Precio de compra
    const [PrecioCompra, setPrecioCompra] = React.useState('');
    const onChangePrecioCompra = PrecioCompra => setPrecioCompra(PrecioCompra);

    //Origen
    const [Origen, setOrigen] = React.useState('');
    const onChangeOrigen = Origen => setOrigen(Origen);

    // Cantidad
    const [Cantidad, setCantidad] = React.useState('');
    const onChangeCantidad = Cantidad => setCantidad(Cantidad);

    /*Radiobutton*/
    // Mano de obra
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

        buttonAgregar: {
            marginTop: 14,
            width: '100%',
            height: 50,
        },

        buttonIcon: {
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
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
            borderColor: '',
            borderWidth: 2,
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
                                variant="titleLarge" >Cosecha y pos cosecha del cacao</Text>

                        </View>

                        <Divider style={styles.divider} />

                        <IconButton
                            style={styles.buttonIcon}
                            icon="clipboard-text"
                            iconColor={MD3Colors.error56}
                            size={50}
                            onPress={() => console.log('Pressed')}
                        />

                        {/* Frecuencia de corte*/}
                        <TextInput
                            style={styles.textinputs}
                            mode="outlined"
                            placeholder=""
                            right={<TextInput.Affix text="" />}
                            label="Frecuencia de corte"
                            value={Frecuencia_corte}
                            onChangeText={onChangeFrecuencia_corte} />

                        {/* Herramientas usadas*/}
                        <TextInput
                            style={styles.textinputs}
                            mode="outlined"
                            placeholder=""
                            right={<TextInput.Affix text="" />}
                            label="Herramientas usadas"
                            value={HerramientasUsadas}
                            onChangeText={onChangeHerramientasUsadas} />

                        {/* Material usado para envase*/}
                        <TextInput
                            style={styles.textinputs}
                            mode="outlined"
                            placeholder=""
                            right={<TextInput.Affix text="" />}
                            label="Material usado para envase"
                            value={MaterialUsado}
                            onChangeText={onChangeMaterialUsado} />

                        {/* Precio de compra */}
                        <TextInput
                            style={styles.textinputs}
                            mode="outlined"
                            placeholder=""
                            right={<TextInput.Affix text="" />}
                            label="Precio de compra"
                            value={PrecioCompra}
                            onChangeText={onChangePrecioCompra} />

                        <View style={styles.buttonContainer}>
                            {/*BOTÓN*/}
                            <Button
                                style={styles.buttonAgregar}
                                mode="contained"
                                buttonColor='#000000'
                                onPress={() => console.log('Pressed')}>Agregar</Button>
                        </View>

                        <Divider style={styles.divider} />

                        {/*Mano de obra*/}
                        <Card style={styles.card}>
                            <Text>Estado de la certificación:</Text>

                            <RadioButton.Group
                                onValueChange={newValue => setValue(newValue)}
                                value={value}>

                                <View style={styles.cardContent}>
                                    <RadioButton.Item color='blue' label='Familar' value="first" />
                                    <RadioButton.Item color='blue' label='Contratada' value="second" />
                                </View>

                            </RadioButton.Group>
                        </Card>

                        {/* Origen */}
                        <TextInput
                            style={styles.textinputs}
                            mode="outlined"
                            placeholder=""
                            right={<TextInput.Affix text="" />}
                            label="Origen"
                            value={Origen}
                            onChangeText={onChangeOrigen} />

                        {/* Cantidad */}
                        <TextInput
                            style={styles.textinputs}
                            mode="outlined"
                            placeholder=""
                            right={<TextInput.Affix text="" />}
                            label="Cantidad"
                            value={Cantidad}
                            onChangeText={onChangeCantidad} />

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

export default Cosecha_y_pos_cosecha_del_cacao;
