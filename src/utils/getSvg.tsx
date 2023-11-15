import React from "react";
import { TGetSvgProps } from ".";
import { RedRocketSmIcon } from "../assets/svg/dropdown-icons/RedRocketSm";
import { EmailIcon } from "../assets/svg/social-link-icons/Email";
import { FacebookIcon } from "../assets/svg/social-link-icons/Facebook";
import { InstagramIcon } from "../assets/svg/social-link-icons/Instagram";
import { LinkedInIcon } from "../assets/svg/social-link-icons/LinkedIn";
import { TikTokIcon } from "../assets/svg/social-link-icons/TikTok";
import SpaceItLogoSm from "../assets/png/dropdown-icons/SpaceItLogoSm.png";
import YoutubrLogoSm from "../assets/png/dropdown-icons/YoutubeIconSm.png";
import { TwitteeIcon } from "../assets/svg/social-link-icons/Twitter";
import { WebsiteIcon } from "../assets/svg/social-link-icons/Website";
import { YouTubeIcon } from "../assets/svg/social-link-icons/YouTube";
import { Constants } from "../constants/Constants";
import { HandIcon } from "../assets/svg/social-link-icons/HandIcon";
import { TelegramIcon } from "../assets/svg/social-link-icons/TelegramIcon";
import { ClutchIcon } from "../assets/svg/social-link-icons/ClutchIcont";

// to do rewrite on swith statement

const getSvg = ({ svgName, className, id }: TGetSvgProps): React.ReactNode => {
    const chosenName = svgName.toLowerCase()
    if (chosenName === Constants.EMAIL) {
        return <EmailIcon id={id && id} className={className} />
    }
    else if (chosenName === Constants.FACEBOOK) {
        return <FacebookIcon id={id && id} className={className} />
    }
    else if (chosenName === Constants.HAND) {
        return <HandIcon id={id && id} className={className} />
    }
    else if (chosenName === Constants.INSTAGRAM) {
        return <InstagramIcon id={id && id} className={className} />
    }
    else if (chosenName === Constants.LINKEDIN) {
        return <LinkedInIcon id={id && id} className={className} />
    }
    else if (chosenName === Constants.TELEGRAM) {
        return <TelegramIcon id={id && id} className={className} />
    }
    else if (chosenName === Constants.TIKTOK) {
        return <TikTokIcon id={id && id} className={className} />
    }
    else if (chosenName === Constants.TWITTER) {
        return <TwitteeIcon id={id && id} className={className} />
    }
    else if (chosenName === Constants.WEBSITE) {
        return <WebsiteIcon id={id && id} className={className} />
    }
    else if (chosenName === Constants.YOUTUBE) {
        return <YouTubeIcon id={id && id} className={className} />
    }
    else if (chosenName === Constants.RED_ROCKET_SM) {
        return <RedRocketSmIcon id={id && id} className={className} />
    }
    else if (chosenName === Constants.CLUTCH) {
        return <ClutchIcon id={id && id} className={className} />
    }
    else if (chosenName === Constants.SPACE_IT_SM) {
        return <img id={`${Constants.SPACE_IT_SM}`}
            className={className}
            src={SpaceItLogoSm} alt="telegram icon"
            width="40" height="40" />
    }
    else if (chosenName === Constants.YOUTUBE_SM) {
        return <img id={`${Constants.YOUTUBE_SM}`}
            className={className}
            src={YoutubrLogoSm} alt="telegram icon"
            width="40" height="40" />
    }
    else throw new Error('please insert svg name')
}

export default getSvg;