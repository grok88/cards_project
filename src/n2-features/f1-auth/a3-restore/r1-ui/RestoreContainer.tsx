import React, {useState} from "react";
import {Restore} from "./Restore";
import {Status} from "../../../../n0-common/c1-ui/status/Status";

type RestoreContainerPropsType = {}

export const RestoreContainer: React.FC<RestoreContainerPropsType> = React.memo((props) => {
    const [email, setEmail] = useState<string>('grok88@tut.by');

    const onRestore = () => {
        //thunk
    }

    return (
        <div style={{
            width: '40%',
            outline: '1px solid red',
            margin: '0 auto',
            display: 'flex',
            flexDirection: "column",
            justifyContent: "center",
            alignItems: 'center'
        }}>
            <Status title={'Restore'} status={"idle"} error={null}/>
            <Restore email={email} setEmail={setEmail} onRestore={onRestore}/>
        </div>
    );
});