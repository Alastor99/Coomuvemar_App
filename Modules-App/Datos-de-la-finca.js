import * as React from 'react';
import { View, StyleSheet, ScrollView, Image } from 'react-native';
import { TextInput, PaperProvider, Appbar, Text, Button, Divider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Datos_de_la_finca = () => {

    //#region Variables for Inputs

    /*searchbar*/
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);

    /*TextImput*/

    // const [text, setText] = React.useState('');
    // const onChangeText = text => setText(text);
    // const hasErrors = () => { return !text.includes(''); }

    const [NombFinca, setNombFinca] = React.useState('');
    const onChangeNombFinca = NombFinca => setNombFinca(NombFinca);

    const [Comunidad, setComunidad] = React.useState('');
    const onChangeComunidad = Comunidad => setComunidad(Comunidad);

    const [AreaProduccion, setAreaProduccion] = React.useState('');
    const onChangeAreaProduccion = AreaProduccion => setAreaProduccion(AreaProduccion);

    const [AreaDesarrollo, setAreaDesarrollo] = React.useState('');
    const onChangeAreaDesarrollo = AreaDesarrollo => setAreaDesarrollo(AreaDesarrollo);

    const [ProducCiclo, setProducCiclo] = React.useState("");
    const onChangeProducCiclo = ProducCiclo => setProducCiclo(ProducCiclo);

    /*date*/
    const date = new Date()
    //#endregion

    //#region Styles
    const styles = StyleSheet.create({

        content: {
            padding: 10,
            backgroundColor: '#ddd',

        },

        contentTitle: {
            padding: 10,
            backgroundColor: '#ddd',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            marginVertical: 15,
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
            marginVertical: 20,
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
            marginVertical: 20,
            fontSize: 15,
            fontFamily: 'sans-serif-light',
            fontWeight: 'normal',
        },

        appHeader: {
            alignItems: 'center',
            justifyContent: 'center',
            borderColor: '',
            borderBottomWidth: 2,
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
                                variant="titleLarge" >Datos de la finca</Text>
                        </View>
                        <Divider style={styles.divider} />

                        <TextInput
                            style={styles.textinputs}
                            mode="outlined"
                            right={<TextInput.Affix text="" />}
                            label="Nombre de la finca"
                            value={NombFinca}
                            onChangeText={onChangeNombFinca} />

                        <TextInput
                            style={styles.textinputs}
                            mode="outlined"
                            right={<TextInput.Affix text="" />}
                            label="Comunidad"
                            value={Comunidad}
                            onChangeText={onChangeComunidad} />

                        <TextInput
                            style={styles.textinputs}
                            mode="outlined"
                            right={<TextInput.Affix text="" />}
                            label="Área de cacao en producción"
                            value={AreaProduccion}
                            onChangeText={onChangeAreaProduccion} />


                        <TextInput
                            style={styles.textinputs}
                            mode="outlined"
                            right={<TextInput.Affix text="" />}
                            label="Área de cacao en desarrollo"
                            value={AreaDesarrollo}
                            onChangeText={onChangeAreaDesarrollo} />


                        <TextInput
                            style={styles.textinputs}
                            mode="outlined"
                            placeholder="Estimado de cosecha"
                            label="Producción ultimo ciclo (Qq baba)"
                            value={ProducCiclo}
                            onChangeText={onChangeProducCiclo} />

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

export default Datos_de_la_finca;

