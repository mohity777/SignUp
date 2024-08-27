import {LayoutAnimation, Platform, Text, UIManager} from 'react-native';
import {tw} from '../../tw';
import { useEffect, useState } from 'react';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const ErrorText = ({error}) => {
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setErrorMessage(error);
  }, [error]);

  if (!errorMessage) return null;

  return (
    <Text
      style={tw`font-plusJakartaSansRegular text-[#FF2323] text-sm mt-1 ml-1`}>
      {errorMessage}
    </Text>
  );
};

export default ErrorText;
