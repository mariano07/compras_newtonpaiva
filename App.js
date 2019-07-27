import React from 'react';
import Lojas from './src/screens/Lojas';
import ComprasPendentes from './src/screens/ComprasPendentes';
import ComprasFinalizadas from './src/screens/ComprasFinalizadas';
import { createAppContainer, createMaterialTopTabNavigator, createStackNavigator } from 'react-navigation';
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import CustomHeader from './src/components/CustomHeader';
import { Icon } from 'native-base';

const AppNavigator = createStackNavigator({
  Home: {
    screen: createMaterialBottomTabNavigator({
      Lojas: {
        screen: Lojas,
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => <Icon name="home" style={{ color: tintColor }} />
        }
      },
      Compras: {
        screen: createMaterialTopTabNavigator({
          Pendentes: {
            screen: ComprasPendentes,
            navigationOptions: {
              title: 'Pendentes',
            }
          },
          Finalizados: {
            screen: ComprasFinalizadas,
            navigationOptions: {
              title: 'Finalizados'
            }
          }
        }),
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => <Icon name="cart" style={{ color: tintColor }} />
        }
      }
    }),
    navigationOptions: {
      header: <CustomHeader title="Nome do Usuário" />
    }
  }
})



export default createAppContainer(AppNavigator);