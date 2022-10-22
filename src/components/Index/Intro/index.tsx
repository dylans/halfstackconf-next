import { Text } from "../../Text";
import styles from "./index.module.css";

export function Intro() {
  return (
    <div className={styles.intro}>
      <Text as="h1" className={styles.introText} fontSize="extra-large">
        Welcome to HalfStack
      </Text>
    </div>
  );
}
