import React, { useCallback } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Card, Title, useTheme } from 'react-native-paper';
import Pokeball from '../../../assets/icons/pokeball.svg';
import AppImage from '../../../common/components/AppImageSvg';

export default function Item({ item, navigation }: any) {

  const { colors } = useTheme()

  const onPressItem = useCallback(() => {
    navigation.navigate('PokemonDetail', { url: item.url });
  }, [item.url, navigation]);

  return (
    <TouchableOpacity onPress={onPressItem}>
      <Card style={[styles.card, { backgroundColor: colors.surface }]}>
        <Card.Content style={styles.content}>
          <Title style={[styles.title]}>{item.name}</Title>
          <AppImage Icon={Pokeball} width={24} height={24} />
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  card: {
    marginVertical: 4,
    marginHorizontal: 2,
    borderRadius: 14,
  },
  title: {
    textTransform: 'capitalize',
  },
});
