import React from "react";
import { Disk, Disk1, Tower, TowerContainer } from "../../pages/easyLevel/styles";
import { DiskTouchable } from "./styles";

export const TowerComponent = ({ tower, onSelectDisk, onPress }) => {
  const handleDiskClick = (disk) => {
    console.log("Clicou no disco", disk);
    onSelectDisk(disk);
  };

  return (
    <Tower onPress={onPress}>
      {tower.map((disk, index) => (
        <DiskTouchable key={index} onPress={() => handleDiskClick(disk)}>
          <Disk size={disk} />
        </DiskTouchable>
      ))}
    </Tower>
  );
};