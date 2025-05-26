import styles from "./index.module.css";

interface VideoEmbedProps {
  src: string;
  title: string;
}

export function VideoEmbed({ src, title }: VideoEmbedProps) {
  return (
    <div className={styles.videoWrapper}>
      <iframe
        className={styles.videoIframe}
        src={src}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}
