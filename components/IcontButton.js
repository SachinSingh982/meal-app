import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const IcontButton = ({ onPress }) => {
  return (
    <Pressable>
      <Ionicons onPress={onPress} name="star" size={24} color="black" />
    </Pressable>
  );
};

export default IcontButton;
