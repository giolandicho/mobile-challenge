import { useState } from 'react';
import {View, Text, StyleSheet, TouchableOpacity } from "react-native";

//Component for each individual student

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
                <Text style={styles.studentName}>{name}</Text>
            </TouchableOpacity>
            {pressed && 
            <View style={styles.infoContainer}>
                <Text style={styles.studentInfo}>Student ID: {id}</Text>
                <Text style={styles.studentInfo}>Email address: {email}</Text>
                <Text style={styles.studentInfo}>Gender: {gender}</Text>
            </View>}
        </View>
    )
}

const styles = StyleSheet.create({
    studentCard: {
        flex: 1,
        marginTop:15,
        paddingBottom: 10,
        paddingTop:10,
        display: 'flex',
        width:'80%',
        flexDirection:'row',
        flexWrap: 'wrap',
        justifyContent:'space-around',
        alignItems:'center',
        alignSelf:'center',
        borderRadius:5,
        backgroundColor:'#fff'
    },
    infoContainer:{
        marginTop:5,
        display: 'flex',
        justifyContent:'space-between',
        alignItems:'center',
    },
    studentName:{
        fontSize:35
    },
    studentInfo:{
        fontSize:15,
    }
})

export default Student