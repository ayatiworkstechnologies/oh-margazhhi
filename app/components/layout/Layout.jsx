import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import StickySocialIcons from "../sections/StickySocialIcons";

export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen flex-col bg-marg-bgSoft">
      <SiteHeader />
      <StickySocialIcons />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
