export type frameItem = {
    id: string;
    src: string;
}

export type FrameItemsProps = {
    sectionId: string
    frameData: Array<frameItem>
}