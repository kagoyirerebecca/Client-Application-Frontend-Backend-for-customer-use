import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { COLORS } from "../utils/constants";

interface InputProps {
  label: string;
  value: string;
  placeholder?: string;
  secureTextEntry?: boolean;
  onChangeText: (text: string) => void;
}

const Input: React.FC<InputProps> = ({
  label,
  value,
  placeholder,
  secureTextEntry,
  onChangeText,
}) => (
  <View style={styles.container}>
    <Text style={styles.label}>{label}</Text>
    <TextInput
      value={value}
      placeholder={placeholder}
      placeholderTextColor={COLORS.gray}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      style={styles.input}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  label: {
    color: COLORS.black,
    fontWeight: "600",
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.black,
    borderRadius: 10,
    padding: 12,
    color: COLORS.black,
    backgroundColor: COLORS.white,
  },
});

export default Input;
