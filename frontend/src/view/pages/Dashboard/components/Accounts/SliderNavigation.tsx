import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { useSwiper } from "swiper/react";

interface SliderNavigationProps {
    isBeginning: boolean;
    isEnd: boolean;
}

export function SliderNavigation({
    isBeginning,
    isEnd,
}: SliderNavigationProps) {
    const swiper = useSwiper();
    return (
        <div>
            <button
                onClick={() => swiper.slidePrev()}
                className="py-3 pl-2.5 pr-3.5 rounded-full enabled:hover:bg-black/10 transition-colors disabled:opacity-40 cursor-pointer disabled:cursor-default"
                disabled={swiper.isBeginning || isBeginning}
            >
                <ChevronLeftIcon className="text-white w-6 h-6" />
            </button>
            <button
                onClick={() => swiper.slideNext()}
                className="py-3 pl-2.5 pr-3.5 rounded-full enabled:hover:bg-black/10 transition-colors disabled:opacity-40 cursor-pointer disabled:cursor-default"
                disabled={swiper.isEnd || isEnd}
            >
                <ChevronRightIcon className="text-white w-6 h-6" />
            </button>
        </div>
    );
}
