import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer>
      <div>insert links here</div>
      <div className={styles.bottom}>
        Copyright © Open Web Conferences, LLC, {new Date().getFullYear()}. All
        rights reserved. Site design by{" "}
        <a href="https://wearedhd.com" target="_blank" rel="noreferrer">
          David Henderson Design
        </a>
        .
      </div>
    </footer>
  );
}
