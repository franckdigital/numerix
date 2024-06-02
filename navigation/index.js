import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {
    DrawerContentScrollView,
    DrawerItem,
    createDrawerNavigator,
  } from '@react-navigation/drawer'
import {Image, View, SafeAreaView, Text, ImageBackground, StyleSheet, Platform} from 'react-native'
import Onbording from '../screens/Onboarding'
import HomeScreen from '../screens/tabs/HomeScreen'
import ProfileScreen from '../screens/tabs/ProfileScreen'
import NotificationScreen from '../screens/tabs/drawer/NotificationScreen'
import OrderScreen from '../screens/tabs/drawer/OrderScreen'
import Login from '../screens/auth/Login'
import SignUp from '../screens/auth/SignUp'
import NewPassword from '../screens/auth/NewPassword'
import ForgetPassword from '../screens/auth/ForgetPassword'
import SCREENS from '../screens'
import COLORS from '../src/constants/colors'
import IMAGES from '../src/assets/images'
import HelpScreen from '../screens/tabs/HelpScreen'
import VideoScreen from '../screens/tabs/VideoScreen'
import SearchPharmacyScreen from '../screens/pharmacy/SearchPharmacyScreen'
import CartScreen from '../screens/pharmacy/CartScreen'
import AppointmentScren from '../screens/doctor/AppointmentScren'
import CheckoutScreen from '../components/CheckoutScreen'
import CallPage from '../components/CallPage'
import ReceivePage from '../components/ReceivePage'
import TeleConsultation from '../screens/doctor/TeleConsultation'
import ConsultationScreen from '../screens/tabs/drawer/ConsultationScreen'


const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()
const Drawer = createDrawerNavigator()

const StackNavigation = () => {
  return (
      <Stack.Navigator initialRouteName={SCREENS.ONBOARDING}>
        <Stack.Screen
          name={SCREENS.ONBOARDING}
          component={Onbording}
          options={{headerShown: false}}
        />
        <Stack.Screen name={SCREENS.LOGIN} component={Login} options={{headerShown: false}}/>
        <Stack.Screen name={SCREENS.SIGNUP} component={SignUp} options={{headerShown: false}}/>
        <Stack.Screen name={SCREENS.NEWPASSWORD} component={NewPassword} options={{headerShown: false}}/>
        <Stack.Screen name={SCREENS.FORGETPASSWORD} component={ForgetPassword} options={{headerShown: false}}/>
        <Stack.Screen name={SCREENS.SEARCH_PHARMACY} component={SearchPharmacyScreen} options={{headerShown: false}}/>
        <Stack.Screen name={SCREENS.CART_SCREEN} component={CartScreen} options={{headerShown: false}}/>
        <Stack.Screen name={SCREENS.APPOINTMENT} component={AppointmentScren} options={{headerShown: false}}/>
        <Stack.Screen name={SCREENS.CHECKOUT} component={CheckoutScreen} options={{headerShown: false}}/>
        <Stack.Screen name={SCREENS.TELE} component={TeleConsultation} options={{headerShown: false}}/>

        <Stack.Screen name={SCREENS.CALL} component={CallPage} />
        <Stack.Screen name={SCREENS.RECEIVE} component={ReceivePage} options={{headerShown: false}}/>


        <Stack.Screen
          name={SCREENS.HOME}
          component={TabNavigator}
          options={{headerShown: false}}
          
        />

      </Stack.Navigator>
  )
}

