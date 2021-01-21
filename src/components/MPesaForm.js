import React, { useState, useEffect } from "react";
import { Form, Item, Input, Label } from "native-base";
import { StyleSheet, Text, Image, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import FormButton from "../components/FormButton";
import FormLoaderButton from "../components/FormLoaderButton";
import showToast from "../components/ShowToast";

const MPesaForm = (props) => {
  const [values, setValues] = useState({
    email: props.user ? props.user.user.email : "",
    phone: "",
    account_number: "",
    pay_for: props.item ? props.item.name : "",
    amount: "",
    error: false,
    loading: true,
  });
  const { email, phone, pay_for, amount, loading, error } = values;

  useEffect(() => {
    setValues({ ...values, loading: false });
  }, []);
  const handleChange = (email, value) => {
    setValues({ ...values, error: false, [email]: value });
  };

  const clickSubmit = () => {
    let formData = {
      phone,
      amount,
      pay_for,
    };
    if (phone && amount && pay_for) {
      props.onSubmit(formData);
    } else {
      showToast("Please fill all details...");
    }
  };

  const showButton = () => {
    if (props.loading) {
      return <FormLoaderButton text="processing..." />;
    } else {
      let txt = `Pay Ksh ${amount}`;
      return <FormButton text={txt} onPress={clickSubmit} />;
    }
  };
  const img = require("../../assets/mpesa.png");

  return (
    <Form style={styles.form}>
      <View style={styles.header}>
        {/* <Image source={img} style={[{ height: 40, width: 70 }]} /> */}
        <AntDesign name="user" size={30} color="black" />
        <Text style={{ marginLeft: 50, fontSize: 17 }}>
          Lipa na M-pesa Online
        </Text>
      </View>
      <Item stackedLabel style={styles.item}>
        <Label>Email</Label>
        <Input disabled value={email} />
      </Item>
      <Item stackedLabel style={styles.item}>
        <Label>Pay For</Label>
        <Input disabled value={pay_for} />
      </Item>
      <Item stackedLabel style={styles.item}>
        <Label>Mobile Number ( +254 )</Label>
        <Input
          value={phone}
          onChangeText={(text) => handleChange("phone", text)}
          keyboardType="number-pad"
        />
      </Item>
      <Item stackedLabel style={styles.item}>
        <Label>Amount(Ksh)</Label>
        <Input
          value={amount}
          onChangeText={(text) => handleChange("amount", text)}
          keyboardType="number-pad"
        />
      </Item>
      {showButton()}
    </Form>
  );
};
export default MPesaForm;

const styles = StyleSheet.create({
  form: {
    backgroundColor: "white",
    margin: 20,
    borderWidth: 0.5,
    borderRadius: 10,
    borderColor: "darkgray",
  },
  item: {
    width: "90%",
  },
  header: {
    flexDirection: "row",
    margin: 10,
    marginBottom: 0,
  },
});
