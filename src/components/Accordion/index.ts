export type AccordionProps = {
    render?: (state: { [key: string]: boolean }, clickHandler: (label: string) => void) => React.ReactNode;
}