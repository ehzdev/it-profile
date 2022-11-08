import {useEffect} from 'react'
import Awards from './Awards'
import Clients from './Clients'
import Contacts from './Contacts'
import Experience from './Experience'
import Footer from './Footer'
import Header from './Header'
import Intro from './Intro'
import Loader from './Loader'
import Modal from './Modal'
import Projects from './Projects'
import Services from './Services'
import Testimonials from './Testimonials'

const App = () => {

  useEffect(() => {
    const script = document.createElement("script");

    script.src = "js/script.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, []);

  return (
    <>
      <Loader />
      <div className="wrapper">
        <Header />
        <div id="content" className="content">
            <div className="homepage-personal a-pagepiling">
              <Intro />
              <Services />
              <Projects />
              <Awards />
              <Experience/>
              <Clients />
              <Testimonials />
              <Contacts />
            </div>
        </div>
        <Footer />
      </div>
      <Modal />
    </>
  )
}

export default App