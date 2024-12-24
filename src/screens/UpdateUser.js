import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addUser, updateUser } from '../redux/slice/Userslice'

const UpdateUser = ({ navigation,route }) => {
    const [name, setName] = useState(route.params?.name)
    const [email, setEmail] = useState(route.params?.email)
    const [phone, setPhone] = useState(route.params?.phone)
    const index = route.params.index;
    const dispatch = useDispatch()

    return (
        <View style={{ flex: 1, marginHorizontal: 10, }}>
            <TextInput
                style={{
                    borderWidth: 1,
                    borderRadius: 10,
                    padding: 10,
                    marginVertical: 10,
                }}
                placeholder='Enter name'
                value={name}
                onChangeText={(val) => setName(val)}
            />
            <TextInput
                style={{
                    borderWidth: 1,
                    borderRadius: 10,
                    padding: 10,
                    marginVertical: 10,
                }}
                placeholder='Enter Email'
                value={email}
                onChangeText={(val) => setEmail(val)}
            />
            <TextInput
                style={{
                    borderWidth: 1,
                    borderRadius: 10,
                    padding: 10,
                    marginVertical: 10,
                }}
                placeholder='Enter Phone'
                value={phone}
                onChangeText={(val) => setPhone(val)}
                keyboardType='numeric'
                maxLength={10}
            />
            <TouchableOpacity
                style={{
                    height: 50,
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'red',
                    marginVertical: 10
                }}
                onPress={() => {
                    dispatch(updateUser({index,data:{ name, email, phone }}))
                    navigation.goBack();
                }
                }

            >
                <Text style={{ fontSize: 16, color: '#fff' }}>Update User</Text>
            </TouchableOpacity>
        </View>
    )
}

export default UpdateUser

