import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SignUp from './src/components/SignUp';

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Header></Header>
    //   <WelcomePage/>
      
    // </View>
    // <FlexBoxTry/>
    // <Layoutone/>
    <SignUp></SignUp>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor:'#000000',
    
  },
  Header:{
    flex:1
  }
  ,
  WelcomePage:
  {
    flex:2
  }
});