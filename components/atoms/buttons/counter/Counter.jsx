import { View, Text } from 'react-native'
import React from 'react'
import styles from './CounterStyle'

export default function Counter() {
  return (
    <View style={styles.counter}>
      <Text>Counter</Text>
    </View>
  )
}