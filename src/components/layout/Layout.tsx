// @ts-nocheck
import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";


import NikitaOsaulenkoWithLogo from '../../assets/png/people/NikitaOsaulenkoWIthTriangular.png';
import NikitaOsaulenkoWithShadow from '../../assets/png/people/NikitaOsaulenkoWIthShadow.png';

import useWindowDimensions from "../../hooks/useWindowDimensions ";

import './LayoutStyles.scss'
import getSvg from "../../utils/getSvg";
import { RedRocketLogo } from "../../assets/svg/RedRocketLogo";
import { SpaceItLogo } from "../../assets/svg/SpaceItLogo";

import Accordion from "../Accordion/Accordion";
import AccordionSection from "../Accordion/Accordion-section/AccordionSection";
import FrameItems from "../Frame-items/FrameItems";
import useSocialLinksHandlers from "../../hooks/useSocialLnksHandler";
import { LayoutProps } from ".";
import SocialLink from "../Social-links/SocialLinks";

export const Layout: React.FunctionComponent<LayoutProps> = ({ mockData }) => {
  const {
    ddData,
    firstSectionId,
    secondSectionId,
    frameDataSec0,
    frameDataSec1,
    iconsFirstSectionStrings,
    iconsSecondSectionStrings,
    personIconsStrings } = mockData;

  // eslint-disable-next-line 
  const isTouch = (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0));
  if (window.location.hash) {
    window.history.replaceState("", document.title, window.location.pathname);
  }

  function removehash() {
    setTimeout(function () {
      history.replaceState("", document.title, window.location.pathname);
    }, 1);
  }

  removehash()

  // console.log(test)
  const isCanvasRendered = useRef(null);
  const currentCanvasSize = useRef<{ width: string, height: string }>(null);
  const [handleMouseEnter, handleMouseLeave, handleClick] = useSocialLinksHandlers()

  const { height, width } = useWindowDimensions()
  const isDesktop = width > 850;
  const mainImgRes = width < 835 ? "500" : "500"
  const isTabletDesign = width < 835 ? true : false
  const tabletDesign = width < 850 ? true : false
  const isMobiledesign = width < 500 ? true : false
  const collapsedContent1 = (<iframe width={`${isMobiledesign ? 340 : 550}`} height={`${isMobiledesign ? 265 : 300}`} src="https://www.youtube.com/embed/P3vzq4diuE0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>);
  const collapsedContent2 = (<iframe width={`${isMobiledesign ? 340 : 550}`} height={`${isMobiledesign ? 265 : 300}`} src="https://www.youtube.com/embed/FLcjcZu5H7g" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>);
  const collapsedContent3 = (<iframe width={`${isMobiledesign ? 340 : 550}`} height={`${isMobiledesign ? 265 : 300}`} src="https://www.youtube.com/embed/uexFfWDz2gc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>);


  const personIcons = personIconsStrings.map((iconString, idx) => {
    if (idx === 0) {
      return {
        icon: getSvg({ svgName: iconString.icon, id: `${iconString.icon} _icon ` }),
        link: iconString.link
      }
    }
    return {
      icon: getSvg({ svgName: iconString.icon, id: `${iconString.icon} _icon rr` }),
      link: iconString.link
    }
  })
  const firstSectionIcons = iconsFirstSectionStrings.map((iconString, idx) => {
    if (idx === 0) {
      return {
        icon: getSvg({ svgName: iconString.icon, id: `${iconString.icon} _icon ${firstSectionId}`, className: `${isMobiledesign ? '' : '_default-hovered'}` }),
        link: iconString.link
      }
    }
    return {
      icon: getSvg({ svgName: iconString.icon, id: `${iconString.icon} _icon ${firstSectionId}` }),
      link: iconString.link
    }
  })

  const secondSectionIcons = iconsSecondSectionStrings.map((iconString, idx) => {
    if (idx === 0) {
      return {
        icon: getSvg({ svgName: iconString.icon, id: `${iconString.icon} _icon ${secondSectionId}`, className: `${isMobiledesign ? '' : '_default-hovered'}` }),
        link: iconString.link
      }
    }
    return {
      icon: getSvg({ svgName: iconString.icon, id: `${iconString.icon} _icon ${secondSectionId}` }),
      link: iconString.link
    }
  })

  useLayoutEffect(() => {
    function global() {
      const canvas = document.getElementById("canvas");
      const ctx = canvas.getContext("2d");
      let width;
      let height;
      class Line {
        constructor(origin, size, length, color, style = "pattern") {
          this.size = size;
          this.origin = origin;
          this.length = length;
          this.color = color;
          this.style = style;
          this.origin = `M${origin.x},${origin.y}`;
          this.offSet = 0;
          this.line = null;
          this.offSetSpeed = length / size;
        }
        getColorString() {
          return `hsl(0, 90%, 30%)`;
        }
        generators() {
          return [
            {
              line: `h${this.size}`,
              mag: this.size
            },
            {
              line: `h-${this.size}`,
              mag: this.size
            },
            {
              line: `v${this.size}`,
              mag: this.size
            },
            {
              line: `v-${this.size}`,
              mag: this.size
            },
            {
              line: `l${this.size},${this.size}`,
              mag: Math.hypot(this.size, this.size)
            },
            {
              line: `l${this.size}-${this.size}`,
              mag: Math.hypot(this.size, this.size)
            },
            {
              line: `l-${this.size},${this.size}`,
              mag: Math.hypot(this.size, this.size)
            },
            {
              line: `l-${this.size}-${this.size}`,
              mag: Math.hypot(this.size, this.size)
            }

          ];
        }
        generate() {
          const segments = this.generators(this.size);
          let path = this.origin;
          let mag = 0;
          let fragment;
          let i;
          for (i = 0; i < this.length; i += 1) {
            fragment = segments[(Math.random() * segments.length) | 0];
            path += ` ${fragment.line}`;
            mag += fragment.mag;
          }
          this.line = {
            path,
            mag
          };
          return this;
        }
        renderStyle(style) {
          if (style === "glitches") {
            ctx.lineDashOffset = this.line.mag + this.offSet;
            ctx.setLineDash([
              this.size ** 1.5,
              (this.line.mag / this.length) * this.size ** 2
            ]);
            this.offSet += 20;
            ctx.lineWidth = 2;
            return this;
          }
          if (style === "pattern") {
            ctx.lineDashOffset = this.line.mag - this.offSet;
            ctx.setLineDash([this.line.mag, this.line.mag]);
            this.offSet += 10;
            ctx.lineWidth = 0.2;
          }
        }
        mutatePath() {
          const lineFragment = this.line.path.split(" ").slice(1);
          const generator = this.generators();
          lineFragment[(Math.random() * lineFragment.length) | 0] =
            generator[(Math.random() * generator.length) | 0].line;
          this.line.path = `${this.line.path.split(" ")[0]} ${lineFragment.join(
            " "
          )}`;
        }
        draw() {
          !this.line && this.generate();

          ctx.strokeStyle = this.getColorString();
          this.renderStyle(this.style);
          ctx.lineCap = "round";
          ctx.lineJoin = "round";
          ctx.stroke(new Path2D(this.line.path));
          return this;
        }
      }
      function clear() {
        const ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, 1200, 1200);
        // ctx.scale(-1.2, -1.2)
        // ctx.fillStyle = `hsla(200deg, 20%, 10%)`;
        // ctx.fillRect(0, 0, width, height);
      }

      function generateLines(amount) {
        const lines = [];
        const styles = [
          {
            size: 1.25,
            style: "pattern",
            color: { h: 210, s: 100, l: 70, a: 0.5 }
          },
          { size: 2.5, style: "pattern", color: { h: 190, s: 90, l: 50, a: 0.3 } },
          { size: 5, style: "pattern", color: { h: 210, s: 70, l: 60, a: 0.2 } },
          { size: 10, style: "pattern", color: { h: 310, s: 80, l: 55, a: 0.15 } },
          { size: 20, style: "pattern", color: { h: 200, s: 25, l: 35, a: 0.12 } },
          { size: 20, style: "pattern", color: { h: 210, s: 20, l: 40, a: 0.12 } },
          { size: 40, style: "pattern", color: { h: 190, s: 40, l: 50, a: 0.12 } },
          { size: 80, style: "pattern", color: { h: 220, s: 50, l: 60, a: 0.12 } },
          { size: 40, style: "glitches", color: { h: 300, s: 100, l: 50, a: 0.3 } },
          { size: 20, style: "glitches", color: { h: 210, s: 100, l: 50, a: 0.3 } },
          { size: 60, style: "glitches", color: { h: 30, s: 100, l: 50, a: 0.3 } }
        ];
        for (let i = 0; i < amount; i += 1) {
          const style = styles[(Math.random() ** 2 * styles.length) | 0];
          lines.push(
            new Line(
              { x: width * 0.8, y: height * -0.1 },
              style.size,
              700 + Math.random() * 1200,
              style.color,
              style.style
            )
          );
        }
        return lines;
      }
      let id;
      function resize() {
        // if (!isCanvasRendered.current) {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;

        currentCanvasSize.current = ({ height: canvas.height, width: canvas.width })
        const lines = generateLines(5);
        function update() {
          if (!(id % 15)) {
            // clear()
            lines.forEach((line) => {
              line.draw();
              if (!(id % 10) && Math.random() > 0.95) {
                line.mutatePath();
              }
            });
          }
          id = requestAnimationFrame(update);
        }
        id = requestAnimationFrame(update);
        // }
      }
      // window.addEventListener('orientationchange', clear, {
      //   passive: true
      // })
      window.addEventListener("resize", resize, {
        passive: true
      });
      resize();
      isCanvasRendered.current = true
    }
    global()
  }, [])
  const dropdownData = ddData({
    collapsedContent1,
    collapsedContent2,
    collapsedContent3,
    firstSectionIcons,
    firstSectionId,
    frameDataSec0,
    frameDataSec1,
    handleClick,
    handleMouseEnter,
    handleMouseLeave,
    isMobiledesign,
    isTabletDesign,
    secondSectionIcons,
    secondSectionId
  })
  return (
    <main className="layout-wrapper">
      <canvas id="canvas">
      </canvas>
      <section className="person-info">
        <div className="flex-wrapper">
          <div className="test">
            {!isMobiledesign && <img className="custom-img" src={NikitaOsaulenkoWithLogo} alt="persons-photo" width={mainImgRes} />}
            {isMobiledesign && <img className="custom-img" src={NikitaOsaulenkoWithShadow} alt="persons-photo" width={mainImgRes} />}
          </div>
          <div className="personal-data-container">
            <h2 className="heading"> Nikita Osaulenko</h2>
            <SocialLink
              icons={personIcons}
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
              handleClick={handleClick}
              sectionId={"person"}
            />
          </div>

          <div className="dropdown-container">
            <Accordion render={(state, clickHandler) => {
              return (
                dropdownData.map((el, idx) => {
                  return (
                    <AccordionSection
                      key={idx}
                      isOpen={state[el.label]}
                      clickHandler={clickHandler}
                      label={el.label}
                      logo={el.img}
                      text={el.header}
                      linkTo={el.linkTo}
                      showContent={el.showContent}
                      showChevron={el.showChevron}
                    >
                      {el.body}
                    </AccordionSection>
                  )
                })
              )
            }} />
          </div>
        </div>
      </section>
      {
        !isMobiledesign && <section id="section_0" className="company-info">
          <div className="flex-wrapper">
            <div className="heading-container">
              <RedRocketLogo className="logo"
                width={`${isTabletDesign ? 125 : 150}`}
                height={`${isTabletDesign ? 125 : 150}`}
              />
              <h2 className="heading">Red Rocket Software</h2>
            </div>
            <div className="links-container">
              <div className="frame-and-links-container">
                <FrameItems
                  frameData={frameDataSec0}
                  sectionId={firstSectionId}
                />
                {(isMobiledesign || isTabletDesign) && <a
                  id={`${firstSectionId}_mobile-link`}
                  className={`${firstSectionId}_mobile-link`}
                  target="_blank"
                  href=""
                  rel="noreferrer">Перейти 🠖</a>}
                <SocialLink
                  icons={firstSectionIcons}
                  rounded
                  handleMouseEnter={handleMouseEnter}
                  handleMouseLeave={handleMouseLeave}
                  handleClick={handleClick}
                  sectionId={firstSectionId}
                />
              </div>

              {(!isMobiledesign && !isTabletDesign && isTouch) && <a
                id={`${firstSectionId}_mobile-link`}
                className={`${firstSectionId}_mobile-link`}
                target="_blank"
                href=""
                rel="noreferrer">Перейти 🠖</a>}
            </div>
          </div>
        </section>
      }

      {
        !isMobiledesign && <section id="section_1" className="company-info">
          <div className="flex-wrapper">
            <div className="heading-container">
              <SpaceItLogo className="logo"
                width="150"
                height="150" />
              <h2 className="heading">Red Rocket Academy</h2>
            </div>
            <div className="links-container">
              <div className="frame-and-links-container">
                <FrameItems
                  frameData={frameDataSec1}
                  sectionId={secondSectionId}
                />
                {(isMobiledesign || isTabletDesign) && <a
                  id={`${secondSectionId}_mobile-link`}
                  className={`${secondSectionId}_mobile-link`}
                  target="_blank"
                  href=""
                  rel="noreferrer">Перейти 🠖</a>}
                <SocialLink
                  icons={secondSectionIcons}
                  rounded
                  handleMouseEnter={handleMouseEnter}
                  handleMouseLeave={handleMouseLeave}
                  handleClick={handleClick}
                  sectionId={secondSectionId}
                />
              </div>
              {(!isMobiledesign && !isTabletDesign && isTouch) && <a
                id={`${secondSectionId}_mobile-link`}
                className={`${secondSectionId}_mobile-link`}
                target="_blank"
                href=""
                rel="noreferrer">Перейти 🠖</a>}
            </div>
          </div>
        </section>
      }
    </main>
  )
}

