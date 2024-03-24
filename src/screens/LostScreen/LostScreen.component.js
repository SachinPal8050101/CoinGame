import React, {useContext} from 'react';
import {useSelector} from 'react-redux';

import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import AppContext from '../../store/authStore';

const LostScreen = props => {
  const {gameHistory = []} = useSelector(state => state.homeSlice);
  const {signOut} = useContext(AppContext);

  const userWinningSttus =
    gameHistory.length && gameHistory[gameHistory.length - 1].text;
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

  const logOutPress = () => {
    signOut();
  };

  const onHistoryPress = () => {
    props.navigation.navigate('History');
  };

  return (
    <View style={styles.container}>
      <View style={styles.maincon}>
        <TouchableOpacity onPress={logOutPress}>
          <Text style={styles.logOut}>Log Out</Text>
        </TouchableOpacity>
        <Text style={styles.lostText}>{userWinningSttus}</Text>
        <TouchableOpacity onPress={onHistoryPress}>
          <Text style={styles.logOut}>History</Text>
        </TouchableOpacity>
      </View>
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

export default LostScreen;
