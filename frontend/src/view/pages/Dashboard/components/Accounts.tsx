// @ts-expect-error: Swiper CSS types not available in current version...
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { EyeIcon } from "../../../components/icons/EyeIcon";
import AccountCard from "./AccountCard";
import { AccountSliderNavigation } from "./AccountSliderNavigation";

export default function Accounts() {
    return (
        <div className="bg-[#087F5B] rounded-2xl w-full h-full p-10 flex flex-col">
            <div>
                <span className="tracking-[-0.5px] text-white block">
                    Saldo total
                </span>
                <div className="flex items-center gap-2">
                    <strong className="text-2xl tracking-[-1px] text-white">
                        R$ 100,00
                    </strong>
                    <button className="w-8 h-8 flex items-center justify-center">
                        <EyeIcon open />
                    </button>
                </div>
            </div>
            <div className="flex-1 flex flex-col justify-end">
                <div>
                    <Swiper spaceBetween={16} slidesPerView={2.1}>
                        <div
                            className="flex items-center justify-between mb-4"
                            slot="container-start"
                        >
                            <strong className="text-white tracking-[-1px] text-lg">
                                Minhas contas
                            </strong>
                            <AccountSliderNavigation />
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
