import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, NativeModules } from 'react-native';

var NativeModulesE1 = NativeModules.ToastModules;

export default function App() {
  console.log('Native modules: ', NativeModules);
  console.log('Native modules NativeModulesE1: ', NativeModulesE1);
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
