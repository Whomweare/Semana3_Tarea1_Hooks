/*Espere 5 segundos mientras carga el resto de objetos*/
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function ListaEstudiantes() {

  const [estudiantes, setEstudiantes] = useState([
    { id: '1', name: 'Juan' },
    { id: '2', name: 'María' },
    { id: '3', name: 'Carlos' },
    { id: '4', name: 'Pedro' },
    { id: '5', name: 'Ana' },
    { id: '6', name: 'Perla' },
    { id: '7', name: 'Ramon' },
    { id: '8', name: 'Olvin' },
    { id: '9', name: 'Sael' },
    { id: '10', name: 'Rodi' },
  ]);

  useEffect(() => {
    const nuevosEstudiantes = [
      { id: '11', name: 'Cris' },
      { id: '12', name: 'Gracie' },
      { id: '13', name: 'Jon' },
      { id: '14', name: 'Leo' },
      { id: '15', name: 'Teo' },
      { id: '16', name: 'Lea' },
      { id: '17', name: 'Luna' },
      { id: '18', name: 'Osman' },
      { id: '19', name: 'Miguel' },
      { id: '20', name: 'Rina' },
    ];

    const timer = setTimeout(() => {
      setEstudiantes(prevEstudiantes => [...prevEstudiantes, ...nuevosEstudiantes]);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Estudiantes</Text>
      <FlatList style={styles.pad}
        data={estudiantes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text style={styles.texto}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    paddingTop: 40,
  },

  title: {
    paddingLeft: 20,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    borderBottomWidth: 1.5,
    borderBottomColor: "gray",
  },

  texto: {
    height: 20,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },

  pad: {
    paddingLeft: 20,
    paddingRight: 20,
  },

});
