import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginPage from "./src/pages/LoginPage";
import RegisterPage from "./src/pages/RegisterPage";
import Dashboard from "./src/pages/Dashboard";
import DepositPage from "./src/pages/DepositPage";
import WithdrawPage from "./src/pages/WithdrawPage";

const Stack = createNativeStackNavigator();
const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={LoginPage} />
          <Stack.Screen name="Register" component={RegisterPage} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="Deposit" component={DepositPage} />
          <Stack.Screen name="Withdraw" component={WithdrawPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}
