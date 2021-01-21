import React from "react";
import { StyleSheet, Text } from "react-native";
import { Footer } from "native-base";
import { AppStyles } from "../AppStyles";

const FooterBar = (props) => {
  return (
    <Footer style={styles.footer}>
      <Text style={{ color: "white", fontSize: 14 }}>E-Service@2020</Text>
    </Footer>
  );
};

export default FooterBar;

const styles = StyleSheet.create({
  footer: {
    backgroundColor: AppStyles.color.darkTheme,
    height: 25,
    alignItems: "center",
  },
});
