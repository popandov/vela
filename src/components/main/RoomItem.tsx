import { ReactNode } from "react";
import { AccordionItem } from "@chakra-ui/react";

interface Props {
    content: ReactNode;
    images: ReactNode
}

const RoomItem = ({content, images}: Props) => {
    <AccordionItem>
        {content}
        {images}
    </AccordionItem>
}

export default RoomItem;