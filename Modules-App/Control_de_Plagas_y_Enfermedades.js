import * as React from 'react';
import { View, StyleSheet, ScrollView, Image } from 'react-native';
import { Appbar, TextInput, PaperProvider, IconButton, MD3Colors, Text, Button, Divider } from 'react-native-paper';
import { SafeAreaProvider} from 'react-native-safe-area-context';

const Control_de_Plagas_y_Enfermedades = () => {

    //#region Variables

    /*searchbar*/
    // BUSCAR PRODUCTOR
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);

    /*TextImput*/

    // PRODUCTO APLICADO
    const [ProductoAplicado, setProductoAplicado] = React.useState("");
    const onChangeProductoAplicado = ProductoAplicado => setProductoAplicado(ProductoAplicado);

    // ORIGEN
    const [Origen, setOrigen] = React.useState('');
    const onChangeOrigen = Origen => setOrigen(Origen);

    // PRODUCTO UTILIZADO
    const [ProductoUtilizado, setProductoUtilizado] = React.useState('');
    const onChangeProductoUtilizado = ProductoUtilizado => setProductoUtilizado(ProductoUtilizado);

    // CANTIDAD/Mz
    const [CantidadMz, setCantidadMz] = React.useState('');
    const onChangeCantidadMz = CantidadMz => setCantidadMz(CantidadMz);

    // VECES/AÑO
    const [VecesAño, setVecesAño] = React.useState('');
    const onChangeVecesAño = VecesAño => setVecesAño(VecesAño);

    // EN QUE CULTIVO LO UTILIZO
    const [EnQueCultivoLoUtilizo, setEnQueCultivoLoUtilizo] = React.useState('');
    const onChangeEnQueCultivoLoUtilizo = EnQueCultivoLoUtilizo => setEnQueCultivoLoUtilizo(EnQueCultivoLoUtilizo);

     // PARA QUE PLAGA O ENFERMEDAD
     const [ParaQuePlagaOenfermedad, setParaQuePlagaOenfermedad] = React.useState('');
     const onChangeParaQuePlagaOenfermedad =ParaQuePlagaOenfermedad => setParaQuePlagaOenfermedad(ParaQuePlagaOenfermedad);

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

                <Appbar style={styles.appHeader}>
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
                                variant="titleLarge" >Control de Plagas y Enfermedades</Text>
                        </View>


                        <IconButton
                            style={styles.buttonIcon}
                            icon="clipboard-text"
                            iconColor={MD3Colors.error56}
                            size={50}
                            onPress={() => console.log('Pressed')}
                        />

                        <Divider style={styles.divider} />

                        {/* PRODUCTO APLICADO*/}
                        <TextInput
                            style={styles.textinputs}
                            mode="outlined"
                            placeholder="Ej: Insecticida Natural"
                            label="Producto Aplicado"
                            value={ProductoAplicado}
                            onChangeText={onChangeProductoAplicado} />

                        {/*ORIGEN*/}
                        <TextInput
                            style={styles.textinputs}
                            mode="outlined"
                            label="Origen"
                            value={Origen}
                            onChangeText={onChangeOrigen} />

                        {/*PRODUCTO UTILIZADO*/}
                        <TextInput
                            style={styles.textinputs}
                            mode="outlined"
                            label="Producto Utilizado"
                            value={ProductoUtilizado}
                            onChangeText={onChangeProductoUtilizado} />

                        {/*CANTIDAD/Mz*/}
                        <TextInput
                            style={styles.textinputs}
                            mode="outlined"
                            right={<TextInput.Affix text="Dosis" />}
                            label="Cantidad/Mz "
                            value={CantidadMz}
                            onChangeText={onChangeCantidadMz} />

                        {/*VECES/AÑO*/}
                        <TextInput
                            style={styles.textinputs}
                            // disabled={true}
                            mode="outlined"
                            label="Veces /año"
                            value={VecesAño}
                            onChangeText={onChangeVecesAño} />
                            
                        {/*EN QUE CULTIVO LO UTILIZO*/}
                        <TextInput
                            style={styles.textinputs}
                            // disabled={true}
                            mode="outlined"
                            label="En que Cultivo lo utilizo"
                            value={EnQueCultivoLoUtilizo}
                            onChangeText={onChangeEnQueCultivoLoUtilizo} />

                        {/*PARA QUE PLAGA O ENFERMEDAD*/}
                        <TextInput
                            style={styles.textinputs}
                            // disabled={true}
                            mode="outlined"
                            label="Para que Plaga o Enfermedad"
                            value={ParaQuePlagaOenfermedad}
                            onChangeText={onChangeParaQuePlagaOenfermedad} />

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

export default Control_de_Plagas_y_Enfermedades;

