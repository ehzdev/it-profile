
function Intro() {
    return (
      <div className="section pp-scrollable slide-dark slide-dark-footer slide-personal-intro">
          <div className="slide-container">
            <div className="slide-bg">
              <div className="slide-photo circle-golden slide-intro-circle1 transformLeft"></div>
              <div className="slide-photo circle-brown slide-intro-circle2 transformRight"></div>
              <div className="slide-photo slide-intro-man"></div>
            </div>
            <div className="container">
              <div className="slide-num">1</div>
              <div className="row">
                <div className="col-sm-6 col-10">
                  <h1 className="slide-title animate-element delay5 fadeInDown">Hayley Raymond</h1>
                  <div className="animate-element delay5 fadeInUp">
                    <h3 className="slide-title-sub">interaction &amp; visual product designer</h3>
                    <div className="slide-descr slide-descr-intro">I’m Hayley Raymond, a freelance Interaction &amp; Visual Product Designer based in Toronto, Canada. “Design is thinking made visual”.</div>
                    <div className="slide-btn">
                      <button className="btn btn-success" data-toggle="modal" data-target="#send-request">get started</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
}


export default Intro

