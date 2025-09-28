import { Slide, Fade } from "@mui/material";
import type { ReactElement } from "react";
import { useEffect, useState } from "react";
import { useScreenSize } from "../../../utilities/getScreenSize";

export const SlideIn = ({ children, direction, duration, delay }: { children: ReactElement, direction?: "right" | "left" | "up" | "down", duration?: number, delay?: number }) => {
    const [show, setShow] = useState<boolean>(false);
    const { width } = useScreenSize();

    useEffect(() => {
        setShow(true)
    }, [])

    return (
        <>
            {width >= 900 ?
                <Slide in={show} direction={direction ? direction : 'down'} timeout={duration ? duration : 1000} style={{ transitionDelay: show ? `${delay ? delay : '0'}ms` : '0ms' }}>
                    <Fade in={show} timeout={1000}>
                        {children}
                    </Fade>
                </Slide>
                :
                children}
        </>
    )
}