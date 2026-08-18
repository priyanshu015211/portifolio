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


const EXPERIENCE_DETAILS = {
  "samsung-anveshana": {
    number: "01",
    type: "NATIONAL IDEATHON",
    title: "Samsung ANVESHANA",
    subtitle: "Solve for Tomorrow",
    date: "2026",
    label: "FINALIST",
    color: "amber",
    intro: "Reached the national ideathon finals with SafeHalo, a discreet personal-safety wearable concept designed around practical emergency response.",
    overview: "SafeHalo was designed as a wearable safety product that could blend into everyday life while still providing useful emergency functionality. The concept brought together location tracking, cellular communication, indoor identification and motion sensing inside a discreet form factor.",
    highlights: [
      "Designed the SafeHalo product concept and interaction flow",
      "Worked with ESP32, GPS, GSM, RFID and motion-sensing components",
      "Explored tamper detection and emergency activation workflows",
      "Focused on balancing technical feasibility with everyday usability",
      "Presented the concept as part of the national ideathon"
    ],
    stack: "ESP32 · NEO-6M GPS · SIM900L GSM · RFID · MPU6050",
    outcome: "Samsung ANVESHANA National Ideathon Finalist",
    links: []
  },
  "unified-mentor": {
    number: "02",
    type: "MACHINE LEARNING · INTERNSHIP",
    title: "Unified Mentor",
    subtitle: "Structured Training & Internship Program",
    date: "MAR — JUN 2026",
    label: "INTERNSHIP",
    color: "cream",
    intro: "Completed a structured machine-learning training and internship program and developed UAC Capacity Monitor as the submitted project.",
    overview: "The program gave me a practical environment to work through an end-to-end machine-learning product: preparing operational data, engineering features, evaluating models, forecasting future demand and presenting the results through an interactive dashboard.",
    highlights: [
      "Built the UAC Capacity Monitor analytics dashboard",
      "Used Random Forest and Prophet forecasting models",
      "Created 30 / 60 / 90 day forecasting horizons",
      "Implemented lag and rolling-statistic feature engineering",
      "Evaluated models with MAE, RMSE, MAPE and R²",
      "Built the final product with Streamlit and Plotly"
    ],
    stack: "Python · Pandas · NumPy · Scikit-learn · Prophet · Streamlit · Plotly",
    outcome: "UAC Capacity Monitor · R² = 0.969",
    links: [
      { label: "LIVE PROJECT", href: "https://priyanshu-uac-capacity-monitor.streamlit.app/" }
    ]
  },
  "girlscript-summer-of-code": {
    number: "03",
    type: "OPEN SOURCE · COMMUNITY",
    title: "GirlScript Summer of Code ’26",
    subtitle: "Open Source Contributor · AI / Agents Track",
    date: "MAY — AUG 2026",
    label: "TOP 2%",
    color: "rose",
    intro: "Contributing to open-source projects through collaborative GitHub development, issue-based work and community-driven contributions.",
    overview: "This experience is centered on building in public: understanding existing codebases, collaborating through GitHub, working from issues and pull requests, and learning how software evolves through community contribution.",
    highlights: [
      "Worked with collaborative GitHub workflows",
      "Contributed through issue-driven development",
      "Explored AI / Agents related open-source work",
      "Practiced reading and navigating unfamiliar repositories",
      "Built experience with community-based engineering"
    ],
    stack: "Git · GitHub · Open Source · AI / Agents · Collaboration",
    outcome: "GirlScript Summer of Code ’26 · Top 2%",
    links: []
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




function ExperienceNotes({ compact = false }) {
  const navigate = useNavigate();

  return (
    <div className={compact ? "career-archive career-archive--compact" : "career-archive"}>
      <button type="button" className="career-artifact career-artifact--badge"
        onClick={() => navigate("/experience/samsung-anveshana")}
        aria-label="Open Samsung ANVESHANA experience">
        <span className="career-artifact__pushpin" aria-hidden="true" />
        <div className="career-artifact__top"><span>SAMSUNG</span><span>01 / 03</span></div>
        <div className="career-artifact__main">
          <span className="career-artifact__eyebrow">ANVESHANA</span>
          <h3>FINALE</h3>
          <strong>SOLVE FOR TOMORROW</strong>
        </div>
        <div className="career-artifact__stamp">FINALIST</div>
        <div className="career-artifact__bottom">
          <span>2026</span><span>SAFEHALO · IOT PRODUCT DESIGN</span><span>↗</span>
        </div>
      </button>

      <button type="button" className="career-artifact career-artifact--file"
        onClick={() => navigate("/experience/unified-mentor")}
        aria-label="Open Unified Mentor experience">
        <span className="career-artifact__clip" aria-hidden="true" />
        <div className="career-artifact__file-paper">
          <div className="career-artifact__top"><span>TRAINING FILE</span><span>02 / 03</span></div>
          <div className="career-artifact__main">
            <span className="career-artifact__eyebrow">MACHINE LEARNING</span>
            <h3>UNIFIED<br />MENTOR</h3>
            <strong>STRUCTURED TRAINING &amp; INTERNSHIP PROGRAM</strong>
          </div>
          <div className="career-artifact__line"><span>MAR — JUN 2026</span><span>UAC CAPACITY MONITOR</span></div>
          <div className="career-artifact__bottom"><span>PYTHON · FORECASTING</span><span>↗</span></div>
        </div>
      </button>

      <button type="button" className="career-artifact career-artifact--open-source"
        onClick={() => navigate("/experience/girlscript-summer-of-code")}
        aria-label="Open GirlScript Summer of Code experience">
        <span className="career-artifact__tape career-artifact__tape--gssoc" aria-hidden="true" />
        <div className="career-artifact__contribution">
          <div className="career-artifact__top"><span>OPEN SOURCE</span><span>03 / 03</span></div>
          <div className="career-artifact__main">
            <span className="career-artifact__eyebrow">COMMUNITY · CONTRIBUTION</span>
            <h3>GSSOC ’26</h3>
            <strong>AI / AGENTS TRACK</strong>
          </div>
          <div className="career-artifact__commit"><span>PR</span><span>ISSUE</span><span>COLLAB</span></div>
          <div className="career-artifact__stamp career-artifact__stamp--round">TOP 2%</div>
          <div className="career-artifact__bottom"><span>GITHUB · OPEN SOURCE</span><span>↗</span></div>
        </div>
      </button>
    </div>
  );
}

function ExperienceDetailPage() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const match = pathname.match(/^\/experience\/([^/]+)$/);
  const slug = match ? decodeURIComponent(match[1]) : null;
  const item = slug ? EXPERIENCE_DETAILS[slug] : null;

  if (!item) {
    return (
      <main className="experience-detail-page">
        <div className="experience-detail-paper">
          <div className="experience-detail-nav">
            <button type="button" onClick={() => navigate("/experience")}>← EXPLORE EXPERIENCE</button>
            <button type="button" onClick={() => navigate("/")}>DESK ↗</button>
          </div>
          <h1>Experience not found</h1>
        </div>
      </main>
    );
  }

  return (
    <main className="experience-detail-page">
      <div className="experience-detail-paper">
        <div className="experience-detail-nav">
          <button type="button" onClick={() => navigate("/experience")}>← EXPLORE EXPERIENCE</button>
          <button type="button" onClick={() => navigate("/")}>DESK ↗</button>
        </div>

        <div className="experience-detail-topline">
          <span>{item.number}</span>
          <span>{item.type}</span>
        </div>

        <div className={`experience-detail-title experience-detail-title--${item.color}`}>
          <p className="project-file-label">{item.label}</p>
          <h1>{item.title}</h1>
          <h2>{item.subtitle}</h2>
          <span>{item.date}</span>
        </div>

        <div className="experience-detail-grid">
          <article className="experience-detail-main">
            <p className="experience-detail-intro">{item.intro}</p>

            <section>
              <h2>Overview</h2>
              <p>{item.overview}</p>
            </section>

            <section>
              <h2>What I worked on</h2>
              <div className="experience-detail-list">
                {item.highlights.map((point) => (
                  <div className="experience-detail-item" key={point}>
                    <span aria-hidden="true">✳</span>
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </section>
          </article>

          <aside className="experience-detail-side">
            <div className="experience-detail-note">
              <span>TOOLS / FOCUS</span>
              <p>{item.stack}</p>
            </div>

            <div className="experience-detail-note experience-detail-note--outcome">
              <span>OUTCOME</span>
              <strong>{item.outcome}</strong>
            </div>

            {item.links.length > 0 && (
              <div className="experience-detail-links">
                {item.links.map((link) => (
                  <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                    {link.label} <span>↗</span>
                  </a>
                ))}
              </div>
            )}
          </aside>
        </div>
      </div>
    </main>
  );
}

function ExperiencePage() {
  const navigate = useNavigate();

  return (
    <div className="page experience-page">
      <header className="navbar">
        <NavLink to="/" className="logo" aria-label="Back to desk">PR.</NavLink>
      </header>

      <button
        type="button"
        className="page-back experience-page-back"
        onClick={() => navigate("/")}
      >
        ← DESK
      </button>

      <main>
        <section className="experience-overview-section">
          <div className="experience-overview-top">
            <span className="experience-number">04</span>
            <span className="experience-kicker">EXPERIENCE · ACHIEVEMENTS · GROWTH</span>
          </div>

          <div className="experience-overview-title">
            <p className="project-file-label">CAREER FILE</p>
            <h1>
              Experience &amp;
              <span>Achievements.</span>
            </h1>
          </div>

          <div className="experience-overview-intro">
            <p>
              A record of the experiences, challenges and milestones that have
              shaped how I build, learn and contribute.
            </p>

            <div className="experience-overview-note">
              <span>FOCUS</span>
              <strong>AI / ML · SOFTWARE · OPEN SOURCE</strong>
            </div>
          </div>

          <ExperienceNotes />

          <div className="experience-explore-caption">
            <span>CLICK A NOTE TO READ THE FULL STORY</span>
            <span>·</span>
            <span>ONE EXPERIENCE AT A TIME</span>
          </div>

          <div className="career-file-bottom">
            <div>
              <span className="career-file-label">CURRENT CHAPTER</span>
              <h2>Building, learning, contributing.</h2>
            </div>

            <p>
              Currently focused on strengthening my AI/ML engineering foundations
              while building practical software products and exploring generative AI.
            </p>
          </div>

          <section className="certificates-future">
            <div className="certificates-future__heading">
              <span className="career-file-label">CERTIFICATES &amp; CREDENTIALS</span>
              <span>ARCHIVE — GROWING</span>
            </div>

            <div className="certificate-slips">
              <article className="certificate-slip certificate-slip--one">
                <span>01</span>
                <strong>Next certificate</strong>
                <small>Save a new credential here.</small>
              </article>
              <article className="certificate-slip certificate-slip--two">
                <span>02</span>
                <strong>Certification archive</strong>
                <small>Keep the collection growing.</small>
              </article>
              <article className="certificate-slip certificate-slip--three">
                <span>03</span>
                <strong>Learning milestone</strong>
                <small>A future credential can live here.</small>
              </article>
            </div>
          </section>
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

            <NavLink to="/experience" className="portfolio-book book-yellow" aria-label="Open Experience">
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
            </NavLink>

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

<section id="experience" className="section achievement-section">
  <div className="section-heading">
    <span>04</span>
    <h2><span className="section-highlight section-highlight--amber">Experience &amp; Achievement</span></h2>
  </div>
  <p className="experience-desk-intro">A few milestones, projects and communities that have shaped how I build.</p>
  <ExperienceNotes compact />
  <div className="experience-desk-cta"><NavLink to="/experience">EXPLORE EXPERIENCE ↗</NavLink></div>
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

  if (pathname === "/experience") {
    return <ExperiencePage />;
  }

  if (pathname.startsWith("/experience/")) {
    return <ExperienceDetailPage />;
  }

  if (pathname.startsWith("/work/")) {
    return <ProjectDetailPage />;
  }

  return <DeskPage />;
}

export default App;
