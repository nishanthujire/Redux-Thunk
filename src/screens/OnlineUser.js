import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../redux/slice/OnlineUserSlice'



//using redux thunk as middle ware
const OnlineUser = () => {
    const { onlineUsers, loading } = useSelector(state => state.onlineUsers)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

   


    return (
        <View style={{ flex: 1 }}>
            {loading ?
                (<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                     <ActivityIndicator color="red" size={"large"} />
                </View>) :
                (<FlatList
                    data={onlineUsers}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={{ width: '90%', padding: 5, alignSelf: 'center', marginTop: 10, borderWidth: 1, borderRadius: 10 }}>
                                <Text>{item?.name}</Text>
                                <Text>{item?.email}</Text>
                                <Text>{item?.phone}</Text>
                            </View>
                        )
                    }}
                />)}

        </View>
    )
}

export default OnlineUser

const styles = StyleSheet.create({})