import { Leaf, Heart, Sprout, Truck } from 'lucide-react';

export default function AboutUs() {
  return (
    <section className="about-page page-shell" aria-labelledby="about-heading">
      <div className="section-eyebrow"><Leaf size={17} /> OUR STORY</div>
      <h1 id="about-heading">A little greener.<br /><em>A lot happier.</em></h1>
      <p className="about-lead">At Paradise Nursery, we believe every home deserves a little bit of nature. We handpick beautiful indoor plants and make it simple for everyone—from first-time plant parents to lifelong collectors—to grow their own personal paradise.</p>
      <div className="values-grid">
        <article className="value-card"><Sprout size={30}/><h3>Healthy plants</h3><p>Thoughtfully selected plants, ready to thrive in your space.</p></article>
        <article className="value-card"><Heart size={30}/><h3>Grown with care</h3><p>We believe good plant care starts with useful, honest guidance.</p></article>
        <article className="value-card"><Truck size={30}/><h3>Made for your home</h3><p>From sunny windows to shaded corners, there is a plant for everyone.</p></article>
      </div>
      <div className="about-note"><span>OUR MISSION</span><p>To bring the calming beauty of plants into everyday living, one leafy friend at a time.</p></div>
    </section>
  );
}
