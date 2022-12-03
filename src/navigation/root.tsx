import React, { useEffect, useState } from "react";
import { Text, View } from 'react-native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons'
import axios from "axios";

import { ATTENDANCE } from "../screen/attendanceScreen";
import { EMPLOYEEDIRECTORY } from "../screen/employeeScreen";
import { HOME } from "../screen/homeScreen";
import { LEAVE } from "../screen/leaveScreen";
import { MoreScreen } from "../screen/moreScreen";
import { PAYROLL } from "../screen/payrollScreen";
import { ContactScreen } from "../screen/contactScreen";
import { AboutScreen } from "../screen/aboutScreen";
import { routes } from '../controller';

const attendanceName = 'Attendance'
const employeeName = 'Employee'
const homeName = 'Home'
const leaveName = 'Leave'
const moreName = 'More'
const payrollName = 'Payroll'
const contactName = 'Contact'
const aboutName = 'About'

const BottomTab = createBottomTabNavigator()
const TopTab = createMaterialTopTabNavigator()


const TopTapNavigator = () => {
    return (
        <TopTab.Navigator
            initialRouteName={homeName}
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ focused, color }) => {

                    let iconName = '';
                    let rn = route.name;

                    if (rn === homeName) {
                        iconName = focused ? 'home' : 'home-outline'
                    } else if (rn === contactName) {
                        iconName = focused ? 'home' : 'home-outline'
                    } else if (rn === aboutName) {
                        iconName = focused ? 'home' : 'home-outline'
                    } else if (rn === aboutName) {
                        iconName = focused ? 'home' : 'home-outline'
                    } else if (rn === aboutName) {
                        iconName = focused ? 'home' : 'home-outline'
                    } else if (rn === aboutName) {
                        iconName = focused ? 'home' : 'home-outline'
                    } else if (rn === aboutName) {
                        iconName = focused ? 'home' : 'home-outline'
                    }
                    return <Ionicons name={iconName} size={23} color={color} />
                },
                tabBarActiveTintColor: '#0fafc4',
                tabBarInactiveTintColor: 'grey',
                tabBarShowLabel: false,
                tabBarIndicatorStyle: {
                    backgroundColor: 'transparent'
                }
            })}
        >
            <TopTab.Screen name={homeName} component={HOME} />
            <TopTab.Screen name={contactName} component={ContactScreen} />
            <TopTab.Screen name={aboutName} component={AboutScreen} />
            {/* <TopTab.Screen name={aboutName} component={AboutScreen} />
            <TopTab.Screen name={aboutName} component={AboutScreen} />
            <TopTab.Screen name={aboutName} component={AboutScreen} />
            <TopTab.Screen name={aboutName} component={AboutScreen} /> */}
        </TopTab.Navigator>
    )
}

const routeMap: any = {
    "HOME": {
        "component": TopTapNavigator,
        "icon": "home-outline"
    },
    "ATTENDANCE": {
        "component": ATTENDANCE,
        "icon": "ios-person-circle-outline"
    },
    "LEAVE": {
        "component": LEAVE,
        "icon": "walk-outline"
    },
    "PAYROLL": {
        "component": PAYROLL,
        "icon": "md-briefcase-outline"
    },
    "EMPLOYEE DIRECTORY": {
        "component": EMPLOYEEDIRECTORY,
        "icon": "people-sharp"
    }
}

const BottomTabNavigator = () => {
    const [componentData, setComponentData] = useState([])
    const baseURL = 'https://mmuat.qhrm.io'
    const client = axios.create({
        baseURL,
        headers: { Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ5dWdAZ21haWwuY29tIiwianRpIjoiMDIzOGNhZmYtMzBlNS00MDczLWFhZmMtNzliY2JhNDVkMTJlIiwiaWF0IjoxNjY5MTIwMTQ3LCJlSWQiOiIyMDMiLCJjSWQiOiIzIiwidUlkIjoiMTEiLCJlbWFpbCI6Inl1Z0BnbWFpbC5jb20iLCJuYmYiOjE2NjkxMjAxNDYsImV4cCI6MTY2OTEyMDQ0NiwiaXNzIjoiaHR0cHM6Ly9tbXVhdC5xaHJtLmlvLyIsImF1ZCI6Imh0dHBzOi8vbW11YXQucWhybS5pby8ifQ.Ke4Xmswul1ZYvkzccRPMcOrB9YqpT3oLLrYP96VF87A' }
    })

    const getApi = async () => {
        let res = await client.post(routes.menu)
        // console.log('menu_data', res?.data)
        setComponentData(res?.data)
    }

    useEffect(() => {
        getApi()
    }, [])

    console.log('menu_data', componentData)
    return (
        <>
            {
                componentData?.length > 0 ?

                    <BottomTab.Navigator
                        initialRouteName={homeName}
                        screenOptions={({ route }) => ({
                            headerShown: false,
                            // tabBarIcon: ({ focused, color, size }) => {
                            //     let iconName = '';
                            //     let rn = route.name;

                            //     if (rn === homeName) {
                            //         iconName = 'home-outline'
                            //     } else if (rn === attendanceName) {
                            //         iconName = focused ? 'home' : 'home-outline'
                            //     } else if (rn === leaveName) {
                            //         iconName = focused ? 'home' : 'home-outline'
                            //     } else if (rn === payrollName) {
                            //         iconName = focused ? 'home' : 'home-outline'
                            //     } else if (rn === employeeName) {
                            //         iconName = focused ? 'home' : 'home-outline'
                            //     } else if (rn === moreName) {
                            //         iconName = focused ? 'home' : 'home-outline'
                            //     }
                            //     return <Ionicons name={iconName} size={size} color={color} />
                            // },
                            tabBarActiveTintColor: '#c40f7e',
                            tabBarInactiveTintColor: 'grey'
                        })}

                    >
                        
                        <>
                            {
                                componentData?.length > 0 && componentData?.map((d: any, i: any) => {
                                    console.log('d', d?.MenuType, d?.MenuName)
                                    if (d?.MenuType == 2)
                                        return (
                                                <BottomTab.Screen name={d?.MenuName} component={routeMap[d?.MenuName].component} key={i} options={{
                                                    tabBarLabel: d?.MenuName, tabBarIcon: ({ focused, color, size }) => (
                                                        <Ionicons name={d?.Icon ? d?.Icon : routeMap[d?.MenuName].icon} size={size} color={color} />
                                                    )
                                                }} />
                                        )
                                })

                            }
                        </>
                    </BottomTab.Navigator>
                    :
                    <Text>Please Wait...</Text>
            }
        </>
    )
}

export default () => {
    return (
        BottomTabNavigator()
    )
}


