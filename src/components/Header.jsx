import {Image, Pressable, StatusBar, Text, View} from 'react-native';
import {tw} from '../../tw';
import {useNavigation} from '@react-navigation/native';

const Header = () => {
  const {goBack} = useNavigation();
  return (
    <View style={tw`w-full flex-row justify-between items-center px-5 pt-5`}>
      <StatusBar
        backgroundColor="white"
        barStyle="dark-content"
        animated={true}
      />
      <Pressable onPress={goBack}>
        <Image
          source={require('../../assets/images/backIcon1.png')}
          style={tw`h-[52px] w-[52px]`}
        />
      </Pressable>
      <View style={tw`flex-1 ml-5`}>
        <Text style={tw`font-plusJakartaSansExtraBold text-black text-2xl`}>
          Create Account
        </Text>
      </View>
    </View>
  );
};

export default Header;
