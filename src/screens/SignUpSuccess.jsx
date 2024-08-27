import {useEffect, useState} from 'react';
import {Image, ImageBackground, Modal, Text, View} from 'react-native';
import {tw} from '../../tw';

const SignUpSuccess = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <Modal
      statusBarTranslucent
      visible={visible}
      animationType="slide"
      style={tw`flex-1`}>
      <ImageBackground
        source={require('../../assets/images/Overlay.png')}
        style={tw`flex-1 justify-center items-center`}>
        <View style={tw`p-6 bg-white rounded-3xl`}>
          <View style={tw`flex-row justify-between`}>
            <Image
              source={require('../../assets/images/sucess.png')}
              style={tw`h-[52px] w-[52px]`}
            />
            <Image
              source={require('../../assets/images/cross.png')}
              style={tw`h-[52px] w-[52px]`}
            />
          </View>
          <View style={tw`my-10`}>
            <Text
              style={tw`text-2xl font-plusJakartaSansExtraBold text-[#101828]`}>
              Welcome to Hyperhire
            </Text>
            <Text
              style={tw`text-[18px] font-plusJakartaSansMedium text-[#101828] mt-2`}>
              Great to have you with us!
            </Text>
          </View>
          <Image
            source={require('../../assets/images/gotIt.png')}
            style={tw`h-[52px]`}
          />
        </View>
      </ImageBackground>
    </Modal>
  );
};

export default SignUpSuccess;
