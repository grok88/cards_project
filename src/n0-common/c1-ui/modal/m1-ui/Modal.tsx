import React from "react";
import styles from './Modal.module.css';
import {CloseSquareOutlined} from "@ant-design/icons";
import Portal from "./portal/Portal";

type ModalPropsType = {
    title: string;
    children: React.ReactNode;
    onClose: () => void;
    isOpen: boolean;
}

export const Modal: React.FC<ModalPropsType> = React.memo((props) => {
    const {title, children, onClose, isOpen} = props;

    return (
        <>
            {isOpen &&
			<Portal>
				<div className={styles.modalWrapper}>
					<div className={styles.modalBackDrop} onClick={onClose}></div>
					<div className={styles.modalBox}>
						<div style={{display: 'flex', justifyContent: 'space-between'}}>
							<h2>{title}</h2>
							<CloseSquareOutlined style={{fontSize: '32px', color: '#08c'}} onClick={onClose}/>
						</div>
						<div>
                            {children}
						</div>
					</div>
				</div>

			</Portal>
            }
        </>
    );
});
