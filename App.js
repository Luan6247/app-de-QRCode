import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import logofromfile from './assets/sus.png';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Aponte a câmera do seu celular!</Text>
      <StatusBar style="auto" />
      <QRCode
        value = "https://www.youtube.com"
        size = {200}
        bgColor = "purple"
        fgColor = "white"
        logo = {logofromfile}
      />
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
