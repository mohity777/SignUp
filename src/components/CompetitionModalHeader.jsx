import {Image, Pressable, View} from 'react-native';
import {tw} from '../../tw';
import CustomInput from './CustomInput';
import {useState} from 'react';

const CompetitionsModalHeader = ({onChange, hideModal}) => {
  const [value, setValue] = useState('');
  return (
    <View style={tw`flex-row justify-between items-center px-5 pt-5`}>
      <Pressable onPress={hideModal} style={tw`mr-5`}>
        <Image
          source={require('../../assets/images/backIcon2.png')}
          style={tw`h-[52px] w-[52px]`}
        />
      </Pressable>
      <CustomInput
        value={value}
        onChangeText={val => {
          setValue(val);
          onChange(val);
        }}
        enableIcon={true}
        iconImageSource={require('../../assets/images/search.png')}
        placeholder="Competition..."
      />
    </View>
  );
};

export default CompetitionsModalHeader;
