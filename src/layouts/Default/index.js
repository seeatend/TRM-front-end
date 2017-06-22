import React from 'react'
import PropTypes from 'prop-types'

import Header from 'containers/header'
import Footer from 'components/footer'

const Default = props => {
  const { children } = props

  return (
    <div className='main-layout'>
      <Header />
      <div className='content'>
        {children}
      </div>
      <Footer />
    </div>
  )
}

Default.propTypes = {
  children: PropTypes.node.isRequired
}

export default Default
