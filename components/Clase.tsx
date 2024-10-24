import { View, Text } from 'react-native'
import React from 'react'
import {DatosAlumno} from '../Modelos/DatosAlumno'
import HookComponents from '../components/Hooks/HookComponents'


export default function Clase(props: DatosAlumno) {
  return (
    <View>
      <HookComponents></HookComponents>
    </View>
  )
}