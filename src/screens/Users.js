import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser } from '../redux/slice/Userslice'

const Users = ({ navigation }) => {
    const { users } = useSelector((state) => state.user)
    const dispatch = useDispatch()
    return (
        <View style={{ flex: 1 }}>
            {users.length > 0 ?
                <FlatList
                    data={users}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={{ width: '90%', padding: 5, alignSelf: 'center', marginTop: 10, borderWidth: 1, borderRadius: 10 }}>
                                <Text >{item.name}</Text>
                                <Text >{item.email}</Text>
                                <Text>{item.phone}</Text>
                                <TouchableOpacity onPress={() => navigation.navigate('UpdateUser', { name: item?.name, email: item?.email, phone: item?.phone,index })}>
                                    <Text style={{ alignSelf: 'flex-end', color: 'green' }}>EDIT </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => dispatch(deleteUser({index}))} >
                                    <Text style={{ alignSelf: 'flex-end', color: 'red' }}>DELETE </Text>
                                </TouchableOpacity>
                            </View>
                        )
                    }}


                /> :
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>No Users Found</Text>
                </View>
            }
            <TouchableOpacity style={{
                position: 'absolute',
                bottom: 30,
                right: 25,
                height: 60,
                width: 60,
                borderRadius: 30,
                backgroundColor: 'red',
                justifyContent: 'center',
                alignItems: 'center'
            }}
                onPress={() => navigation.navigate('AddUser')}
            >
                <Text style={{ fontSize: 20, color: '#fff' }}>+</Text>
            </TouchableOpacity>

        </View>
    )
}

export default Users
