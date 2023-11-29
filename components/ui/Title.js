import { Text, StyleSheet, Platform } from 'react-native'

function Title({children}) {
  return <Text style={styles.title}> {children} </Text>
}

export default Title

const styles = StyleSheet.create({
  title: {
    fontFamily: 'chicago-darling-serif',
    fontSize: 32,
    // fontWeight: 'bold',
    color: 'white',
    // borderWidth: Platform.OS === 'android' ? 2 : 0,
    borderWidth: Platform.select({ ios: 0, android: 2 }),
    borderColor: 'white',
    padding: 8,
    textAlign: 'center'
  }
})