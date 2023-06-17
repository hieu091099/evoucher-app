import React, {useState, useEffect} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Button, StyleSheet, SafeAreaView, ImageBackground} from 'react-native';
import {GameEngine} from 'react-native-game-engine';
import {useDispatch} from 'react-redux';
import entities from '../../../../entities';
import Physics from '../../../../utils/physics';

export default function FlappyBird() {
  const dispatch = useDispatch();
  const [running, setRunning] = useState(false);
  const [gameEngine, setGameEngine] = useState(null);
  const [currentPoints, setCurrentPoints] = useState(0);
  useEffect(() => {
    setRunning(false);
  }, []);

  return (
    <>
      <ImageBackground
        resizeMode="cover"
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
        }}
        source={require('../../../../assets/background.png')}>
        <SafeAreaView style={{marginHorizontal: 16, flex: 1}}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 40,
              fontWeight: 'bold',
              margin: 20,
              zIndex: 150,
            }}>
            {currentPoints}
          </Text>

          <GameEngine
            ref={ref => {
              setGameEngine(ref);
            }}
            systems={[Physics]}
            entities={entities()}
            running={running}
            onEvent={e => {
              switch (e.type) {
                case 'game_over':
                  setRunning(false);
                  gameEngine?.stop();
                  break;
                case 'new_point':
                  setCurrentPoints(currentPoints + 1);
                  break;
              }
            }}
            style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0}}
          />

          {!running ? (
            <SafeAreaView
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <TouchableOpacity
                style={{
                  backgroundColor: 'black',
                  paddingHorizontal: 30,
                  paddingVertical: 10,
                }}
                onPress={() => {
                  setCurrentPoints(0);
                  setRunning(true);
                  gameEngine.swap(entities());
                }}>
                <Text
                  style={{fontWeight: 'bold', color: 'white', fontSize: 30}}>
                  START GAME
                </Text>
              </TouchableOpacity>
            </SafeAreaView>
          ) : null}
        </SafeAreaView>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({});
