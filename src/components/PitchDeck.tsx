import { useState, useEffect, useCallback, useMemo } from 'react'
import homeProLogo from '../assets/homepro-logo.png'

function PitchDeck() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [currentSituation, setCurrentSituation] = useState(0)

  const situations = useMemo(() => [
    {
      title: "Situation 1: Leaking Kitchen Filter Tap",
      content: "Vikrant's kitchen filter tap started leaking. A plumber suggested replacing the whole tap — the bill would have been over $1,000. Instead, Vikrant searched around, found a simple $1 airspray tip, and fixed it himself."
    },
    {
      title: "Situation 2: Heated Toilet Seat Install",
      content: "Vikrant bought a $250 heated toilet seat. The plumber quoted $350 and a week's wait to install a new power outlet. Vikrant found a $15 extension cord solution and had it working the same day."
    },
    {
      title: "Situation 3: Small Crack in the Wall",
      content: "When Vikrant noticed a small crack, his first instinct was to delay and bundle it with future repairs. But on closer review, he realized it was near the foundation and, with rainy season coming, had it fixed right away — avoiding bigger damage."
    },
    {
      title: "Situation 4: Suspicious Water Bill",
      content: "Vikrant was out of town for two weeks but still got the same high water bill. The plumber's default fix was a paid leak inspection. Instead, Vikrant learned how to check for leaks himself — saving time and money."
    },
    {
      title: "Situation 5: Gas Smell in the Kitchen",
      content: "One evening Vikrant smelled gas in the kitchen. It took him 20 stressful minutes to find the gas shut‑off valve and figure out how to turn it off. In that moment, he wished for an app that could instantly show exactly where the valve was and how to operate it."
    }
  ], [])

  const nextSituation = useCallback(() => {
    setCurrentSituation((prev) => (prev + 1) % situations.length)
  }, [situations.length])

  const prevSituation = useCallback(() => {
    setCurrentSituation((prev) => (prev - 1 + situations.length) % situations.length)
  }, [situations.length])

  const slides = useMemo(() => [
    // Title Slide
    {
      title: "Home Pro",
      content: (
        <div className="pitch-slide title-slide">
          <img src={homeProLogo} alt="HomePro" className="pitch-logo" />
          <h1>Home Pro</h1>
          <p>A Friendly Expert, Always Here to Help</p>
        </div>
      )
    },
    
    // Problem Slide
    {
      title: "Problem",
      content: (
        <div className="pitch-slide">
          <h2>Problem</h2>
          <p>Home is the biggest investment most people will ever make — yet it's often overlooked, poorly maintained, and left vulnerable to costly surprises.</p>
        </div>
      )
    },

    // Expert Guidance Gaps
    {
      title: "Expert Guidance Gaps",
      content: (
        <div className="pitch-slide">
          <h3>Expert Guidance Gaps</h3>
          <ul>
            <li>Homeowners <strong>overpay for repairs</strong> because they lack <strong>trusted expert guidance</strong>.</li>
            <li>Most are <strong>reactive</strong> — fixing problems only <strong>after</strong> they break, instead of preventing them.</li>
            <li>Routine maintenance is <strong>delayed</strong>, turning small issues into <strong>major, costly problems</strong>.</li>
            <li>Many don't realize <strong>home care could be easier</strong> with the right support.</li>
          </ul>
          <h3>Information Gaps</h3>
          <ul>
            <li>Homeowners often <strong>can't find essential information</strong> — like where the <strong>water shut‑off valve</strong> is, how to manage the <strong>furnace</strong>, or how to track <strong>past and upcoming repairs</strong>.</li>
          </ul>
        </div>
      )
    },

    // Example Situations - Animated individual slides
    {
      title: "Real-Life Situations",
      content: (
        <div className="pitch-slide situations-slide">
          <div className="situations-animated-container">
            <div 
              className="situation-item animated-situation"
              key={currentSituation}
            >
              <h2>{situations[currentSituation].title}</h2>
              <p>{situations[currentSituation].content}</p>
            </div>
            
            <div className="situation-navigation">
              <div className="situation-counter">
                {currentSituation + 1} / {situations.length}
              </div>
              <div className="situation-nav-controls">
                <button 
                  className="pitch-nav-btn pitch-up" 
                  onClick={prevSituation}
                  aria-label="Previous situation"
                >
                  ↑
                </button>
                <button 
                  className="pitch-nav-btn pitch-down" 
                  onClick={nextSituation}
                  aria-label="Next situation"
                >
                  ↓
                </button>
              </div>
              <div className="situation-nav-hint">
                <span className="desktop-hint">Use ↑↓ arrows or buttons to navigate situations</span>
                <span className="mobile-hint">Tap buttons to navigate situations</span>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Ground Reality
    {
      title: "Ground Reality",
      content: (
        <div className="pitch-slide">
          <h2>Ground Reality</h2>
          <p>The home maintenance and repair market is broken.</p>
          <p>It's built to serve <strong>contractors and insurance providers</strong>, not homeowners. The homeowner — who ultimately pays — often has the <strong>least say</strong> in decisions, left <strong>guessing and overpaying</strong> because <strong>no expert is working solely on their behalf.</strong></p>
        </div>
      )
    },

    // Solution Overview
    {
      title: "Meet HomePro",
      content: (
        <div className="pitch-slide">
          <h2>Meet HomePro – Your Home's Primary Care Partner</h2>
          <p>Just like a primary care physician looks after your health, HomePro gives your home the same care — combining human expertise, AI support, and easy access to information.</p>
        </div>
      )
    },

    // Combined Pillars
    {
      title: "Our Solution: Two Pillars",
      content: (
        <div className="pitch-slide pillars-slide">
          <div className="pillars-container">
            <div className="pillar-item">
              <h2>Pillar 1: Your Dedicated Expert</h2>
              <ul>
                <li>A trusted industry expert for every homeowner — your single point of contact</li>
                <li>AI-assisted & supported by a network of other specialists</li>
                <li>Guides you on when to DIY, when to wait, and when to call a contractor</li>
                <li>Doesn't replace contractors — helps you call the right one at the right time</li>
              </ul>
            </div>

            <div className="pillar-divider">⸻</div>

            <div className="pillar-item">
              <h2>Pillar 2: The HomePro App</h2>
              <ul>
                <li>A simple way to chat with your dedicated expert</li>
                <li>Stores inspection reports, warranties, and maintenance history</li>
                <li>Instantly shows critical info — like gas or water shut-off locations</li>
                <li>AI-powered insights help you stay proactive, not reactive</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },

    // Market Opportunity
    {
      title: "Market Opportunity",
      content: (
        <div className="pitch-slide">
          <h2>Market Opportunity</h2>
          <ul>
            <li>$500B+ spent each year on home repairs & improvements in the U.S.</li>
            <li>Apps exist for finding contractors or managing insurance — but nothing addresses the homeowner's everyday struggles.</li>
            <li>Homeowners have no "primary care" advocate for their home.</li>
            <li><strong>HomePro fills this gap</strong>, becoming the trusted partner every homeowner needs.</li>
          </ul>
        </div>
      )
    },

    // Revenue Model
    {
      title: "Revenue Model",
      content: (
        <div className="pitch-slide">
          <h2>Revenue Model</h2>
          <ul>
            <li><strong>Subscription:</strong> $30–$70/month per homeowner</li>
            <li>Provides ongoing access to a dedicated expert and the HomePro app</li>
            <li><strong>Value-added services:</strong> seasonal prep, maintenance bundles, emergency support</li>
            <li>Future opportunities for preferred contractor partnerships & revenue share</li>
          </ul>
        </div>
      )
    },

    // Contact
    {
      title: "Let's Talk",
      content: (
        <div className="pitch-slide">
          <h2>Let's Talk</h2>
          <p><strong>Raising an angel round to scale HomePro and bring the 'primary care for your home' vision to life.</strong></p>
          <p>📧 Email: vikrant.thakur@gmail.com</p>
          <p>🔗 LinkedIn: https://www.linkedin.com/in/vkrntsngh/</p>
          <p>🔗 Twitter: https://x.com/vikkrraant</p>
          <p><em>Every home deserves a trusted advocate. Let's build it together.</em></p>
        </div>
      )
    }
  ], [currentSituation, situations, nextSituation, prevSituation])

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setCurrentSituation(0) // Reset situation when changing slides
  }, [slides.length])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setCurrentSituation(0) // Reset situation when changing slides
  }, [slides.length])

  const isSituationsSlide = useCallback(() => {
    return slides[currentSlide].title === "Real-Life Situations"
  }, [slides, currentSlide])

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (isSituationsSlide()) {
        // On situations slide, handle up/down for situations, left/right for slides
        if (e.key === 'ArrowDown') {
          e.preventDefault()
          nextSituation()
        } else if (e.key === 'ArrowUp') {
          e.preventDefault()
          prevSituation()
        } else if (e.key === 'ArrowRight' || e.key === ' ') {
          nextSlide()
        } else if (e.key === 'ArrowLeft') {
          prevSlide()
        }
      } else {
        // On other slides, normal navigation
        if (e.key === 'ArrowRight' || e.key === ' ') {
          nextSlide()
        } else if (e.key === 'ArrowLeft') {
          prevSlide()
        }
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [currentSlide, isSituationsSlide, nextSituation, prevSituation, nextSlide, prevSlide])

  return (
    <div className="pitch-deck">
      <div className="pitch-container">
        {slides[currentSlide].content}
      </div>
      
      <div className="pitch-controls">
        <button onClick={prevSlide} className="pitch-nav-btn pitch-prev">‹</button>
        <span className="pitch-counter">{currentSlide + 1} / {slides.length}</span>
        <button onClick={nextSlide} className="pitch-nav-btn pitch-next">›</button>
      </div>

      <div className="pitch-progress">
        <div 
          className="pitch-progress-bar" 
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>
    </div>
  )
}

export default PitchDeck