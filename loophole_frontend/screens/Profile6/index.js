import React from 'react'
import PropTypes from 'prop-types'

import contactData from '../../mocks/contact6.json'

import Profile6 from './Profile'

const ProfileScreen6 = () => <Profile6 {...contactData} />

ProfileScreen6.navigationOptions = () => ({
  header: null,
})

ProfileScreen6.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default ProfileScreen6
