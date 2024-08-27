import {FlatList, Modal} from 'react-native';
import {tw} from '../../tw';
import CompetitionsModalHeader from './CompetitionModalHeader';
import {useEffect, useState} from 'react';
import {COMPETITIONS} from '../utils/constants';
import CompetitionCard from './CompetitionCard';

const CompetitionsModal = ({visible, setVisible, onChangeCompetitions}) => {
  const [competitions, setCompetions] = useState([]);

  useEffect(() => {
    if (visible) {
      // RESET to original
      setCompetions(COMPETITIONS);
    }
  }, [visible]);

  const onChangeSearchInput = inp => {
    const newCompetitions = COMPETITIONS.filter(it =>
      it.name.toLowerCase().includes(inp?.toLowerCase()),
    );
    setCompetions(newCompetitions);
  };

  const renderItem = ({item}) => (
    <CompetitionCard
      name={item.name}
      place={item.place}
      startDate={item.startDate}
      endDate={item.endDate}
      onPress={() => {
        onChangeCompetitions(item.name);
        setVisible(false);
      }}
    />
  );

  return (
    <Modal style={tw`flex-1`} visible={visible} animationType="slide">
      <CompetitionsModalHeader
        hideModal={() => setVisible(false)}
        onChange={onChangeSearchInput}
      />
      <FlatList
        data={competitions}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={tw`p-5`}
      />
    </Modal>
  );
};

export default CompetitionsModal;
