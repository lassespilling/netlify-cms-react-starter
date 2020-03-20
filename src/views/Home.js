import React from 'react'

import Content from '../components/Content'
import PageHeader from '../components/PageHeader'
import Rss from '../components/Rss'
import './Home.scss'
import Icon from '../components/Icon'

export default ({ fields }) => {
  const {
    title,
    subtitle,
    featuredImage,
    hilsen,
    coronaTitle,
    coronaIngress,
  } = fields
  return (
    <main className="Home">
      <section className="Home-grad">
        <PageHeader
          large
          title={title}
          subtitle={subtitle}
          backgroundImage={featuredImage}
        ></PageHeader>
      </section>

      <div className="section">
        <div className="container">
          <div class="hilsen">
            <img
              src="https://scontent.fosl3-2.fna.fbcdn.net/v/t31.0-8/21587068_284587072039973_715123725655290393_o.jpg?_nc_cat=106&_nc_sid=7aed08&_nc_oc=AQmgAxbZvy7r1kEO3Pup_etmIgo9oRonQfX1-pbg91On6IEgAj49Fa_e_vn0Gdwln2QyqLzwmPfNDo3Fqn2QPkVZ&_nc_ht=scontent.fosl3-2.fna&oh=142680ad8833ea83e318eb963eb3582f&oe=5E9BA6A2"
              alt=""
              class="hilsen__img"
            />
            <Content source={hilsen} />
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div class="corona">
            <h1>
              <Content source={coronaTitle} />
            </h1>
            <div className="row">
              <div
                className="col-sm-2"
                style={{ position: 'relative', height: '7rem' }}
              >
                <Icon i="🦠" size="5" pos="absolute" top="-2rem" left="6rem" />
                <Icon i="🔎" size="8" pos="absolute" top="-5rem" />
              </div>
              <div className="col-sm-10 p-5">
                <Content source={coronaIngress} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Rss
        classn="facebook rssfeed"
        title="Facebook - Oasen Søgne"
        rssappid="1HiyaYcJyXrKpUEI"
        logo={
          <svg
            className="rssfeed__logo"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
          </svg>
        }
      />

      <Rss
        classn="instagram rssfeed"
        title="Instagram - Oasen Alive (@oasenalive)"
        rssappid="zDJdX70kW9sxZIzH"
        logo={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        }
      />

      <Rss
        classn="nrk rssfeed"
        title="NRK - Innenriks"
        rssappid="t6uB9REYwScYzOhm"
        logo={
          <svg
            className="rssfeed__logo"
            viewBox="0 0 35 14"
            width="3.500em"
            height="1.400em"
            aria-hidden="true"
            focusable="false"
          >
            <path d="M31.0878023 7.55918018c-.2517074-.42642875-.2661333-.68861697-.02338-1.10029556L34.399462 1h-4.6267395s-2.7797248 4.54205453-3.1597731 5.17316245c-.3764003.63027925-.3601505 1.02273292.0154208 1.67041405C27.0084185 8.49042897 29.7727225 13 29.7727225 13h4.6267395s-3.2751804-5.37353258-3.3116597-5.44081982M21.5941377 13h4.2077247V1h-4.2077247M18.9405537.77010873c-1.3163763 0-2.3817762 1.07539896-2.3817762 2.40310754 0 1.32687533 1.0653999 2.4056073 2.3817762 2.4056073 1.3185428 0 2.3884423-1.07873197 2.3884423-2.4056073 0-1.32770858-1.0698995-2.40310754-2.3884423-2.40310754M12.0635332 13h4.2052375V1h-4.2052375M0 13h4.19744416V1H0M9.50872938 2.92796177C9.29333553 1.82832914 8.33144198 1 7.17852938 1H4.47507953l2.71654925 12h4.56969912L9.50872938 2.92796177z"></path>
          </svg>
        }
      />

      <Rss
        classn="vg rssfeed"
        title="VG - Innenriks"
        rssappid="2rCeSHAP53r1WJ9p"
        logo={
          <svg
            className="rssfeed__logo"
            viewBox="0 0 429.7854 85.709999"
            id="logo"
          >
            <desc>VG Logo</desc>
            <g>
              <path d="m 409.402,85.604 h -154.4 c 0,0 -18.7,1.065 -18.7,-15.648 V 18.748 c 0,-19.907 18.7,-18.696 18.7,-18.696 h 155.993 c 19.127,0 18.79,18.8 18.79,18.8 v 3.136 h -60.956 v -3.425 c 0,0 -0.722,-8.694 -11.128,-8.694 h -47.23 c -12.843,0 -12.498,10.673 -12.498,10.673 v 43.187 c 0,0 -1.431,12.273 11.655,12.273 h 47.618 c 10.79,0 11.835,-10.618 11.835,-10.618 v -16.12 h -34.68 v -9.936 h 95.353 v 28.153 c 0,0 0,18.123 -20.353,18.123 M 73.41,85.71 0,0 H 75.673 L 113.931,57.87 155.205,0 h 74.802 l -74.31,85.71 H 73.41"></path>
            </g>
          </svg>
        }
      />

      <Rss
        classn="aftenposten rssfeed"
        title="Aftenposten - forsiden"
        rssappid="TLxVma5ZLhjwqGzV"
        logo={<img alt="" src="/images/aftenposten_logo.svg" />}
      />
    </main>
  )
}
