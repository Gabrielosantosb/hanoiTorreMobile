import React from "react";

import { ButtonText, ButtonContainer, RightButtonContainer, LeftButtonContainer } from "./styles";

export const BasicButton = ({ onPress, title, left, right, ...props }) => {
  if (right)
    return (
      <RightButtonContainer onPress={onPress}>
        <ButtonText>{title}</ButtonText>
      </RightButtonContainer>
    );
  if (left)
    return (
      <LeftButtonContainer onPress={onPress}>
        <ButtonText>{title}</ButtonText>
      </LeftButtonContainer>
    );
    <ButtonContainer onPress={onPress}>
    <ButtonText>{title}</ButtonText>
  </ButtonContainer>
};
