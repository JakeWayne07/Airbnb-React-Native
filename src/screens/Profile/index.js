import React from 'react'
import { View, Text, Pressable } from 'react-native'
import { Auth } from 'aws-amplify';

const ProfileScreen = () => {
    return (
        <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%'}}>
            <Pressable
                style={{backgroundColor: 'orange', padding: 5,borderRadius: 5, paddingHorizontal: 20}}
                onPress={() => Auth.signOut()}
            >
                <Text style={{color: 'white', fontSize: 16, fontWeight: '700'}}>
                    Sign Out
                </Text>
            </Pressable>
        </View>
    )
}

export default ProfileScreen;
