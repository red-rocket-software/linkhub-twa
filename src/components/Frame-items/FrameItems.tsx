
import React from "react"
import { FrameItemsProps } from "."
import useWindowDimensions from "../../hooks/useWindowDimensions ";

import './FrameItems.scss';

const FrameItems = ({ frameData, sectionId }: FrameItemsProps) => {
    const { width } = useWindowDimensions()
    const isMobiledesign = Number(width) < 500 ? true : false

    return <React.Fragment >
        {
            frameData.map((frameItem, idx) => {
                if (idx === 0) {
                    return (<img key={idx}
                        id={`${sectionId}_frame_${frameItem.id}`}
                        className={`${sectionId}_frame ${isMobiledesign ? '_hiden' : ''}`}
                        src={frameItem.src}
                        alt={`${frameItem.id}-iframe`}
                    />)
                }
                return (<img key={idx}
                    id={`${sectionId}_frame_${frameItem.id}`}
                    className={`${sectionId}_frame _hiden`}
                    src={frameItem.src}
                    alt={`${frameItem.id}-iframe`}
                />)
            })
        }
    </React.Fragment>
}

export default FrameItems