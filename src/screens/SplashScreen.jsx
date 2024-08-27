import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {
  Image,
  ImageBackground,
  Pressable,
  StatusBar,
  Text,
  View,
} from 'react-native';
import {tw} from '../../tw';
import {useCallback} from 'react';

function SplashScreen() {
  const navigation = useNavigation();

  useFocusEffect(
    useCallback(() => {
      StatusBar.setHidden(true);
      return () => StatusBar.setHidden(false);
    }, []),
  );

  return (
    <View style={tw`flex-1`}>
      <ImageBackground
        source={require('../../assets/images/splash.png')}
        style={tw`flex-1`}
        resizeMode="stretch">
        <View style={tw`flex-1 px-5 pt-22`}>
          <Text style={tw`font-plusJakartaSansExtraBold text-white text-4xl`}>
            Hyperhire
          </Text>
          <Text style={tw`font-extrabold text-white text-4xl`}>assignment</Text>
        </View>
        <ImageBackground
          source={require('../../assets/images/transparent.png')}
          style={tw`justify-end items-center pb-24 px-5 flex-1`}>
          <Pressable
            style={tw`w-full h-[52px]`}
            onPress={() => navigation.navigate('SignUpScreen')}>
            <Image
              source={require('../../assets/images/btn1.png')}
              style={tw`w-full h-[52px]`}
              resizeMode="stretch"
            />
          </Pressable>
          <Image
            source={require('../../assets/images/btn2.png')}
            style={tw`w-full h-[52px] top-5`}
            resizeMode="stretch"
          />
        </ImageBackground>
      </ImageBackground>
    </View>
  );
}

export default SplashScreen;
