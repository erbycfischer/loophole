import React from 'react'
import PropTypes from 'prop-types'

import contactData from '../../mocks/contact5.json'

import Profile5 from './Profile'

const ProfileScreen5 = () => <Profile5 {...contactData} />

ProfileScreen5.navigationOptions = () => ({
  header: null,
})

ProfileScreen5.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default ProfileScreen5
