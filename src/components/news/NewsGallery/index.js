import React, { Component } from 'react'

import PropTypes from 'prop-types'

import NewsTile from 'components/news/NewsTile'

import { Block, Grid } from 'components/layouts/masonry'

import NewsPopup from 'components/news/NewsPopup'

class NewsGallery extends Component {
  constructor (props) {
    super(props)

    this.state = {
      id: null,
      showPopup: false
    }

    this.handleNewsTileClick = this.handleNewsTileClick.bind(this)
    this.showPopup = this.showPopup.bind(this)
    this.closePopup = this.closePopup.bind(this)
  }

  showPopup (id) {
    if (!id) {
      return false
    }

    this.setState({
      id,
      showPopup: true
    })
  }

  closePopup () {
    this.setState({
      id: null,
      showPopup: false
    })
  }

  handleNewsTileClick (id) {
    this.showPopup(id)
  }

  render () {
    const {
      tiles
    } = this.props

    const {
      id,
      showPopup
    } = this.state

    return (
      <span>
        <Grid
          targetBlockWidth={265}
          center={false}
          maxColumns={4}>
          {
            tiles.map((tile, index) => (
              <Block width={1} key={tile._id}>
                <NewsTile
                  id={tile._id}
                  rootPath={''}
                  text={tile.headline}
                  src={tile.thumbnailImage}
                  date={tile.timeStamp}
                  onClick={this.handleNewsTileClick}
                />
              </Block>
            ))
          }
        </Grid>
        <NewsPopup
          newsTiles={tiles}
          isOpen={showPopup}
          onClick={this.closePopup}
          id={id} />
      </span>
    )
  }
}

NewsGallery.propTypes = {
  tiles: PropTypes.array.isRequired
}

export default NewsGallery
