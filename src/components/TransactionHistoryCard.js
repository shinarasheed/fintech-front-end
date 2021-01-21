import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { CardItem } from "native-base";
import { Entypo } from "@expo/vector-icons";

const renderImage = (mode) => {
  // const {iconBackground} = props;
  switch (mode) {
    case "M-Pesa":
      return (
        <Image
          source={require("../../assets/mpesa.png")}
          style={[{ height: 40, width: 60, margin: 0 }]}
        />
      );
    case "Co-operative Bank":
      return (
        <Image
          source={require("../../assets/co-op.png")}
          style={[{ height: 40, width: 40, margin: 0 }]}
        />
      );
    case "MasterCard":
      return (
        <Image
          source={require("../../assets/mastercard.jpg")}
          style={[{ height: 40, width: 50, margin: 0 }]}
        />
      );
    case "Visa":
      return (
        <Image
          source={require("../../assets/visa.png")}
          style={[{ height: 30, width: 40, margin: 0 }]}
        />
      );

    default:
      break;
  }
};

const TransactionHistoryCard = (props) => {
  let str1 = props.data.account_number;
  let str2 = str1.slice(-4);

  return (
    <View style={styles.card}>
      <CardItem>
        <View style={styles.mainContainer}>
          <View>
            {/* {renderImage(props.data.mode)} */}
            <Image
              source={require("../../assets/mpesa.png")}
              style={[{ height: 40, width: 60, margin: 0 }]}
            />
            <Text style={[{ color: "#696969", marginTop: -3 }]}>...{str2}</Text>
          </View>
        </View>
        <View style={styles.containerTwo}>
          <Text style={[{ fontWeight: "bold" }]}>{props.data.paid_for}</Text>
          <Text style={[{ color: "#696969", marginTop: 5 }]}>
            {props.data.createdAt}
          </Text>
        </View>
        <View style={styles.containerThree}>
          <Text style={[{ color: "black" }]}>Ksh {props.data.amount}</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            props.navigator(props.data);
          }}
          style={styles.containerFour}
        >
          <Entypo name="chevron-right" size={35} color="#696969" />
        </TouchableOpacity>
      </CardItem>
    </View>
  );
};

export default TransactionHistoryCard;

const styles = StyleSheet.create({
  card: {
    borderWidth: 0,
    borderTopWidth: 1,
    borderColor: "#AEBBC3",
  },
  mainContainer: {
    width: "25%",
    height: "100%",
    flexDirection: "column",
  },
  containerTwo: {
    width: "40%",
    height: "100%",
    flexDirection: "column",
  },
  containerThree: {
    height: "100%",
    alignItems: "center",
  },
  containerFour: {
    width: "20%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
});
