import React, { useEffect, useState } from "react";
import {
  TowerContainer,
  GameContainer,
  TowerText,
  StyledTowerText,
} from "./styles";
import { TowerComponent } from "../../components/tower";
import { YouWinModal } from "../../modal/YouWinModal";
import ToastMessage from "../../components/toast";
import { Timer } from "../../components/timer";
import { BasicButton } from "../../components/BasicButton";

export const Game = ({ navigation, numberOfDisks, minMoviments }) => {
  const [movements, setMovements] = useState(0);
  const [tower1, setTower1] = useState(numberOfDisks);
  const [tower2, setTower2] = useState([]);
  const [tower3, setTower3] = useState([]);
  const [selectedDisk, setSelectedDisk] = useState(null);
  const [selectedTower, setSelectedTower] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [resetTimer, setResetTimer] = useState(false);

  useEffect(() => {
    checkGameOver();
  }, [tower3]);

  const selectDisk = (disk, tower) => {
    const towerArray = getTowerArray(tower);
    // Verificar se o disco selecionado é o disco do topo
    if (disk === towerArray[towerArray.length - 1]) {
      setSelectedDisk(disk);
      setSelectedTower(tower);
    } else {
      ToastMessage({
        message: "Apenas o disco no topo da torre pode ser selecionado",
      });
    }
  };

  const moveDisk = (fromTower, toTower) => {
    if (selectedDisk !== null && selectedTower !== null) {
      const fromTowerArray = getTowerArray(fromTower);
      const toTowerArray = getTowerArray(toTower);

      if (isValidMove(fromTowerArray, toTowerArray)) {
        const updatedFromTower = fromTowerArray.slice(0, -1);
        const updatedToTower = toTowerArray.concat(selectedDisk);

        updateTowerState(fromTower, updatedFromTower);
        updateTowerState(toTower, updatedToTower);

        setSelectedDisk(null);
        setSelectedTower(null);

        setMovements(movements + 1);
      } else {
        ToastMessage({ message: "Movimento inválido" });
      }
    }
  };

  const getTowerArray = (towerNumber) => {
    switch (towerNumber) {
      case 1:
        return tower1;
      case 2:
        return tower2;
      case 3:
        return tower3;
      default:
        return [];
    }
  };

  const updateTowerState = (towerNumber, updatedTower) => {
    switch (towerNumber) {
      case 1:
        setTower1(updatedTower);
        break;
      case 2:
        setTower2(updatedTower);
        break;
      case 3:
        setTower3(updatedTower);
        break;
      default:
        break;
    }
  };

  const isValidMove = (fromTower, toTower) => {
    return toTower.length === 0 || selectedDisk < toTower[toTower.length - 1];
  };

  const handleTowerPress = (tower) => {
    if (selectedDisk !== null && selectedTower !== null) {
      moveDisk(selectedTower, tower);
    }
  };

  const checkGameOver = () => {
    if (tower3.length === numberOfDisks.length) {
      setGameOver(true);
    }
  };

  const backButton = () =>{
    navigation.pop()
  }

  const resetGame = () => {
    setTower1(numberOfDisks);
    setTower2([]);
    setTower3([]);
    setMovements(0);
    setSelectedDisk(null);
    setSelectedTower(null);
    setGameOver(false);
    setResetTimer(true);
    setTimeout(() => setResetTimer(false), 0);
  };

  return (
    <>
      <GameContainer>
        <BasicButton onPress={backButton} title={'Voltar'}  left />
        <BasicButton   onPress={resetGame} title={'Resetar'} right/>
        <StyledTowerText>
          {movements} movimentos em:
          <Timer gameOver={gameOver} resetTimer={resetTimer} />
        </StyledTowerText>
        <TowerContainer>
          <TowerComponent
            tower={tower1}
            onSelectDisk={(disk) => selectDisk(disk, 1)}
            selectedDisk={selectedDisk}
            onPress={() => handleTowerPress(1)}
          />
          <TowerText>Inicio</TowerText>
        </TowerContainer>

        <TowerContainer>
          <TowerComponent
            tower={tower2}
            onSelectDisk={(disk) => selectDisk(disk, 2)}
            selectedDisk={selectedDisk}
            onPress={() => handleTowerPress(2)}
          />
          <TowerText>Apoio</TowerText>
        </TowerContainer>

        <TowerContainer>
          <TowerComponent
            tower={tower3}
            onSelectDisk={(disk) => selectDisk(disk, 3)}
            selectedDisk={selectedDisk}
            onPress={() => handleTowerPress(3)}
          />
          <TowerText>Final</TowerText>
        </TowerContainer>
        <YouWinModal
          isVisible={gameOver}
          onClose={resetGame}
          movements={movements}
          minMoviments={minMoviments}
        />
      </GameContainer>
    </>
  );
};
