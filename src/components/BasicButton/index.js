import React from "react";

import { ButtonText, LeftButtonContainer } from "./styles";


export const BasicButton = ({ onPress, title }) => {
  return (
    <LeftButtonContainer onPress={onPress} style={{ padding: 10 }}>
      <ButtonText>{title || "Voltar"}</ButtonText>
    </LeftButtonContainer>
  );
};
