import React from "react";
import { Disk, Disk1, Tower, TowerContainer } from "../../pages/game/styles";
import { DiskTouchable } from "./styles";

export const TowerComponent = ({ tower, onSelectDisk, selectedDisk, onPress, smallTower  }) => {
  const handleDiskClick = (disk) => {    
    onSelectDisk(disk);
  };

  return (
    <Tower onPress={onPress} smallTower={smallTower}>
      {tower.map((disk, index) => (
        <DiskTouchable
          key={index}
          onPress={() => handleDiskClick(disk)}
        >
          <Disk
            size={disk}
            selected={selectedDisk === disk}
          />
        </DiskTouchable>
      ))}
    </Tower>
  );
}