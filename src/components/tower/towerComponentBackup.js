import React from "react";
import { Disk, Disk1, Tower, TowerContainer } from "../../pages/easyLevel/styles";
import { DiskTouchable } from "./styles";

export const TowerComponent = ({ disks, onPress }) => {

  const handleDiskClick = (disk) => {
    console.log('clicou')
    onPress && onPress(disk);
  };

  return (
    <Tower>
      {disks.map((disk, index) => (
        <DiskTouchable
          key={index}
          onPress={() => handleDiskClick(disk)}
        >
          <Disk size={disk} />
        </DiskTouchable>
      ))}
    </Tower>
  );
};
