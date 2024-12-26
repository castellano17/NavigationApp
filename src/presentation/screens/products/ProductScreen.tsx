import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {type RootStackParams} from '../../routes/StackNavigator';
import {globalStyles} from '../../themes/theme';

export const ProductScreen = () => {
  const params = useRoute<RouteProp<RootStackParams, 'Product'>>().params;

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: params.name,
    });
  }, []);

  return (
    <View style={globalStyles.container}>
      <Text style={{marginBottom: 10, fontSize: 30}}>Product</Text>
      <Text
        style={{
          fontSize: 20,
          textAlign: 'center',
          marginTop: 10,
        }}>
        {params.id} - {params.name} -{params.description} - {params.price}
      </Text>
    </View>
  );
};
