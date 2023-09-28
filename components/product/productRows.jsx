import { Text, FlatList } from "react-native";
import styles from "./productRows.styles";
import { View } from "react-native";
import { SIZES } from "../../constants";
import ProductCard from "./ProductCard";

const productRows = () => {
  const products = [1, 2, 3, 4, 5];

  return (
    <View style={styles.productWrapper}>
      <FlatList
        data={products}
        renderItem={(item) => <ProductCard number={item} />}
        horizontal
        contentContainerStyle={{ columnGap: SIZES.medium }}
      />
    </View>
  );
};

export default productRows;
