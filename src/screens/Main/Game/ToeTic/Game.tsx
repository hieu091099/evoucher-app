import * as React from 'react';

import {Button, Container} from '../../../../components';
import {navigate, goBack} from '../../../../navigations/services';
import styles, {
  StyledButtonContainer,
  StyledGameContainer,
  StyledGameContent,
} from './Game.styled';
import {BoardType, GameProps, GameStateType, GameStatus} from './Game.types';
import {
  checkGameResult,
  checkIsWinnerBoard,
  checkFirstRound,
} from './Game.helpers';

import Board from './Board';
import GameStatusBar from './GameStatusBar';

const Game: React.FC<GameProps> = ({navigation}) => {
  const [status, setStatus] = React.useState<GameStatus>({
    round: 1,
    playerX: 0,
    playerO: 0,
  });
  const [playerType, setPlayerType] = React.useState<BoardType>('X');
  const [gameState, setGameState] = React.useState<GameStateType[]>(
    [...Array(9)].map(() => undefined),
  );

  const gameResult = React.useMemo(() => {
    return checkGameResult(gameState);
  }, [gameState]);

  const handleRestartGame = React.useCallback(() => {
    setPlayerType('X');
    setGameState([...Array(9)].map(() => undefined));

    if (gameResult.isFinished) {
      setStatus(currentStatus => ({
        ...currentStatus,
        round: currentStatus.round + 1,
      }));
    }
  }, [gameResult.isFinished]);

  const handleResetGame = React.useCallback(() => {
    goBack();
  }, []);
  console.log(gameState);
  React.useEffect(() => {
    if (playerType == 'O') {
      const index = minimax(gameState, 0, true);
      console.log(index);
      setGameState((currentGameState: GameStateType[]) => {
        return currentGameState.map((item, boardIndex) => {
          if (typeof item === 'string') {
            return item;
          }

          if (boardIndex === index) {
            setPlayerType(currentPlayerType =>
              currentPlayerType === 'X' ? 'O' : 'X',
            );

            return playerType;
          }

          return item;
        });
      });
    }
  }, [playerType]);
  function minimax(
    board: (string | undefined)[],
    depth: number,
    isMaximizingPlayer: boolean,
  ): number {
    const scores: Record<string, number> = {
      X: -1,
      O: 1,
      tie: 0,
    };

    const winner = getWinner(board);
    if (winner !== null) {
      return scores[winner];
    }

    if (isMaximizingPlayer) {
      let bestScore = -Infinity;
      let bestMove: number | null = null;

      for (let i = 0; i < board.length; i++) {
        if (board[i] === undefined) {
          board[i] = 'O';
          const score = minimax(board, depth + 1, false);
          board[i] = undefined;

          if (score > bestScore) {
            bestScore = score;
            bestMove = i;
          }
        }
      }

      if (depth === 0 && bestMove !== null) {
        return bestMove;
      }

      return bestScore;
    } else {
      let bestScore = Infinity;

      for (let i = 0; i < board.length; i++) {
        if (board[i] === undefined) {
          board[i] = 'X';
          const score = minimax(board, depth + 1, true);
          board[i] = undefined;

          if (score < bestScore) {
            bestScore = score;
          }
        }
      }

      return bestScore;
    }
  }

  function getWinner(board: (string | undefined)[]): string | null {
    const winningStates = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], // Các hàng
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], // Các cột
      [0, 4, 8],
      [2, 4, 6], // Các đường chéo
    ];

    for (let state of winningStates) {
      const [a, b, c] = state;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }

    if (board.every(cell => cell !== undefined)) {
      return 'tie';
    }

    return null;
  }

  const handlePressItem = React.useCallback(
    (index: number) => {
      setGameState((currentGameState: GameStateType[]) => {
        return currentGameState.map((item, boardIndex) => {
          if (typeof item === 'string') {
            return item;
          }

          if (boardIndex === index) {
            setPlayerType(currentPlayerType =>
              currentPlayerType === 'X' ? 'O' : 'X',
            );

            return playerType;
          }

          return item;
        });
      });
    },
    [playerType],
  );

  React.useEffect(() => {
    if (gameResult.isFinished) {
      setStatus(currentStatus => {
        const newStatus = currentStatus;

        if (gameResult.hasWinner) {
          gameResult.winnerPlayerType === 'X'
            ? (newStatus.playerX = currentStatus.playerX + 1)
            : (newStatus.playerO = currentStatus.playerO + 1);
        }

        return {...newStatus};
      });
    }
  }, [
    gameResult.hasWinner,
    gameResult.isFinished,
    gameResult.winnerPlayerType,
    handleRestartGame,
  ]);

  return (
    <Container style={styles.container}>
      <GameStatusBar
        status={status}
        currentPlayer={!gameResult.isFinished ? playerType : undefined}
      />
      <StyledGameContainer>
        <StyledGameContent>
          {gameState.map((item: GameStateType, index: number) => {
            console.log(playerType);
            return (
              <Board
                key={index.toString()}
                type={item}
                disabled={gameResult.isFinished}
                isWinner={checkIsWinnerBoard(gameResult.winnerResult, index)}
                isFinished={gameResult.isFinished}
                onPress={() => playerType == 'X' && handlePressItem(index)}
              />
            );
          })}
        </StyledGameContent>
      </StyledGameContainer>
      <StyledButtonContainer>
        <Button
          style={styles.primaryButton}
          disabled={checkFirstRound(gameState)}
          onPress={handleRestartGame}>
          {gameResult.isFinished ? 'Start Game' : 'Restart'}
        </Button>
        <Button
          style={styles.secondaryButton}
          type="secondary"
          onPress={handleResetGame}>
          Quit Game
        </Button>
      </StyledButtonContainer>
    </Container>
  );
};

export default Game;
