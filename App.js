/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View, StatusBar, Text, Button, Image, ScrollView } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

class App extends Component {

  state = {
    profilePicturePath: '',
    profilePictureMime: '',
    profileBackgroundPath: '',
    profileBackgroundMime: ''
  }

  onPressProfilePicture = async () => {
    try {
      const image = await ImagePicker.openPicker({
        width: 500,
        height: 500,
        cropping: true
      })

      this.setState({
        profilePicturePath: image.path,
        profilePictureMime: image.mime
      })
    } catch (error) {
      console.log(error);
    }
  };

  onPressProfileBackground = async () => {
    try {
      const image = await ImagePicker.openPicker({
        width: 500,
        height: 500,
        cropping: true
      })

      this.setState({
        profileBackgroundPath: image.path,
        profileBackgroundMime: image.mime
      })
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { profilePicturePath, profileBackgroundPath } = this.state;
    return (
      <ScrollView>
        <StatusBar barStyle="dark-content" />
        <View>
          <Text style={{ textAlign: 'center', marginBottom: 40, fontSize: 40 }}>Multiple Upload example</Text>
          <View style={{ alignItems: 'center' }}>
            {profilePicturePath ? <Image source={{ uri: this.state.profilePicturePath }} style={{ width: 200, height: 200, marginBottom: 20 }} /> : null}
            <View style={{ marginBottom: 20 }}>
              <Button title="Pick Profile Picture" onPress={this.onPressProfilePicture} />
            </View>
            {profileBackgroundPath ? <Image source={{ uri: this.state.profileBackgroundPath }} style={{ width: 200, height: 200, marginBottom: 20 }} /> : null}
            <View style={{ marginBottom: 20 }}>
              <Button title="Pick Profile Background" onPress={this.onPressProfileBackground} />
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default App;
