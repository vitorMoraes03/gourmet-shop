"use client"

import React from "react";
import { useState } from "react";

export const DropdownContext = React.createContext({
    hover: false,
    setHover: (value: boolean) => {},
});

interface DropdownProviderProps {
    children: React.ReactNode;
}

export function DropdownProvider({ children }: DropdownProviderProps) {
    const [hover, setHover] = useState(false);

    return (
        <DropdownContext.Provider value={{ hover, setHover }}>
            {children}
        </DropdownContext.Provider>
    );
}