import React from "react";
import Preloader from "../../../../n0-common/c1-ui/preloader/Preloader";

type CardsPropsType = {}

export const Cards: React.FC<CardsPropsType> = React.memo((props) => {
    return (
        <Preloader/>
    );
});