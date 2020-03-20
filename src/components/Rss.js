import React from 'react'
import './Rss.css'
// import * as rssParser from 'react-native-rss-parser'

// fetch('https://rss.app/feeds/zDJdX70kW9sxZIzH.xml')
// .then(response => response.text())
// .then(responseData => rssParser.parse(responseData))
// .then(rss => {
//   var rssValues = rss
// })

const Rss = ({classn, logo, title, rssappid}) => {
  return (
    <section className={classn}>
    {logo}
    <h1>{title}</h1>
    <rssapp-wall id={rssappid}></rssapp-wall>
  </section>
  )
}

export default Rss
