import React from 'react';
import { DropDownDataArgs } from '../../mock';
import { Layout } from './Layout';

export type MockData = {
    collapsedContent1: JSX.Element;
    collapsedContent2: JSX.Element;
    collapsedContent3: JSX.Element;
    firstSectionId: string;
    secondSectionId: string;
    iconsFirstSectionStrings: Array<{
        icon: string;
        link: string;
    }>;
    iconsSecondSectionStrings: Array<{
        icon: string;
        link: string;
    }>;
    personIconsStrings: Array<{
        icon: string;
        link: string;
    }>;
    frameDataSec0: Array<{
        id: string;
        src: string;
    }>;
    frameDataSec1: Array<{
        id: string;
        src: string;
    }>;
    ddData: ({ isTabletDesign, isMobiledesign, frameDataSec0, frameDataSec1, firstSectionId, secondSectionId, firstSectionIcons, secondSectionIcons, handleMouseEnter, handleMouseLeave, handleClick, collapsedContent1, collapsedContent2, collapsedContent3 }: DropDownDataArgs) => ({
        header: string;
        body: JSX.Element;
        label: string;
        linkTo: string;
        img: React.ReactNode;
        showContent: boolean;
        showChevron: boolean;
    } | {
        header: string;
        body: JSX.Element;
        linkTo?: undefined;
    })[]
}

export type LayoutProps = {
    childrem?: React.ReactNode | Array<React.ReactNode>;
    mockData: MockData;
}

export default Layout;