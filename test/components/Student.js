import {View, Text, StyleSheet } from "react-native";

const Student = ({name, email, gender, id}) => {
    return(
        <View style={styles.studentCard}>
            <Text>Name: {name}</Text>
            <Text> Student ID: {id} </Text>
            <Text>Email address: {email} </Text>
            <Text>Gender: {gender} </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    studentCard: {
        marginTop:10,
        paddingBottom: 10,
        display: 'flex',
        flexDirection:'row',
        flexWrap: 'wrap',
        justifyContent:'space-between',
        alignItems:'center',
        borderBottomWidth: 1, 
    }
})

export default Student