import React from "react";
import Preloader from "../../../../n0-common/c1-ui/preloader/Preloader";

type PacksPropsType = {}

export const Packs: React.FC<PacksPropsType> = React.memo((props) => {
    return (
        <Preloader/>
    );
});