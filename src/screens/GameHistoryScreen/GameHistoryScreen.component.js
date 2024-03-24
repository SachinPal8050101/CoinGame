import React from 'react';
import {useSelector} from 'react-redux';

import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';

const GameHistoryScreen = props => {
  const {gameHistory = []} = useSelector(state => state.homeSlice);

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
      <Text style={styles.pastGame}>All Games Result</Text>
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
    color: 'balck',
  },
  pastGame: {
    fontSize: 20,
    marginLeft: 40,
    color: 'black',
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
  maincon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
    marginHorizontal: 20,
  },
  logOut: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default GameHistoryScreen;
