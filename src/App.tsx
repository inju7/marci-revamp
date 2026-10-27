import { useState } from "react"

const A = "https://img1.wsimg.com/isteam"
const site = `${A}/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e`
const images = {
  hero: `${site}/mtn%20falls%20pond.jpg/:/rs=w:1920,m`,
  marci: `${site}/photo-5db79f9.jpg/:/cr=t:14.07%25,l:0%25,w:100%25,h:66.64%25/rs=w:730,h:730,cg:true`,
  service1: `${A}/stock/12792/:/rs=w:730,h:730,cg:true,m/cr=w:730,h:730`,
  service2: `${A}/stock/43920/:/rs=w:730,h:730,cg:true,m/cr=w:730,h:730`,
  service3: `${A}/stock/kayaJdA/:/rs=w:730,h:730,cg:true,m/cr=w:730,h:730`,
  feature1: `${A}/stock/3395/:/cr=t:11.02%25,l:0%25,w:100%25,h:77.95%25/rs=w:1200,h:600,cg:true`,
  feature2: `${A}/stock/107927/:/rs=w:1200,h:600,cg:true,m/cr=w:1200,h:600`,
  feature3: `${A}/stock/771/:/cr=t:5.36%25,l:1.76%25,w:96.47%25,h:89.29%25/rs=w:1200,h:600,cg:true,m`,
}

const gallery = [
  [images.hero, "Mountain Falls pond and neighborhood"],
  [images.feature1, "Residential property"],
  [images.feature2, "Modern home interior"],
  [images.feature3, "Home exterior"],
  [images.service1, "Residential keys and home"],
  [images.service2, "Commercial real estate"],
] as const

const services = [
  {
    image: images.service1,
    title: "Real Estate Done Right",
    text: "Nervous about your property adventure? Don’t be. Whether you're getting ready to buy or sell your residence, looking at investment properties, or just curious about the markets, our team ensures you get the best experience possible!",
  },
  {
    image: images.service2,
    title: "Commercial & Residential",
    text: "Large or small, condo or mansion, we can find it and get at the price that’s right. Fixer-uppers? Luxury? We can help with all of it! We live, work, and play in this community.",
  },
  {
    image: images.service3,
    title: "Rely on Expertise",
    text: "If you have questions about affordability, credit, and loan options, trust us to connect you with the right people. We make sure you feel confident and educated every step of the way.",
  },
]

function Arrow({ right = false }: { right?: boolean }) {
  return <span aria-hidden="true">{right ? "→" : "←"}</span>
}

