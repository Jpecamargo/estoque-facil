import FormInput from "@/components/formInput";
import styles from "@/constants/styles";
import { Ionicons } from "@expo/vector-icons";
import { Button, TextInput, View } from "react-native";

export default function NewCategory() {
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
        <Button title={"Salvar"} onPress={() => {}} />
      </View>
    </View>
  );
}
