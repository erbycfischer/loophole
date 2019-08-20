import React from 'react'
import PropTypes from 'prop-types'

import contactData from '../../mocks/contact4.json'

import Profile4 from './Profile'

const ProfileScreen4 = () => <Profile4 {...contactData} />

ProfileScreen4.navigationOptions = () => ({
  header: null,
})

ProfileScreen4.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default ProfileScreen4
