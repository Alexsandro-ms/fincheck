// @ts-expect-error: Swiper CSS types not available in current version...
import "swiper/css";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { TransactionsIcon } from "../../../../components/icons/TransactionsIcon";
import { FilterIcon } from "../../../../components/icons/FilterIcon";
import { Swiper, SwiperSlide } from "swiper/react";
import { MONTHS } from "../../../../../app/config/constantes";
import { SliderOptions } from "./SliderOptions";
import { SliderNavigation } from "./SliderNavigation";
import { formatCurrency } from "../../../../../app/utils/formatCurrency";
import { CategoryIcon } from "../../../../components/icons/categories/CategoryIcon";
import { useTransactionController } from "./useTransactionController";
import { cn } from "../../../../../app/utils/cn";

export default function Transactions() {
    const { areValuesVisible } = useTransactionController();
    return (
        <div className="bg-[#F1F3F5] rounded-2xl w-full h-full px-4 py-8 md:p-10 flex flex-col">
            <header>
                <div className="flex items-center justify-between">
                    <button className="flex items-center gap-2">
                        <TransactionsIcon />
                        <span className="text-sm text-gray-800 tracking-[-0.5px] font-medium">
                            Transações
                        </span>
                        <ChevronDownIcon className="text-gray-900" />
                    </button>
                    <button>
                        <FilterIcon />
                    </button>
                </div>
                <div className="mt-6 relative">
                    <Swiper slidesPerView={3} centeredSlides>
                        <SliderNavigation />
                        {MONTHS.map((month, index) => (
                            <SwiperSlide key={month}>
                                {({ isActive }) => (
                                    <SliderOptions
                                        isActive={isActive}
                                        month={month}
                                        index={index}
                                    />
                                )}
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </header>

            <div className="mt-4 space-y-2 flex-1 overflow-y-auto">
                <div className="bg-white p-4 rounded-2xl flex items-center justify-between gap-4">
                    <div className="flex-1 flex items-center gap-3">
                        <CategoryIcon type="expense" />

                        <div>
                            <strong className="bold tracking-[-0.5px] block">
                                Almoço
                            </strong>
                            <span className="text-sm text-[#868E96]">
                                04/12/2022
                            </span>
                        </div>
                    </div>
                    <span
                        className={cn(
                            "text-[#E03131] tracking-[-0.5px] font-medium",
                            !areValuesVisible && "blur-sm"
                        )}
                    >
                        - {formatCurrency(1200)}
                    </span>
                </div>
                <div className="bg-white p-4 rounded-2xl flex items-center justify-between gap-4">
                    <div className="flex-1 flex items-center gap-3">
                        <CategoryIcon type="income" />

                        <div>
                            <strong className="bold tracking-[-0.5px] block">
                                Salario
                            </strong>
                            <span className="text-sm text-[#868E96]">
                                04/12/2022
                            </span>
                        </div>
                    </div>
                    <span
                        className={cn(
                            "text-[#2F9E44] tracking-[-0.5px] font-medium",
                            !areValuesVisible && "blur-sm"
                        )}
                    >
                        + {formatCurrency(1200)}
                    </span>
                </div>
            </div>
        </div>
    );
}
