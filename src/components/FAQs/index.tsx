import Link from "next/link";

import { BodyArea } from "../BodyArea";
import { Text } from "../Text";
import styles from "./index.module.css";

export interface FAQsProps {
  faqs: [string, React.ReactNode][];
}

export function FAQsList({ faqs }: FAQsProps) {
  return (
    <div className={styles.faqsList}>
      {faqs.map(([question, answer]) => (
        <div key={question}>
          <Text as="h2" fontSize="large">
            {question}
          </Text>
          <Text as="p">{answer}</Text>
        </div>
      ))}
    </div>
  );
}
