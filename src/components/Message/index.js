// @flow

import React, { PureComponent } from 'react'
import cn from 'classnames'
import Markdown from 'react-markdown'
import { Radar, Pie } from 'react-chartjs-2'
import { ProgressLine, TimeLine, IconItem } from './render'

const defaultTheme = {
  line: 'pv1 flex flex-wrap items-end',
  avatar:
    'box h1s-ns h1 w1s-ns w1 ba bw1 b--white br-100 t-all-ease a-zoom-in-out a-s t-all-ease t-f',
  list: 'flex flex-wrap max-w-60-ns max-w-75',
  message:
    'box mv1s-ns mv1 w-auto pa3 bg-white br3 f5-ns f6 fw3 gray t-all-ease t-f',
  lineAuthor: 'justify-start mv3-ns mv2 w-100',
  avatarAuthor: 'bg-blue mr2',
  listAuthor: '',
  messageAuthor: '',
  lineGuest: 'justify-end mv3-ns mv2 w-100',
  avatarGuest: 'bg-green ml2 order-1',
  listGuest: '',
  messageGuest: '',
}

class Message extends PureComponent<any, any> {
  message: any
  componentDidMount () {
    // console.log(this.message)
  }
  renderMsg = ({ type, data }: { type: string, data: any }, idx: number) => {
    const list = {
      markdown: () => (
        <Markdown key={idx} className="md" source={data} skipHtml />
      ),
      radar: () => (
        <div key={idx} className="radar w-100">
          <Radar data={data} />
        </div>
      ),
      pie: () => (
        <div key={idx} className="pie w-100">
          <Pie
            data={data}
            legend={{
              display: true,
              position: 'top',
              fullWidth: true,
              reverse: false,
              labels: {
                fontColor: '#555',
              },
            }}
            redraw
          />
        </div>
      ),
      progress: () => {
        const { title, items } = data || {}
        return (
          <div key={idx} className="progress w-100">
            {title && <span className="f3-ns f4 fw4 dark-gray roboto-slab">{title}</span>}
            {items && (
              <div className="mt2s-ns mt2">
                {(items || []).map(({ name, value }) => (
                  <ProgressLine
                    key={name}
                    name={name}
                    value={value}
                    className="pv2s-ns pv2"
                  />
                ))}
              </div>
            )}
          </div>
        )
      },
      timeline: () => (
        <div key={idx} className="timeline w-100">
          {(data || []).map(({ title, subtitle, date, description }) => (
            <TimeLine
              key={title}
              title={title}
              subtitle={subtitle}
              date={date}
              description={description}
              className="pv2s-ns pv2"
            />
          ))}
        </div>
      ),
      contact: () => (
        <div key={idx} className="contact mt2 w-100">
          {(data || []).map(({ icon, href, label, value }) => (
            <IconItem
              key={value}
              icon={icon}
              href={href}
              label={label}
              value={value}
              className="pv1s-ns pv1"
            />
          ))}
        </div>
      ),
      note: () => (
        <div key={idx} className="note w-100">
          <Markdown className="md f7 ttu fw3" source={data} skipHtml />
        </div>
      )
    }
    return (list[type] && list[type](data)) || null
  }
  render () {
    const { by, content = [], theme = defaultTheme } = this.props
    const messageTheme = {
      author: {
        list: cn(theme.list, theme.listAuthor),
        line: cn(theme.line, theme.lineAuthor),
        avatar: cn(theme.avatar, theme.avatarAuthor),
        message: cn(theme.message, theme.messageAuthor),
      },
      guest: {
        list: cn(theme.list, theme.listGuest),
        line: cn(theme.line, theme.lineGuest),
        avatar: cn(theme.avatar, theme.avatarGuest),
        message: cn(theme.message, theme.messageGuest),
      },
    }
    return (
      <div
        ref={ref => {
          this.message = ref
          return true
        }}
        data-component="Message"
        className={cn(
          'message a-s',
          messageTheme[by].line,
          by === 'author' ? 'a-slide-to-right' : 'a-slide-to-left',
        )}
      >
        <div className={messageTheme[by].avatar} />
        <div className={messageTheme[by].list}>
          {(content || []).map((msg, i) => (
            <div key={i} className={messageTheme[by].message}>
              {Object.keys(msg).map((t, y) =>
                this.renderMsg({ type: t, data: msg[t] }, y),
              )}
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default Message
