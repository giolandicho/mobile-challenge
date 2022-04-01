import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button, FlatList, Text } from 'react-native';
import Student from './components/Student';

export default function App() {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const list = useRef(null)

  const fetchData = async() =>{
    setLoading(true);
    const nextPage = page + 1;
    const url = `https://my.api.mockaroo.com/users.json?page=${nextPage}&count=20&key=930279b0`
    setPage(nextPage)
    return await axios
      .get(url)
      .then((res) => {
        const userData = res.data;
        setUsers(userData.entries)
        setLoading(false);
        }).catch(e => console.log(e));
  }

  const renderItem = ({item}) => {
    const fullName = item.name.firstName + ' ' + item.name.lastName
    return(
      <View style={styles.studentContainer}>
        <Student name={fullName} email={item.email} gender={item.gender} id={item.id}/>
      </View>
    )
  }
  const resetIndex = () => {
    list.current.scrollToIndex({animated: true, index: 0})
  }
  const getNextPage = () => {
    fetchData().then(resetIndex());
  }

  const nextPageButton = () => {
    return(
      <View styles={styles.buttonContainer}>
        <Button 
          onPress={getNextPage}
          title='Next Page'
        />
      </View>
    )
  }



  useEffect(() => {
    fetchData()
  }, [])

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.headerBar}/>
      {loading ? <Text>Loading...</Text> : users && <FlatList
          ref={list}
          data={users}
          renderItem={renderItem}
          ListFooterComponent={nextPageButton}
          extraData={users}
          keyExtractor={(item) => item.id}
        />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e6e6e6',
    width:'100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  studentContainer: {
    width: '100%',
    marginBottom:10,
  },
  headerBar:{
    height:20,
  }, 
  buttonContainer:{
    paddingBottom:20,
  }
});
