import React from "react";
import { View } from "react-native";
import { Game } from "../../game";
import { Timer } from "../../../components/timer";


export const CustomLevel = ({ navigation, route}) => {
    const { numberOfDisks } = route.params;
    return (
      <>
      {console.log("Numero de discos", numberOfDisks)}        
    <Game navigation={navigation} numberOfDisks={numberOfDisks} minMoviments={null} />        
      </>
    );
  };