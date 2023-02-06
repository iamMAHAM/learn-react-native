import {
  View,
  Text,
  StyleSheet,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import { FC } from 'react';

interface CardProps {
  id: number;
  body: string;
  title: string;
  userId: string;
}

const Card: FC<CardProps> = ({ id, body, title, userId }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text style={styles.title}>
          id: {id} && {title}
        </Text>
        <Text>{body}</Text>
        <Text style={styles.title}>autheur : {userId}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 3,
    borderColor: '#f5efad',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default Card;
