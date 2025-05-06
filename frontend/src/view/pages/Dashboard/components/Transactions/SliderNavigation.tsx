import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { useSwiper } from "swiper/react";

export function SliderNavigation() {
    const swiper = useSwiper();
    return (
        <>
            <button
                className="absolute left-0 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center bg-gradient-to-r from-[#f1f2f3] to-transparent w-12 h-12 cursor-pointer"
                onClick={() => swiper.slidePrev()}
            >
                <ChevronLeftIcon className="w-6 h-6 text-gray-800" />
            </button>
            <button
                className="absolute right-0 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center bg-gradient-to-l from-[#f1f2f3] to-transparent w-12 h-12 cursor-pointer"
                onClick={() => swiper.slideNext()}
            >
                <ChevronRightIcon className="w-6 h-6 text-gray-800" />
            </button>
        </>
    );
}
