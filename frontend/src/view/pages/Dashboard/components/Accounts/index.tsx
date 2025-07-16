// @ts-expect-error: Swiper CSS types not available in current version...
import { PlusIcon } from "@radix-ui/react-icons";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { cn } from "../../../../../app/utils/cn";
import { formatCurrency } from "../../../../../app/utils/formatCurrency";
import { EyeIcon } from "../../../../components/icons/EyeIcon";
import { Spinner } from "../../../../components/Spinner";
import AccountCard from "./AccountCard";
import { SliderNavigation } from "./SliderNavigation";
import useAccountController from "./useAccountController";

export default function Accounts() {
    const {
        sliderState,
        setSliderState,
        windowWidth,
        areValuesVisible,
        toggleValuesVisibility,
        isLoading,
        accounts,
        openNewAccountModal,
    } = useAccountController();
    return (
        <div className="bg-[#087F5B] rounded-2xl w-full h-full p-10 flex flex-col">
            {isLoading && (
                <div className="flex items-center justify-center w-full h-full">
                    <Spinner className="w-10 h-10" />
                </div>
            )}
            {!isLoading && (
                <>
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
                        {accounts.length === 0 && (
                            <>
                                <div className="mb-4" slot="container-start">
                                    <strong className="text-white tracking-[-1px] text-lg">
                                        Minhas contas
                                    </strong>
                                </div>
                                <button
                                    className="mt-4 h-52 rounded-2xl border-2 cursor-pointer border-dashed border-[#12B886] flex flex-col items-center justify-center gap-4 text-white"
                                    onClick={openNewAccountModal}
                                >
                                    <div className="w-11 h-11 rounded-full border-2 border-white border-dashed flex items-center justify-center">
                                        <PlusIcon className="w-6 h-6" />
                                    </div>
                                    <span className="tracking-[-0.5px] font-medium block w-32 text-center">
                                        Cadastre uma nova conta
                                    </span>
                                </button>
                            </>
                        )}
                        {accounts.length > 0 && (
                            <div>
                                <Swiper
                                    spaceBetween={16}
                                    slidesPerView={
                                        windowWidth > 500 ? 2.1 : 1.1
                                    }
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
                                            isBeginning={
                                                sliderState.isBeginning
                                            }
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
                        )}
                    </div>
                </>
            )}
        </div>
    );
}
