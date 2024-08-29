import styles from "@/constants/styles";
import { View, Text, TextInput, StyleSheet } from "react-native";

interface FormInputProps {
    label: string;
    onChange?: (value: string) => void;
}

export default function FormInput({ label, onChange }: FormInputProps) {
    return (
        <View style={styles.inputGroup}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                style={styles.formInput}
                onChangeText={onChange}
            />
        </View>
    );
}