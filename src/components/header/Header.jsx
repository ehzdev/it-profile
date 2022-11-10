import Menu from "./menu";

const Header = () => {
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
  
          <Menu />
        </header>
    );
}

export default Header