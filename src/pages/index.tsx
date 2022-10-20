import { EventsList } from "../components/Index/EventsList";
import { Expectation } from "../components/Index/Expectation";
import { Intro } from "../components/Index/Intro";

export default function Index() {
  return (
    <div>
      <Intro />
      <EventsList />
      <Expectation />
    </div>
  );
}
