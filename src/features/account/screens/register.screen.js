import React, { useState, useContext } from "react";
import { ActivityIndicator, Colors } from "react-native-paper";

import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
  AuthInput,
  Title,
} from "../components/account.styles";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

import { Text } from "../../../components/typography/text.component";

import { Spacer } from "../../../components/spacer/spacer.component";
export const RegisterScreen = ({ navigation }) => {
  const { onRegister, isLoading, error } = useContext(AuthenticationContext);
  const [emailValue, setEmailValue] = useState("");
  const [passValue, setPassValue] = useState("");
  const [repeatedPassValue, setRepeatedPassValue] = useState("");
  return (
    <AccountBackground>
      <AccountCover />
      <Title>Meals To Go</Title>
      <AccountContainer>
        <AuthInput
          label="E-mail"
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(email) => setEmailValue(email)}
          value={emailValue}
        />
        <Spacer size="large">
          <AuthInput
            label="Password"
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            onChangeText={(password) => setPassValue(password)}
            value={passValue}
          />
        </Spacer>
        <Spacer size="large">
          <AuthInput
            label="Repeat Password"
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            onChangeText={(password) => setRepeatedPassValue(password)}
            value={repeatedPassValue}
          />
        </Spacer>
        {error && (
          <Spacer size="large">
            <Text variant="error">{error}</Text>
          </Spacer>
        )}
        <Spacer size="large">
          {!isLoading ? (
            <AuthButton
              icon="email"
              mode="contained"
              onPress={() =>
                onRegister(emailValue, passValue, repeatedPassValue)
              }
            >
              Register
            </AuthButton>
          ) : (
            <ActivityIndicator animating={true} color={Colors.blue300} />
          )}
        </Spacer>
      </AccountContainer>
      <Spacer size="large">
        <AuthButton mode="contained" onPress={() => navigation.goBack()}>
          Back
        </AuthButton>
      </Spacer>
    </AccountBackground>
  );
};
