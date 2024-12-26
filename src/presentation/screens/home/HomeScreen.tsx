import React, {useEffect} from 'react';
import {globalStyles} from '../../themes/theme';
import {Pressable, Text, View} from 'react-native';
import {PrimaryButton} from '../../components/shared/PrimaryButton';
import {
  DrawerActions,
  NavigationProp,
  useNavigation,
} from '@react-navigation/native';
import {type RootStackParams} from '../../routes/StackNavigator';

export const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}>
          <Text>Menu</Text>
        </Pressable>
      ),
    });
  }, []);

  return (
    <View style={globalStyles.container}>
      <PrimaryButton
        onPress={() => navigation.navigate('Products')}
        label="Ir a productos"
      />
      <PrimaryButton
        onPress={() => navigation.navigate('Settings')}
        label="Ir a Settings"
      />
    </View>
  );
};
