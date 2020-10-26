import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-elements'
import { Input, Icon, Button } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { withNavigation } from 'react-navigation'


const SignupScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text h3 style={styles.text}>Singup for Myong Blog</Text>
      <Input
        placeholder='email@address.com'
        leftIcon={{ type: 'foundation', name: 'mail' }}
        label='Your Email Address'
        labelStyle={styles.label}
      />
      <Input 
        placeholder="Password" 
        secureTextEntry={true} 
        leftIcon={{ type: 'foundation', name: 'lock' }}
        label='Password'
        labelStyle={styles.label}
      />
      <Input 
        placeholder="Confirm Password" 
        secureTextEntry={true} 
        leftIcon={{ type: 'foundation', name: 'lock' }}
        label='Confirm Password'
        labelStyle={styles.label}
      />
      <Button
        title='Sign up'
      />
      <TouchableOpacity
        onPress={() => navigation.navigate('Signin')}
      >
        <Text style={styles.link}>Already have an account? Sign in</Text>
      </TouchableOpacity>
    </View>
  )
}

export default withNavigation(SignupScreen)

const styles = StyleSheet.create({
  text: {
    alignSelf: 'center',
    marginBottom: 20,
  },
  container: {
    flex: 1,
    margin: 10,
  },
  label: {
    fontSize: 20,
    color: 'black',
  },
  link: {
    color: 'blue'
  }
})
