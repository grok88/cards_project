import React, {ChangeEvent, useRef, useState} from "react";
import styles from './Files.module.css';
import {Button} from "antd";
import axios from 'axios';

type FilesPropsType = {}

export const writeFile = (fileName:
                              // string
                              any
    , value: string) => {
    const link = document.createElement("a");
    link.href = "data:text/plain;content-disposition=attachment;filename=file," + value;
    link.download = fileName;
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

export const Files: React.FC<FilesPropsType> = (props) => {

    const [fileName, setFileName] = useState<File | null>(null);
    // url file
    const [fileUrl, setFileUrl] = useState();
    // read file contain
    const [code, setCode] = useState<boolean>(false);
    // Отображение текстового файла
    const [file64, setFile64] = useState();

    const [base64, setBase64] = useState<boolean>(true);
    // textAREA flux
    const [text, setText] = useState<string>('');
    // для отправки файла на сервер
    const [fileData, setFileData] = useState();
    const [test, setTest] = useState();

    const inputRef = useRef<HTMLInputElement>(null);

    // Defined file size
    const returnFileSize = (n: number) => {
        if (n < 1024) {
            return n + 'bytes';
        } else if (n > 1024 && n < 1048576) {
            return (n / 1024).toFixed(2) + 'KB';
        } else if (n > 1048576) {
            return (n / 1048576).toFixed(2) + 'MB';
        }
    };
    // для отправки файла на сервер
    const send = () => {
        axios.post('https://dry-forest-56016.herokuapp.com/file', fileData);
    }
    // для получения файла с сервера

    const getFile = (url: string, fileName: string) => {
        axios.get(url, {responseType: 'blob'}) // настройки запроса - 'blob' - типо объект, кот является родоначальником всех файлов в JS
            .then(({data}) => {

                const blob = new Blob([data], {type: 'image/jpeg'});

                // создаем ссылку на file
                const dowloadUrl = window.URL.createObjectURL(blob);
                setFileUrl(dowloadUrl);

                // создаем link
                const link = document.createElement('a');

                // присваиваем href
                link.href = dowloadUrl;

                //добавляем атрибуты тегу - загрузочный , имя файла
                link.setAttribute('download', fileName);

                // ..скрываем link
                link.style.display = 'none';

                // добавляем
                document.body.appendChild(link);

                //click
                link.click();

                //delete
                document.body.removeChild(link);
            });
    }

    const upload = (e: ChangeEvent<HTMLInputElement>) => {

        const reader = new FileReader();
        // FormData - Для отправки на сервер файла
        const formData = new FormData();

        const newFile = e.target.files && e.target.files[0];

        if (newFile) {
            //fileName
            setFileName(newFile);
            //url
            setFileUrl(window.URL.createObjectURL(newFile));

            // ..отправка файла на сервер
            formData.append('myFile', newFile, newFile.name);
            setFileData(formData);

            //read file
            if (code) {
                reader.onload = () => {
                    setFile64(reader.result)
                }
            }
            if (base64) {
                reader.readAsDataURL(newFile);
            } else {
                reader.readAsText(newFile);
            }
        }
    }

    return <div>
        <div style={{outline: '1px solid red', padding: '10px'}}>
            <h2>Only simple example - choose file - not upload</h2>
            <div>
                <input type="file" accept='.jpg, .jpeg, .png,' multiple/>
            </div>
        </div>
        <div className={styles.info} style={{outline: '1px solid red', padding: '10px'}}>
            <h2>File info</h2>
            <div>
                <div>
                    <label>
                        reader
                        <input type="checkbox" checked={code} onChange={(e) => setCode(e.currentTarget.checked)}/>
                    </label>
                </div>
                <div>
                    <label>
                        base64
                        <input type="checkbox" checked={base64} onChange={(e) => setBase64(e.currentTarget.checked)}/>
                    </label>
                </div>
            </div>
            <div>
                {test && test}
                <img src={fileUrl} alt="file"/>
                <div><b>name:</b>{fileName && fileName.name}</div>
                <div><b>size:</b>{fileName && returnFileSize(fileName.size)}</div>
                <div><b>last modified:</b>{fileName && new Date(fileName.lastModified).toString()}</div>
                <div><b>type:</b>{fileName && fileName.type}</div>
            </div>
            <input type="file"
                   ref={inputRef}
                   onChange={upload}
                   style={{display: 'none'}}
                   accept='.jpg, .jpeg, .png ,.txt'
            />
            <Button onClick={() => inputRef && inputRef.current && inputRef.current.click()}>Add File</Button>

        </div>
        <div style={{outline: '1px solid red', padding: '10px'}}>
            <h2>File actions</h2>
            <div>
                <textarea value={text} onChange={(e) => setText(e.currentTarget.value)}></textarea>
            </div>
            <div>
                <b>Text file contain:</b>
                <pre>
                    {file64}
                </pre>
            </div>
            <div>
                <button onClick={() => {
                    writeFile(fileName && fileName.name, text + '\r\n' + file64)
                }}>Save
                </button>
                <button onClick={send}>Send</button>
                <button onClick={() => {
                    getFile('https://dry-forest-56016.herokuapp.com/file', 'newFile.jpg')
                }}>getFile
                </button>
            </div>
        </div>
    </div>
}