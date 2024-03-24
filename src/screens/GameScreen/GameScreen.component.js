import React, {useState, useEffect} from 'react';
import {View, Text, Button, StyleSheet, Image} from 'react-native';
import {useDispatch} from 'react-redux';
import {gameSuccess} from '../../store/Home.Reducer';

const MAX_COINS = 21;

const GameScreen = props => {
  const [coinsRemaining, setCoinsRemaining] = useState(MAX_COINS);
  const [playerTurn, setPlayerTurn] = useState(true);
  const [winnerText, setWinnerText] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    if (!playerTurn) {
      calculateAiChoice();
    }
  }, [playerTurn]);

  const handlePlayerPick = amount => {
    if (!playerTurn) {
      return;
    }
    setCoinsRemaining(coinsRemaining - amount);
    setPlayerTurn(false);
    const availCoins = coinsRemaining - amount;
    if (availCoins <= 0) {
      checkWinner();
    }
  };

  const calculateAiChoice = () => {
    let aiCoinsToPick = coinsRemaining % 5;
    if (aiCoinsToPick === 0) {
      aiCoinsToPick = Math.floor(Math.random() * 4) + 1;
    }
    const coinsLeft = coinsRemaining - aiCoinsToPick;
    setTimeout(() => {
      setCoinsRemaining(coinsLeft);
      setPlayerTurn(true);
    }, 1000);
    if (coinsLeft <= 0) {
      setWinnerText('AI Win!');
      dispatch(gameSuccess({text: 'AI Win!', date: new Date()}));
      props.navigation.navigate('Lost');
    }
  };

  const handleRestart = () => {
    setCoinsRemaining(MAX_COINS);
    setPlayerTurn(true);
    setWinnerText('');
  };

  const checkWinner = () => {
    const winText = playerTurn ? 'You Lose!' : 'You Win!';
    setWinnerText(winText);
    setTimeout(() => {
      dispatch(gameSuccess({text: winText, date: new Date()}));
      props.navigation.navigate('Lost');
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Coins Game </Text>
      {winnerText ? (
        <Text style={styles.winnerText}>{winnerText}</Text>
      ) : (
        <>
          <Image
            source={require('../../assets/coin.png')}
            style={styles.coinImage}
          />
          <Text style={styles.coinsText}>
            Coins Remaining: {coinsRemaining}
          </Text>
          {playerTurn ? (
            <>
              <Text style={styles.turnText}>Your Turn!</Text>
              <View style={styles.buttonRow}>
                <Button
                  title="1"
                  onPress={() => handlePlayerPick(1)}
                  style={styles.button}
                />
                <Button
                  title="2"
                  onPress={() => handlePlayerPick(2)}
                  style={styles.button}
                />
                <Button
                  title="3"
                  onPress={() => handlePlayerPick(3)}
                  style={styles.button}
                />
                <Button
                  title="4"
                  onPress={() => handlePlayerPick(4)}
                  style={styles.button}
                />
              </View>
            </>
          ) : (
            <Text style={styles.aiTurnText}>AI is thinking...</Text>
          )}
        </>
      )}
      <Button
        title="Restart Game"
        onPress={handleRestart}
        style={styles.restartButton}
      />
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
  },
  winnerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
  },
  coinsText: {
    fontSize: 18,
    marginBottom: 10,
    color: 'black',
  },
  turnText: {
    fontSize: 16,
    marginBottom: 10,
    color: 'black',
  },
  aiTurnText: {
    fontSize: 16,
    marginBottom: 10,
    fontStyle: 'italic',
    color: 'black',
  },
  aiChoiceText: {
    fontSize: 16,
    marginBottom: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  coinImage: {
    width: 50,
    height: 50,
  },
  textColor: {
    color: 'black',
  },
});
