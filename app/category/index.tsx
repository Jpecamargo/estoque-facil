import ItemList from "@/components/itemList";
import styles from "@/constants/styles";
import { getCategories } from "@/services/categoryService";
import { Ionicons } from "@expo/vector-icons";
import { useIsFocused } from "@react-navigation/native";
import { usePathname, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { View, Text, TextInput } from "react-native";

export default function Caregory() {
  const [categories,setCategories] = useState<any[]>([]);
  const isFocused = useIsFocused();
  const router = useRouter();
 

  useEffect(() => {
    const data = getCategories();
    setCategories(data);
  }, [isFocused]);

  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: 10,
        }}
      >
        <Ionicons name="search" size={20} />
        <TextInput style={styles.searchInput} />
      </View>
      <View>
        {categories.map((category) => (
          <ItemList key={category.id} name={category.name} onDelete={()=>{}} onEdit={()=>{
            router.setParams({id: category.id});
            // @ts-ignore
            router.navigate(`/category/editCategory/${category.id}`);
          }}/>
        ))}
      </View>
    </View>
  );
}
