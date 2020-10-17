import React, {ChangeEvent, useRef, useState} from "react";
import styles from './Files.module.css';
import {Button} from "antd";

type FilesPropsType = {}

export const Files: React.FC<FilesPropsType> = (props) => {

    const [fileName, setFileName] = useState<File | null>(null);
    // const [fileModified, setFileModified] = useState();

    const inputRef = useRef<HTMLInputElement>(null);

    const upload = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.target)
        const newFile = e.target.files && e.target.files[0];

        if (newFile) {
            //fileName
            setFileName(newFile);
        }

        console.log(newFile)
        console.log('upload')
        console.log(inputRef)
        console.log(inputRef.current)
        console.log(inputRef && inputRef.current && inputRef.current.click())
    }

    return <div>
        <div style={{outline: '1px solid red'}}>
            <h2>Choose file</h2>
            <div>
                <input type="file" accept='.jpg, .jpeg, .png' multiple/>
            </div>
        </div>
        <div className={styles.Info}>
            <h2>File info</h2>
            <div>
                <img src="#" alt="file"/>
                <div><b>name:</b>{fileName && fileName.name}</div>
                <div><b>size:</b></div>
                <div><b>last modified:</b>{fileName && new Date(fileName.lastModified).toString()}</div>
                <div><b>type:</b>{fileName && fileName.type}</div>
            </div>
            <input type="file"
                   ref={inputRef}
                   onChange={upload}
                   style={{display: 'none'}}
                   accept='.jpg, .jpeg, .png'
            />
            <Button onClick={() => inputRef && inputRef.current && inputRef.current.click()}>Add File</Button>
        </div>
    </div>
}