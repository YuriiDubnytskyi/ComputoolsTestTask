import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { useTheme } from '../ThemeContext';

type ButtonProps = {
  text: string;
  onAction: () => void;
  disable?: boolean;
};

export const Button = ({ disable, text, onAction }: ButtonProps) => {
  const { theme } = useTheme();
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: disable ? theme.disableButton : theme.buttonBackground }]}
      onPress={onAction}
      disabled={disable}
    >
      <Text style={[styles.buttonText, { color: theme.buttonText }]}>{text}</Text>
    </TouchableOpacity>
  );
};
