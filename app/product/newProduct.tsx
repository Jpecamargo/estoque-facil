import AccountantInput from "@/components/accountantInput";
import InputCheckbox from "@/components/checkBox";
import FormInput from "@/components/formInput";
import MinimumQuantityInput from "@/components/minimumQuantityInput";
import { SelectInput } from "@/components/selectInput";
import { useState } from "react";
import { View, Text, Button } from "react-native";

export default function newProduct() {
  const items = [
    { label: "Achocolatado", value: "achocolatado" },
    { label: "Biscoito", value: "biscoito" },
    { label: "Bolacha", value: "bolacha" },
  ];

  return (
    <View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "flex-end",
          paddingRight: 20,
          paddingLeft: 20,
        }}
      >
        <FormInput label={"Nome"} />
        <FormInput label={"Códigos de barras"} />
        <SelectInput label="Categoria" items={items} onChange={() => {}} />
        <InputCheckbox label="Quantidade fracionada" onChange={() => {}} />
        <AccountantInput isFractional={false}/>
        <MinimumQuantityInput isFractional={false}/>
        <Button title={"Salvar"} onPress={() => {}} />
      </View>
    </View>
  );
}
