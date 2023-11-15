// @ts-nocheck

import { SocialLinksProps } from "."
import useWindowDimensions from "../../hooks/useWindowDimensions "

import './SocialLinks.scss'


const SocialLink = ({ icons, rounded, handleMouseEnter, handleMouseLeave, handleClick, sectionId }: SocialLinksProps<HTMLLIElement>) => {
    const { height, width } = useWindowDimensions()
    // eslint-disable-next-line 
    const isTouch = (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0));
    const isTablet = Number(width) < 835 ? true : false
    const isMobiledesign = Number(width) < 500 ? true : false

    return (<ul className={`social-links-container  ${rounded ? "_rounded" : ""}`}>
        {icons.map(({ icon, link }, idx) => {
            const lisItemClassId = icon?.props?.id.split(" ")[0]
            if (isTouch || isTablet || isMobiledesign) {
                return (
                    <li
                        onClick={handleClick}
                        id={`${lisItemClassId} ${sectionId}`}
                        key={idx}
                        className={`social-links-list-item  ${lisItemClassId} ${rounded ? "_rounded" : ""}`}
                    >
                        {rounded ? (<span
                            className={`icon-container`}
                            id={`${lisItemClassId} link ${sectionId}`}
                            target="_blank" href={`${link}`} rel="noreferrer">
                            {icon}
                        </span>) : (<a
                            className={`icon-container`}
                            id={`${lisItemClassId} link ${sectionId}`}
                            target="_blank" href={`${link}`} rel="noreferrer">
                            {icon}
                        </a>)
                        }

                    </li>)
            }
            return (
                <li
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    id={`${lisItemClassId} ${sectionId}`}
                    key={idx}
                    className={`social-links-list-item  ${lisItemClassId} ${rounded ? "_rounded" : ""}`}
                >
                    <a
                        className={`icon-container`}
                        id={`${lisItemClassId} link ${sectionId}`}
                        target="_blank" href={`${link}`} rel="noreferrer">
                        {icon}
                    </a>
                </li>)
        })}
    </ul >)
}

export default SocialLink;