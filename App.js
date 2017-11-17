import React from 'react';
import YoutubeLayout from './screens/YoutubeLayout'
import Dimension from './screens/Dimension'

export default class App extends React.Component {
  render() {
    return (
      // <Dimension/>
      <YoutubeLayout/>
    );
  }
}
 


import {Dimensions} from 'react-native'
const dim = Dimensions.get('screen')

