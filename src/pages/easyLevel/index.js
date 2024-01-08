import React, { useState } from "react";
import {
  Disk,
  TowerContainer,
  DiskTouchable,
  Tower,
} from "../../pages/easyLevel/styles";
import { TowerComponent } from "../../components/tower";

export const EasyLevel = ({ navigation }) => {
  const [movements, setMovements] = useState(0);
  const [tower1, setTower1] = useState([3, 2, 1]);
  const [tower2, setTower2] = useState([]);
  const [tower3, setTower3] = useState([]);
  const [selectedDisk, setSelectedDisk] = useState(null);
  const [selectedTower, setSelectedTower] = useState(null);

  const selectDisk = (disk, tower) => {
    console.log("Disco selecionado", disk);
    setSelectedDisk(disk);
    setSelectedTower(tower);
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
        console.log("Movimento inválido");
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
    console.log("Torre selecionada", tower);
    if (selectedDisk !== null && selectedTower !== null) {
      moveDisk(selectedTower, tower);
    }
  };

  return (
    <TowerContainer>
      <TowerComponent
        tower={tower1}
        onSelectDisk={(disk) => selectDisk(disk, 1)}
        selectedDisk={selectedDisk}
        onPress={() => handleTowerPress(1)}
      />
      <TowerComponent
        tower={tower2}
        onSelectDisk={(disk) => selectDisk(disk, 2)}
        selectedDisk={selectedDisk}
        onPress={() => handleTowerPress(2)}
      />
      <TowerComponent
        tower={tower3}
        onSelectDisk={(disk) => selectDisk(disk, 3)}
        selectedDisk={selectedDisk}
        onPress={() => handleTowerPress(3)}
      />
    </TowerContainer>
  );
};
