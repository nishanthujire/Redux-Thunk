import React, { createContext, useCallback, useRef } from "react";
import { useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppState, useColorScheme } from "react-native";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [appTheme, setAppTheme] = useState('');
    //deauklt theme boolean value
    const [defaultTheme, setDefaultTheme] = useState(false);
    //active device theme
    const [deviceTheme, setDeviceTheme] = useState(useColorScheme());

    const getAppTheme = async () => {
        console.log("device active theme", deviceTheme);
        try {
            let firstLaunch = await AsyncStorage.getItem("FirstLaunch");
            firstLaunch = JSON.parse(firstLaunch);
            //app is lauching for the first time (user opning app  for the first time)
            if (firstLaunch == null) {
                console.log("app is laucnhing firsr time");
                //setting app theme as device theme for first time
                await AsyncStorage.setItem('Theme', deviceTheme)
                //deafult theme boolean value
                await AsyncStorage.setItem('IsDefault', JSON.stringify(true))
                //setting app first launch as true
                await AsyncStorage.setItem('FirstLaunch', JSON.stringify(true))
                setAppTheme(deviceTheme)
                setDefaultTheme(true)
            }
            else {
                console.log("app is not launching first time");
                //fetching user active theme
                let activeTheme = await AsyncStorage.getItem("Theme");
                let isDefault = await AsyncStorage.getItem("IsDefault");
                isDefault = JSON.parse(isDefault)
                console.log("user selected theme", activeTheme);
                console.log("deafult system theme boolean", isDefault);
                //if theme default (we are setting current device theme)
                setAppTheme(isDefault ? deviceTheme : activeTheme)
                setDefaultTheme(isDefault)

            }
        } catch (error) {
            console.log("Error getting/saving data", error);
        }
    }

    const changeTheme = useCallback(async (theme, isDefault) => {
        //setting app theme & default props
        try {
            await AsyncStorage.setItem('Theme', theme);
            await AsyncStorage.setItem('IsDefault', JSON.stringify(isDefault))
            console.log("saved theme", theme);
            //if theme is device theme(we are setting current device theme)
            setAppTheme(theme)
            setDefaultTheme(isDefault)

        }
        catch (error) {
            console.log("error in updating themes");
        }
    }, [])

    useEffect(() => {
        getAppTheme();
    }, [])


   
    // //app background listener for changing themes
    // useEffect(() => {
    //     const appStateListener = AppState.addEventListener(
    //         'change',
    //         nextAppState => {
    //             console.log('Next AppState is: ', nextAppState);
    //             //foreground
    //             if (nextAppState == 'active') {
    //                 console.log("app in foreground");
    //                 getAppTheme();
                    
    //             }
    //         },
    //     );
    //     return () => {
    //         //removing listener
    //         appStateListener?.remove();
    //     };
    // }, []);

    return (
        <ThemeContext.Provider value={{
            appTheme,
            changeTheme,
            defaultTheme
        }}>
            {children}
        </ThemeContext.Provider>
    )
}