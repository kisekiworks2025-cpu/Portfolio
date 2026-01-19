"use client";
import React, { useState } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="min-h-screen">
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className="site-header" id="top">
        <div className="container header-inner">
          <div className="brand">
            <a href="#top" aria-label="Go to top">KF</a>
          </div>
          <nav className="nav" aria-label="Primary">
            <button
              className="nav-toggle"
              aria-label="Open menu"
              aria-expanded={isMenuOpen ? "true" : "false"}
              onClick={() => setIsMenuOpen((v) => !v)}
              type="button"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
            <ul
              className={`nav-list${isMenuOpen ? ' open' : ''}`}
              id="navList"
              style={{
                display: isMenuOpen ? 'block' : 'none',
              }}
            >
              <li><a href="#summary">Summary</a></li>
              <li><a href="#approach">Approach</a></li>
              <li><a href="#achievement">Recent Achievement</a></li>
              <li><a href="#strengths">Strengths</a></li>
              <li><a href="#mastery">Rapid Mastery</a></li>
              <li><a href="#journey">Journey</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="main">
        {/* Hero */}
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">
                Executive Turnaround Operator | Bottleneck Diagnosis → Execution
              </p>
              <h1>Kento Fukumori</h1>
              <p className="subtitle">
                Organizational Turnaround • Operating Model Redesign • People &amp; Performance Systems
                <br />
                Gaming, Esports, and Technology Ecosystems
              </p>

              <div className="hero-metrics" aria-label="Key impact metrics">
                <div className="metric">
                  <div className="metric-value">~30%</div>
                  <div className="metric-label">Revenue growth delivered</div>
                </div>
                <div className="metric">
                  <div className="metric-value">100+</div>
                  <div className="metric-label">Headcount operating scope</div>
                </div>
                <div className="metric">
                  <div className="metric-value">West + Asia</div>
                  <div className="metric-label">Cross-market leadership</div>
                </div>
              </div>

              <div className="cta-row">
                <a className="btn primary" href="#contact">
                  Contact
                </a>
                <a
                  className="btn"
                  href="assets/Kento_Fukumori_Resume_2025.pdf"
                  target="_blank"
                  rel="noopener"
                >
                  View Resume (PDF)
                </a>
              </div>

              <div className="contact-inline">
                <a href="mailto:fukumorikento@gmail.com">
                  fukumorikento@gmail.com
                </a>
                <span aria-hidden="true">•</span>
                <a href="tel:+8170842628044">+81-70-8426-8044</a>
              </div>
            </div>

            <aside className="hero-card" aria-label="Executive snapshot">
              <h2 className="card-title">Executive Snapshot</h2>
              <p>
                Senior management consultant / interim executive with a track record of stabilizing leadership,
                rebuilding performance systems, and engineering high-delivery operating structures under pressure.
              </p>
              <ul className="checklist">
                <li>Turnaround execution &amp; V-shaped recoveries</li>
                <li>Board-ready operating cadence, KPIs, governance</li>
                <li>WFH/remote accountability architecture</li>
                <li>Digitalization → AI-ready foundations</li>
              </ul>
            </aside>
          </div>
        </section>

        {/* Executive Summary */}
        <section className="section" id="summary">
          <div className="container">
            <div className="section-head">
              <h2>Executive Summary</h2>
              <p className="lead">
                I help organizations recover performance and scale execution by rebuilding the operating model—strategy, people, incentives, and cadence—into a sustainable system.
              </p>
            </div>

            <div className="grid two">
              <div className="panel">
                <h3>What I deliver</h3>
                <p>
                  Full-scale organizational reform: incentives, evaluation, KPI/reporting, executive reviews, and culture—built to outlast individuals.
                </p>
              </div>
              <div className="panel">
                <h3>Operating scope</h3>
                <p>
                  Operated across <strong>100+ employees</strong> in <strong>Western and Asian markets</strong>, including <strong>fully distributed remote teams</strong>.
                  Experienced bridging HQ mandates and local realities, aligning stakeholders, and restoring trust.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What I Do Differently */}
        <section className="section" id="approach">
          <div className="container">
            <div className="section-head">
              <h2>What I Do Differently</h2>
              <p className="lead">
                Executive problem-solving: identify the real bottleneck fast, align leaders, and drive durable execution.
              </p>
            </div>

            <div className="callout">
              <h3>My Approach: Diagnose → Execute → Make It Sustainable</h3>
              <p>
                I’m not positioned as “just an organizational consultant.” I operate as an executive problem-solver: I find the true pain point,
                recommend the needed approach, and then drive implementation so results show up in delivery.
              </p>
              <div className="grid two">
                <ul className="checklist">
                  <li>
                    <strong>Identify root bottlenecks</strong>, not surface symptoms — I specialize in finding the true pain points that others miss
                  </li>
                  <li>
                    <strong>Self-learn domain specifics</strong> before prescribing solutions — deep understanding comes before recommendations
                  </li>
                  <li>
                    <strong>PDCA iteration</strong>: fast learning cycles over perfect first attempts — rapid adaptation beats slow perfection
                  </li>
                </ul>
                <ul className="checklist">
                  <li>
                    <strong>Long-term reproducibility</strong> over short-term firefighting — build capabilities that outlast my engagement
                  </li>
                  <li>
                    <strong>Transfer capability</strong> to your team, not create dependency — you won’t need me after we’re done
                  </li>
                </ul>
              </div>
              <p className="fine">
                <strong>The result:</strong> executives get clarity and momentum quickly—while the organization gains the systems, skills, and operating rhythm to sustain performance long after.
              </p>
            </div>
          </div>
        </section>

        {/* Recent Achievement */}
        <section className="section" id="achievement">
          <div className="container">
            <div className="section-head">
              <h2>Recent Achievement (2024–Present)</h2>
              <p className="lead">
                Full operating-model reset under high-stakes pressure—engineered a V-shaped recovery.
              </p>
            </div>

            <div className="highlight">
              <div className="highlight-top">
                <div>
                  <p className="kicker">Interim Executive / Strategic Execution Consultant</p>
                  <h3>Confidential — SaaS / Esports Technology Provider</h3>
                  <p className="muted">
                    100+ employees across Western &amp; Asian markets • Fully distributed remote teams
                  </p>
                </div>
                <div className="badge">~30% revenue growth</div>
              </div>

              <div className="grid two">
                <div className="panel">
                  <h4>Organizational &amp; Execution Transformation</h4>
                  <ul className="bullets">
                    <li>Rebuilt performance systems, incentives, and accountability frameworks</li>
                    <li>Stabilized leadership dynamics and restored trust across layers</li>
                    <li>Introduced standardized operating cadence, executive reviews, KPI visibility</li>
                  </ul>
                </div>
                <div className="panel">
                  <h4>HR Architecture, WFH Accountability, AI-Ready Ops</h4>
                  <ul className="bullets">
                    <li>Reconstructed HR foundation; embedded company values into evaluation &amp; bonus structures</li>
                    <li>Designed WFH-optimized KPI/reporting architecture with clear ownership</li>
                    <li>Digitized workflows as the data foundation for AI-driven automation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Strengths */}
        <section className="section" id="strengths">
          <div className="container">
            <div className="section-head">
              <h2>Core Leadership Strengths</h2>
              <p className="lead">
                Executive-level leadership with systems thinking and repeatable execution.
              </p>
            </div>

            <div className="cards">
              <article className="card">
                <h3>Executive Leadership &amp; Governance</h3>
                <p>
                  Interim executive leadership, board-level reporting, decision support, and 100+ org oversight—plus{" "}
                  <strong>pain point / bottleneck identification</strong> and <strong>PDCA-driven rapid iteration</strong>.
                </p>
              </article>
              <article className="card">
                <h3>Organizational Transformation</h3>
                <p>
                  Problem structuring, root-cause analysis, operating model redesign, and hypothesis-driven execution that converts strategy into delivery.
                </p>
              </article>
              <article className="card">
                <h3>People &amp; Performance Systems</h3>
                <p>
                  Org restructuring, role clarity, incentives, accountability, performance management—supported by a{" "}
                  <strong>self-learning methodology</strong> and <strong>sustainable capability transfer</strong>.
                </p>
              </article>
              <article className="card">
                <h3>Cross-Cultural Leadership (West &amp; Asia)</h3>
                <p>
                  Effective leadership across diverse markets and cultures—bridging HQ mandates and local realities with clear alignment.
                </p>
              </article>
              <article className="card">
                <h3>Digital Transformation &amp; Automation</h3>
                <p>
                  Process digitalization, performance tooling, workflow automation, and AI-ready foundations built from operational data discipline.
                </p>
              </article>
              <article className="card">
                <h3>Executive Communication &amp; Stakeholder Alignment</h3>
                <p>
                  Senior stakeholder alignment, risk surfacing, and crisp narratives that enable fast, confident executive decisions.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Rapid Mastery */}
        <section className="section" id="mastery">
          <div className="container">
            <div className="section-head">
              <h2>Proven Pattern: Rapid Mastery Across Complex Domains</h2>
              <p className="lead">
                Evidence of meta-learning ability—fast adaptation in the most competitive environments.
              </p>
            </div>

            <div className="callout callout-alt">
              <h3>🏆 Evidence of Meta-Learning Ability</h3>
              <p>
                Before business transformation, I proved my rapid learning capability in the most competitive arena: professional gaming.
              </p>
              <div className="grid two">
                <div className="panel">
                  <h4>Achievements</h4>
                  <ul className="bullets">
                    <li>World #1 ranking in competitive gaming</li>
                    <li>Top-tier rankings across multiple strategic games</li>
                    <li>Mastered industry’s most complex competitive systems</li>
                  </ul>
                </div>
                <div className="panel">
                  <h4>What this demonstrates for your business</h4>
                  <ul className="bullets">
                    <li>Rapid pattern recognition in unfamiliar domains</li>
                    <li>Self-directed learning under competitive pressure</li>
                    <li>Strategic adaptation with incomplete information</li>
                    <li>Consistent peak performance across different rule sets</li>
                    <li>Ability to master complex systems faster than global competition</li>
                  </ul>
                </div>
              </div>
              <p className="fine">
                The same meta-learning approach that took me to world #1 in gaming is what I apply to organizational transformation.
              </p>
            </div>
          </div>
        </section>

        {/* Professional Journey */}
        <section className="section" id="journey">
          <div className="container">
            <div className="section-head">
              <h2>Professional Journey</h2>
              <p className="lead">
                Reverse-chronological highlights across gaming, esports, and technology ecosystems.
              </p>
            </div>

            <div className="timeline" role="list">
              <div className="t-item" role="listitem">
                <div className="t-time">Jul 2024 — Present</div>
                <div className="t-body">
                  <h3>Strategic Execution Consultant / Interim Executive</h3>
                  <p className="muted">
                    Confidential — SaaS / Esports Technology Provider
                  </p>
                  <ul className="bullets">
                    <li>Led operating-model reset; delivered V-shaped recovery and ~30% revenue growth</li>
                    <li>Rebuilt performance systems, incentives, and KPI visibility</li>
                    <li>Digitized workflows for automation and AI readiness</li>
                  </ul>
                </div>
              </div>
              <div className="t-item" role="listitem">
                <div className="t-time">Dec 2022 — Jul 2024</div>
                <div className="t-body">
                  <h3>Store &amp; Platform Operations Manager</h3>
                  <p className="muted">PICO Technology (ByteDance Group)</p>
                  <ul className="bullets">
                    <li>
                      Improved commercial throughput (GMV &amp; conversion) by ~30% via operational restructuring
                    </li>
                    <li>
                      Launched Japan’s first VR live streaming commerce pilot (4.3% purchase conversion)
                    </li>
                    <li>
                      Built multilingual community ecosystem; 60+ content pieces driving 54% of forum traffic
                    </li>
                  </ul>
                </div>
              </div>
              <div className="t-item" role="listitem">
                <div className="t-time">Oct 2020 — Dec 2022</div>
                <div className="t-body">
                  <h3>Business Development &amp; Community Manager</h3>
                  <p className="muted">Amazon Web Services Japan G.K. — Amazon Games</p>
                  <ul className="bullets">
                    <li>
                      Advised publishers/studios on Western market entry (localization, monetization, publishing)
                    </li>
                    <li>
                      Built platform strategy integrating retail, Twitch, and publishing assets
                    </li>
                    <li>
                      Led Tokyo Game Show live-stream initiatives with 50+ streamers for global launches
                    </li>
                  </ul>
                </div>
              </div>
              <div className="t-item" role="listitem">
                <div className="t-time">Apr 2018 — Oct 2020</div>
                <div className="t-body">
                  <h3>eSports Strategy Manager — Global eSports Planning</h3>
                  <p className="muted">Capcom Co., Ltd.</p>
                  <ul className="bullets">
                    <li>Proposed and launched the Street Fighter Pro &amp; Amateur League from zero</li>
                    <li>Designed a sustainable league business model with cities, teams, and sponsors</li>
                    <li>Linked esports initiatives to product sales growth and in-game feature development</li>
                  </ul>
                </div>
              </div>
              <div className="t-item" role="listitem">
                <div className="t-time">Oct 2014 — Apr 2018</div>
                <div className="t-body">
                  <h3>Business Development / Product &amp; Corporate Operations</h3>
                  <p className="muted">Rakuten, Inc.</p>
                  <ul className="bullets">
                    <li>
                      Designed Rakuten Games’ business model and prototype; secured internal funding approval
                    </li>
                    <li>
                      Built end-to-end operations: legal, accounting, HR, governance, security, branding, product
                    </li>
                    <li>
                      Owned portal UX, monetization design, payment integrations, and customer support frameworks
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="section" id="education">
          <div className="container">
            <div className="section-head">
              <h2>Education</h2>
            </div>
            <div className="grid two">
              <div className="panel">
                <h3>International Christian University (ICU)</h3>
                <p className="muted">Oct 2011 — Jun 2014</p>
                <p>B.A. in Computing Science • Minor: Psychology (Transfer, graduated)</p>
              </div>
              <div className="panel">
                <h3>University of Aberdeen (UK)</h3>
                <p className="muted">Sep 2010 — Jun 2011</p>
                <p>Computing Science</p>
              </div>
            </div>
          </div>
        </section>

        {/* Unique Background */}
        <section className="section" id="background">
          <div className="container">
            <div className="section-head">
              <h2>Unique Background</h2>
              <p className="lead">
                Competitive roots that shaped strategic thinking and performance under pressure.
              </p>
            </div>
            <div className="panel">
              <p>
                Chosen as a representative for Japan at <strong>World Cyber Games 2010</strong> (Singapore) in DotA.
                That competitive foundation continues to inform my approach: rapid learning, pattern recognition, and execution in high-stakes environments.
              </p>
            </div>
          </div>
        </section>

        {/* Career Philosophy */}
        <section className="section" id="philosophy">
          <div className="container">
            <div className="section-head">
              <h2>Career Philosophy</h2>
            </div>
            <div className="callout">
              <h3>
                The Through-Line: Systems Thinking in Service of Sustainable Performance
              </h3>
              <blockquote>
                “Sustainable performance comes not from individual heroics, but from designing systems that enable teams to execute at their highest potential.”
              </blockquote>
              <p>
                From competitive esports athlete to executive transformation leader, my career has been guided by this conviction:
                <strong>identify the bottleneck</strong>, <strong>learn the domain deeply</strong>, <strong>iterate rapidly through PDCA cycles</strong>, and build <strong>reproducible systems</strong> that outlast any individual—including me.
              </p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="section" id="contact">
          <div className="container">
            <div className="section-head">
              <h2>Contact</h2>
              <p className="lead">
                If you’re navigating performance decline, scaling pain, or operating-model redesign—let’s talk.
              </p>
            </div>
            <div className="grid two">
              <div className="panel">
                <h3>Direct</h3>
                <p>
                  <a href="mailto:fukumorikento@gmail.com">fukumorikento@gmail.com</a>
                </p>
                <p>
                  <a href="tel:+8170842628044">+81-70-8426-8044</a>
                </p>
                <div className="cta-row">
                  <a
                    className="btn primary"
                    href="mailto:fukumorikento@gmail.com?subject=Inquiry%20-%20Organizational%20Transformation"
                  >
                    Email
                  </a>
                  <a
                    className="btn"
                    href="assets/Kento_Fukumori_Resume_2025.pdf"
                    target="_blank"
                    rel="noopener"
                  >
                    Resume (PDF)
                  </a>
                </div>
              </div>
              <div className="panel">
                <h3>AI Pre-Call Coach (Coming soon)</h3>
                <p className="muted">
                  Planned: a coaching chatbot that helps clarify your bottlenecks and prepares a concise summary you can send before we speak.
                </p>
                <p className="fine">
                  (Gemini/API integration requires a key and cannot be run purely on a static site. We can still build the UI now, and connect later via an approved backend.)
                </p>
              </div>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="container footer-inner">
            <p>
              © <span id="year"></span> Kento Fukumori. All rights reserved.
            </p>
            <a className="top" href="#top">
              Back to top
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}
