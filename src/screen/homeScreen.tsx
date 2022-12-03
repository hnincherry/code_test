import React from 'react'
import { View, Text } from 'react-native'

export const HOME = () => {   

    var names = ["Mary", "Tom", "Jack", "Jill"]
    
    // console.log('Names', typeof (names))
    return (
        <View>
            {
                names.map((d,i) => {
                    return(
                        <Text>{d}</Text>
                    )
                })
            }
            <Text>HomeScreen</Text>
        </View>
    )
}