import { StyleSheet, Text, View, Image } from 'react-native';
import { Link } from 'expo-router';

import Logo from '../assets/images/anamnai-logo.png';

const Home = () => {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} />
      <Text style={styles.text}>Anamnai</Text>

      <Link href="/about" style={styles.link}>
        Go to About
      </Link>
      <Link href="/contact" style={styles.link}>
        Go to Contact
      </Link>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  link: {
    fontSize: 18,
    color: '#007AFF',
  },
});