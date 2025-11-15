import Accordion from "@/components/accordion";
import BG from "@/components/bg";

export default function Home() {
  return (
    <main className="z-0 relative bg-purple-100 flex flex-col items-center justify-center min-h-screen p-200 font-[family-name:var(--font-work-sans)]">
      <BG />
      <Accordion />
    </main>
  );
}
