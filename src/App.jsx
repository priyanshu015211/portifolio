import "./App.css";
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <div className="page">

      {/* =====================================================
          NAVIGATION
      ===================================================== */}

      <header className="navbar">

        <a href="#top" className="logo">
          PR.
        </a>

        <nav>
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>

      </header>


      <main id="top">

        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="hero">

          <p className="eyebrow">
            AI / ML ENGINEERING · SOFTWARE DEVELOPMENT
          </p>

          <h1>
            Priyanshu
            <span>Bhagat.</span>
          </h1>

          <p className="hero-description">
            I build AI systems, machine learning applications and
            software products that turn ideas into working products.
          </p>

          <div className="hero-buttons">

            <a
              href="#work"
              className="view-work-btn"
            >
              View my work →
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="button secondary"
            >
              Resume
            </a>

          </div>


          <div className="hero-details">

            <span>
              Bengaluru, India
            </span>

            <span>
              AI / ML Student
            </span>

            <div className="social-buttons">

              <a
                href="https://www.linkedin.com/in/priyanshu-bhagat-92238239a/"
                target="_blank"
                rel="noreferrer"
                className="social-button"
                aria-label="LinkedIn"
              >
                <img
                  src="/linkedin.png"
                  alt="LinkedIn"
                />
              </a>

              <a
                href="https://github.com/priyanshu015211"
                target="_blank"
                rel="noreferrer"
                className="social-button"
                aria-label="GitHub"
              >
                <img
                  src="/github.png"
                  alt="GitHub"
                />
              </a>

            </div>

          </div>

        </section>


        {/* =====================================================
            ABOUT
        ===================================================== */}

        <section
          id="about"
          className="section about-section"
        >

          <div className="section-heading">

            <span>01</span>

            <h2>
              About me
            </h2>

          </div>


          <div className="about-layout">

            {/* LEFT */}

            <div className="about-main">

              <p className="about-intro">
                I'm a B.Tech Artificial Intelligence & Machine
                Learning student interested in building practical
                AI and software systems.
              </p>

              <p>
                My work sits between machine learning, backend
                engineering and product development. I enjoy
                taking an idea from a rough concept to something
                people can actually use.
              </p>

              <p>
                I'm currently focused on AI/ML engineering,
                backend development and generative AI, while
                continuing to strengthen my foundations in
                software development.
              </p>

            </div>


            {/* RIGHT */}

            <div className="about-side">

              <div className="about-detail">

                <span className="detail-label">
                  FOCUS
                </span>

                <span className="detail-value">
                  AI / ML · GenAI
                </span>

              </div>


              <div className="about-detail">

                <span className="detail-label">
                  EDUCATION
                </span>

                <span className="detail-value">
                  B.Tech · AIML · Present
                </span>

              </div>


              <div className="about-detail">

                <span className="detail-label">
                  BASED IN
                </span>

                <span className="detail-value">
                  Bengaluru, India
                </span>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            SELECTED WORK
        ===================================================== */}

        <section
          id="work"
          className="section projects-section"
        >

          <div className="section-heading">

            <span>02</span>

            <h2>
              Selected work
            </h2>

          </div>


          <div className="projects">


            {/* PROJECT 01 */}

            <article className="project">

              <div className="project-meta">

                <span className="project-number">
                  01
                </span>

                <span className="project-year">
                  2026
                </span>

              </div>


              <div className="project-content">

                <div className="project-title-row">

                  <h3>
                    UAC Capacity Monitor
                  </h3>

                  <a
                    href="https://priyanshu-uac-capacity-monitor.streamlit.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    Live project ↗
                  </a>

                </div>


                <p className="project-description">
                  A healthcare analytics and forecasting platform
                  for monitoring operational capacity and predicting
                  future demand.
                </p>


                <div className="project-bottom">

                  <div className="project-tags">

                    <span>Python</span>
                    <span>Streamlit</span>
                    <span>Scikit-learn</span>
                    <span>Prophet</span>

                  </div>

                  <strong className="project-result">
                    R² = 0.969
                  </strong>

                </div>

              </div>

            </article>


            {/* PROJECT 02 */}

            <article className="project">

              <div className="project-meta">

                <span className="project-number">
                  02
                </span>

                <span className="project-year ongoing">
                  ONGOING
                </span>

              </div>


              <div className="project-content">

                <div className="project-title-row">

                  <h3>
                    AI Developer Career Intelligence Platform
                  </h3>

                  <a
                    href="https://github.com/priyanshu015211"
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    GitHub ↗
                  </a>

                </div>


                <p className="project-description">
                  An AI-powered platform that analyzes GitHub
                  repositories to generate developer skill insights,
                  career-readiness scores and personalized
                  recommendations.
                </p>


                <div className="project-bottom">

                  <div className="project-tags">

                    <span>React</span>
                    <span>FastAPI</span>
                    <span>PostgreSQL</span>
                    <span>OpenAI API</span>

                  </div>

                  <strong className="project-result">
                    Currently building
                  </strong>

                </div>

              </div>

            </article>


            {/* PROJECT 03 */}

            <article className="project">

              <div className="project-meta">

                <span className="project-number">
                  03
                </span>

                <span className="project-year">
                  2026
                </span>

              </div>


              <div className="project-content">

                <div className="project-title-row">

                  <h3>
                    AegisCare
                  </h3>

                  <a
                    href="https://github.com/priyanshu015211/AegisCare"
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    GitHub ↗
                  </a>

                </div>


                <p className="project-description">
                  An AI-powered healthcare platform focused on
                  improving accessibility through intelligent
                  patient assistance and healthcare management.
                </p>


                <div className="project-bottom">

                  <div className="project-tags">

                    <span>React</span>
                    <span>FastAPI</span>
                    <span>PostgreSQL</span>
                    <span>Python</span>

                  </div>

                  <strong className="project-result">
                    Healthcare × AI
                  </strong>

                </div>

              </div>

            </article>


            {/* PROJECT 04 */}

            <article className="project">

              <div className="project-meta">

                <span className="project-number">
                  04
                </span>

                <span className="project-year">
                  2025
                </span>

              </div>


              <div className="project-content">

                <div className="project-title-row">

                  <h3>
                    Human Activity Recognition
                  </h3>

                  <a
                    href="https://github.com/priyanshu015211/human-behavior-classification"
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    GitHub ↗
                  </a>

                </div>


                <p className="project-description">
                  A machine learning system that classifies human
                  activities using wearable and mobile health
                  sensor data.
                </p>


                <div className="project-bottom">

                  <div className="project-tags">

                    <span>Python</span>
                    <span>Scikit-learn</span>
                    <span>Pandas</span>
                    <span>Machine Learning</span>

                  </div>

                  <strong className="project-result">
                    97.11% accuracy
                  </strong>

                </div>

              </div>

            </article>

          </div>

        </section>


        {/* =====================================================
            SKILLS
        ===================================================== */}

        <section
          id="skills"
          className="section skills-section"
        >

          <div className="section-heading">

            <span>03</span>

            <h2>
              Skills
            </h2>

          </div>


          <div className="skills-container">


            {/* LEFT DOODLE */}

            <div className="skills-doodle doodle-left">

              <img
                src="/laptop.jpg"
                alt=""
              />

            </div>


            {/* SKILLS */}

            <div className="skills-content">


              {/* LANGUAGES */}

              <div className="skill-group">

                <h3>
                  Languages
                </h3>

                <div className="skill-tags">

                  <span>Python</span>
                  <span>C</span>
                  <span>C++</span>
                  <span>SQL</span>

                </div>

              </div>


              {/* FRAMEWORKS */}

              <div className="skill-group">

                <h3>
                  Frameworks & Libraries
                </h3>

                <div className="skill-tags">

                  <span>FastAPI</span>
                  <span>React</span>
                  <span>TensorFlow</span>
                  <span>Scikit-learn</span>
                  <span>Streamlit</span>
                  <span>Pandas</span>
                  <span>NumPy</span>

                </div>

              </div>


              {/* DATABASES */}

              <div className="skill-group">

                <h3>
                  Databases
                </h3>

                <div className="skill-tags">

                  <span>PostgreSQL</span>
                  <span>MySQL</span>

                </div>

              </div>


              {/* TOOLS */}

              <div className="skill-group">

                <h3>
                  Tools
                </h3>

                <div className="skill-tags">

                  <span>Git</span>
                  <span>GitHub</span>
                  <span>Linux</span>
                  <span>VS Code</span>
                  <span>Jupyter</span>
                  <span>Vercel</span>
                  <span>Render</span>

                </div>

              </div>


              {/* CORE CONCEPTS */}

              <div className="skill-group">

                <h3>
                  Core Concepts
                </h3>

                <div className="skill-tags">

                  <span>Machine Learning</span>
                  <span>Time Series Forecasting</span>
                  <span>NLP</span>
                  <span>REST APIs</span>
                  <span>OOP</span>
                  <span>DSA</span>
                  <span>DBMS</span>

                </div>

              </div>

            </div>


            {/* RIGHT DOODLE */}

            <div className="skills-doodle doodle-right">

              <img
                src="/headphone.jpg"
                alt=""
              />

            </div>

          </div>

        </section>


        {/* =====================================================
    EXPERIENCE & ACHIEVEMENT
===================================================== */}

