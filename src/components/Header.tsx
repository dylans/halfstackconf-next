// TODO: Replace with actual contents :)

import styles from "./Header.module.css";

export function Header() {
  return (
    <nav className={styles.header}>
      <a href="/" id="logo">
        <img src="/assets/images/halfstack-logo.svg" alt="HalfStack" />
      </a>
      <button id="menu">
        <i className="fa fa-bars"></i>
      </button>
      <ul>
        <li className="past_events_nav">
          <a href="/events/">Past events</a>
        </li>
        <li className="sponsorship_nav">
          <a href="/sponsorship/">Sponsorship</a>
        </li>
        <li className="blog_nav">
          <a href="https://medium.com/@halfstackconf">Blog</a>
        </li>
        <li className="contact_nav">
          <a href="/contact/">Contact</a>
        </li>
        <li className="faqs_nav">
          <a href="/faqs/">Faqs</a>
        </li>
      </ul>
    </nav>
  );
}
