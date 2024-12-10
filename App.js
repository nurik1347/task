import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Componient/Home';
import YukMashinalari from './Componient/YukMashinalari';
import Sell from './Componient/Sell';
import EhtiyotQismlari from './Componient/EhtiyotQismlari';
import MaxsusTexnika from './Componient/MaxsusTexnika';
import CategoryDetails from './Componient/Cars';
import Tamirlash from './Componient/Tamirlash';
import Title from './Componient/Title';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{ title: 'Kategoriyalar' }} 
        />
        <Stack.Screen 
          name="YukMashinalari" 
          component={YukMashinalari} 
          options={{ title: 'Yuk Mashinalari' }} 
        />
        <Stack.Screen 
          name="Sell" 
          component={Sell} 
          options={{ title: 'Nima sotyapsiz?' }} 
        />
        <Stack.Screen 
          name="EhtiyotQismlari" 
          component={EhtiyotQismlari} 
          options={{ title: 'Ehtiyot qismlari' }} 
        />
        <Stack.Screen 
          name="MaxsusTexnika" 
          component={MaxsusTexnika} 
          options={{ title: 'Maxsus texnika' }} 
        />
        <Stack.Screen 
          name="Tamirlash" 
          component={Tamirlash} 
          options={{ title: "Ta'mirlash va xizmatlar" }} 
        />
        <Stack.Screen 
          name="Cars" 
          component={CategoryDetails} 
          options={{ title: 'Avtomobillar' }} 
        />
        <Stack.Screen name="Title" component={Title} options={{ title: 'Avtomobil maʼlumotlari' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
