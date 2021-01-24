 import React,{useState}from 'react';
import { StyleSheet, Text, View,TextInput } from 'react-native';

export default function App() {
  const [person , setPerson] = useState({name : 'Jon', age: 0});
 
  return (
    <View style={styles.container}>
      <Text>Enter name : </Text>
      <TextInput 
        style={styles.input}
        placeholder='e.g Meshari'
        onChangeText={(val) => setPerson({name: val})}
      />
       <Text>Enter Age : </Text>
      <TextInput 
        style={styles.input}
        placeholder='e.g 20'
        onChangeText={(val) => setPerson({age: val})}
      />
        <Text>name is : {person.name} and age is : {person.age}</Text>
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
   input:{
     borderWidth: 1,
     borderColor: '#777',
     padding: 8,
     margin: 10,
     width: 200
   }
});
