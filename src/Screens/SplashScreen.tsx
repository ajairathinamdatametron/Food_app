import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const SplashScreen = ({ navigation }: any) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Home');
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Foodgo</Text>

      <Image
        source={require('../assets/images/burger1.png')}
        style={styles.burger1}
      />

      <Image
        source={require('../assets/images/burger2.png')}
        style={styles.burger2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff0051',
  },
  logo: {
    fontSize: 32,
    fontWeight: '400',
    color: '#fff',
    fontFamily: 'Lobster-Regular',
    bottom: 150,
    marginLeft: 50,
  },
  burger1: {
    width: 246,
    height: 288,
    position: 'absolute',
    resizeMode: 'contain',
    bottom: -35,
    left: -42,
  },
  burger2: {
    width: 202,
    height: 202,
    position: 'absolute',
    resizeMode: 'contain',
    bottom: -30,
    left: 134,
  },
});

export default SplashScreen;