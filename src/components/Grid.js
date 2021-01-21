import React from "react";
import {
  StyleSheet,
  FlatList,
  View,
  Platform,
  TouchableWithoutFeedback,
} from "react-native";
import CardContainer from "./CardContainer";

const Grid = (props) => {
  return (
    <View style={styles.MainContainer}>
      <FlatList
        data={props.gridViewItems}
        renderItem={({ item }) => {
          return (
            <TouchableWithoutFeedback
              onPress={() => {
                props.navigator(item);
              }}
            >
              <View style={styles.GridViewBlockStyle}>
                <CardContainer
                  iconName={item.iconName}
                  iconType={item.iconType}
                  text={item.text}
                  params={item.params}
                  iconBackground={item.iconBackground}
                />
              </View>
            </TouchableWithoutFeedback>
          );
        }}
        numColumns={props.numColumns}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default Grid;

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: "center",
    flex: 1,
    margin: 10,
    marginTop: 20,
    paddingTop: Platform.OS === "ios" ? 20 : 0,
  },

  GridViewBlockStyle: {
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
    height: 150,
    margin: 10,
    backgroundColor: "white",
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "white",
  },
});

// import React, { Component } from "react";
// import {
//   StyleSheet,
//   FlatList,
//   View,
//   Platform,
//   TouchableWithoutFeedback,
// } from "react-native";
// import CardContainer from "./CardContainer";

// export default class Grid extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   render() {
//     return (
//       <View style={styles.MainContainer}>
//         <FlatList
//           data={this.props.data}
//           renderItem={({ item }) => (
//             <TouchableWithoutFeedback
//               onPress={() => {
//                 this.props.navigator(item);
//               }}
//             >
//               <View style={styles.GridViewBlockStyle}>
//                 <CardContainer
//                   iconName={item.iconName}
//                   iconType={item.iconType}
//                   text={item.text}
//                   params={item.params}
//                   iconBackground={item.iconBackground}
//                 />
//               </View>
//             </TouchableWithoutFeedback>
//           )}
//           numColumns={this.props.numColumns}
//         />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   MainContainer: {
//     justifyContent: "center",
//     flex: 1,
//     margin: 10,
//     marginTop: 20,
//     paddingTop: Platform.OS === "ios" ? 20 : 0,
//   },

//   GridViewBlockStyle: {
//     justifyContent: "center",
//     flex: 1,
//     alignItems: "center",
//     height: 150,
//     margin: 10,
//     backgroundColor: "white",
//     borderRadius: 20,
//     borderWidth: 2,
//     borderColor: "white",
//   },
// });
