import React, { Component, Fragment } from 'react'
import { Dimensions, Image, StyleSheet, ScrollView, View, TouchableOpacity } from 'react-native'
import { Input, Button } from 'react-native-elements';
import { Card, Badge, Block, Text } from '../components';
import { theme, mocks } from '../constants';
import SearchableDropdown from 'react-native-searchable-dropdown';

const { width } = Dimensions.get('window');
var items = [
  {
    id: 1,
    name: 'Spanish',
  },
  {
    id: 2,
    name: 'English',
  },
  {
    id: 3,
    name: 'Arabic',
  },
  {
    id: 5,
    name: 'French',
  },
  {
    id: 6,
    name: 'Russian',
  },
  {
    id: 7,
    name: 'Portuguese',
  },
  {
    id: 8,
    name: 'German',
  },
  {
    id: 9,
    name: 'Japanese',
  },
  {
    id: 10,
    name: 'Chinese',
  },
];

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItems: []
    }
  }
}

class Browse extends Component {
  state = {
    active: 'Products',
    categories: [],
  }

  componentDidMount() {
    this.setState({ categories: this.props.categories });
  }

  handleTab = tab => {
    const { categories } = this.props;
    const filtered = categories.filter(
      category => category.tags.includes(tab.toLowerCase())
    );

    this.setState({ active: tab, categories: filtered });
  }

  renderTab(tab) {
    const { active } = this.state;
    const isActive = active === tab;

    return (
      <TouchableOpacity
        key={`tab-${tab}`}
        onPress={() => this.handleTab(tab)}
        style={[
          styles.tab,
          isActive ? styles.active : null
        ]}
      >
        <Text size={16} medium gray={!isActive} secondary={isActive}>
          {tab}
        </Text>
      </TouchableOpacity>
    )
  }

  render() {
    const { profile, navigation } = this.props;
    const { categories } = this.state;
    // const tabs = ['Info', 'Chat', 'Settings'];

    return (
      <Block>


{/* Single */}
<SearchableDropdown
  onItemSelect={(item) => {
    const items = this.state.selectedItems;
    items.push(item)
    this.setState({ selectedItems: items });
  }}
  containerStyle={{ padding: 5 }}
  onRemoveItem={(item, index) => {
    const items = this.state.selectedItems.filter((sitem) => sitem.id !== item.id);
    this.setState({ selectedItems: items });
  }}
  itemStyle={{
    padding: 10,
    marginTop: 2,
    backgroundColor: '#3D348B',
    borderColor: '#B8B9BF',
    borderWidth: 1,
    borderRadius: 5,
  }}
  itemTextStyle={{ color: '#fff' }}
  itemsContainerStyle={{ maxHeight: 140 }}
  items={items}
  defaultIndex={2}
  resetValue={false}
  textInputProps={
    {
      placeholder: "Select your lanuage..",
      underlineColorAndroid: "transparent",
      style: {
          padding: 12,
          borderWidth: 1,
          borderColor: '#3D348B',
          borderRadius: 5,
      },
      // onTextChange: text => alert(text)
    }
  }
  listProps={
    {
      nestedScrollEnabled: true,
    }
  }
/>
        <Block flex={false} row center space="between" style={styles.header}>
          <Text h1 bold>Getting Started</Text>
          <Button onPress={() => navigation.navigate('Settings')}>
            <Image
              // source={profile.avatar}
              // style={styles.avatar}
            />
          </Button>
        </Block>

        {/* <Block flex={false} row style={styles.tabs}>
          {tabs.map(tab => this.renderTab(tab))}
        </Block> */}

        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ paddingVertical: theme.sizes.base * 2}}
        >
          <Block>
         
          <View>
        
          <ScrollView style={styles.container}>
      <Text style= {{ fontSize: 40, fontWeight: "bold"}}>
        User
      </Text>
      <Text>
      Give a little info on the things you could use some help with 
      </Text>
      <Input placeholder="What lanuage do you speak?"/>
    <Input placeholder="What lanuage you'd like to learn?"/>
    <Input placeholder="First Name"/>
    <Input placeholder="Last Name"/>
    <Input placeholder="Age"/>
    <Input placeholder="What's a issue you've been having?"/>
    <Input placeholder="Two Hobbies"/>

        
    </ScrollView>

    <Button
  onPress={() => navigation.navigate('Profile6')}
  title='Submit'
  color="#3D348B"
/>
          
        </View>
          </Block>
        </ScrollView>
      </Block>
    )
  }
}

Browse.defaultProps = {
  profile: mocks.profile,
  categories: mocks.categories,
}

export default Browse

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: theme.sizes.base * 2,
  },
  avatar: {
    height: theme.sizes.base * 2.2,
    width: theme.sizes.base * 2.2,
  },
  tabs: {
    borderBottomColor: theme.colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginVertical: theme.sizes.base,
    marginHorizontal: theme.sizes.base * 2,
  },
  tab: {
    marginRight: theme.sizes.base * 2,
    paddingBottom: theme.sizes.base
  },
  active: {
    borderBottomColor: theme.colors.secondary,
    borderBottomWidth: 3,
  },
  categories: {
    flexWrap: 'wrap',
    paddingHorizontal: theme.sizes.base * 2,
    marginBottom: theme.sizes.base * 3.5,
  },
  category: {
    // this should be dynamic based on screen width
    minWidth: (width - (theme.sizes.padding * 2.4) - theme.sizes.base) / 2,
    maxWidth: (width - (theme.sizes.padding * 2.4) - theme.sizes.base) / 2,
    maxHeight: (width - (theme.sizes.padding * 2.4) - theme.sizes.base) / 2,
  }
})
