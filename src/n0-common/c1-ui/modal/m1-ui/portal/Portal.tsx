import React from "react";
import ReactDOM from 'react-dom';


type ModalPropsType = {
    children: React.ReactNode
}

class Portal extends React.Component<ModalPropsType> {
    el = document.createElement('div');

    componentDidMount() {
        document.body.appendChild(this.el);
    }

    render() {
        const {children} = this.props;
        return ReactDOM.createPortal(children, this.el)
    }
}

export default Portal;