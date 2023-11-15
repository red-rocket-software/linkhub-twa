
import { useState } from "react";
import { AccordionProps } from ".";


const Accordion = ({ render }: AccordionProps) => {
    const initilaState: { [key: string]: boolean } = {
        youtube1: false,
        youtube2: false,
        youtube3: false,
    }
    const [isOpen, setIsOpen] = useState(initilaState);
    const handleSectionClick = (label: string) => {
        setIsOpen({ ...initilaState, [label]: !isOpen[label] })
    }

    return (
        <div className="accordion-wrapper">
            {render && render(isOpen, handleSectionClick)}
        </div>
    )
}

export default Accordion;