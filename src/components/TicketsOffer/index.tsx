import { BodyArea } from "../BodyArea";
import { Columns } from "../Columns";
import { Text } from "../Text";
import styles from "./index.module.css";
import { useTitoWidget } from "./useTitoWidget";

export interface TicketsOfferProps {
  code: string;
}

export function TicketsOffer({ code }: TicketsOfferProps) {
  const tito = useTitoWidget(`halfstack/${code}`);

  return (
    <BodyArea>
      <Columns className={styles.ticketsOffer}>
        <div className={styles.left}>
          <Text as="p" className={styles.p}>
            Tickets are offered at early bird, standard, and late bird rates
            based on availability, as well as tickets for teams. Tickets sell
            out in advance so please reserve your space early.
          </Text>
          <Text as="p" className={styles.p}>
            Tickets include conference attendance, lunch, dinner, snacks,
            refreshments, afterparty JavaScript pub quiz, swag, and a full day
            of JavaScript fun.
          </Text>
          <Text as="p" className={styles.p}>
            We offer a generous refund and transfer policy (30 days full refund,
            or transfer until the day before the event).
          </Text>
        </div>
        {tito}
      </Columns>
    </BodyArea>
  );
}
