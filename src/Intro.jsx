import { useEffect, useState } from "react";

const Intro = () => {

    const [atritbutes, setAttributes] = useState()

    useEffect(() => {
      var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch("https://ehzdev-strapi.up.railway.app/api/intro", requestOptions)
        .then(response => response.json())
        .then(result => setAttributes(result.data.attributes))
        .catch(error => console.log('error', error));
    }, [])


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
                  <h1 className="slide-title animate-element delay5 fadeInDown">{atritbutes?.title}</h1>
                  <div className="animate-element delay5 fadeInUp">
                    <h3 className="slide-title-sub">{atritbutes?.subtitle}</h3>
                    <div className="slide-descr slide-descr-intro">{atritbutes?.description}</div>
                    <div className="slide-btn">
                      <button className="btn btn-success" data-toggle="modal" data-target="#send-request">{atritbutes?.button}</button>
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