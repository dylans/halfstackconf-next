import styles from "./index.module.css";

interface VideoEmbedProps {
  src: string;
  title: string;
}

export function VideoEmbed({ src, title }: VideoEmbedProps) {
  return (
    <div className={styles.videoWrapper}>
      <iframe
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className={styles.videoIframe}
        frameBorder="0"
        src={src}
        title={title}
      ></iframe>
    </div>
  );
}
