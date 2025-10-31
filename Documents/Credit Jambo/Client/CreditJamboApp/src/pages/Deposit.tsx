import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Alert } from "react-native";
import Button from "../components/Button";
import { COLORS } from "../utils/constants";
import { useDeposit } from "../services/useDeposit";

const DepositPage = ({ navigation }: any) => {
  const [amount, setAmount] = useState("");
  const userId = "1"; // example user
  const { mutate, isPending } = useDeposit(userId);

  const handleDeposit = () => {
    mutate(Number(amount), {
      onSuccess: () => {
        Alert.alert("Success", "Deposit successful!");
        navigation.goBack();
      },
      onError: () => Alert.alert("Error", "Failed to deposit."),
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Deposit Funds</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Enter amount"
        placeholderTextColor={COLORS.gray}
        value={amount}
        onChangeText={setAmount}
      />
      <Button title={isPending ? "Processing..." : "Deposit"} onPress={handleDeposit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: COLORS.white },
  title: { fontSize: 20, fontWeight: "bold", color: COLORS.black, marginBottom: 20 },
  input: {
    borderWidth: 1,
    borderColor: COLORS.black,
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
    color: COLORS.black,
  },
});

export default DepositPage;
