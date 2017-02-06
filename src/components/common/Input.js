import React from 'react'
import { View, Text, TextInput } from 'react-native'

const Input = ({ label, placeholder, value, onChangeText, secureTextEntry }) => {
  const { containerStyle, inputStyle, labelStyle } = styles

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        value={value}
        onChangeText={onChangeText}
        style={inputStyle} />
    </View>
  )
}

const styles = {
  containerStyle: {
    flexDirection: 'row',
    height: 40,
    flex: 1,
    alignItems: 'center'
  },
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight : 23,
    flex: 2
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1,
    color: 'black'
  }
}

export { Input }
