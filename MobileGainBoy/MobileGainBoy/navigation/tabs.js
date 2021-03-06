import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'

import WorkoutScreen      from "../src/screens/WorkoutScreen";
import LogScreen          from "../src/screens/LogScreen";
import BeginWorkoutScreen from "../src/screens/BeginWorkoutScreen";

const Tab = createBottomTabNavigator();
const Tabs = () => {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarShowLabel: true,
            tabBarStyle: { backgroundColor: 'grey' },
            tabBarInactiveTintColor: "white",
            tabBarActiveTintColor: "yellow",

        }}>
            <Tab.Screen name="Workouts" component={WorkoutScreen} options={{
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="barbell-outline" color={color} size={size} />
                )
            }} />
            <Tab.Screen name="Begin" component={BeginWorkoutScreen} options={{
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="play-outline" color={'red'} size={size} />
                )
            }} />
            <Tab.Screen name="Logs" component={LogScreen} options={{
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="bar-chart-outline" color={color} size={size} />
                )
            }} />
        </Tab.Navigator>
    );

}

export default Tabs;
