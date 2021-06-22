import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

const styles = {
  content: {
    fontSize: '35px',
    position: 'absolute',
    left: '0',
    right: '0',
    marginTop: '20px',
    textAlign: 'center',
  }
}

const Loading = ({ text = 'Loading', speed = 300 }) => {
  const [content, setContent] = useState(text)
  const id = useRef(null);

  const clear = () => window.clearInterval(id.current);

  useEffect(() => {
    // effect
    id.current = window.setInterval(() => {
      setContent((content) => {
        return content === `${text}...`
        ? text
        : `${content}.`
      })
    }, speed)

    // cleanup
    return clear;

  }, [speed, text])

  return (
    <p style={styles.content}>
      {content}
    </p>
  )
}

Loading.propTypes = {
  text: PropTypes.string,
  speed: PropTypes.number,
}

export default Loading;