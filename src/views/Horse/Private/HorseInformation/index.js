import React from 'react'

import horseView from 'views/Horse/View'

import HorseHero from 'components/horse/HorseHero'
import HorseNavBar from 'components/horse/HorseNavBar'
import HorseAbout from 'components/horse/HorseAbout'
import HorseInvolvement from 'components/horse/HorseInvolvement'
import HorseTeamMember from 'components/horse/HorseTeamMember'

import {showEditOptions} from 'utils/managerutils'

import SyndicateSplitSection from 'components/syndicate/SyndicateSplitSection'

import { timestampToDate } from 'utils/dateutils'

import TitleDescriptionSection from 'components/common/TitleDescriptionSection'

import ImageEditContainer from 'containers/ManagerEdit/ImageEditContainer'

import {
  benefitsList,
  racePlans,
  syndicateMembers,
  horseHero
} from 'data/horse'

/**
 *  Edit
 */

import TextEditContainer from 'containers/ManagerEdit/TextEditContainer'

import HorseParallaxContent from 'components/horse/HorseParallaxContent'

const HorseInformation = (props) => {
  const {
    data,
    match,
    getHorseInfo
  } = props

  const {
    description,
    timeformComments,
    owner,
    shares,
    syndicateLink,
    percentShares
  } = data

  const ownershipYears = 2

  const ownershipEndDate = timestampToDate(
    new Date(new Date().setFullYear(new Date().getFullYear() + ownershipYears))
  )

  return (
    <div className='horse-information'>
      <ImageEditContainer
        title='Image requirements'
        description='Images must be a minimum of 1200px wide, 800px tall and be no more than 2mb in size. The file format should be either PNG or JPEG, and importantly must be either your own image or one that you have been given permission to use. Most landscape smartphone camera photos will fit these criteria.'
        data={data}
        editLabel='update image'
        dataKey='featuredImage'>
        {
          ({ value }) => {
            return (
              <HorseHero
                data={data} />
            )
          }
        }
      </ImageEditContainer>

      <div className='horse-information__section--shadow section-shadow--bottom'>
        <HorseNavBar
          name={match.params.name} />
      </div>

      <SyndicateSplitSection
        leftComponent={(
          <TextEditContainer
            title='About the horse'
            data={data}
            placeholder={horseHero.title(owner.name)}
            dataKey='description'
            maxLength={2000}>
            {
              ({ value }) => {
                return (
                  <HorseAbout
                    description={value || description}
                    timeformComments={timeformComments}
                    syndicateLink={syndicateLink} />
                )
              }
            }
          </TextEditContainer>
        )}
        rightComponent={(
          <HorseInvolvement
            benefits={benefitsList}
            shares={shares}
            ownershipYears={ownershipYears}
            ownershipEndDate={ownershipEndDate}
            percentShares={percentShares} />
        )} />

      <div className='container'>
        <div className='horse-information__section'>
          <TitleDescriptionSection
            title={'key members'}
            colorModifier='blue'>
            <div className='row'>
              {syndicateMembers.map((member, index) => {
                return (
                  <div
                    key={index}
                    className='horse-information__grid-item col-lg-2 col-md-3 col-sm-4 col-xs-12'>
                    <HorseTeamMember
                      className='horse-information__member'
                      image={member.image}
                      name={member.name}
                      role={member.role}
                      description={member.description} />
                  </div>
                )
              })}
            </div>
          </TitleDescriptionSection>
        </div>

        <div className='horse-information__section row'>
          <div className='col-xs-12 col-md-7'>
            <TextEditContainer
              title='Race plans'
              data={data}
              placeholder={racePlans.text}
              dataKey='racePlans'
              maxLength={2000}>
              {
                ({ value }) => {
                  return (
                    <TitleDescriptionSection
                      title={racePlans.title}
                      colorModifier='blue'>
                      {data.racePlans}
                    </TitleDescriptionSection>
                  )
                }
              }
            </TextEditContainer>
          </div>
        </div>
      </div>

      {/* Edit section */}

      {showEditOptions() &&
        <TextEditContainer
          title='Edit quote'
          data={data}
          placeholder={horseHero.title(owner.name)}
          dataKey='quote'
          maxLength={75}
          modifier='text-edit__big'>
          {
            ({ value }) => {
              return (
                <HorseParallaxContent
                  title={data.quote || horseHero.title(owner.name)}
                  image={horseHero.image}
                />
              )
            }
          }
        </TextEditContainer>
      }

      <div className='container'>
        <div className='horse-information__section row'>
          <div className='col-xs-12 col-md-7'>
            <TextEditContainer
              title='Horse value'
              data={data}
              placeholder={''}
              dataKey='horseValue'
              maxLength={2000}>
              {
                ({ value }) => {
                  return (
                    <TitleDescriptionSection
                      title={'Horse value'}
                      colorModifier='blue'>
                      {data.horseValue}
                    </TitleDescriptionSection>
                  )
                }
              }
            </TextEditContainer>
          </div>
        </div>
      </div>
    </div>
  )
}

export default horseView(HorseInformation)