export default function App() {
  const [active, setActive] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const move = (step: number) =>
    setActive((active + step + gallery.length) % gallery.length)

  return (
    <div>
      <header className="header">
        <a className="brand" href="#top" aria-label="Marci Metzger Homes home">
          <strong>Marci Metzger</strong>
          <span>Homes</span>
        </a>
        <button
          className="menuButton"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
        >
          <span className="srOnly">Toggle navigation</span>
          <i />
          <i />
          <i />
        </button>
        <nav
          className={menuOpen ? "nav open" : "nav"}
          aria-label="Main navigation"
        >
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#search" onClick={() => setMenuOpen(false)}>Search</a>
          <a href="#gallery" onClick={() => setMenuOpen(false)}>Gallery</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
        <a className="callLink" href="tel:+12069196886">
          Call Marci <span>206.919.6886</span>
        </a>
      </header>

      <main id="top">
        <section
          className="hero"
          style={{ backgroundImage: `url("${images.hero}")` }}
        >
          <div className="heroShade" />
          <div className="heroContent">
            <p className="eyebrow light">The Ridge Realty Group</p>
            <h1>
              Find your place
              <br />
              in Pahrump.
            </h1>
            <p>
              Local expertise, thoughtful guidance, and a personal approach to
              Nevada real estate.
            </p>
            <div className="actions">
              <a className="button primary" href="#search">
                Search homes <span>→</span>
              </a>
              <a className="button ghost" href="tel:+12069196886">
                Call 206.919.6886
              </a>
            </div>
          </div>
          <p className="heroCaption">
            Pahrump, Nevada · Nearly three decades of local expertise
          </p>
        </section>

        <section className="agent section" id="about">
          <div className="agentPortrait">
            <img src={images.marci} alt="Marci Metzger" />
          </div>
          <div className="agentIntro">
            <p className="eyebrow">Your Pahrump Realtor</p>
            <h2>Marci Metzger</h2>
            <p className="role">The Ridge Realty Group</p>
            <a href="tel:+12069196886">206.919.6886</a>
            <p>
              Our team works hard every day to grow and learn, so that we may
              continue to excel in our market. Our clients deserve our best, and
              we want to make sure our best is better every year.
            </p>
          </div>
          <div className="achievements">
            <p className="eyebrow">Proven Results</p>
            <div>
              <strong>Top</strong>
              <span>
                Residential sales
                <br />
                last 5 years
              </span>
            </div>
            <div>
              <strong>90</strong>
              <span>
                Clients helped
                <br />
                in 2021
              </span>
            </div>
            <div>
              <strong>$28.5M</strong>
              <span>
                Closed sales
                <br />
                in 2021
              </span>
            </div>
            <div>
              <strong>~30</strong>
              <span>
                Years of real
                <br />
                estate expertise
              </span>
            </div>
          </div>
        </section>

        <section className="featureSection">
          <div className="sectionHeading">
            <p className="eyebrow">Personal service, proven strategy</p>
            <h2>Real estate, done personally.</h2>
          </div>
          <div className="featureGrid">
            <article>
              <img src={images.feature1} alt="" />
              <p>For sellers</p>
              <h3>Top Residential Sales</h3>
              <span>Last 5 years</span>
            </article>
            <article>
              <img src={images.feature2} alt="" />
              <p>A better strategy</p>
              <h3>Don’t Just List It</h3>
              <span>Get it sold</span>
            </article>
            <article>
              <img src={images.feature3} alt="" />
              <p>Local guidance</p>
              <h3>Guide to Buyers</h3>
              <span>Know the market</span>
            </article>
          </div>
        </section>

        <section className="servicesSection" id="services">
          <div className="sectionHeading">
            <p className="eyebrow light">How we help</p>
            <h2>Our Services</h2>
          </div>
          <div className="serviceGrid">
            {services.map((service, i) => (
              <article key={service.title}>
                <img src={service.image} alt="" />
                <p>0{i + 1}</p>
                <h3>{service.title}</h3>
                <span>{service.text}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="searchSection" id="search">
          <div className="searchIntro">
            <p className="eyebrow light">Search Pahrump properties</p>
            <h2>Find Your Dream Home</h2>
            <p>
              Explore the original listing search criteria. You’ll be taken to
              the live listings page to view current availability.
            </p>
          </div>
          <form
            className="searchForm"
            action="https://marcimetzger.com/listings"
            method="get"
          >
            <label>
              Location
              <input name="location" placeholder="Pahrump, NV" />
            </label>
            <label>
              Type
              <select name="type">
                <option>Any property type</option>
                <option>Residential</option>
                <option>Commercial</option>
                <option>Land</option>
              </select>
            </label>
            <label>
              Sort by
              <select name="sort">
                <option>Newest</option>
                <option>Oldest</option>
                <option>Least Expensive to Most</option>
                <option>Most Expensive to Least</option>
                <option>Bedrooms (Low to High)</option>
                <option>Bedrooms (High to Low)</option>
                <option>Bathrooms (Low to High)</option>
                <option>Bathrooms (High to Low)</option>
              </select>
            </label>
            <label>
              Bedrooms
              <select name="beds">
                <option>Any Number</option>
                <option>Studio</option>
                <option>1+</option>
                <option>2+</option>
                <option>3+</option>
                <option>4+</option>
                <option>5+</option>
                <option>6+</option>
              </select>
            </label>
            <label>
              Baths
              <select name="baths">
                <option>Any Number</option>
                <option>1+</option>
                <option>2+</option>
                <option>3+</option>
                <option>4+</option>
                <option>5+</option>
                <option>6+</option>
              </select>
            </label>
            <label>
              Min Price
              <input
                name="minPrice"
                inputMode="numeric"
                placeholder="$ No minimum"
              />
            </label>
            <label>
              Max Price
              <input
                name="maxPrice"
                inputMode="numeric"
                placeholder="$ No maximum"
              />
            </label>
            <button type="submit">
              Search Now <span>→</span>
            </button>
          </form>
        </section>

        <section className="partners" aria-labelledby="partners-title">
          <p className="eyebrow" id="partners-title">
            Trusted affiliations
          </p>
          <div>
            <img
              src={`${site}/BIG%20CIRCLE%202.png/:/rs=w:200,h:200,cg:true,m/cr=w:200,h:200`}
              alt="The Ridge Realty Group"
            />
            <img
              src={`${site}/Equal%20Housing%20Logo.png/:/rs=w:199,h:200,cg:true`}
              alt="Equal Housing Opportunity"
            />
            <img
              src={`${site}/Realtor%20Pin.jpg/:/rs=w:223,h:200,cg:true`}
              alt="Realtor affiliation"
            />
            <img
              src={`${site}/Chamber.jpg/:/rs=w:200,h:200,cg:true,m/cr=w:200,h:200`}
              alt="Chamber of Commerce"
            />
          </div>
        </section>

        <section className="gallerySection section" id="gallery">
          <div className="sectionHeading side">
            <div>
              <p className="eyebrow">A look at home</p>
              <h2>Photo Gallery</h2>
            </div>
            <p>
              Life and property in the Pahrump Valley, with the mountains always
              on the horizon.
            </p>
          </div>
          <div className="galleryMain">
            <img src={gallery[active][0]} alt={gallery[active][1]} />
            <button
              className="galleryArrow left"
              onClick={() => move(-1)}
              aria-label="Previous image"
            >
              <Arrow />
            </button>
            <button
              className="galleryArrow right"
              onClick={() => move(1)}
              aria-label="Next image"
            >
              <Arrow right />
            </button>
            <span className="counter">
              {String(active + 1).padStart(2, "0")} /{" "}
              {String(gallery.length).padStart(2, "0")}
            </span>
          </div>
          <div className="thumbnails">
            {gallery.map(([src, alt], index) => (
              <button
                className={index === active ? "active" : ""}
                onClick={() => setActive(index)}
                key={src}
                aria-label={`View ${alt}`}
              >
                <img src={src} alt="" />
              </button>
            ))}
          </div>
        </section>

        <section className="contact section" id="contact">
          <div className="contactForm">
            <p className="eyebrow">Start a conversation</p>
            <h2>Call or Visit</h2>
            <form onSubmit={(e) => e.preventDefault()}>
              <label>
                Name
                <input required name="name" />
              </label>
              <label>
                Email
                <input required type="email" name="email" />
              </label>
              <label>
                Message
                <textarea name="message" rows={4} />
              </label>
              <button type="submit">
                Prepare Message <span>→</span>
              </button>
              <small>
                This preview does not send messages. Please call Marci directly
                for immediate assistance.
              </small>
            </form>
          </div>
          <div className="contactInfo">
            <p className="eyebrow">The Ridge Realty Group</p>
            <h3>Marci Metzger</h3>
            <address>
              3190 HW-160, Suite F<br />
              Pahrump, Nevada 89048
              <br />
              United States
            </address>
            <a href="tel:+12069196886">(206) 919-6886</a>
            <hr />
            <h4>Office Hours</h4>
            <p>
              Open daily
              <br />
              <strong>8:00 am – 7:00 pm</strong>
            </p>
            <p>
              Appointments outside office hours available upon request. Just
              call!
            </p>
          </div>
          <a
            className="map"
            href="https://www.google.com/maps/search/?api=1&query=3190+HW-160+Suite+F+Pahrump+NV+89048"
            target="_blank"
            rel="noreferrer"
            aria-label="Get directions to The Ridge Realty Group"
          >
            <div className="mapLines" />
            <span className="mapPin">M</span>
            <div>
              <strong>3190 HW-160</strong>
              <span>Get directions →</span>
            </div>
          </a>
        </section>
      </main>

      <footer>
        <a className="brand footerBrand" href="#top">
          <strong>Marci Metzger</strong>
          <span>Homes</span>
        </a>
        <div className="socials">
          <a href="https://www.facebook.com/" aria-label="Facebook">
            f
          </a>
          <a href="https://www.instagram.com/" aria-label="Instagram">
            ig
          </a>
          <a href="https://www.youtube.com/" aria-label="YouTube">
            yt
          </a>
        </div>
        <p>
          Copyright © 2026 Marci Metzger
          <br />
          All Rights Reserved
        </p>
      </footer>
    </div>
  )
}
