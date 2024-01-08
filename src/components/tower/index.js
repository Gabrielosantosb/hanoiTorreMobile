import React from 'react'
import { Disk, Tower, TowerContainer } from '../../pages/easyLevel/styles';

export const TowerComponent = ({ disks }) => {
    
    return (
      <Tower>
        {disks.map((disk, index) => (
          <Disk key={index} size={disk} />
        ))}
      </Tower>
    );
  };