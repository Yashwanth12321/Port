'use client';

import {useState} from "react";

import {Preloader} from "@/components/Preloader/modern/preloader"

import { AnimatePresence } from "motion/react";

export default function Loader() {
    const [isLoading, setIsLoading] = useState(true);


    return (
        <AnimatePresence mode="wait">
            {isLoading && <Preloader />}
        </AnimatePresence>
    )
}
