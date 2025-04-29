import { useState } from "react";

export default function useAccountController() {
    const [sliderState, setSliderState] = useState({
        isBeginning: true,
        isEnd: false,
    });

    return {
        sliderState,
        setSliderState,
    };
}
