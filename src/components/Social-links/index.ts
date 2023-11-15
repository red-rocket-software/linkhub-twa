import React from "react";

export type TIsHoveringArgs = {
    'instagram': boolean;
    'email': boolean;
    'facebook': boolean;
    'linkedin': boolean;
    'website': boolean;
    'youtube': boolean;
}
export type TSocialLinksProps = {
    className?: string;
    rounded?: boolean;
    // nodeRef?: ref;
    id?: string;
}

export type IconObject = {
    icon: React.ReactElement;
    link: string;
}

export type SocialLinksProps = {
    icons: Array<IconObject>;
    rounded?: boolean;
    handleMouseEnter: (ev: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
    handleMouseLeave: (ev: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
    handleClick: (ev: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
    sectionId: string;
}