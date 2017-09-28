import React, { Component } from 'react'

import BasePopup from 'components/popup/BasePopup'

import classNames from 'utils/classnames'

import NewsPopupTile from 'components/news/NewsPopupTile'

import { textToNewLineReactComponent } from 'utils/stringutils'

class NewsPopup extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const {
      className,
      newsTile
    } = this.props

    const modifiedClassNames = classNames('news-popup', className)

    return (
      <div className={modifiedClassNames}>
        {
          newsTile
          ? (
              <NewsPopupTile
                name=''
                title={newsTile.slugline}
                date={newsTile.timeStamp}
                shareText={newsTile.content}
                text={textToNewLineReactComponent(newsTile.content)}
                src={newsTile.thumbnailImage}
                rootPath='' />
            )
          : null
        }
      </div>
    )
  }
}

export default BasePopup(NewsPopup)
