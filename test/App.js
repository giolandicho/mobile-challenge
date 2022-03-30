import { useState, useEffect } from 'react';
import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

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
      <ScrollView>
        {data && users && users.map((user, i) => {
          return(
            <View key={i}>
              <Text>
                {user.name.firstName}{user.name.lastName}
              </Text>
            </View>
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
    alignItems: 'center',
    justifyContent: 'center',
  },
});
