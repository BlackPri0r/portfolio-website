import { Dispatch, SetStateAction } from "react";

export type TabProps = {
    children: React.ReactNode,
    setPosition: Dispatch<SetStateAction<Position>>
};

export type SlidingTabCursorProps = {
    position: Position,
};

type Position = {
    left: number,
    width: number,
    opacity: number,
}