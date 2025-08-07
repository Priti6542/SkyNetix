import React, { useEffect } from "react";
import "./HomeFeature.css";

const HomeFeature = () => {
  useEffect(() => {
    const $ = window.$;
    let i = 2;
    const radius = 200;
    const container = $(".dotCircle");
    const fields = $(".itemDot");
    let width = container.width();
    let height = container.height();
    let angle = 0;
    let step = (2 * Math.PI) / fields.length;

    width = width || 500;
    height = height || 500;

    fields.each(function () {
      const x =
        Math.round(width / 2 + radius * Math.cos(angle) - $(this).width() / 2);
      const y =
        Math.round(height / 2 + radius * Math.sin(angle) - $(this).height() / 2);

      $(this).css({
        left: x + "px",
        top: y + "px",
      });

      angle += step;
    });

    $(".itemDot").click(function () {
      const dataTab = $(this).data("tab");
      $(".itemDot").removeClass("active");
      $(this).addClass("active");
      $(".CirItem").removeClass("active");
      $(".CirItem" + dataTab).addClass("active");
      i = dataTab;

      $(".dotCircle").css({
        transform: "rotate(" + (360 - (i - 1) * 36) + "deg)",
        transition: "2s",
      });

      $(".itemDot").css({
        transform: "rotate(" + (i - 1) * 36 + "deg)",
        transition: "1s",
      });
    });

    setInterval(() => {
      let dataTab = $(".itemDot.active").data("tab");
      if (dataTab > 6 || i > 6) {
        dataTab = 1;
        i = 1;
      }
      $(".itemDot").removeClass("active");
      $('[data-tab="' + i + '"]').addClass("active");
      $(".CirItem").removeClass("active");
      $(".CirItem" + i).addClass("active");

      $(".dotCircle").css({
        transform: "rotate(" + (360 - (i - 1) * 36) + "deg)",
        transition: "2s",
      });

      $(".itemDot").css({
        transform: "rotate(" + (i - 1) * 36 + "deg)",
        transition: "1s",
      });

      i++;
    }, 5000);
  }, []);

  return (
    <section className="iq-features">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-3 col-md-12"></div>
          <div className="col-lg-6 col-md-12">
            <div className="holderCircle">
              <div className="round"></div>
              <div className="dotCircle">
                <span className="itemDot itemDot1 active" data-tab="1">
                  <i className="fa fa-clock-o"></i>
                  <span className="forActive"></span>
                </span>
                <span className="itemDot itemDot2" data-tab="2">
                  <i className="fa fa-comments"></i>
                  <span className="forActive"></span>
                </span>
                <span className="itemDot itemDot3" data-tab="3">
                  <i className="fa fa-user"></i>
                  <span className="forActive"></span>
                </span>
                <span className="itemDot itemDot4" data-tab="4">
                  <i className="fa fa-tags"></i>
                  <span className="forActive"></span>
                </span>
                <span className="itemDot itemDot5" data-tab="5">
                  <i className="fa fa-upload"></i>
                  <span className="forActive"></span>
                </span>
                <span className="itemDot itemDot6" data-tab="6">
                  <i className="fa fa-briefcase"></i>
                  <span className="forActive"></span>
                </span>
              </div>
              <div className="contentCircle">
                <div className="CirItem title-box active CirItem1">
                  <h2 className="title">
                    <span>Automate</span>
                  </h2>
                  <p>Auto task description here.</p>
                  <i className="fa fa-clock-o"></i>
                </div>
                <div className="CirItem title-box CirItem2">
                  <h2 className="title">
                    <span>Chat</span>
                  </h2>
                  <p>Chat feature description here.</p>
                  <i className="fa fa-comments"></i>
                </div>
                <div className="CirItem title-box CirItem3">
                  <h2 className="title">
                    <span>Responses</span>
                  </h2>
                  <p>Response feature description here.</p>
                  <i className="fa fa-user"></i>
                </div>
                <div className="CirItem title-box CirItem4">
                  <h2 className="title">
                    <span>Tags</span>
                  </h2>
                  <p>Tag management description here.</p>
                  <i className="fa fa-tags"></i>
                </div>
                <div className="CirItem title-box CirItem5">
                  <h2 className="title">
                    <span>Sharing</span>
                  </h2>
                  <p>Share content feature.</p>
                  <i className="fa fa-upload"></i>
                </div>
                <div className="CirItem title-box CirItem6">
                  <h2 className="title">
                    <span>Support</span>
                  </h2>
                  <p>Support and help info here.</p>
                  <i className="fa fa-briefcase"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-12"></div>
        </div>
      </div>
    </section>
  );
};

export default HomeFeature;