<section
  id="experience"
  className="section achievement-section"
>

  <div className="section-heading">

    <span>04</span>

    <h2>
      Experience & Achievement
    </h2>

  </div>


  <div className="achievement-list">


    {/* SAMSUNG ANVESHANA */}

    <article className="achievement-item">

      <div className="achievement-meta">

        <span>
          FINALIST
        </span>

        <span>
          2026
        </span>

      </div>


      <div className="achievement-main">

        <h3>
          Samsung ANVESHANA
        </h3>

        <p className="achievement-subtitle">
          Solve for Tomorrow
        </p>

        <p className="achievement-description">
          National Ideathon finalist with SafeHalo,
          a personal safety wearable concept.
        </p>

      </div>

    </article>


    {/* UNIFIED MENTOR */}

    <article className="achievement-item">

      <div className="achievement-meta">

        <span>
          MACHINE LEARNING
        </span>

        <span>
          MAR — JUN 2026
        </span>

      </div>


      <div className="achievement-main">

        <h3>
          Unified Mentor
        </h3>

        <p className="achievement-subtitle">
          Structured Training & Internship Program
        </p>

        <p className="achievement-description">
          Completed a structured machine learning
          training/internship program and developed
          UAC Capacity Monitor as the submitted project.
        </p>

      </div>

    </article>


    {/* GIRLSCRIPT SUMMER OF CODE */}

    <article className="achievement-item">

      <div className="achievement-meta">

        <span>
          OPEN SOURCE
        </span>

        <span>
          MAY — AUG 2026
        </span>

      </div>


      <div className="achievement-main">

        <h3>
          GirlScript Summer of Code ’26
        </h3>

        <p className="achievement-subtitle">
          Open Source Contributor · AI / Agents Track · Top 2 %
        </p>

        <p className="achievement-description">
          Contributing to open-source projects through
          collaborative GitHub development and
          community-driven contributions.
        </p>

      </div>

    </article>


  </div>

