import { useState } from 'react';
import {View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Student = ({name, email, gender, id}) => {
    const [pressed, setPressed] = useState(false);

    const handlePress = () => {
        if(!pressed){
            setPressed(true);
        }
        else{
            setPressed(false);
        }
    }

    return(
        <View style={styles.studentCard}>
            <TouchableOpacity onPress={handlePress}>
                <Text>{name}</Text>
            </TouchableOpacity>
            {pressed && 
            <View style={styles.infoContainer}>
                <Text>{id}</Text>
                <Text>{email}</Text>
                <Text> {gender}</Text>
            </View>}
        </View>
    )
}

const styles = StyleSheet.create({
    studentCard: {
        marginTop:10,
        paddingBottom: 10,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent:'space-around',
        alignSelf:'center',
    },
    infoContainer:{
        marginTop:5,
        display: 'flex',
        justifyContent:'space-between',
        alignItems:'center',
    }
})

export default Student