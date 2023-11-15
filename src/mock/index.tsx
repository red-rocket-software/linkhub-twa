import { RedRocketLogo } from "../assets/svg/RedRocketLogo";
import { SpaceItLogo } from "../assets/svg/SpaceItLogo";
import FrameItems from "../components/Frame-items/FrameItems";
import { IconObject } from "../components/Social-links";
import { Constants } from "../constants/Constants";
import getSvg from "../utils/getSvg";
import MailFrameRr from '../assets/png/iframes/red-rocket/MailFrameRr.png';
import linkedinFrameRr from '../assets/png/iframes/red-rocket/linkedinFrameRr.png';
import FacebookFrameRr from '../assets/png/iframes/red-rocket/FacebookFrameRr.png'
import IgIFrameRr from '../assets/png/iframes/red-rocket/IgIFrameRr.png'
import SiteFrameRr from '../assets/png/iframes/red-rocket/SiteFrameRr.png'
import ClutchFrameRr from '../assets/png/iframes/red-rocket/ClutchFrameRr.png'
import MailFrameSp from '../assets/png/iframes/space-it/MailFrameSp.png';
import linkedinFrameSp from '../assets/png/iframes/space-it/LinkedInFrameSp.png';
import FacebookFrameSp from '../assets/png/iframes/space-it/FacebookFrameSp.png'
import IgIFrameSp from '../assets/png/iframes/space-it/InstagramFrameSp.png'
import SiteFrameSp from '../assets/png/iframes/space-it/WebsiteFrameSp.png'
import YoutubeFrameSp from '../assets/png/iframes/space-it/YoutubeFrameSp.png'
import SocialLink from "../components/Social-links/SocialLinks";


export type DropDownDataArgs = {
    isTabletDesign: boolean;
    isMobiledesign: boolean;
    frameDataSec0: Array<{
        id: string;
        src: any;
    }>;
    frameDataSec1: Array<{
        id: string;
        src: any;
    }>;
    firstSectionId: string;
    secondSectionId: string;
    firstSectionIcons: Array<IconObject>;
    secondSectionIcons: Array<IconObject>;
    handleMouseEnter: (ev: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
    handleMouseLeave: (ev: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
    handleClick: (ev: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
    collapsedContent1: JSX.Element;
    collapsedContent2: JSX.Element;
    collapsedContent3: JSX.Element;
}

export const MOCK_DATA = {
    nikitaOsaulenko:
    {
        collapsedContent1: (<iframe width={"340"} height={"265"} src="https://www.youtube.com/embed/P3vzq4diuE0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>),
        collapsedContent2: (<iframe className="lazzy-iframe" width={"340"} height={"265"} src="https://www.youtube.com/embed/FLcjcZu5H7g" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>),
        collapsedContent3: (<iframe className="lazzy-iframe" width={"340"} height={"265"} src="https://www.youtube.com/embed/uexFfWDz2gc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>),
        firstSectionId: "section_0",
        secondSectionId: "section_1",
        iconsFirstSectionStrings: [{ icon: Constants.EMAIL, link: Constants.EMAIL_section_0_LINK }, { icon: Constants.FACEBOOK, link: Constants.FACEBOOK_section_0_LINK }, { icon: Constants.INSTAGRAM, link: Constants.INSTAGRAM_section_0_LINK }, { icon: Constants.LINKEDIN, link: Constants.LINKEDIN_section_0_LINK }, { icon: Constants.WEBSITE, link: Constants.WEBSITE_section_0_LINK }, { icon: Constants.CLUTCH, link: Constants.CLUTCH_section_0_LINK }],
        iconsSecondSectionStrings: [{ icon: Constants.EMAIL, link: Constants.EMAIL_section_1_LINK }, { icon: Constants.FACEBOOK, link: Constants.FACEBOOK_section_1_LINK }, { icon: Constants.INSTAGRAM, link: Constants.INSTAGRAM_section_1_LINK }, { icon: Constants.LINKEDIN, link: Constants.LINKEDIN_section_1_LINK }, { icon: Constants.WEBSITE, link: Constants.WEBSITE_section_1_LINK }],
        personIconsStrings: [{ icon: Constants.INSTAGRAM, link: Constants.person_instagram }, { icon: Constants.FACEBOOK, link: Constants.person_facebook }, { icon: Constants.LINKEDIN, link: Constants.person_linkedin }, { icon: Constants.TELEGRAM, link: Constants.person_telegram }, { icon: Constants.TWITTER, link: Constants.person_twitter }, { icon: Constants.EMAIL, link: Constants.person_email }, { icon: Constants.TIKTOK, link: Constants.person_tiktok }],
        frameDataSec0: [
            {
                id: 'email',
                src: MailFrameRr
            },
            {
                id: 'linkedin',
                src: linkedinFrameRr
            },
            {
                id: 'facebook',
                src: FacebookFrameRr
            },
            {
                id: 'instagram',
                src: IgIFrameRr
            },
            {
                id: 'website',
                src: SiteFrameRr
            },
            {
                id: 'clutch',
                src: ClutchFrameRr
            },

        ],
        frameDataSec1: [
            {
                id: 'email',
                src: MailFrameSp
            },
            {
                id: 'linkedin',
                src: linkedinFrameSp
            },
            {
                id: 'facebook',
                src: FacebookFrameSp
            },
            {
                id: 'instagram',
                src: IgIFrameSp
            },
            {
                id: 'website',
                src: SiteFrameSp
            },
            {
                id: 'youtube',
                src: YoutubeFrameSp
            },
        ],
        ddData: ({ isTabletDesign, isMobiledesign, frameDataSec0, frameDataSec1, firstSectionId, secondSectionId, firstSectionIcons, secondSectionIcons, handleMouseEnter, handleMouseLeave, handleClick, collapsedContent1, collapsedContent2, collapsedContent3 }: DropDownDataArgs) => [
            {
                header: "Red Rocket Software",
                body: (<section id="section_0_dropdown-content" >
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
                    </div>
                </section>),
                label: "rr",
                linkTo: '#section_0',
                img: getSvg({ svgName: Constants.RED_ROCKET_SM }),
                showContent: isMobiledesign,
                showChevron: isMobiledesign,
            },
            {
                header: "Red Rocket Academy",
                body: (<section id="section_1_dropdown-content" >
                    <div className="heading-container">
                        <SpaceItLogo className="logo"
                            width={`${isTabletDesign ? 125 : 150}`}
                            height={`${isTabletDesign ? 125 : 150}`}
                        />
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
                    </div>
                </section>),
                label: "sp",
                linkTo: '#section_1',
                img: getSvg({ svgName: Constants.SPACE_IT_SM }),
                showContent: isMobiledesign,
                showChevron: isMobiledesign,
            },
            {
                header: "Web проти додатків",
                body: collapsedContent1,
                label: "youtube1",
                img: getSvg({ svgName: Constants.YOUTUBE_SM }),
                showContent: true,
                showChevron: true,
            },
            {
                header: `Інтерв'ю`,
                body: collapsedContent2,
                label: "youtube2",
                img: getSvg({ svgName: Constants.YOUTUBE_SM }),
                showContent: true,
                showChevron: true,
            },
            {
                header: 'Як почати в IT',
                body: collapsedContent3,
                label: "youtube3",
                img: getSvg({ svgName: Constants.YOUTUBE_SM }),
                showContent: true,
                showChevron: true,
            },
        ]
    }

}