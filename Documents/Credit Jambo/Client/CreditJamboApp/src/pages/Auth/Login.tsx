import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Button from "../components/Button";
import Input from "../components/Input";
import { COLORS } from "../utils/constants";

const LoginPage = ({ navigation }: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    navigation.navigate("Dashboard");
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../public/logo.png")}
        style={{ width: 120, height: 120, marginBottom: 30 }}
      />
      <Text style={styles.title}>Welcome to Credit Jambo</Text>

      <Input label="Email" value={email} onChangeText={setEmail} placeholder="Enter email" />
      <Input
        label="Password"
        value={password}
        onChangeText={setPassword}
        placeholder="Enter password"
        secureTextEntry
      />

      <Button title="Login" onPress={handleLogin} />

      <TouchableOpacity onPress={() => navigation.navigate("Register")}>
        <Text style={styles.link}>Don’t have an account? Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: COLORS.black,
    marginBottom: 20,
  },
  link: {
    color: COLORS.primary,
    marginTop: 15,
    fontWeight: "600",
  },
});

export default LoginPage;
