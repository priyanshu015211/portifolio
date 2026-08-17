import { NavLink, useLocation, useNavigate } from "react-router-dom";
import "./App.css";

const PROJECTS = {
  "uac-capacity-monitor": {
    number: "01",
    title: "UAC Capacity Monitor",
    kicker: "MACHINE LEARNING · FORECASTING · ANALYTICS",
    intro: "A healthcare analytics and forecasting platform for monitoring operational capacity and predicting future demand.",
    overview: "I built a Streamlit-based analytics product that turns operational data into an interactive capacity-monitoring workflow. The project combines validation, exploratory analysis, machine learning, forecasting and executive-facing summaries in one interface.",
    bullets: [
      "Random Forest and Prophet forecasting models",
      "30 / 60 / 90 day forecasting horizons",
      "Lag and rolling-statistic feature engineering",
      "MAE, RMSE, MAPE and R² evaluation",
      "Capacity stress / relief period analysis",
      "Interactive KPI monitoring and anomaly checks"
    ],
    result: "R² = 0.969",
    stack: "Python · Pandas · NumPy · Scikit-learn · Prophet · Streamlit · Plotly",
    links: [
      { label: "LIVE PROJECT", href: "https://priyanshu-uac-capacity-monitor.streamlit.app/" }
    ]
  },
  "ai-developer-career-intelligence": {
    number: "02",
    title: "AI Developer Career Intelligence Platform",
    kicker: "AI · DEVELOPER TOOLS · PRODUCT",
    intro: "An AI-powered platform that analyzes GitHub repositories to generate developer skill insights, career-readiness scores and personalized recommendations.",
    overview: "The platform is designed as a developer intelligence layer: it reads public GitHub signals, turns them into structured evidence of skills and project quality, and presents that evidence as actionable career guidance.",
    bullets: [
      "GitHub profile and repository analysis",
      "Skill extraction from code and project metadata",
      "Career-readiness scoring",
      "Project quality and coding-pattern insights",
      "Personalized recommendations",
      "React + FastAPI product architecture"
    ],
    result: "CURRENTLY BUILDING",
    stack: "React · FastAPI · PostgreSQL · Python · OpenAI API",
    links: [
      { label: "GITHUB", href: "https://github.com/priyanshu015211" }
    ]
  },
  "aegiscare": {
    number: "03",
    title: "AegisCare",
    kicker: "HEALTHCARE · AI · FULL STACK",
    intro: "An AI-powered healthcare platform focused on improving accessibility through intelligent patient assistance and healthcare management.",
    overview: "AegisCare explores how an AI-first product can reduce friction in healthcare workflows. The project combines a modern frontend, API layer and database architecture around a patient-focused experience.",
    bullets: [
      "AI-assisted healthcare workflow",
      "React frontend and FastAPI backend",
      "PostgreSQL data layer",
      "Patient-focused product experience",
      "API-first application architecture",
      "Healthcare + AI product design"
    ],
    result: "HEALTHCARE × AI",
    stack: "React · FastAPI · PostgreSQL · Python",
    links: [
      { label: "GITHUB", href: "https://github.com/priyanshu015211/AegisCare" }
    ]
  },
  "human-activity-recognition": {
    number: "04",
    title: "Human Activity Recognition",
    kicker: "MACHINE LEARNING · SENSOR DATA",
    intro: "A wearable-sensor classification project that predicts human activity from mobile health data.",
    overview: "I worked with wearable sensor data to build a classification workflow, preparing the data, training a K-Nearest Neighbors model and evaluating it on unseen samples.",
    bullets: [
      "Wearable sensor / mobile health dataset",
      "Feature preparation and exploratory analysis",
      "K-Nearest Neighbors classification",
      "Model evaluation on held-out data",
      "97.11% reported accuracy"
    ],
    result: "97.11% ACCURACY",
    stack: "Python · Pandas · NumPy · Scikit-learn · KNN",
    links: [
      { label: "GITHUB", href: "https://github.com/priyanshu015211/human-behavior-classification" }
    ]
  }
};


