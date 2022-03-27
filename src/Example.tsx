/* eslint-disable react-native/no-inline-styles */
import React, { Fragment, useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import AdvanclyWidget from "./AdvanclyWidget";
import type { IResponse } from "./types/index";

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const onSuccess = (response: IResponse) => {
    setShowModal(false);
    console.log("Success", JSON.stringify(response));
  };
  const onCancel = (response: IResponse) => {
    setShowModal(false);
    console.log("Cancel", JSON.stringify(response));
  };

  return (
    <Fragment>
      <TouchableOpacity
        onPress={() => {
          setShowModal(true);
        }}
        style={{
          marginTop: 100,
          backgroundColor: "#377dff",
          paddingHorizontal: 20,
          paddingVertical: 10,
        }}
      >
        <Text style={{ color: "#fff" }}>Show Widget </Text>
      </TouchableOpacity>

      <AdvanclyWidget
        aggregator_id={29}
        bank_account_number="3055662696"
        bank_code="011"
        borrower_phone="08141200649"
        bvn_number="22247846872"
        aggregator_loan_ref={Date.now().toString()}
        cac_number="2366664"
        city="Mubuntu"
        company_name="HAIRTOPIA EX PARTE"
        customer_type="1"
        email="gbengacodes@gmail.com"
        first_name="Gbenga"
        gender="male"
        last_name="Olufeyimi"
        photo_url=""
        public_key="AYAyAToX8gZQKJwX"
        residence_address="80 Bola Street Ebute Metta"
        state="Lagos"
        product_id={53}
        product_code="C044"
        tenure={30}
        customStyles={{
          buttonBackgroundColor: "#377dff",
          buttonTextColor: "#fff",
          acceptButtonBackgroundColor: "#377dff",
          acceptButtonTextColor: "#fff",
          declineButtonBackgroundColor: "#377dff",
          declineButtonTextColor: "#fff",
          dropdownTextColor: "#000",
          dropdownBackgroundColor: "#fff",
        }}
        onSuccess={onSuccess}
        onCancel={onCancel}
        showWidget={showModal}
        autoStart={false}
      />
    </Fragment>
  );
}
