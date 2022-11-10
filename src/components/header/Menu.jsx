const Menu = () => {
    return (
        <div className="menu">
            <div className="menu-lang">
              <a href="#" className="menu-lang-item active">Eng</a>
              <a href="#" className="menu-lang-item">fra</a>
              <a href="#" className="menu-lang-item">ger</a>
            </div>
  
            <nav className="menu-main" id="accordion">
              <ul id="menuMain">
                  <li data-menuanchor="Intro" className="active"><a href="#Intro">Intro</a></li>
                  <li data-menuanchor="Services"><a href="#Services">Services</a></li>
                  <li data-menuanchor="Projects"><a href="#Projects">Projects</a></li>
                  <li data-menuanchor="Awards"><a href="#Awards">Awards</a></li>
                  <li data-menuanchor="Experience"><a href="#Experience">Experience</a></li>
                  <li data-menuanchor="Clients"><a href="#Clients">Clients</a></li>
                  <li data-menuanchor="Testimonials"><a href="#Testimonials">Testimonials</a></li>
                  <li data-menuanchor="Contact"><a href="#Contact">Contact</a></li>
                </ul>
            </nav>
  
            <div className="menu-footer">
                <ul className="social social-rounded">
                  <li><a href="#"><i className="lni lni-twitter-filled"></i></a></li>
                  <li><a href="#"><i className="lni lni-behance-original"></i></a></li>
                  <li><a href="#"><i className="lni lni-instagram-original"></i></a></li>
                </ul>
              <div className="menu-copyright">&copy; Hayley 2020<br /> All Rights Reserved</div>
            </div>
          </div>
    )
}

export default Menu