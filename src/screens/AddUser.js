import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addUser } from '../redux/slice/Userslice'

const AddUser = ({ navigation }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
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
                    dispatch(addUser({ name, email, phone }))
                    navigation.goBack();
                }
                }

            >
                <Text style={{ fontSize: 16, color: '#fff' }}>Add User</Text>
            </TouchableOpacity>
        </View>
    )
}

export default AddUser

