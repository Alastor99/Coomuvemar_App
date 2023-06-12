import * as React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { HelperText, TextInput, PaperProvider, Text, Button } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Login = () => {

  //#region Variables

  {/* //TextInput Usuario*/ }
  const [Usuario, setUsuario] = React.useState('');
  const onChangeUsuario = Usuario => setUsuario(Usuario);
  const hasErrorsU = () => { return !Usuario.includes(''); }

 

  {/* //TextInput Contraseña*/ } 
  const [Contraseña, setContraseña] = React.useState('');
  const onChangeContraseña = Contraseña => setContraseña(Contraseña);
  const hasErrorsC = () => { return !Contraseña.includes(''); }

  const [hidePass, setHidePass] = React.useState(true);

  //#endregion

  //#region Styles
  const style = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 10,
      backgroundColor: '',
    },

    TextF: {
      fontFamily: "",
      fontSize: 20,
      fontWeight: "400",
      letterSpacing: 0,
      lineHeight: 36,
      margin: 20,
    },

    Top: {
      flex: 0.4,
      alignContent: 'center',
      alignItems: 'center',
      justifyContent: 'center',
    },

    buttons: {
      width: '100%',
      height: 50,
      justifyContent: 'center',
    },


    Image: {
      height: 73,
      width: '80%',
    },

    InputContainer: {
      marginVertical: 12,
    },
  })
  //#endregion

  return (
    <PaperProvider>
      <SafeAreaProvider style={style.container}>

        {/* //Header Login*/}
        <View style={style.Top}>
          <Image style={style.Image} source={require('../assets/Imagen1.png')} />

          <Text
            style={style.TextF}
            variant="headlineLarge">Inicio de sesión</Text>
        </View>

        <View style={style.InputContainer}>
          {/* //TextInput User*/}
          <TextInput
            theme={{ colors: { primary: 'brown' } }}
            mode="outlined"
            placeholder="ej:yaderc24"
            right={<TextInput.Affix text="" />}
            label="Usuario"
            value={Usuario}
            onChangeText={onChangeUsuario} />
          <HelperText type="error" visible={hasErrorsU()}>
            Email address is invalid!
          </HelperText>

          {/* //TextInput password*/}
          <TextInput
           theme={{ colors: { primary: 'brown' } }}
           outlineColor="green"
            mode="outlined"
            secureTextEntry={hidePass ? true : false}
            right={<TextInput.Icon icon="eye" onPress={() => setHidePass(!hidePass)}/>}
            label="Contraseña"
            value={Contraseña}
            onChangeText={onChangeContraseña} />
          <HelperText type="error" visible={hasErrorsC()}>
            Password invalid!
          </HelperText>
          
        </View>

        {/* //Button entrar*/}
        <Button
        style={style.buttons}
          mode="contained"
          buttonColor='#000000'
          onPress={() => console.log('Pressed')}
          >Entrar</Button>

        {/* //ButtonText Olvido su contraseña*/}
        <Button
        style={style.buttons}
          textColor='#d32f2f'
          ode="Text" onPress={() => console.log('Pressed')}>Olvido su contraseña!</Button>

      </SafeAreaProvider>
    </PaperProvider>
  );
};

export default Login;
