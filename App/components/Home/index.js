/**
 * @File : App/components/Home/index.js
 */

 import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
 import Alarm from "../Alarm";
 import Timer from '../Timer';
 import Stopwatch from '../Stopwatch';
 import { View, Image } from 'react-native';
 
 const Tab = createBottomTabNavigator();
 
 export default function tabs(){
     return(
           <Tab.Navigator initialRouteName="Alarm">
               <Tab.Screen name="Timer" component={Timer} options={{
                   tabBarIcon: () => setTabIcon(require("../../assets/tabIcons/timer.png"))
               }}/>
               <Tab.Screen name="Alarm" component={Alarm} options={{
                   tabBarIcon: () => setTabIcon(require("../../assets/tabIcons/alarm.png"))
               }}/>
               <Tab.Screen name="Stopwatch" component={Stopwatch} options={{
                   tabBarIcon: () => setTabIcon(require("../../assets/tabIcons/stopwatch.png"))
               }}/>
           </Tab.Navigator>
     );
 };
 
 export let setTabIcon = ( iconURI ) => (
     <View style={{
         alignContent:'center',
         justifyContent: 'center',
     }}>
         <Image
           source={iconURI}
           resizeMode='contain'
           style={{
               width:25,
               height:25,
           }}
         />
     </View>
 )