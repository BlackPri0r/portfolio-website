import { Dispatch, SetStateAction } from "react";

export type TabProps = {
    children: React.ReactNode,
    setPosition: Dispatch<SetStateAction<Position>>,
    scrollItem: string | number | HTMLElement,
};

export type SlidingTabCursorProps = {
    position: Position,
};

type Position = {
    left: number,
    width: number,
    opacity: number,
}