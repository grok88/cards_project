import React, {useState} from "react";
import Slider from "antd/lib/slider";
import {useDispatch, useSelector} from "react-redux";
import {setMaxCardsCount, setMinCardsCount, setSearchInputValue} from "../s2-bll/searchPanelActions";
import {AppRootStateType} from "../../../../n1-main/m2-bll/store";
import {searchPanelInitialStateType} from "../s2-bll/searchPanelInitialState";
import {packTC} from "../../p1-packs/p2-bll/packsThunk";
import {Button} from "antd";


type SearchPanelType = {
    minCardsCount: number;
    maxCardsCount: number;
    currentPage: number;
    pageSize: number;
    onChange:([val1, val2]: Array<number>) => void;
    onSearchSubmit:(value:string)=>void;
}

export const SearchPanel: React.FC<SearchPanelType> = React.memo((props) => {
    const {searchValue, maxCardsCount, minCardsCount} = useSelector<AppRootStateType, searchPanelInitialStateType>(state => state.search);

    const dispatch = useDispatch();
    const [value, setValue] = useState('');

    // function onChange([val1, val2]: Array<number>) {
    //     dispatch(setMinCardsCount(val1));
    //     dispatch(setMaxCardsCount(val2));
    // }

    // function onAfterChange([val1, val2]: Array<number>) {
    //     dispatch(setMaxCardsCount(val2));
    // }
    const onSearch = () => {
        dispatch(setSearchInputValue(value));
        props.onSearchSubmit(value);
        // dispatch(packTC(props.pageSize, props.currentPage, minCardsCount, maxCardsCount, value));
    }

    return (
        <div style={{display: 'flex', justifyContent: 'space-evenly', height: '200px', alignItems: "center"}}>
            <div>
                <label>
                    Search
                    <input type="text" value={value} onChange={e => setValue(e.currentTarget.value)}/>
                </label>
            </div>
            <div style={{width: "500px"}}>
                <Slider range tooltipVisible={true} step={1} defaultValue={[props.minCardsCount, props.maxCardsCount]}
                        onChange={([val1, val2]) => props.onChange([val1, val2])}
                        // onAfterChange={onAfterChange}
                />
            </div>
            <div>
                <Button onClick={onSearch}>Search</Button>
            </div>

        </div>
    );
});