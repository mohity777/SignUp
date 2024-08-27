import {ImageBackground, Pressable, Text, TouchableOpacity} from 'react-native';
import {tw} from '../../tw';

const CompetitionCard = ({name, place, startDate, endDate, onPress}) => {
  return (
    <TouchableOpacity onPress={() => onPress(name)}>
      <ImageBackground
        style={tw`w-full bg-[#2030E2] rounded-2xl p-6 my-2`}
        source={require('../../assets/images/competitionCard.png')}>
        <Text style={tw`font-plusJakartaSansBold text-white text-lg`}>
          {name}
        </Text>
        <Text style={tw`font-plusJakartaSansMedium text-white text-sm mt-2`}>
          {startDate} ~ {endDate}
        </Text>
        <Text
          style={tw`font-plusJakartaSansMedium text-[#B8BFFF] text-sm  mt-1`}>
          {place}
        </Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default CompetitionCard;
