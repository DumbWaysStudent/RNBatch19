import React from 'react';
import { StyleSheet, Text } from 'react-native';

const TextHeading = (props) => {
  const { title } = props;
  return (
    <Text style={styles.heading}>{title}</Text>
  )
}

export default TextHeading;

const styles = StyleSheet.create({
  heading: {
    fontSize: 40,
    color: 'red',
    fontWeight: 'bold',
    marginBottom: 20
  },
})