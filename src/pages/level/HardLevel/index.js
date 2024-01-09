import React from "react";
import { Text, View } from "react-native";
import { Game } from "../../game";
import { Timer } from "../../../components/timer";


export const HardLevel = ({ navigation }) => {
  return (
    <>      
      <Game navigation={navigation} numberOfDisks={[5, 4, 3, 2, 1]} minMoviments = {31} />
    </>
  );
};
