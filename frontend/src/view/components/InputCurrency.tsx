import { NumericFormat } from "react-number-format";
export function InputCurrency() {
    return (
        <NumericFormat
            value={1000}
            thousandSeparator="."
            decimalSeparator=","
            prefix="R$ "
            displayType="input"
            onValueChange={(values) => {
                console.log(values.floatValue);
            }}
        />
    );
}
