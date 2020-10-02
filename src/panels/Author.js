import React from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Epic from '@vkontakte/vkui/dist/components/Epic/Epic';
import TabbarItem from '@vkontakte/vkui/dist/components/TabbarItem/TabbarItem';
import View from '@vkontakte/vkui/dist/components/View/View';
import Select from '@vkontakte/vkui/dist/components/Select/Select';
import FormLayout from '@vkontakte/vkui/dist/components/FormLayout/FormLayout';
import Input from '@vkontakte/vkui/dist/components/Input/Input';
import { Tabbar } from '@vkontakte/vkui';

import Icon28SlidersOutline from '@vkontakte/icons/dist/28/sliders_outline';
import Icon28FavoriteOutline from '@vkontakte/icons/dist/28/favorite_outline';

import './Author.css';

class Author extends React.Component {
	constructor (props) {
	  super(props);
 
	  this.state = {
		 activeStory: 'profile'
	  };
	  this.onStoryChange = this.onStoryChange.bind(this);
	}
 
	onStoryChange (e) {
	  this.setState({ activeStory: e.currentTarget.dataset.story })
	}
 
	render () {
 
	  return (
		 <Epic activeStory={this.state.activeStory} tabbar={
			<Tabbar>
			  <TabbarItem
				 onClick={this.onStoryChange}
				 selected={this.state.activeStory === 'profile'}
				 data-story="profile"
				 text="Об авторе"
			  ><Icon28FavoriteOutline/></TabbarItem>
			</Tabbar>
		 }>
			<View id="profile" activePanel="profile">
			  <Panel id="profile">
				 <PanelHeader>Об авторе</PanelHeader>
			  </Panel>
			</View>
		 </Epic>
	  )
	}
}

export default Author;
