import React from 'react';
import {Text, View} from 'react-native';
import {globalStyles} from '../../themes/theme';
import {PrimaryButton} from '../../components/shared/PrimaryButton';
import {
  NavigationProp,
  StackActions,
  useNavigation,
} from '@react-navigation/native';

export const Settings = () => {
  const navigator = useNavigation();
  return (
    <View style={globalStyles.container}>
      <Text style={{marginBottom: 10}}>Settings</Text>
      <PrimaryButton label="Regresar" onPress={() => navigator.goBack()} />
      <PrimaryButton
        label="Go to Home"
        onPress={() => navigator.dispatch(StackActions.popToTop())}
      />
    </View>
  );
};
