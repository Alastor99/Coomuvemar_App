import * as React from 'react';
import { View, StyleSheet, ScrollView, Image } from 'react-native';
import { Appbar, TextInput, PaperProvider, IconButton, MD3Colors, Text, Button, Divider } from 'react-native-paper';
import { SafeAreaProvider, } from 'react-native-safe-area-context';

const Información_de_las_parcelas = () => {

    //#region Variables

    /*TextImput*/

    // Nombre de la parcela
    const [NombreParcela, setNombreParcela] = React.useState("");
    const onChangeNombreParcela = NombreParcela => setNombreParcela(NombreParcela);

    // 
    const [AreaMz, setAreaMz] = React.useState('');
    const onChangeAreaMz = AreaMz => setAreaMz(AreaMz);

    // Cultivo
    const [Cultivo, setCultivo] = React.useState('');
    const onChangeCultivo = Cultivo => setCultivo(Cultivo);

    // Insumos Utilizados
    const [InsumosUtilizados, setInsumosUtilizados] = React.useState('');
    const onChangeInsumosUtilizados = InsumosUtilizados => setInsumosUtilizados(InsumosUtilizados);
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
            marginTop:25,
            width: '100%',
            height: 50,
        },

        buttonIcon: {
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 12,
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
                                variant="titleLarge" >Información de las Parcelas</Text>

                        </View>

                        <Divider style={styles.divider} />

                        <IconButton
                            style={styles.buttonIcon}
                            icon="clipboard-text"
                            iconColor={MD3Colors.error56}
                            size={50}
                            onPress={() => console.log('Pressed')}
                        />

                        {/* Nombre de la parcela*/}
                        <TextInput
                            style={styles.textinputs}
                            mode="outlined"
                            placeholder=""
                            right={<TextInput.Affix text="" />}
                            label="Nombre de la Parcela"
                            value={NombreParcela}
                            onChangeText={onChangeNombreParcela} />

                        {/* Área en Mz*/}
                        <TextInput
                            style={styles.textinputs}
                            mode="outlined"
                            placeholder=""
                            right={<TextInput.Affix text="" />}
                            label="Área en Mz"
                            value={AreaMz}
                            onChangeText={onChangeAreaMz} />

                        {/* Cultivo*/}
                        <TextInput
                            style={styles.textinputs}
                            mode="outlined"
                            placeholder=""
                            right={<TextInput.Affix text="" />}
                            label="Cultivo"
                            value={Cultivo}
                            onChangeText={onChangeCultivo} />

                        {/* Insumos Utilizados */}
                        <TextInput
                            style={styles.textinputs}
                            mode="outlined"
                            placeholder=""
                            right={<TextInput.Affix text="" />}
                            label="Insumos Utilizados"
                            value={InsumosUtilizados}
                            onChangeText={onChangeInsumosUtilizados} />

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

export default Información_de_las_parcelas;
