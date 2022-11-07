
function Header() {
    return (
        <header id="header" className="header header-fixed">
          <div className="header-bg"></div>
          <div className="container-fluid clearfix">
            <div className="brand">
              <a href="#Intro">
                <div className="brand-name font-custom">Hayley</div>
              </a>
            </div>
  
            <button className="nav-toggle-btn a-nav-toggle">
              <span className="nav-toggle">
                <span className="stick stick-1"></span>
                <span className="stick stick-2"></span>
              </span>
            </button>
  
            <div className="header-content d-none d-md-block">
              <div className="row">
                <div className="col-md-3">
                  <div className="header-tagline">art direction<br /> design</div>
                </div>
                <div className="col-md-9">
                  <div className="header-contacts">
                    <div className="header-contact-item">Call me.&nbsp; <a href="tel:+7068980751" className="phone-link">(+706) 898-0751</a></div>
                    <div className="header-contact-divider">/</div>
                    <div className="header-contact-item"><a href="mailto:hayley.design@gmail.com" className="mail-link">hayley.design@gmail.com</a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          <div className="hide-menu a-nav-toggle"></div>
  
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
        </header>
    );
}


export default Header

