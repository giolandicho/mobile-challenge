import { useState, useEffect } from 'react';
import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  const [data, setData] = useState({});
  const [page, setPage] = useState(0);
  const fetchData = () =>{
    const nextPage = page + 1;
    return axios.get(`https://my.api.mockaroo.com/users.json?page=${nextPage}&key=930279b0`);
  }

  useEffect(() => {
    fetchData().then((res) => {
      const page = res.data;
      console.log(page.entries)
    });
  }, [])

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
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
