import React, {useState} from "react";
import Slider from "antd/lib/slider";
import {useDispatch, useSelector} from "react-redux";
import {setMaxCardsCount, setMinCardsCount, setSearchInputValue} from "../s2-bll/searchPanelActions";
import {AppRootStateType} from "../../../../n1-main/m2-bll/store";
import {searchPanelInitialStateType} from "../s2-bll/searchPanelInitialState";
import {packTC} from "../../p1-packs/p2-bll/packsThunk";


type SearchPanelType = {
    minCardsCount: number;
    maxCardsCount: number;
    currentPage: number;
    pageSize: number
}

export const SearchPanel: React.FC<SearchPanelType> = React.memo((props) => {
    const {searchValue, maxCardsCount, minCardsCount} = useSelector<AppRootStateType, searchPanelInitialStateType>(state => state.search);

    const dispatch = useDispatch();
    const [value, setValue] = useState('');

    function onChange([val1, val2]: Array<number>) {
        dispatch(setMinCardsCount(val1));
    }

    function onAfterChange([val1, val2]: Array<number>) {
        dispatch(setMaxCardsCount(val2));
    }


    const onSearch = () => {
        dispatch(setSearchInputValue(value));
        dispatch(packTC(props.pageSize, props.currentPage, minCardsCount, maxCardsCount, value));
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
                        onChange={onChange}
                        onAfterChange={onAfterChange}/>
            </div>
            <div>
                <button onClick={onSearch}>Search</button>
            </div>

        </div>
    );
});