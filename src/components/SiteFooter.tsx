export default function SiteFooter() {
  return (
    <footer>
      <div className="wrap">
        <div className="f-grid">
          <div>
            <div className="logo" style={{ marginBottom: 16 }}><img src="/images/logo.png" alt="EV+ Auto Repair" /></div>
            <p>9755 Glenoaks Blvd, Sun Valley, CA 91352<br />(818) 281-7757<br />info@evplusautorepair.com</p>
            <p style={{ marginTop: 14 }}>Mon–Fri 9:00 AM–5:00 PM<br />Sat 10:00 AM–3:00 PM · Sun closed</p>
          </div>
          <div>
            <h5>Shop</h5>
            <a href="/service">Tesla Service Center</a>
            <a href="/collision">Tesla Collision Center</a>
            <a href="/rentals">On-site Rentals</a>
            <a href="/blog">Blog</a>
            <a href="/about">About Us</a>
            <a href="/book">Book Now</a>
          </div>
          <div>
            <h5>Company</h5>
            <a href="/#reviews">Reviews</a>
            <a href="/#areas">Service Areas</a>
            <a href="tel:+18182817757">Call/Text</a>
            <a href="mailto:info@evplusautorepair.com">Email Us</a>
            <a href="/privacy">Privacy Policy</a>
          </div>
        </div>
        <div className="fine">
          <span>© 2026 EV+ Auto Repair · Truck K30 Inc. DBA EV+ Auto Repair</span>
          <span>Rentals: EV+ Auto Rentals LLC</span>
        </div>
        <p style={{ fontSize: 12, marginTop: 16, color: "var(--dim)" }}>
          EV+ Auto Repair is an independent shop. We are not affiliated with, endorsed by, or sponsored by Tesla, Inc.
        </p>
      </div>
    </footer>
  );
}
