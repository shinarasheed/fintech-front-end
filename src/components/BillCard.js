import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { AppStyles } from "../AppStyles";
import {
  Ionicons,
  AntDesign,
  Fontisto,
  FontAwesome5,
  FontAwesome,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { CardItem } from "native-base";

const renderIcon = (iconType, iconName) => {
  switch (iconType) {
    case "MaterialCommunityIcons":
      return (
        <MaterialCommunityIcons
          name={iconName}
          size={20}
          color={AppStyles.color.white}
        />
      );
    case "FontAwesome":
      return (
        <FontAwesome name={iconName} size={17} color={AppStyles.color.white} />
      );
    case "FontAwesome5":
      return (
        <FontAwesome5 name={iconName} size={15} color={AppStyles.color.white} />
      );
    case "AntDesign":
      return (
        <AntDesign name={iconName} size={17} color={AppStyles.color.white} />
      );
    case "MaterialIcons":
      return (
        <MaterialIcons
          name={iconName}
          size={20}
          color={AppStyles.color.white}
        />
      );
    case "Ionicons":
      return (
        <Ionicons name={iconName} size={20} color={AppStyles.color.white} />
      );
    case "Fontisto":
      return (
        <Fontisto name={iconName} size={20} color={AppStyles.color.white} />
      );

    default:
      break;
  }
};

const BillCard = (props) => {
  return (
    <View style={styles.GridViewBlockStyle}>
      <CardItem
        button
        onPress={() => {
          props.billHandler(props.item);
        }}
        style={styles.cardItem}
      >
        <View style={{ ...styles.iconContainer, backgroundColor: "#008000" }}>
          <AntDesign name="idcard" size={17} color={AppStyles.color.white} />
        </View>
        <Text style={styles.txt}>{props.name}</Text>
      </CardItem>
    </View>
  );
};

export default BillCard;

const styles = StyleSheet.create({
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderColor: AppStyles.color.white,
    borderRadius: 100,
    height: 30,
    width: 30,
  },
  cardItem: {
    marginLeft: 10,
  },
  txt: {
    marginLeft: 15,
    textAlign: "center",
    fontSize: 17,
  },
  GridViewBlockStyle: {
    justifyContent: "flex-start",
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    height: 60,
    marginRight: 15,
    marginLeft: 15,
    marginTop: 10,
    backgroundColor: "#ffff",
    borderRadius: 20,
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
});

// import React from "react";
// import { StyleSheet, View, Text } from "react-native";
// import { AppStyles } from "../AppStyles";
// import {
//   Ionicons,
//   AntDesign,
//   Fontisto,
//   FontAwesome5,
//   FontAwesome,
//   MaterialIcons,
//   MaterialCommunityIcons,
// } from "@expo/vector-icons";
// import { CardItem } from "native-base";

// const renderIcon = (iconType, iconName) => {
//   switch (iconType) {
//     case "MaterialCommunityIcons":
//       return (
//         <MaterialCommunityIcons
//           name={iconName}
//           size={20}
//           color={AppStyles.color.white}
//         />
//       );
//     case "FontAwesome":
//       return (
//         <FontAwesome name={iconName} size={17} color={AppStyles.color.white} />
//       );
//     case "FontAwesome5":
//       return (
//         <FontAwesome5 name={iconName} size={15} color={AppStyles.color.white} />
//       );
//     case "AntDesign":
//       return (
//         <AntDesign name={iconName} size={17} color={AppStyles.color.white} />
//       );
//     case "MaterialIcons":
//       return (
//         <MaterialIcons
//           name={iconName}
//           size={20}
//           color={AppStyles.color.white}
//         />
//       );
//     case "Ionicons":
//       return (
//         <Ionicons name={iconName} size={20} color={AppStyles.color.white} />
//       );
//     case "Fontisto":
//       return (
//         <Fontisto name={iconName} size={20} color={AppStyles.color.white} />
//       );

//     default:
//       break;
//   }
// };

// const BillCard = (props) => {
//   return (
//     <View style={styles.GridViewBlockStyle}>
//       <CardItem
//         button
//         onPress={() => {
//           props.billHandler(props.item);
//         }}
//         style={styles.cardItem}
//       >
//         <View style={{ ...styles.iconContainer, backgroundColor: "#008000" }}>
//           {renderIcon(props.iconType, props.iconName)}
//         </View>
//         <Text style={styles.txt}>{props.text}</Text>
//       </CardItem>
//     </View>
//   );
// };

// export default BillCard;

// const styles = StyleSheet.create({
//   iconContainer: {
//     justifyContent: "center",
//     alignItems: "center",
//     borderColor: AppStyles.color.white,
//     borderRadius: 100,
//     height: 30,
//     width: 30,
//   },
//   cardItem: {
//     marginLeft: 10,
//   },
//   txt: {
//     marginLeft: 15,
//     textAlign: "center",
//     fontSize: 17,
//   },
//   GridViewBlockStyle: {
//     justifyContent: "flex-start",
//     flexDirection: "row",
//     flex: 1,
//     alignItems: "center",
//     height: 60,
//     marginRight: 15,
//     marginLeft: 15,
//     marginTop: 10,
//     backgroundColor: "#ffff",
//     borderRadius: 20,
//     borderColor: "#C0C0C0",
//     borderWidth: 1,
//   },
// });
