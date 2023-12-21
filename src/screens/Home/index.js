import { useTheme } from '@react-navigation/native';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { FlatListComponent, LogBox, Text, TextInput, TouchableOpacity, View, useColorScheme } from 'react-native';
import { ThemeContext } from '../../context/ThemeContext';
import RadioButton from 'react-native-radio-button'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = () => {
    const { changeTheme, appTheme, defaultTheme } = useContext(ThemeContext);
    //getting active theme colors
    const { colors } = useTheme();
    const deviceTheme = useColorScheme();

    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',

                backgroundColor: colors.themeColor,
                padding: 10,
            }}>
            <Text style={{ color: colors.white }}>
                This is demo of default dark/light theme using navigation.
            </Text>
            <TextInput
                style={{
                    borderColor: colors.gray,
                    padding: 10,
                    borderWidth: 2,
                    borderRadius: 5,
                    width: '100%',
                    marginTop: 20,
                    color: colors.white,
                }}
                placeholder="Type here"
                placeholderTextColor={colors.white}
            />
            <TouchableOpacity
                style={{
                    backgroundColor: colors.sky,
                    padding: 10,
                    borderRadius: 6,
                    width: '100%',
                    height: 57,
                    justifyContent: 'center',
                    marginTop: 20,
                    marginBottom: 20
                }}>
                <Text
                    style={{
                        textAlign: 'center',
                        color: colors.commonWhite,
                        fontSize: 20,
                        fontWeight: '500',
                    }}>
                    Button
                </Text>
            </TouchableOpacity>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <RadioButton
                    animation={'bounceIn'}
                    isSelected={appTheme === 'light' && !defaultTheme}
                    onPress={() => changeTheme('light', false)}
                />
                <Text style={{ marginLeft: 5, color: colors.white }}>Light Mode</Text>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>

                <RadioButton
                    animation={'bounceIn'}
                    isSelected={appTheme == 'dark' && !defaultTheme}
                    onPress={() => changeTheme('dark', false)}
                />
                <Text style={{ marginLeft: 5, color: colors.white }}>Dark Mode</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                <RadioButton
                    animation={'bounceIn'}
                    isSelected={defaultTheme}
                    onPress={() => changeTheme(deviceTheme, true)}
                />
                <Text style={{ marginLeft: 5, color: colors.white }}>System Default</Text>
            </View>
        </View>
    );
};

export default Home;