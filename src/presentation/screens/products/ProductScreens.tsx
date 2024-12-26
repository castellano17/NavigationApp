import React from 'react';
import {Text, View} from 'react-native';
import {globalStyles} from '../../themes/theme';
import {FlatList} from 'react-native-gesture-handler';
import {PrimaryButton} from '../../components/shared/PrimaryButton';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {type RootStackParams} from '../../routes/StackNavigator';

const products = [
  {
    id: 1,
    name: 'Product 1',
    description: 'Description of product 1',
    price: 100,
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'Description of product 2',
    price: 200,
  },
  {
    id: 3,
    name: 'Product 3',
    description: 'Description of product 3',
    price: 300,
  },
  {
    id: 4,
    name: 'Product 4',
    description: 'Description of product 3',
    price: 400,
  },
  {
    id: 5,
    name: 'Product 5',
    description: 'Description of product 5',
    price: 500,
  },
  {
    id: 6,
    name: 'Product 6',
    description: 'Description of product 6',
    price: 600,
  },
];

export const ProductScreens = () => {
  const navigator = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <View style={globalStyles.container}>
      <Text style={{marginBottom: 10, fontSize: 30}}>Products</Text>
      <FlatList
        data={products}
        renderItem={({item}) => (
          <PrimaryButton
            onPress={() =>
              navigator.navigate('Product', {
                id: item.id,
                name: item.name,
                description: item.description,
                price: item.price,
              })
            }
            label={item.name}
          />
        )}
      />

      <Text style={{marginBottom: 10, fontSize: 30}}>Ajustes</Text>

      <PrimaryButton
        onPress={() => navigator.navigate('Settings')}
        label=" Ajustes"
      />
    </View>
  );
};
