import React from 'react'
import PropTypes from 'prop-types'

import contactData from '../../mocks/contact3.json'

import Profile3 from './Profile'

const ProfileScreen3 = () => <Profile3 {...contactData} />

ProfileScreen3.navigationOptions = () => ({
  header: null,
})

ProfileScreen3.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default ProfileScreen3
