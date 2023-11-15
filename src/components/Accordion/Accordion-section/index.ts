import React from "react";

export type AccordionSectionProps = {
    logo: React.ReactNode;
    label: string;
    text: string;
    isOpen: boolean;
    clickHandler: (label: string) => void;
    children: React.ReactNode | Array<React.ReactNode>;
    linkTo?: string;
    showContent: boolean;
    showChevron: boolean;
}