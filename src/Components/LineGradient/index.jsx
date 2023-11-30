import useMediaQuery from "../../Hooks";
import { Line } from "./style";

const LineGradient = () => {
    const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");

    return <>{isAboveSmallScreens && <Line />}</>;
};

export default LineGradient;