const ProfileScreenWithDrawer = () => {
    return (
      <Drawer.Navigator
        screenOptions={{
         // Drawer header title and center
         headerTintColor: '#fff',
         headerTitleAlign: 'center'
        }}
        initialRouteName={SCREENS.PROFILE}
        drawerContent={props => {
          const {routeNames, index} = props.state;
          const focused = routeNames[index];
          console.log('focused', focused);
  
          return (
            <DrawerContentScrollView {...props}>
              <View style={{alignItems: 'center', marginBottom: 20, backgroundColor: COLORS.GRAY_LIGHT}}>
                <Image source={IMAGES.LOGO_DRAWER} style={{height: 100, width: 100, borderRadius: 50}} />
                
                <Text
                  style={{textAlign: 'center', fontSize: 18, fontWeight: 'bold'}}>
                  Franck Alain
                </Text>
                
              </View>
              <DrawerItem
                label={'Mon compte'}
                onPress={() => {
                  props.navigation.navigate(SCREENS.PROFILE);
                }}
                focused={focused === SCREENS.PROFILE}
                activeBackgroundColor={COLORS.BLUE}
                inactiveBackgroundColor={COLORS.GRAY_LIGHT}
                inactiveTintColor={COLORS.BLACK}
                activeTintColor={COLORS.WHITE}
              />
              <DrawerItem
              label={'Notifications'}
              onPress={() => {
                props.navigation.navigate(SCREENS.NOTIFICATIONS);
              }}
              focused={focused === SCREENS.NOTIFICATIONS}
              activeBackgroundColor={COLORS.BLUE}
              inactiveBackgroundColor={COLORS.GRAY_LIGHT}
              inactiveTintColor={COLORS.BLACK}
              activeTintColor={COLORS.WHITE}
              />
              <DrawerItem
              label={'Mes commandes'}
              onPress={() => {
                props.navigation.navigate(SCREENS.ORDERS);
              }}
              focused={focused === SCREENS.ORDERS}
              activeBackgroundColor={COLORS.BLUE}
              inactiveBackgroundColor={COLORS.GRAY_LIGHT}
              inactiveTintColor={COLORS.BLACK}
              activeTintColor={COLORS.WHITE}
              />
              <DrawerItem
              label={'Mes consultations'}
              onPress={() => {
                props.navigation.navigate(SCREENS.CONSULT);
              }}
              focused={focused === SCREENS.CONSULT}
              activeBackgroundColor={COLORS.BLUE}
              inactiveBackgroundColor={COLORS.GRAY_LIGHT}
              inactiveTintColor={COLORS.BLACK}
              activeTintColor={COLORS.WHITE}
              />
            </DrawerContentScrollView>
          );
        }}>
        <Drawer.Screen 
            name={SCREENS.PROFILE} 
            component={ProfileScreen} 
            // Drawer header color
            options={{
              headerStyle: {
              backgroundColor: '#4c8ff8',
              },
            }}
        />
        <Drawer.Screen name={SCREENS.NOTIFICATIONS} component={NotificationScreen} />
        <Drawer.Screen name={SCREENS.ORDERS} component={OrderScreen} />
        <Drawer.Screen name={SCREENS.CONSULT} component={ConsultationScreen} />
      </Drawer.Navigator>
    );
  }

const TabNavigator = () => {
    return (
      <Tab.Navigator initialRouteName={SCREENS.HOME}
      
        screenOptions={{
            tabBarLabelStyle: styles.label,
            tabBarStyle: [
            styles.tabContainer,
            Platform.OS === 'ios' && {
                shadowOffset: { height: -2, width: 2 },
                shadowOpacity: 0.1,
                shadowRadius: 15,
            },
            ],
            tabBarItemStyle: {
            marginBottom: 7,
            },
        }}
        safeAreaInsets={{
            bottom: 0,
        }}
      
      >
        <Tab.Screen
          name={SCREENS.HOME}
          component={HomeScreen}
          options={{
            title: 'Accueil',
            tabBarIcon: ({focused}) => (
              <Image
                source={IMAGES.HOME}
                style={{
                  height: 30,
                  width: 30,
                  tintColor: focused ? COLORS.BLUE : COLORS.BLUE_LIGHT,
                }}
              />
            ),
            headerShown: false,
            tabBarActiveTintColor: COLORS.BLUE,
            tabBarInactiveTintColor: COLORS.BLUE_LIGHT,
          }}
        />

        <Tab.Screen
          name={SCREENS.VIDEO}
          component={VideoScreen}
          options={{
            title: 'Consultation',
            tabBarIcon: ({focused}) => (
              <Image
                source={IMAGES.VIDEO}
                
                style={{
                  height: 30,
                  width: 30,
                  tintColor: focused ? COLORS.BLUE : COLORS.BLUE_LIGHT,
                }}
              />
            ),
            headerShown: false,
            tabBarActiveTintColor: COLORS.BLUE,
            tabBarInactiveTintColor: COLORS.BLUE_LIGHT,
          }}
        />

        <Tab.Screen
            name={SCREENS.PROFILE}
            component={ProfileScreenWithDrawer}
            options={{
            title: 'Compte',
            tabBarIcon: ({focused}) => (
                <Image
                source={IMAGES.PROFILE}
                style={{
                    height: 30,
                    width: 30,
                    tintColor: focused ? COLORS.BLUE : COLORS.BLUE_LIGHT,
                }}
                />
            ),
            headerShown: false,
            tabBarActiveTintColor: COLORS.BLUE,
            tabBarInactiveTintColor: COLORS.BLUE_LIGHT,
            }}
        />

        
        <Tab.Screen
            name={SCREENS.HELP}
            component={HelpScreen}
            options={{
            title: 'Aide',
            tabBarIcon: ({focused}) => (
                <Image
                source={IMAGES.HELP}
                style={{
                    height: 30,
                    width: 30,
                    tintColor: focused ? COLORS.BLUE : COLORS.BLUE_LIGHT,
                }}
                />
            ),
            headerShown: false,
            tabBarActiveTintColor: COLORS.BLUE,
            tabBarInactiveTintColor: COLORS.BLUE_LIGHT,
            }}
        />
      </Tab.Navigator>
    )
  }


  const styles = StyleSheet.create({
    tabContainer: {
      position: 'absolute',
      width: '90%',
      borderRadius: 12,
      left: '5%',
      bottom: 20,
      backgroundColor: 'white',
      height: 60,
    },
    label: {
      textTransform: 'capitalize',
      fontSize: 12,
    },
  })

export default StackNavigation