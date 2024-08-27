import TextInput from 'react-native-text-input-interactive';
import {tw} from '../../tw';
import {View} from 'react-native';
import {useState} from 'react';
import ErrorText from './ErrorText';

const CustomInput = ({
  onChangeText,
  value,
  enableIcon,
  editable,
  iconImageSource,
  placeholder,
  error,
  onBlur,
  style,
  selection,
  secureTextEntry,
}) => {
  const [hidden, setHidden] = useState(secureTextEntry);

  return (
    <View style={tw.style(`flex-1`, style)}>
      <TextInput
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        iconImageSource={
          secureTextEntry
            ? hidden
              ? require('../../assets/images/eyeClose.png')
              : require('../../assets/images/eyeOpen.png')
            : iconImageSource
        }
        onIconPress={() => {
          if (secureTextEntry) {
            setHidden(p => !p);
          }
        }}
        iconImageStyle={tw`tint-black`}
        enableIcon={enableIcon}
        editable={editable}
        placeholderTextColor="#667085"
        textInputStyle={tw`font-plusJakartaSansRegular bg-[#F9FAFB] h-[52px] text-[16px] text-[#101828] flex-1`}
        onBlur={onBlur}
        iconContainerStyle={tw`bg-[#F9FAFB]`}
        selection={selection}
        secureTextEntry={secureTextEntry && hidden}
      />
      <ErrorText error={error} />
    </View>
  );
};

export default CustomInput;
