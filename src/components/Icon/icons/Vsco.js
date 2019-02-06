import React from 'react'

const SvgVsco = props => (
  <svg viewBox="0 0 60 60" {...props}>
    <path d="M30 7C17.3 7 7 17.3 7 30s10.3 23 23 23 23-10.3 23-23S42.7 7 30 7zm22.1 23c0 .8 0 1.5-.1 2.3l-3.9-.5c.1-.6.1-1.2.1-1.8s0-1.1-.1-1.7l3.9-.5c.1.8.1 1.5.1 2.2zM7.9 30c0-.7 0-1.5.1-2.2l3.9.5c-.1.6-.1 1.2-.1 1.7 0 .6 0 1.2.1 1.7l-3.9.5c0-.7-.1-1.5-.1-2.2zm39.3-5.9l3.7-1.4c.5 1.4.8 2.8 1 4.3l-3.9.4c-.2-1.1-.5-2.3-.8-3.3zm.1 5.9c0 1.1-.1 2.3-.3 3.4l-3.9-.9c.3-1.7.3-3.4 0-5l3.9-.9c.2 1.1.3 2.2.3 3.4zM30 42.4c-6.8 0-12.4-5.5-12.4-12.4S23.2 17.6 30 17.6 42.4 23.2 42.4 30 36.8 42.4 30 42.4zm.4 4.8v-4c1.7-.1 3.4-.4 4.9-1.1l1.7 3.6c-2 1-4.3 1.5-6.6 1.5zm-7.5-1.5l1.7-3.6c1.6.7 3.2 1.1 4.9 1.1v4c-2.3 0-4.5-.5-6.6-1.5zM12.7 30c0-1.2.1-2.3.4-3.5l3.9.9c-.3 1.7-.3 3.4 0 5l-3.9.9c-.3-1.1-.4-2.2-.4-3.3zm16.8-17.2v4c-1.7.1-3.3.4-4.9 1.1l-1.7-3.6c2.1-1 4.4-1.5 6.6-1.5zm7.6 1.5l-1.7 3.6c-1.5-.7-3.2-1.1-4.9-1.1v-4c2.3 0 4.5.5 6.6 1.5zm9.7 8.9c-.4-1.1-1-2.1-1.6-3.1l3.2-2.2c.8 1.2 1.5 2.5 2 3.9zm-.1 2.5l-3.9.9c-.4-1.6-1.2-3.2-2.2-4.5l3.1-2.5c1.4 1.8 2.4 3.9 3 6.1zm-6.6-4.4C39 20 37.7 19 36.2 18.2l1.7-3.6c2 1 3.8 2.5 5.3 4.2zm-1.2-7.1l1.8-3.5c1.3.7 2.5 1.6 3.6 2.5l-2.6 3c-.8-.8-1.8-1.4-2.8-2zm-.8-.4c-1-.5-2.1-.9-3.2-1.3l1-3.8c1.4.4 2.8.9 4.1 1.6zM34 12.3c-1.2-.3-2.3-.4-3.5-.5V7.9c1.5 0 3 .2 4.5.6zm-4.4-.5c-1.2 0-2.3.2-3.5.4l-.9-3.8c1.4-.3 2.9-.5 4.4-.5zm-4.3.6c-1.1.3-2.2.7-3.3 1.2l-1.8-3.5c1.3-.7 2.7-1.2 4.1-1.6zm-4.1 1.7c-1 .6-2 1.2-2.9 2l-2.6-2.9c1.1-1 2.4-1.8 3.7-2.5zm.9.5l1.7 3.6c-1.4.8-2.8 1.8-3.9 3.1l-3.1-2.5c1.5-1.7 3.3-3.1 5.3-4.2zm-5.8 4.9l3.1 2.5c-1 1.3-1.8 2.9-2.2 4.5l-3.9-.9c.6-2.2 1.6-4.2 3-6.1zm-3.1 3.6l-3.7-1.4c.6-1.4 1.3-2.7 2.1-3.9l3.2 2.2c-.6 1-1.2 2-1.6 3.1zm-.3.8c-.4 1.1-.7 2.2-.8 3.4l-3.9-.5c.2-1.5.6-2.9 1.1-4.3zm-.9 8.7c.2 1.2.5 2.3.8 3.4l-3.7 1.4c-.5-1.4-.9-2.8-1.1-4.3zm1.2 4.3c.4 1.1 1 2.1 1.6 3.1l-3.2 2.2c-.8-1.2-1.5-2.5-2.1-3.9zm0-2.7l3.9-.9c.4 1.6 1.2 3.2 2.2 4.6l-3.1 2.5c-1.4-1.9-2.4-4-3-6.2zm6.6 4.4c1.1 1.3 2.4 2.4 3.9 3.2L22 45.4c-2-1.1-3.8-2.5-5.3-4.3zm1.4 7.3l-1.8 3.5c-1.3-.7-2.5-1.6-3.6-2.5l2.6-2.9c.8.7 1.8 1.3 2.8 1.9zm.8.4c1 .5 2.1.9 3.3 1.2l-.9 3.8c-1.4-.4-2.8-.9-4.1-1.6zm4.1 1.4c1.1.2 2.3.4 3.5.4V52c-1.5 0-2.9-.2-4.4-.5zm4.4.5c1.2 0 2.3-.2 3.4-.4l.9 3.8c-1.4.3-2.9.5-4.4.5zm4.3-.7c1.1-.3 2.2-.7 3.2-1.2l1.8 3.5c-1.3.7-2.7 1.2-4.1 1.6zm4.1-1.6c1-.6 2-1.2 2.9-2l2.6 2.9c-1.1.9-2.3 1.8-3.6 2.5zm-1-.6l-1.7-3.6c1.5-.8 2.8-1.9 3.9-3.2l3.1 2.5c-1.5 1.8-3.3 3.3-5.3 4.3zm5.9-4.9l-3.1-2.5c1-1.4 1.7-2.9 2.2-4.5l3.9.9c-.6 2.2-1.6 4.2-3 6.1zm3-3.5l3.7 1.4c-.6 1.4-1.3 2.7-2.1 3.9L45.2 40c.6-1 1.2-2 1.6-3.1zm.3-.8c.4-1.1.7-2.2.8-3.4l3.9.5c-.2 1.5-.6 2.9-1.1 4.3zm.9-18.9l-3.2 2.2c-.7-.9-1.5-1.8-2.3-2.6l2.6-2.9c1 1 2 2.1 2.9 3.3zm-32.9-3.5l2.6 2.9c-.8.8-1.6 1.7-2.3 2.6L12.2 17c.8-1.1 1.8-2.3 2.9-3.3zm-3 29.2l3.2-2.2c.7.9 1.5 1.8 2.3 2.6L15 46.2c-1.1-1-2-2.1-2.9-3.3zM45 46.2l-2.6-2.9c.8-.8 1.6-1.7 2.3-2.6l3.2 2.2c-.9 1.2-1.8 2.3-2.9 3.3z" />
  </svg>
)

export default SvgVsco