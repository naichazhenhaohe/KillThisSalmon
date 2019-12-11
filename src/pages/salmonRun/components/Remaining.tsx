import React, { useState, useEffect } from 'react'
import moment from 'moment'

export default function Remaing(props) {
  const { index, isOpening, end, start } = props
  function getRemain(time: moment.Moment, state: string) {
    const duration = moment.duration(time.diff(moment()))
    return (
      <div className="salmon-remain">
        {`${state}${duration.days() > 0 ? `${duration.days()}d` : ''} ${
          duration.hours() > 0 ? `${duration.hours()}h` : ''
        } ${duration.minutes()}m ${duration.seconds()}s`}{' '}
      </div>
    )
  }

  let [remaining, setRemaining] = useState(
    index === 0
      ? isOpening
        ? getRemain(end, 'REMAINING: ')
        : getRemain(start, 'WILL OPEN IN: ')
      : ''
  )

  useEffect(() => {
    if (index === 0) {
      let interval = setInterval(() => {
        if (isOpening) {
          setRemaining(getRemain(end, 'REMAINING: '))
        } else {
          setRemaining(getRemain(start, 'WILL OPEN IN: '))
        }
      }, 1000)
      return () => {
        clearInterval(interval)
      }
    }
  })

  return <>{remaining}</>
}
