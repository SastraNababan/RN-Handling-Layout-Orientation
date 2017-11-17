import React, { Component } from 'react'
import { View,Text,Image,StyleSheet,Dimensions,ScrollView } from 'react-native'
const {height,width,scale} = Dimensions.get('window')
let videoWidth = width-20
let videoHeight = videoWidth - (0.3 * videoWidth)

export default class YoutubeLayout extends Component {

  state = {
    videoWidth :videoWidth,
    videoHeight :videoHeight
  }

  _isPotrait(width,height){
    if (width < height) return true
    return false
  }

  _updateLayout(event){
    console.log('native event :');
    const {width,height}=event.nativeEvent.layout
    let isPotrait =this._isPotrait(width,height) 
    if (isPotrait){
      videoWidth = width-20
      videoHeight = videoWidth - (0.3 * videoWidth)
    }else{
      videoWidth = (width-20)/3
      videoHeight = videoWidth - (0.3 * videoWidth)
    }

    this.setState({
      videoWidth :videoWidth,
      videoHeight :videoHeight,
      isPotrait:isPotrait
    })
  }

  render() {
    let videoInfoStyle
    if ( this.state.isPotrait){
      videoInfoStyle=styles.videoInfoPotrait
    }else{
      videoInfoStyle=styles.videoInfoLandscape
    }
      return (
      <View style={styles.container} onLayout={ (event) => this._updateLayout(event)}>
        
        <View style={styles.header}></View>
        <ScrollView>
          <View style={styles.videoWrapper}>
            <Image style={[styles.videoPic,{width:this.state.videoWidth,height:this.state.videoHeight}]} source={require('../assets/video1.jpg')}/>
            <View style={[styles.videoInfo,videoInfoStyle]}>
              <Image style={styles.videoLogo} source={require('../assets/videologo.png')}/>
              <View>
                <Text style={styles.videoTitle}>Title of Video here</Text>
                <Text style={styles.videoMeta}> MetallicaTV . 205k views . 19 hours ago</Text>
              </View>
            </View>
          </View>

          <View style={styles.videoWrapper}>
            <Image style={[styles.videoPic,{width:this.state.videoWidth,height:this.state.videoHeight}]} source={require('../assets/video1.jpg')}/>
            <View style={[styles.videoInfo,videoInfoStyle]}>
              <Image style={styles.videoLogo} source={require('../assets/videologo.png')}/>
              <View>
                <Text style={styles.videoTitle}>Title of Video here</Text>
                <Text style={styles.videoMeta}> MetallicaTV . 205k views . 19 hours ago</Text>
              </View>
            </View>
          </View>
        </ScrollView>

      </View>
    )
  }
}

const styles=StyleSheet.create({
  container:{
    flex:1,
  },
  header:{
    height:30
  },
  videoWrapper:{
    padding:10,
    marginBottom:20,
    flexDirection:'row',
    flexWrap:"wrap"
  },
  videoInfo:{
    padding:5,
  },
  videoInfoPotrait:{
    flexDirection:"row",
  },
  videoInfoLandscape:{
    flexDirection:"column-reverse",
    justifyContent:'flex-end'
  },
  videoLogo:{
    width:40,
    height:40,
    marginRight:10
  },
  videoPic:{
    marginBottom:5
  },
  videoTitle:{
    fontSize:16,
  },
  videoMeta:{
    color:"#777"
  }

})