</section>


        {/* =====================================================
    CONTACT
===================================================== */}

<section
  id="contact"
  className="section contact-section"
>

  <div className="section-heading">
    <span>05</span>

    <h2>
      Let's build something.
    </h2>
  </div>


  <div className="contact-content">

    <p className="contact-intro">
      I'm interested in AI/ML engineering, software development
      and opportunities where I can build, learn and contribute.
    </p>


    <div className="contact-links">

      <a
        href="mailto:priyanshu0152@gmail.com"
        className="contact-link"
      >
        Email ↗
      </a>


      <a
        href="https://github.com/priyanshu015211"
        target="_blank"
        rel="noreferrer"
        className="contact-link"
      >
        GitHub ↗
      </a>


      <a
        href="https://www.linkedin.com/in/priyanshu-bhagat-92238239a/"
        target="_blank"
        rel="noreferrer"
        className="contact-link"
      >
        LinkedIn ↗
      </a>  

    </div>

    <p className="contact-closing">
      Always happy to connect, explore ideas, and collaborate.
    </p>

  </div>
  

</section>

      </main>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer>

        <span>
          © 2026 Priyanshu Bhagat
        </span>

        <span>
          AI / ML · Software Development
        </span>

      </footer>

      <Analytics />
    </div>
  );
}

export default App;