import { FeaturedView } from "./components/featured/featured.view";
import { HeroTopView } from "./components/hero-top/hero-top.view";
import { CodersBabanSlackView } from "./components/coders-baban-slack/coders-baban-slack.view";

export const LandingPageView = () => {
  return (
    <>
      <HeroTopView />
      <FeaturedView />
      <CodersBabanSlackView />
    </>
  );
};
