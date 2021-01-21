import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { Card, CardItem, Body, Text, H2 } from "native-base";

const TransactionCard = (props) => {
  let str1 = props.data.account_number;
  let str2 = str1.slice(-4);

  return (
    <Card transparent style={styles.card}>
      <CardItem style={[{ paddingBottom: 35, paddingTop: 10 }]}>
        <Body>
          <H2>{props.data.name}</H2>
          <Text style={[{ marginTop: 10 }]}>{props.data.email}</Text>
          <View style={styles.paymentModeContainer}>
            <Image
              source={require("../../assets/mpesa.png")}
              style={[{ height: 50, width: 70, margin: 0 }]}
            />
            <Text>.... {str2}</Text>
          </View>
          <View style={styles.contentContainer}>
            <Text style={styles.txt}>Date:</Text>
            <Text style={{ ...styles.txt, color: "#696969", marginLeft: 10 }}>
              {props.data.createdAt}
            </Text>
          </View>
          <View style={styles.contentContainer}>
            <Text style={styles.txt}>Payment:</Text>
            <Text style={{ ...styles.txt, color: "#696969", marginLeft: 10 }}>
              {props.data.paid_for}
            </Text>
          </View>
          <View style={styles.contentContainer}>
            <Text style={styles.txt}>Mobile Number:</Text>
            <Text style={{ ...styles.txt, color: "#696969", marginLeft: 10 }}>
              {props.data.account_number}
            </Text>
          </View>
          <View style={styles.contentContainer}>
            <Text style={styles.txt}>Mode of Payment:</Text>
            <Text style={{ ...styles.txt, color: "#696969", marginLeft: 10 }}>
              {props.data.mode}
            </Text>
          </View>

          <View style={styles.contentContainer}>
            <Text style={styles.txt}>Transaction ID: </Text>
            <Text style={{ ...styles.txt, color: "#696969", marginLeft: 10 }}>
              {props.data.transaction_number}
            </Text>
          </View>
          <View style={{ ...styles.contentContainer, marginTop: 20 }}>
            <Text style={[{ fontWeight: "bold", fontSize: 17 }]}>
              {" "}
              Amount:{" "}
            </Text>
            <Text
              style={{
                ...styles.txt,
                color: "green",
                marginLeft: 15,
                fontWeight: "bold",
                fontSize: 17,
              }}
            >
              Ksh {props.data.amount}
            </Text>
          </View>
        </Body>
      </CardItem>
    </Card>
  );
};

export default TransactionCard;

const styles = StyleSheet.create({
  card: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    paddingBottom: 40,
    borderWidth: 5,
  },
  paymentModeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    width: "50%",
    marginTop: 15,
  },
  contentContainer: {
    flexDirection: "row",
    width: "70%",
    marginTop: 15,
  },
  txt: {
    fontSize: 14,
  },
});
