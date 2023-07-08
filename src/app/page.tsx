import { Chat } from "./components/Chat";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;

export default function Home() {
  return (
    <main className="grid place-content-center h-screen">
      <Chat />
    </main>
  )
}
