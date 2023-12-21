import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Routes from './src/navigation/Routes'
import { ThemeProvider } from './src/context/ThemeContext'

const App = () => {
  return (
    <ThemeProvider>
    <SafeAreaView style={{flex:1}}>

      <Routes/>
      
    </SafeAreaView>
    </ThemeProvider>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})