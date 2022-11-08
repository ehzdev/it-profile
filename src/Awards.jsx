const Awards = () => {
    return (
        <div className="section pp-scrollable slide-dark-footer slide-personal-awards">
            <div className="slide-container">
            <div className="slide-bg">
                <div className="slide-photo circle-green slide-awards-circle1 transformLeft"></div>
                <div className="slide-photo circle-brown slide-awards-circle2 transformRight"></div>
            </div>
            <div className="container">
                <div className="slide-num">4</div>
                <div className="row align-items-center animate-element delay5 fadeInDown">
                <div className="col-md-7">
                    <h2 className="slide-title mb-5 mb-md-0">awards</h2>
                </div>
                <div className="col-md-5">
                    <h3 className="slide-title-info mb-5 mb-md-0">Professional awards I’ve reached during <span className="text-primary">my working times.</span></h3>
                </div>
                </div>
                <div className="row award-list animate-element delay5 fadeInUp">
                <div className="col-lg-4">
                    <div className="award-item">
                    <div className="award-item-date">apr 2019</div>
                    <div className="award-item-logo"><img src="img/pic1.png" alt="" /></div>
                    <div className="award-item-title slide-title-sub">Site of the  year&nbsp;2019</div>
                    <div className="award-item-descr slide-descr">For minimal and elegant premium branding design package</div>
                    <div className="award-item-more"><a href="#" className="text-success">See Project</a></div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="award-item">
                    <div className="award-item-date">may 2018</div>
                    <div className="award-item-logo"><img src="img/pic2.png" alt="" /></div>
                    <div className="award-item-title slide-title-sub">1st Winner creative Design Championship</div>
                    <div className="award-item-descr slide-descr">For most favorited design voted by NY City Style customers</div>
                    <div className="award-item-more"><a href="#" className="text-success">See Project</a></div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="award-item">
                    <div className="award-item-date">sep 2015</div>
                    <div className="award-item-logo"><img src="img/pic3.png" alt="" /></div>
                    <div className="award-item-title slide-title-sub">best 5 Branding Project of nominations</div>
                    <div className="award-item-descr slide-descr">For best creative & usable health care mobile app design</div>
                    <div className="award-item-more"><a href="#" className="text-success">See Project</a></div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}

 export default Awards