import React from 'react';
import { useTrail, a } from '@react-spring/web';
import useMeasure from "react-use-measure";
import { AccordionSectionProps } from ".";

import './AccordionSectionStyles.scss';
import { ShevroneIcon } from '../../../assets/svg/Shevron';

const AccordionSection = ({ isOpen, label, clickHandler, children, text, logo, showContent, showChevron }: AccordionSectionProps) => {
    const [measureRef, { height }] = useMeasure();

    const items = React.Children.toArray(children)
    const trail = useTrail(items.length, {
        config: { mass: 2, tension: 2000, friction: 400 },
        opacity: isOpen ? 1 : 0,
        height: isOpen ? height : 0,
        from: { opacity: 0, height: 0 },
    })
    return (
        <React.Fragment>
            <div className={"section-wrapper rounded-3xl bg-white mb-4"}>
                <a href='javascript:void(0);' onClick={() => showContent && clickHandler(label)} className="hash-link rounded-3xl bg-white pl-1 pr-3">
                    {logo}
                    {text}
                    {showChevron ? <ShevroneIcon className={`shevron ${isOpen ? "_rotated" : ""}`} /> : <span></span>}
                </a>
            </div>
            {trail.map((style, index) => (
                <a.div id={"accordion-section-body"} key={index} style={style} className={'section-body flex justify-center items-center'}>
                    <div className='accordion-section-body-content-wrapper' ref={measureRef}>
                        {isOpen && showContent && items[index]}
                    </div>
                </a.div>
            ))}

        </React.Fragment>

    )
}

export default AccordionSection;