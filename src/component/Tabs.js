
import React, {Component} from 'react';
import TabNavigator from 'react-native-tab-navigator';
import Map from './Map';
import Home from './Home';
import tabStyle from './styles/tabStyle'
import {Image} from 'react-native';

export default class Tabs extends Component{
  constructor(props){
    super(props); 
    this.state = {
      selectedTab : 'home',
    }
  } 
  render(){
    return (
      <TabNavigator>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'home'}
          title="Home"
          titleStyle={tabStyle.title}
          selectedTitleStyle={tabStyle.selectedStyle}
          renderIcon={() => <Image source={require('../assets/icons/hometab_unselected.png')} />}
          renderSelectedIcon={() => <Image source={require('../assets/icons/hometab_selected.png')} />}
          onPress={() => this.setState({ selectedTab: 'home' })}>
          <Home />
        </TabNavigator.Item>
      <TabNavigator.Item
        selected={this.state.selectedTab === 'map'}
        title="Map"
        titleStyle={tabStyle.title}
        selectedTitleStyle={tabStyle.selectedStyle}
        renderIcon={() => <Image source={require('../assets/icons/maptab_unselected.png')} />}
        renderSelectedIcon={() => <Image source={require('../assets/icons/maptab_selected.png')} />}
        // renderBadge={() => <CustomBadgeView />}
        onPress={() => this.setState({ selectedTab: 'map' })}>
        <Map />
      </TabNavigator.Item>
    </TabNavigator>

    );
  }
}