function ProjectDetailPage() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const match = pathname.match(/^\/work\/([^/]+)$/);
  const slug = match ? decodeURIComponent(match[1]) : null;
  const project = slug ? PROJECTS[slug] : null;

  if (!project) {
    return (
      <main className="project-detail-page">
        <div className="project-detail-paper">
          <div className="project-nav-actions">
            <button type="button" className="project-collection-link" onClick={() => navigate("/work")}>
              <span aria-hidden="true">←</span> EXPLORE MORE WORK
            </button>
            <button type="button" className="project-desk-link" onClick={() => navigate("/")}>
              DESK ↗
            </button>
          </div>
          <h1>Project not found</h1>
        </div>
      </main>
    );
  }

  return (
      <main className="project-detail-page">
        <div className="project-detail-paper">
          <div className="project-nav-actions">
            <button type="button" className="project-collection-link" onClick={() => navigate("/work")}>
              <span aria-hidden="true">←</span> EXPLORE MORE WORK
            </button>
            <button type="button" className="project-desk-link" onClick={() => navigate("/")}>
              DESK ↗
            </button>
          </div>

          <div className="project-detail-topline">
            <span>{project.number}</span>
            <span>{project.kicker}</span>
          </div>

          <div className="project-detail-title-row">
            <div>
              <p className="project-detail-label">PROJECT FILE</p>
              <h1>{project.title}</h1>
            </div>
            <div className="project-detail-result">{project.result}</div>
          </div>

          <div className="project-detail-grid">
            <article className="project-detail-main">
              <p className="project-detail-intro">{project.intro}</p>

              <section>
                <h2>Overview</h2>
                <p>{project.overview}</p>
              </section>

              <section>
                <h2>What I built</h2>
                <div className="project-detail-list">
                  {project.bullets.map((item) => (
                    <div key={item} className="project-detail-item">
                      <span aria-hidden="true">✳</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </section>
            </article>

            <aside className="project-detail-side">
              <div className="project-note">
                <span>TECH STACK</span>
                <p>{project.stack}</p>
              </div>

              <div className="project-note project-note--accent">
                <span>OUTCOME</span>
                <strong>{project.result}</strong>
              </div>

              <div className="project-detail-links">
                {project.links.map((link) => (
                  <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                    {link.label} <span>↗</span>
                  </a>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </main>

  );
}



function SelectedWorkPage() {
  const navigate = useNavigate();

  return (
    <div className="page work-page">
      <header className="navbar">
        <NavLink to="/" className="logo" aria-label="Back to desk">
          PR.
        </NavLink>
      </header>

      <button
        type="button"
        className="page-back work-page-back"
        onClick={() => navigate("/")}
      >
        ← DESK
      </button>

      <main>
        <section
          id="selected-work"
          className="section projects-section"
        >

          <div className="section-heading">

            <span>02</span>

            <h2>
              <span className="section-highlight section-highlight--green">Selected work</span>
            </h2>

          </div>


          <div className="projects">


            {/* PROJECT 01 */}

            <article className="project project-clickable" role="link" tabIndex="0" onClick={() => navigate("/work/uac-capacity-monitor")} onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); navigate("/work/uac-capacity-monitor"); } }}>

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

                  <button
                    type="button"
                    className="project-link project-open"
                  >
                    <span>Open project</span>
                    <span aria-hidden="true">↗</span>
                  </button>

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

                  <strong className="project-result">30 / 60 / 90 DAY FORECASTS</strong>

                </div>

              </div>

            </article>


            {/* PROJECT 02 */}

            <article className="project project-clickable" role="link" tabIndex="0" onClick={() => navigate("/work/ai-developer-career-intelligence")} onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); navigate("/work/ai-developer-career-intelligence"); } }}>

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

                  <button
                    type="button"
                    className="project-link project-open"
                  >
                    <span>Open project</span>
                    <span aria-hidden="true">↗</span>
                  </button>

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

                  <strong className="project-result">GITHUB · SKILL INTELLIGENCE</strong>

                </div>

              </div>

            </article>


            {/* PROJECT 03 */}

            <article className="project project-clickable" role="link" tabIndex="0" onClick={() => navigate("/work/aegiscare")} onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); navigate("/work/aegiscare"); } }}>

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

                  <button
                    type="button"
                    className="project-link project-open"
                  >
                    <span>Open project</span>
                    <span aria-hidden="true">↗</span>
                  </button>

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

                  <strong className="project-result">EMERGENCY COORDINATION</strong>

                </div>

              </div>

            </article>


            {/* PROJECT 04 */}

            <article className="project project-clickable" role="link" tabIndex="0" onClick={() => navigate("/work/human-activity-recognition")} onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); navigate("/work/human-activity-recognition"); } }}>

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

                  <button
                    type="button"
                    className="project-link project-open"
                  >
                    <span>Open project</span>
                    <span aria-hidden="true">↗</span>
                  </button>

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

                  <strong className="project-result">K-NEAREST NEIGHBORS</strong>

                </div>

              </div>

            </article>

          </div>

        </section>
      </main>
    </div>
  );
}



