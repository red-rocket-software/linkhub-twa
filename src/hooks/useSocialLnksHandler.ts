import { useState } from "react";
import { Constants } from "../constants/Constants";

const useSocialLinksHandlers = () => {
    const [prevHidenItem, setPrevHidenItem] = useState<string>();
    const [prevHidenItemHover, setPrevHidenItemHover] = useState<string>();

    const handleMouseEnter = (ev: React.MouseEvent<HTMLElement>) => {
        const target = ev.target as HTMLElement
        const id = target.id.split(" ");
        const itemId = id[0];
        const sectionId = id[1];
        const prevHidenFrame = prevHidenItemHover;

        if (prevHidenFrame) {
            const prevFrameItem = document.getElementById(`${sectionId}_frame_${prevHidenFrame}`);
            prevFrameItem?.classList.add("_hiden");
        }
        const defaultHoveredItem = document.getElementById(`${sectionId}_frame_email`)
        defaultHoveredItem && defaultHoveredItem.classList.add("_hiden")

        const frameItem = document.getElementById(`${sectionId}_frame_${itemId}`);
        frameItem?.classList.remove("_hiden")

        const defaultHoveredIcon = document.getElementById(`email _icon ${sectionId}`);
        defaultHoveredIcon && defaultHoveredIcon.classList.remove(`_default-hovered`)



        setPrevHidenItemHover(itemId);
    };

    const handleMouseLeave = (ev: React.MouseEvent<HTMLElement>) => {
        const target = ev.target as HTMLElement;
        const id = target.id.split(" ");
        const itemId = id[0];
        const sectionId = id[1];
        const prevHidenFrame = prevHidenItemHover;

        if (prevHidenFrame) {
            const prevFrameItem = document.getElementById(`${sectionId}_frame_${prevHidenFrame}`);
            prevFrameItem?.classList.add("_hiden");
        }
        const frameItem = document.getElementById(`${sectionId}_frame_${itemId}`);
        frameItem?.classList.add("_hiden")

        const defaultHoveredItem = document.getElementById(`${sectionId}_frame_email`)
        defaultHoveredItem && defaultHoveredItem.classList.remove("_hiden")

        const defaultHoveredIcon = document.getElementById(`email _icon ${sectionId}`);
        defaultHoveredIcon && defaultHoveredIcon.classList.add(`_default-hovered`)
    }

    const handleClick = (ev: React.MouseEvent<HTMLAnchorElement>) => {
        const target = ev.target as HTMLAnchorElement;
        const id = target.id.split(" ");
        const itemId = id[0];
        const sectionId = id[2] || id[1];

        const prevHidenFrame = prevHidenItem;
        if (prevHidenFrame) {
            const prevFrameItem = document.getElementById(`${sectionId}_frame_${prevHidenFrame}`);
            prevFrameItem?.classList.add("_hiden");
        }

        setPrevHidenItem(itemId);

        const frameItem = document.getElementById(`${sectionId}_frame_${itemId}`);
        frameItem?.classList.remove("_hiden");

        if (itemId !== 'email') {
            const defaultHoveredItem = document.getElementById(`${sectionId}_frame_email`);
            defaultHoveredItem && defaultHoveredItem.classList.add("_hiden");
        }

        const defaultHoveredIcon = document.getElementById(`email _icon ${sectionId}`);
        defaultHoveredIcon && defaultHoveredIcon.classList.remove(`_default-hovered`);
        const link = document.getElementById(`${sectionId}_mobile-link`) as HTMLAnchorElement
        link?.classList.add("_visible");

        const linkName = `${itemId.toUpperCase()}_${sectionId}_LINK`;
        link.href = Constants[`${linkName}`];
    }

    return [handleMouseEnter, handleMouseLeave, handleClick]
}

export default useSocialLinksHandlers;