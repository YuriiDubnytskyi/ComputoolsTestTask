import { NavigationContainer } from '@react-navigation/native';
import { SCREEN } from '../constants/screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useTranslation } from 'react-i18next';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { FeedScreen } from '../screens/Feed';
import { DetailsScreen } from '../screens/UserDetails';
import { useAppSelector } from '../store/hooks';
import { LoginScreen } from '../screens/Login';
import { useTheme } from '../components/ThemeContext';

const LoginStack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();

const LoginStackScreen = () => {
  return (
    <LoginStack.Navigator initialRouteName={SCREEN.LOGIN}>
      <LoginStack.Screen
        name={SCREEN.LOGIN}
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
    </LoginStack.Navigator>
  );
};

export const Init = () => {
  const { t } = useTranslation();
  const { isAuth } = useAppSelector(state => state.store);

  const { theme } = useTheme();

  return (
    <NavigationContainer>
      {isAuth ? (
        <Tab.Navigator>
          <Tab.Screen
            name={SCREEN.IMAGE_LIST}
            component={FeedScreen}
            options={{
              title: t('feeds:feeds'),
              tabBarActiveTintColor: theme.tabBarActiveTintColor,
              tabBarStyle: { paddingTop: 20, backgroundColor: theme.tabBarStyleBackground },
              tabBarInactiveTintColor: theme.tabBarInactiveTintColor,
              tabBarIndicatorStyle: { backgroundColor: theme.tabBarIndicatorStyle },
            }}
          />
          <Tab.Screen
            name={SCREEN.PROFILE}
            component={DetailsScreen}
            options={{
              title: t('profile:profile'),
              tabBarActiveTintColor: theme.tabBarActiveTintColor,
              tabBarStyle: { paddingTop: 20, backgroundColor: theme.tabBarStyleBackground },
              tabBarInactiveTintColor: theme.tabBarInactiveTintColor,
              tabBarIndicatorStyle: { backgroundColor: theme.tabBarIndicatorStyle },
            }}
          />
        </Tab.Navigator>
      ) : (
        <LoginStackScreen />
      )}
    </NavigationContainer>
  );
};