function DeskPage() {
  const navigate = useNavigate();

  return (
    <div className="page">

      {/* =====================================================
          NAVIGATION
      ===================================================== */}

      <header className="navbar">

        <a href="/" className="logo">
          PR.
        </a>
</header>


      <main id="top">
        <a href="/" className="page-back" aria-label="Back to desk">
          ← DESK
        </a>

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

<section className="notebook-section" aria-label="Portfolio sections">

          <div className="notebook-heading">
            <span className="notebook-kicker">OPEN A CHAPTER</span>
            <p>Click a book to explore.</p>
          </div>

          <div className="book-shelf">

            <a href="#about" className="portfolio-book book-blue" aria-label="Open About Me">
              <div className="book">
                <div className="book-pages">
                  <span>ABOUT</span>
                  <small>01</small>
                </div>
                <div className="book-spine">
                  <span>ABOUT ME</span>
                </div>
                <div className="book-cover">
                  <div className="spirals" aria-hidden="true">
                    <i></i><i></i><i></i><i></i><i></i>
                  </div>
                  <div className="cover-content">
                    <small>01</small>
                    <strong>About<br />Me</strong>
                    <em>notes on me</em>
                  </div>
                </div>
              </div>
            </a>

            <NavLink to="/work" className="portfolio-book book-cream" aria-label="Open Selected Work">
              <div className="book">
                <div className="book-pages">
                  <span>WORK</span>
                  <small>02</small>
                </div>
                <div className="book-spine">
                  <span>WORK</span>
                </div>
                <div className="book-cover">
                  <div className="spirals" aria-hidden="true">
                    <i></i><i></i><i></i><i></i><i></i>
                  </div>
                  <div className="cover-content">
                    <small>02</small>
                    <strong>Selected<br />Work</strong>
                    <em>things I built</em>
                  </div>
                </div>
              </div>
            </NavLink>

            <a href="#skills" className="portfolio-book book-green" aria-label="Open Skills">
              <div className="book">
                <div className="book-pages">
                  <span>SKILLS</span>
                  <small>03</small>
                </div>
                <div className="book-spine">
                  <span>SKILLS</span>
                </div>
                <div className="book-cover">
                  <div className="spirals" aria-hidden="true">
                    <i></i><i></i><i></i><i></i><i></i>
                  </div>
                  <div className="cover-content">
                    <small>03</small>
                    <strong>My<br />Skills</strong>
                    <em>tools &amp; systems</em>
                  </div>
                </div>
              </div>
            </a>

            <a href="#experience" className="portfolio-book book-yellow" aria-label="Open Experience">
              <div className="book">
                <div className="book-pages">
                  <span>EXPERIENCE</span>
                  <small>04</small>
                </div>
                <div className="book-spine">
                  <span>EXPERIENCE</span>
                </div>
                <div className="book-cover">
                  <div className="spirals" aria-hidden="true">
                    <i></i><i></i><i></i><i></i><i></i>
                  </div>
                  <div className="cover-content">
                    <small>04</small>
                    <strong>Experience<br />Wins</strong>
                    <em>what I've done</em>
                  </div>
                </div>
              </div>
            </a>

            <a href="#contact" className="portfolio-book book-red" aria-label="Open Contact">
              <div className="book">
                <div className="book-pages">
                  <span>CONTACT</span>
                  <small>05</small>
                </div>
                <div className="book-spine">
                  <span>CONTACT</span>
                </div>
                <div className="book-cover">
                  <div className="spirals" aria-hidden="true">
                    <i></i><i></i><i></i><i></i><i></i>
                  </div>
                  <div className="cover-content">
                    <small>05</small>
                    <strong>Let's<br />Talk</strong>
                    <em>find me here</em>
                  </div>
                </div>
              </div>
            </a>

          </div>

          <div className="book-instruction">
            <span>CHOOSE A CHAPTER</span>
            <span>·</span>
            <span>CLICK TO EXPLORE</span>
          </div>

        </section>

          <p className="hero-description">
            I build AI systems, machine learning applications and
            software products that turn ideas into working products.
          </p>

          <div className="hero-buttons">

            <NavLink
              to="/work"
              className="hero-action hero-action--primary"
            >
              SEE WHAT I BUILD →
            </NavLink>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="hero-action hero-action--resume"
            >
              RESUME ↗
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
              <span className="section-highlight section-highlight--blue">About me</span>
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
              <span className="section-highlight section-highlight--lavender">Skills</span>
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
      <span className="section-highlight section-highlight--amber">Experience & Achievement</span>
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
      <span className="section-highlight section-highlight--rose">Let's build something.</span>
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

    </div>
  );
}


function App() {
  const { pathname } = useLocation();

  if (pathname === "/work") {
    return <SelectedWorkPage />;
  }

  if (pathname.startsWith("/work/")) {
    return <ProjectDetailPage />;
  }

  return <DeskPage />;
}

export default App;
