import './App.css'

function App() {
  return (
    <div className="landing-page">
      {/* Navigation */}
      <nav className="nav">
        <span className="nav__site-name">Site name</span>
        <div className="nav__items">
          <a href="#" className="nav__link">Page</a>
          <a href="#" className="nav__link">Page</a>
          <a href="#" className="nav__link">Page</a>
          <button className="btn btn--primary btn--sm">Button</button>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="hero__copy">
          <div>
            <h1 className="hero__title">Landing page title</h1>
            <p className="hero__subtitle">
              Subheading that sets up context, shares more info about the website, or generally gets people psyched to keep scrolling.
            </p>
          </div>
          <div>
            <button className="btn btn--primary btn--lg">Button</button>
          </div>
        </div>
        <img className="hero__image" src="/assets/hero-image.png" alt="Hero" />
      </section>

      {/* Three Card Section */}
      <section className="three-cards">
        <h2 className="section-heading three-cards__heading">Section heading</h2>
        <div className="three-cards__grid">
          <div className="card">
            <img className="card__image" src="/assets/card-1.png" alt="Card 1" />
            <div>
              <p className="card__title">Subheading</p>
              <p className="card__body">Body text for whatever you'd like to add more to the subheading.</p>
            </div>
          </div>
          <div className="card">
            <img className="card__image" src="/assets/card-2.png" alt="Card 2" />
            <div>
              <p className="card__title">Subheading</p>
              <p className="card__body">Body text for whatever you'd like to expand on the main point.</p>
            </div>
          </div>
          <div className="card">
            <img className="card__image" src="/assets/card-3.png" alt="Card 3" />
            <div>
              <p className="card__title">Subheading</p>
              <p className="card__body">Body text for whatever you'd like to share more.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Split Section */}
      <section className="split-section">
        <div className="split-section__text">
          <h2 className="section-heading split-section__heading">Section heading</h2>
          <div className="split-section__blocks">
            <div className="text-block">
              <p className="text-block__title">Subheading</p>
              <p className="text-block__body">Body text for whatever you'd like to expand on the main point.</p>
            </div>
            <div className="text-block">
              <p className="text-block__title">Subheading</p>
              <p className="text-block__body">Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes.</p>
            </div>
            <div className="text-block">
              <p className="text-block__title">Subheading</p>
              <p className="text-block__body">Body text for whatever you'd like to add more to the main point. It provides details, explanations, and context.</p>
            </div>
          </div>
          <div className="split-section__buttons">
            <button className="btn btn--primary btn--md">Button</button>
            <button className="btn btn--secondary btn--md">Secondary button</button>
          </div>
        </div>
        <img className="split-section__image" src="/assets/split-image.png" alt="Featured" />
      </section>

      {/* Two Card Section */}
      <section className="two-cards">
        <h2 className="section-heading two-cards__heading">Section heading</h2>
        <div className="two-cards__grid">
          <div className="blog-card">
            <img className="blog-card__image" src="/assets/blog-1.png" alt="Blog 1" />
            <div>
              <p className="blog-card__title">Subheading</p>
              <p className="blog-card__body">Body text for whatever you'd like to add more to the subheading.</p>
            </div>
          </div>
          <div className="blog-card">
            <img className="blog-card__image" src="/assets/blog-2.png" alt="Blog 2" />
            <div>
              <p className="blog-card__title">Subheading</p>
              <p className="blog-card__body">Body text for whatever you'd like to expand on the main point.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2 className="section-heading testimonials__heading">Section heading</h2>
        <div className="testimonials__grid">
          <div className="quote-card">
            <p className="quote-card__text">&ldquo;A terrific piece of praise&rdquo;</p>
            <div className="quote-card__author">
              <img className="quote-card__avatar" src="/assets/avatar-1.png" alt="Avatar" />
              <div>
                <p className="quote-card__name">Name</p>
                <p className="quote-card__desc">Description</p>
              </div>
            </div>
          </div>
          <div className="quote-card">
            <p className="quote-card__text">&ldquo;A fantastic bit of feedback&rdquo;</p>
            <div className="quote-card__author">
              <img className="quote-card__avatar" src="/assets/avatar-2.png" alt="Avatar" />
              <div>
                <p className="quote-card__name">Name</p>
                <p className="quote-card__desc">Description</p>
              </div>
            </div>
          </div>
          <div className="quote-card">
            <p className="quote-card__text">&ldquo;A genuinely glowing review&rdquo;</p>
            <div className="quote-card__author">
              <img className="quote-card__avatar" src="/assets/avatar-3.png" alt="Avatar" />
              <div>
                <p className="quote-card__name">Name</p>
                <p className="quote-card__desc">Description</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2 className="section-heading">Section heading</h2>
        <div className="cta-section__buttons">
          <button className="btn btn--primary btn--lg">Button</button>
          <button className="btn btn--secondary btn--lg">Secondary button</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer__top">
          <div>
            <p className="footer__site-name">Site name</p>
          </div>
          <div className="footer__columns">
            <div className="footer__column">
              <span className="footer__column-title">Topic</span>
              <a href="#" className="footer__column-link">Page</a>
              <a href="#" className="footer__column-link">Page</a>
              <a href="#" className="footer__column-link">Page</a>
            </div>
            <div className="footer__column">
              <span className="footer__column-title">Topic</span>
              <a href="#" className="footer__column-link">Page</a>
              <a href="#" className="footer__column-link">Page</a>
              <a href="#" className="footer__column-link">Page</a>
            </div>
            <div className="footer__column">
              <span className="footer__column-title">Topic</span>
              <a href="#" className="footer__column-link">Page</a>
              <a href="#" className="footer__column-link">Page</a>
              <a href="#" className="footer__column-link">Page</a>
            </div>
          </div>
        </div>
        <div className="footer__social">
          <a href="#" className="footer__social-icon" aria-label="GitHub">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.167 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.604-3.369-1.341-3.369-1.341-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>
          </a>
          <a href="#" className="footer__social-icon" aria-label="Twitter">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
          </a>
          <a href="#" className="footer__social-icon" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
          <a href="#" className="footer__social-icon" aria-label="YouTube">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App
