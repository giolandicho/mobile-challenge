import { useState, useEffect } from 'react';
import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';
import Student from './components/Student';

export default function App() {

  const [data, setData] = useState({});
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(0);
  const fetchData = () =>{
    const nextPage = page + 1;
    return axios.get(`https://my.api.mockaroo.com/users.json?page=${nextPage}&key=930279b0`);
  }

  useEffect(() => {
    fetchData().then((res) => {
      const page = res.data;
      setData(page);
      setUsers(page.entries)
    }).catch(e => console.log(e));
  }, [])

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.headerBar}/>
      <Button title='Log' onPress={() => {console.log(data, users)}}/>
      <ScrollView style={styles.scrollContainer}>
        {data && users && users.map((user, i) => {
          const name = user.name.firstName + ' ' + user.name.lastName
          return(
            <Student
              key={i}
              name={name}
              email={user.email}
              gender={user.gender}
              id={user.id}
              />
          )
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width:'100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollContainer: {
    width: '100%'
  },
  headerBar:{
    height:20,
  }
});
