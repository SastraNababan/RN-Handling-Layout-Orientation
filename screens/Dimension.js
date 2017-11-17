import React from 'react'
import { StyleSheet, Text, View,Dimensions,StatusBar } from 'react-native'
const dim = Dimensions.get('window')

export default class App extends React.Component {
  state = {
    screenWidth:dim.width,
    screenHeight:dim.height,
    orientation:this._getOrientation(dim.width,dim.height)
  }

  _getOrientation(width,height){
    return width < height ? 'Potrait':'Landscape'
  }

  _updateLayout(event){
    const {width,height}=event.nativeEvent.layout
    let orientation =this._getOrientation(width,height) 
    this.setState({
      screenWidth:width,
      screenHeight:height,
      orientation:this._getOrientation(width,height)
    })
  }

  render() {
    return (
      <View style={styles.container} onLayout={ (event) => this._updateLayout(event)}>
        <StatusBar/>
        <Text style={styles.text}>Orientation : {this.state.orientation}</Text>
        <Text style={styles.text}>Width : {this.state.screenWidth}</Text>
        <Text style={styles.text}>Height : {this.state.screenHeight}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize:30
  }
});


 