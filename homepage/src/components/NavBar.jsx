import HomeButton from "./navButtons/HomeButton";
import AboutButton from "./navButtons/AboutButton";
import EventsButton from "./navButtons/EventsButton";
import BlogsButton from "./navButtons/BlogsButton";
import BoardButton from "./navButtons/BoardButton";
import ContactButton from "./navButtons/ContactButton";

export default function NavBar() {
  return (
<div className="fixed top-6 right-10 z-60 flex gap-6">
  <HomeButton />
  <AboutButton />
  <EventsButton />
  <BlogsButton />
  <BoardButton />
  <ContactButton />
</div>
  );
}
