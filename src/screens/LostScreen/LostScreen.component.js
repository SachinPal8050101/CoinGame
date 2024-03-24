import React from 'react';
import {useSelector} from 'react-redux';

import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';

const LostScreen = props => {
  const {gameHistory = []} = useSelector(state => state.homeSlice);
  const userWinningSttus = gameHistory[gameHistory.length - 1].text;
  const playAgain = () => {
    props.navigation.goBack();
  };

  const renderCard = ({item}) => {
    return (
      <View style={styles.card}>
        <Text style={styles.cardText}>{item.text}</Text>
        <Text style={styles.cardText}>{item.date.toDateString()}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.lostText}>{userWinningSttus}</Text>
      <TouchableOpacity style={styles.playButton} onPress={playAgain}>
        <Text style={styles.playButtonText}>Play Again</Text>
      </TouchableOpacity>
      <Text style={styles.pastGame}>Past Games Result</Text>
      <FlatList
        data={gameHistory}
        renderItem={renderCard}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  card: {
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    backgroundColor: '#f0f0f0',
    marginHorizontal: 40,
  },
  cardText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  pastGame: {
    fontSize: 20,
    marginLeft: 40,
  },
  lostText: {
    fontSize: 30,
    textAlign: 'center',
    marginVertical: 40,
  },
  playButton: {
    backgroundColor: 'orange',
    marginHorizontal: 30,
    borderRadius: 10,
    marginBottom: 30,
  },
  playButtonText: {
    fontSize: 20,
    padding: 10,
    textAlign: 'center',
  },
});

export default LostScreen;
