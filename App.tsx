import { StyleSheet, View } from 'react-native';

import ListaEstudiantes from './components/Hooks/HookComponents';

export default function App() {
  return (
    <View style={styles.container}>
      
      <ListaEstudiantes></ListaEstudiantes>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
});


