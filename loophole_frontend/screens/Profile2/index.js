import React from 'react'
import PropTypes from 'prop-types'

import contactData from '../../mocks/contact2.json'

import Profile2 from './Profile'

const ProfileScreen2 = () => <Profile2 {...contactData} />

ProfileScreen2.navigationOptions = () => ({
  header: null,
})

ProfileScreen2.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default ProfileScreen2
