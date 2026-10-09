import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

export default function Home() {
  return (
    <>
      <SiteNav />

      <header className="hero">
        <div className="hero-bg" style={{ backgroundImage: "url('/images/hero-shop.jpg')" }} />
        <div className="hero-in">
          <h1>Your Tesla, serviced and repaired by people who specialize in Teslas.</h1>
          <p className="sub">EV+ Auto Repair is a family-owned Tesla service center and collision center in Los Angeles—maintenance, repairs, and accident recovery, all under one roof.</p>
          <div className="hero-ctas">
            <a className="btn" href="/service">I need service</a>
            <a className="btn btn-ghost" href="/collision">I had an accident</a>
          </div>
          <div className="trust"><b>★ 5.0</b> on Google &nbsp;·&nbsp; Free estimates &nbsp;·&nbsp; 12-month labor warranty</div>
        </div>
      </header>

      <section id="centers">
        <div className="wrap">
          <div className="kicker">Two centers, one shop</div>
          <h2>Pick your lane.</h2>
          <div className="cards">
            <a className="card" id="service" href="/service">
              <h3>Tesla Service Center</h3>
              <p>Everything your Tesla needs to stay on the road: maintenance, inspections, drive-unit oil service, suspension, 12V & 16V batteries, HV battery service and replacement, tire rotation, diagnostics.</p>
              <span className="more">Explore service →</span>
            </a>
            <a className="card" id="collision" href="/collision">
              <h3>Tesla Collision Center</h3>
              <p>Accident? We handle everything: collision repair, paint matching, ADAS calibration, and the entire insurance claim—plus a Tesla rental so you&rsquo;re never stranded.</p>
              <span className="more">Explore collision repair →</span>
            </a>
          </div>
        </div>
      </section>

      <section id="rentals" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="rentals">
            <div className="rentals-txt">
              <div className="kicker">On-site Tesla rentals</div>
              <h2>Drop off your Tesla,<br />drive off in a Tesla.</h2>
              <p className="lede" style={{ marginTop: 16 }}>Our sister company <b style={{ color: "var(--txt)" }}>EV+ Auto Rentals LLC</b> operates right here in the shop. While we repair your car, ask about staying in a Tesla—no Hertz run, no Uber home, no downtime. Rentals are optional and based on availability, so mention it when you book.</p>
              <div className="hero-ctas" style={{ marginTop: 30 }}><a className="btn" href="/rentals">How rentals work</a></div>
            </div>
            <div className="rentals-img" style={{ backgroundImage: "url('/images/rentals-tesla.webp')" }} />
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="kicker">How it works</div>
          <h2>Back on the road in 5 steps.</h2>
          <div className="steps">
            <div className="step"><div className="n">01</div><h4>Call us</h4><p><a href="tel:+18182817757" style={{ color: "var(--acc)" }}>(818) 281-7757</a>. Tell us about the issue or the damage; we schedule your free estimate.</p></div>
            <div className="step"><div className="n">02</div><h4>Drop off</h4><p>Bring your Tesla to 9755 Glenoaks Blvd, Sun Valley.</p></div>
            <div className="step"><div className="n">03</div><h4>Rental car</h4><p>Ask about an on-site Tesla rental from our sister company—subject to availability.</p></div>
            <div className="step"><div className="n">04</div><h4>Repairs &amp; updates</h4><p>We fix it and keep you updated with photos along the way.</p></div>
            <div className="step"><div className="n">05</div><h4>Pickup</h4><p>Back on the road, backed by our 12-month labor warranty.</p></div>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="why-grid">
            <div className="why-img" style={{ backgroundImage: "url('/images/why-shop.webp')" }} />
            <div>
              <div className="kicker">Why EV+</div>
              <h2>Tesla is our specialty.</h2>
              <p className="lede">Family-owned and operated in Sun Valley since 2017. Tesla service, maintenance, batteries, and collision are what we do best—honest pricing, original equipment parts, photo updates during every repair, and we work directly with your insurance company.</p>
              <p className="lede" style={{ marginTop: 14 }}>Our collision center also performs body repair on other EVs and gas vehicles—so don&rsquo;t be surprised to see a few non-Teslas around the shop. Service and maintenance stays Tesla-only.</p>
              <ul className="ticks">
                <li><b>Tesla specialists</b>—not a general shop</li>
                <li><b>Free estimates</b> &amp; inspections</li>
                <li><b>12-month labor warranty</b></li>
                <li><b>On-site Tesla rentals</b> via EV+ Auto Rentals LLC (subject to availability)</li>
                <li><b>We handle insurance claims</b> start to finish</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="kicker">Reviews</div>
          <div className="rev-head">
            <h2 style={{ margin: 0 }}>What Tesla owners say.</h2>
            <div className="stars"><span>★★★★★</span> 5.0 on Google · 29 reviews</div>
          </div>
          <div className="quotes">
            <div className="q">&ldquo;Great service. They resolved my suspension issue within a few minutes. I&rsquo;ve used them before and have always been satisfied with their service and work. I highly recommend them.&rdquo;<div className="who">— Gabriel Paz · Google review</div></div>
            <div className="q">&ldquo;I recently brought my car in for accident damage, and they did an incredible job—my Tesla looks brand new again! They also handled everything related to the insurance claim. Professional, precise, timely, and very communicative.&rdquo;<div className="who">— Preni Amijanian · Google review</div></div>
            <div className="q">&ldquo;There really is no place better to take your car to be treated as if it was their own. They are honest, reliable, and have an incredible attention to detail. I highly recommend.&rdquo;<div className="who">— Tanner Dominic · Google review</div></div>
          </div>
          <div className="hero-ctas" style={{ marginTop: 30, justifyContent: "flex-start" }}>
            <a className="btn btn-ghost" href="https://share.google/cy50CwTmNpArhnxVZ" target="_blank" rel="noopener noreferrer">Read all our Google reviews</a>
          </div>
        </div>
      </section>

      <section id="areas" style={{ paddingTop: 0 }}>
        <div className="wrap areas">
          <div className="kicker">Service areas</div>
          <h2>Serving the San Fernando Valley &amp; beyond.</h2>
          <div className="pills">
            {["Sun Valley", "Santa Clarita", "Burbank", "Glendale", "North Hollywood", "Van Nuys", "Pasadena", "Sunland", "Tujunga", "Northridge", "La Crescenta", "Pacoima", "Simi Valley", "Sherman Oaks", "Los Angeles", "Orange County", "Ventura"].map((c) => (
              <span className="pill" key={c}>{c}</span>
            ))}
          </div>
          <div style={{ marginTop: 44 }}>
            <div className="kicker">Tow truck services</div>
            <h3 style={{ fontSize: 26, margin: "10px 0 6px" }}>Stuck somewhere? We&rsquo;ll come get you.</h3>
            <p className="lede" style={{ maxWidth: 640, margin: "0 auto" }}>Our tow truck picks up Teslas (and collision jobs of any make) across Southern California. Call or text <a href="tel:+18182817757" style={{ color: "var(--acc)" }}>(818) 281-7757</a> and we&rsquo;ll roll.</p>
            <div className="pills" style={{ marginTop: 18 }}>
              {["West LA", "East LA", "Santa Monica", "Palmdale", "Santa Barbara", "Irvine", "San Diego", "Orange County", "Ventura County", "Kern County", "LA County"].map((c) => (
                <span className="pill" key={c}>{c}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="book" className="final">
        <div className="wrap">
          <div className="kicker">Free inspection</div>
          <h2>Not sure what your Tesla needs? Start with a free inspection.</h2>
          <p className="lede" style={{ margin: "0 auto" }}>Call or text (818) 281-7757, or book online in under a minute.</p>
          <div className="hero-ctas">
            <a className="btn" href="/book">Book free inspection</a>
            <a className="btn btn-ghost" href="tel:+18182817757">Call/text (818) 281-7757</a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
