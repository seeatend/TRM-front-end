import React from 'react'

import classNames from 'utils/classnames'

import PropTypes from 'prop-types'

import SyndicateTitleDescriptionCard from 'components/syndicate/SyndicateTitleDescriptionCard'

import TitleDescriptionSection from 'components/common/TitleDescriptionSection'

const SyndicateIntroSection = (props) => {
  const {
    className,
    title,
    description,
    children
  } = props

  const modifiedClassNames = classNames('syndicate-intro-section', className)

  return (
    <div className={modifiedClassNames}>
      <div className='syndicate-intro-section__bg wave-bg-blue'></div>
      <div className='container no-padding'>
        <SyndicateTitleDescriptionCard>
          <TitleDescriptionSection
            title={title}
            description={description}
            colorModifier='blue' />
        </SyndicateTitleDescriptionCard>
        <div className='syndicate-intro-section__content'>
          {children}
        </div>
      </div>
    </div>
  )
}

SyndicateIntroSection.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string
}

export default SyndicateIntroSection
