import { StyleSheet } from "react-native";
import { SIZES, COLORS } from "../../constants";

const styles = StyleSheet.create({
  container: {
    width: 182,
    height: 240,
    marginEnd: 22,
    borderRadius: SIZES.medium,
    backgroundColor: COLORS.secondary,
    marginVertical: SIZES.small,
  },
  imageContainer: {
    flex: 1,
    width: 170,
    marginLeft: SIZES.small / 2,
    marginTop: SIZES.small / 2,
    borderRadius: SIZES.small,
    overflow: "hidden",
  },
  image: {
    aspectRatio: 1,
    resizeMode: "cover",
  },
  details: {
    padding: SIZES.small,
  },
  title: {
    fontSize: SIZES.large,
    fontWeight: "bold",
    marginBottom: 1,
  },
  supplier: {
    fontSize: SIZES.small,
    fontFamily: "regular",
    color: COLORS.gray,
  },
  price: {
    fontSize: SIZES.medium,
    fontFamily: "bold",
  },
  addBtn: {
    position: "absolute",
    bottom: SIZES.xSmall,
    right: SIZES.xSmall,
  },
});

export default styles;
