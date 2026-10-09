"use client";

export default function MobileCallBar() {
  return (
    <div className="mobile-callbar">
      <a href="tel:+18182817757" className="mcb-call">
        <span aria-hidden="true">📞</span> Call
      </a>
      <a href="sms:+18182817757" className="mcb-text">
        <span aria-hidden="true">💬</span> Text
      </a>
      <a href="/book" className="mcb-book">Book Now</a>
    </div>
  );
}
