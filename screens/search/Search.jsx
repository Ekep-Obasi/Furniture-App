import { View, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SIZES, COLORS } from "../../constants";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./search.style";

const Search = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={styles.searchContainer}>
        <TouchableOpacity>
          <Ionicons name="camera-outline" size={24} style={styles.searchIcon} />
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <TextInput
            onPress={() => {
              navigation.navigate("Search");
            }}
            placeholder="What are you looking for?"
            style={styles.searchInput}
          />
        </View>
        <TouchableOpacity style={styles.searchBtn}>
          <Ionicons
            name="search"
            size={SIZES.xLarge}
            color={COLORS.lightWhite}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Search;
