import homeProLogo from '../assets/homepro-logo.png'

function Home() {
  return (
    <section className="hero">
      <img src={homeProLogo} alt="HomePro" className="hero-logo-img" />
      <div className="waitlist-card">
        <p className="waitlist-text">
          We're building the smarter way to care for your home. Join our waitlist and be the first to know when we launch.
        </p>
        <a 
          href="https://tally.so/r/n9kdjE" 
          target="_blank" 
          rel="noopener noreferrer"
          className="submit-button"
        >
          Join Waitlist
        </a>
        <p className="privacy-note">
          We respect your privacy. No spam, ever.
        </p>
      </div>
    </section>
  )
}

export default Home