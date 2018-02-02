// @flow

import React, { PureComponent } from 'react'
import cn from 'classnames'
import Background from '../Background'
import Section from '../Section'
import Message from '../Message'
import Icon from '../Icon'
import Meta from '../Meta'

class Home extends PureComponent<any, any> {
  render () {
    const { data: { header, meta, sections, socialMedia } = {} } = this.props
    const list = Object.keys(sections)
    return [
      <Meta key="meta" {...meta} links={[]} />,
      <div
        key="content"
        data-component="Home"
        className="relative"
        style={{ backgroundColor: '#f6f9fc' }}
      >
        <Background
          className="relative aspect-ratio--16x9-ns aspect-ratio--4x3 bg-center cover"
          image="//res.cloudinary.com/lh-imagecloud/image/upload/v1515930477/Mesh-Triangles-Surface-Colorful-Angular-WallpapersByte-com-3840x2400_kfsxmi.jpg"
          overlayColor={['rgba(246, 249, 252, .75)', 'rgba(246, 249, 252, 1)']}
          size={{
            width: 720
          }}
        >
          <div className="absolute absolute--fill flex flex-column items-center justify-center w-100 h-100 z-3">
            <div className="box a-wobble mb4-ns mb3 w4-ns w3 ba bw2-ns bw1 b--white overflow-hidden br-100 t-all-ease">
              <Background
                className="w-100 aspect-ratio--1x1 bg-center cover br-100"
                image="//res.cloudinary.com/lh-imagecloud/image/upload/v1509441836/me.1114e9a3_igwxff.jpg"
                size={{
                  width: 250
                }}
              />
            </div>
            <div className="f2-ns f3">
              <span className="dib fw3 dark-gray a-slide-to-right">
                {header && header.name}
              </span>
              <span className="dib ml2-ns ml1s fw1 gray a-slide-to-left">
                {header && header.text}
              </span>
            </div>
            <div className="mt4-ns mt3 flex flex-wrap items-center justify-center">
              {Object.keys(socialMedia).map((k, i) => (
                <a
                  key={k}
                  className={cn(
                    i % 2 === 0 ? 'a-slide-to-top' : 'a-slide-to-bottom',
                    'grow flex items-center justify-center mh2-ns mh1s shadow-l-2 bg-white br-100 h2s-ns h2 w2s-ns w2 f3-ns f4 gray hover-dark-gray t-all-ease t-f no-underline'
                  )}
                  href={socialMedia[k]}
                >
                  <Icon name={k} />
                </a>
              ))}
            </div>
            <div className="absolute-ns bottom-2 mt3">
              <Icon
                name="angle-down"
                className="db-ns dn a-slide-to-bottom a-s a-infinite f4-ns f5 gray"
              />
              <Icon name="angle-down" className="dn-ns db f4-ns f5 gray" />
            </div>
          </div>
        </Background>
        <main className="w-90 mw6 center">
          {(list || []).map(k => {
            const { icon, color, messages } = sections[k]
            return (
              <Section key={k} icon={icon} color={color}>
                {(messages || []).map(({ by, content }, i) => (
                  <Message key={i} by={by} content={content} />
                ))}
              </Section>
            )
          })}
        </main>
      </div>
    ]
  }
}

export default Home
