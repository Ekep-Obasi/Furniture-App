import { View, TouchableOpacity, Image, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./productRows.styles";
import { COLORS } from "../../constants";

const ProductCard = () => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: "https://d326fntlu7tb1e.cloudfront.net/uploads/cb2e64a8-ad4c-4d45-b58b-b0c7e11b6bb4-fn1.jpg",
            }}
            style={styles.image}
          />
        </View>
        <View style={styles.details}>
          <Text style={styles.title} numberOfLines={1}>
            Product
          </Text>
          <Text style={styles.supplier} numberOfLines={1}>
            Product
          </Text>
          <Text style={styles.price}>123</Text>
        </View>
        <TouchableOpacity style={styles.addBtn}>
          <Ionicons size={35} name="add-circle" color={COLORS.primary} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
