import React from "react";
import { View } from "react-native";
import { Game } from "../../game";
import { Timer } from "../../../components/timer";

export const EasyLevel = ({ navigation }) => {
  return (
    <>
      <Game navigation={navigation} numberOfDisks={[3, 2, 1]} minMoviments = {7} />
    </>
  );
};
