import Head from "next/head";
import { AboutComponent } from "../components/AboutComponent";
import { ContactComponent } from "../components/ContactComponent";
import { DownloadComponent } from "../components/DownloadComponent";
import { ServicesComponent } from "../components/ServicesComponent";
import { TopContainer } from "../components/TopContainer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>FOODO - Landing Page</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
          integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
          crossorigin="anonymous"
        />
      </Head>
      <main>
        <TopContainer />
        <ServicesComponent />
        <AboutComponent />
        <DownloadComponent />
        <ContactComponent />
      </main>

      <footer>
        <h5>Foodo &copy; themukherjee</h5>
        <script
          src="https://unpkg.com/react/umd/react.production.min.js"
          crossOrigin
        ></script>

        <script
          src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
          crossOrigin
        ></script>

        <script
          src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
          crossOrigin
        ></script>
      </footer>
    </div>
  );
}
