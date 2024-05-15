import { CodersBabanSlackView } from "./components/coders-baban-slack/coders-baban-slack.view";
import { CurrentCourseCtaView } from "./components/current-course-cta/current-course-cta.view";
import { FeaturedView } from "./components/featured/featured.view";
import { HeroTopView } from "./components/hero-top/hero-top.view";
import { HighlightListView } from "./components/highlight-list/highlight-list.view";
import { CallToActionView } from "@/ui/design-systeme/call-to-action/call-to-action.view";

export const LandingPageView = () => {
  return (
    <>
      <HeroTopView />
      <FeaturedView />
      <CodersBabanSlackView />
      <CurrentCourseCtaView />
      <HighlightListView />
      <CallToActionView />
    </>
  );
};
