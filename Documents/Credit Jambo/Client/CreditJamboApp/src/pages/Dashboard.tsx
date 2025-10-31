import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, ActivityIndicator } from "react-native";
import { COLORS } from "../utils/constants";
import LinearGradient from "react-native-linear-gradient";
import { useBalance } from "../services/useBalance";
import { useTransactions } from "../services/useTransactions";

const Dashboard = ({ navigation }: any) => {
  const userId = "1"; // replace with logged-in user’s id
  const { data: balanceData, isLoading: loadingBalance } = useBalance(userId);
  const { data: transactions, isLoading: loadingTxns } = useTransactions(userId);

  return (
    <ScrollView style={styles.container}>
      <LinearGradient colors={[COLORS.primary, "#02a44a"]} style={styles.balanceCard}>
        <Text style={styles.balanceText}>Available Balance</Text>
        {loadingBalance ? (
          <ActivityIndicator color={COLORS.white} />
        ) : (
          <Text style={styles.amount}>
            RWF {balanceData?.balance?.toLocaleString() || 0}
          </Text>
        )}
      </LinearGradient>

      <TouchableOpacity
        style={[styles.actionCard, { borderColor: COLORS.primary }]}
        onPress={() => navigation.navigate("Deposit")}
      >
        <Text style={styles.actionText}>Deposit</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.actionCard, { borderColor: COLORS.black }]}
        onPress={() => navigation.navigate("Withdraw")}
      >
        <Text style={styles.actionText}>Withdraw</Text>
      </TouchableOpacity>

      <Text style={styles.historyTitle}>Recent Transactions</Text>
      {loadingTxns ? (
        <ActivityIndicator color={COLORS.primary} />
      ) : (
        transactions?.map((txn: any, i: number) => (
          <View
            key={i}
            style={[
              styles.txnCard,
              {
                borderColor:
                  txn.type === "deposit" ? COLORS.primary : COLORS.black,
              },
            ]}
          >
            <Text style={styles.txnType}>{txn.type.toUpperCase()}</Text>
            <Text
              style={{
                color: txn.type === "deposit" ? COLORS.primary : COLORS.black,
                fontWeight: "600",
              }}
            >
              RWF {txn.amount}
            </Text>
            <Text style={styles.date}>
              {new Date(txn.created_at).toLocaleString()}
            </Text>
          </View>
        ))
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.gray, padding: 20 },
  balanceCard: { borderRadius: 15, padding: 25, marginBottom: 25 },
  balanceText: { color: COLORS.white, fontSize: 16 },
  amount: { color: COLORS.white, fontSize: 28, fontWeight: "bold" },
  actionCard: {
    backgroundColor: COLORS.white,
    borderWidth: 2,
    borderRadius: 10,
    padding: 20,
    marginBottom: 15,
  },
  actionText: { color: COLORS.black, fontWeight: "bold", fontSize: 18, textAlign: "center" },
  historyTitle: { fontWeight: "bold", fontSize: 18, marginVertical: 15, color: COLORS.black },
  txnCard: { backgroundColor: COLORS.white, borderWidth: 2, borderRadius: 10, padding: 15, marginBottom: 10 },
  txnType: { fontWeight: "bold", fontSize: 16, color: COLORS.black },
  date: { fontSize: 12, color: COLORS.black },
});

export default Dashboard;
