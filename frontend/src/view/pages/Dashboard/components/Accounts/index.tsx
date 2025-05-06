// @ts-expect-error: Swiper CSS types not available in current version...
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { EyeIcon } from "../../../../components/icons/EyeIcon";
import AccountCard from "./AccountCard";
import { SliderNavigation } from "./SliderNavigation";
import useAccountController from "./useAccountController";
import { formatCurrency } from "../../../../../app/utils/formatCurrency";
import { cn } from "../../../../../app/utils/cn";

export default function Accounts() {
    const {
        sliderState,
        setSliderState,
        windowWidth,
        areValuesVisible,
        toggleValuesVisibility,
    } = useAccountController();
    return (
        <div className="bg-[#087F5B] rounded-2xl w-full h-full p-10 flex flex-col">
            <div>
                <span className="tracking-[-0.5px] text-white block">
                    Saldo total
                </span>
                <div className="flex items-center gap-2">
                    <strong
                        className={cn(
                            "text-2xl tracking-[-1px] text-white",
                            !areValuesVisible && "blur-md"
                        )}
                    >
                        {formatCurrency(1093.23)}
                    </strong>
                    <button
                        className="w-8 h-8 flex items-center justify-center"
                        onClick={toggleValuesVisibility}
                    >
                        <EyeIcon open={!areValuesVisible} />
                    </button>
                </div>
            </div>
            <div className="flex-1 flex flex-col justify-end mt-10 md:mt-0">
                <div>
                    <Swiper
                        spaceBetween={16}
                        slidesPerView={windowWidth > 500 ? 2.1 : 1.1}
                        onSlideChange={(swiper) => {
                            setSliderState({
                                isBeginning: swiper.isBeginning,
                                isEnd: swiper.isEnd,
                            });
                        }}
                    >
                        <div
                            className="flex items-center justify-between mb-4"
                            slot="container-start"
                        >
                            <strong className="text-white tracking-[-1px] text-lg">
                                Minhas contas
                            </strong>
                            <SliderNavigation
                                isBeginning={sliderState.isBeginning}
                                isEnd={sliderState.isEnd}
                            />
                        </div>
                        <SwiperSlide>
                            <AccountCard
                                name="Nubank"
                                color="#7950F2"
                                balance={1000.23}
                                type="CASH"
                            />
                        </SwiperSlide>

                        <SwiperSlide>
                            <AccountCard
                                name="XP"
                                color="#333333"
                                balance={25000.23}
                                type="INVESTMENT"
                            />
                        </SwiperSlide>

                        <SwiperSlide>
                            <AccountCard
                                name="Carteira"
                                color="#0f0"
                                balance={250.23}
                                type="CASH"
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
}
