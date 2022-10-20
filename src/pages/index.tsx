import { EventsList } from "../components/Index/EventsList";
import { Expectation } from "../components/Index/Expectation";
import { Intro } from "../components/Index/Intro";
import { Newsletter } from "../components/Index/Newsletter";

export default function Index() {
  return (
    <div>
      <Intro />
      <EventsList />
      <Expectation />
      <Newsletter />
    </div>
  );
}
