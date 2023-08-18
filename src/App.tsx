import { Footer } from "./components/Footer/Footer";
import { SectionAccess } from "./components/SectionAccess/SectionAccess";
import { SectionClipboard } from "./components/SectionClipboard/SectionClipboard";
import { SectionDownload } from "./components/SectionDownload/SectionDownload";
import { SectionFeatures } from "./components/SectionFeatures/SectionFeatures";
import { SectionSnippets } from "./components/SectionSnippets/SectionSnippets";
import { SectionSponsors } from "./components/SectionSponsors/SectionSponsors";
import { SectionWorkflow } from "./components/SectionWorkflow/SectionWorkflow";

function App() {
  return (
    <div className="bg-white bg-[url('./images/bg-header-mobile.png')] bg-contain bg-no-repeat sm:bg-[url('./images/bg-header-desktop.png')]">
      <main className="container mx-auto max-w-7xl px-8 md:px-0">
        <SectionClipboard />
        <SectionSnippets />
        <SectionFeatures />
        <SectionAccess />
        <SectionWorkflow />
        <SectionSponsors />
        <SectionDownload />
      </main>
      <Footer />
    </div>
  );
}

export default App;
