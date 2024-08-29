import styles from "@/constants/styles";
import Checkbox from "expo-checkbox";
import { useState } from "react";
import { View, Text } from "react-native";

interface CheckboxProps {
  label: string;
  onChange: (value: boolean) => void;
}

export default function InputCheckbox({ label, onChange }: CheckboxProps) {
  const [isChecked, setChecked] = useState(false);

  return (
    <View
      style={[
        styles.inputGroup,
        {
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          marginTop: 10,
        },
      ]}
    >
      <Checkbox
        style={styles.checkbox}
        value={isChecked}
        onValueChange={setChecked}
        color={isChecked ? "#007aff" : undefined}
      />
      <Text style={[styles.label, { marginTop: 0 }]}>{label}</Text>
    </View>
  );
}
