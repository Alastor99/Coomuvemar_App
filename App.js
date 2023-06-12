import * as React from 'react';
import { StyleSheet, ImageBackground, View } from 'react-native';
import { PaperProvider, Text, Button, Avatar, Surface } from 'react-native-paper';


import Login from './Modules-App/Login';
import Datos_Productor from './Modules-App/Datos-del-productor';
import Datos_de_la_finca from './Modules-App/Datos-de-la-finca';
import Registros_administrativos from './Modules-App/Registros-administrativos';
import Información_de_las_parcelas from './Modules-App/Información-de-las-parcelas';
import Manejo_de_plagas_y_Enfermedades from './Modules-App/Manejo-de-plagas-y-enfermedades';
import Control_de_Plagas_y_Enfermedades from './Modules-App/Control_de_Plagas_y_Enfermedades';
import Aplicación_de_Fertilizantes_Edáficos_y_Foliares from './Modules-App/Aplicación_de_Fertilizantes_Edáficos_y_Foliares';
import Conservación_de_Suelos_Agua_y_Medio_Ambiente from './Modules-App/Conservación_de_Suelos_Agua_y_Medio_Ambiente';
import Riesgos_de_Contaminación_en_la_Finca from './Modules-App/Riesgos_de_Contaminación_en_la_Finca';
import Cosecha_y_pos_cosecha_del_cacao from './Modules-App/Cosecha_y_pos_cosecha_del_cacao';

export default function App() {
  return (

    <PaperProvider>
      <Login/>

      {/* <Datos_Productor/> Z*/}
      {/* <Datos_de_la_finca/> Z*/}

      {/* <Registros_administrativos/> Z*/}
      {/* <Información_de_las_parcelas/>  Z*/}

      {/* <Manejo_de_plagas_y_Enfermedades /> Z*/}
      {/* <Control_de_Plagas_y_Enfermedades /> Z*/}

      {/* <Aplicación_de_Fertilizantes_Edáficos_y_Foliares/>  Z*/}
      {/* <Conservación_de_Suelos_Agua_y_Medio_Ambiente/> Z*/}

      {/* <Riesgos_de_Contaminación_en_la_Finca/> Z*/}
      {/* <Cosecha_y_pos_cosecha_del_cacao /> */}
    </PaperProvider>
  );
};
