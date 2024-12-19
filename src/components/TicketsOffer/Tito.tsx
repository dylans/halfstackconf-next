import { TicketsOfferProps } from ".";
import { useTitoWidget } from "./useTitoWidget";

export function Tito({ code }: TicketsOfferProps) {
  const eventCode = code.includes("/") ? code : `halfstack/${code}`;
  const tito = useTitoWidget(eventCode);
  return <>{tito}</>;
}
