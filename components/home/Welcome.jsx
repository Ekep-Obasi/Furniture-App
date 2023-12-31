import { View, Text, TextInput } from "react-native";
import styles from "./welcome.style";
import { COLORS, SIZES } from "../../constants";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Feather, Ionicons } from "@expo/vector-icons";

const Welcome = ({ navigation }) => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.welcomeTxt(COLORS.black, SIZES.xSmall)}>
          Find The Most
        </Text>
        <Text style={styles.welcomeTxt(COLORS.primary, 0)}>
          Luxurious Furniture
        </Text>
      </View>

      <View style={styles.searchContainer}>
        <TouchableOpacity>
          <Feather name="search" size={24} style={styles.searchIcon} />
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
            name="camera-outline"
            size={SIZES.xLarge}
            color={COLORS.lightWhite}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Welcome;
