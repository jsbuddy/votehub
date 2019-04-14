import React from "react";
import ReactDom from "react-dom";

interface IToast {
    id: number;
    title: string;
    message: string;
    timeout: number;
}
export default class Toast extends React.Component {
    state = {
        toasts: [],
    }

    toast({ title = '', message, timeout = 5000 }: IToast) {
        const id = this.state.toasts.length + 1;
        this.setState({ toasts: [...this.state.toasts, { id, title, message }] }, undefined)
        setTimeout(() => {
            console.log({ toasts: this.state.toasts });
            const toasts = this.state.toasts.reduce((newArray, toast: IToast) => {
                if (toast.id !== id) newArray.push(toast);
                return newArray;
            }, Array<IToast>());
            console.log({ toasts });

        }, timeout);
    }

    template(title, message) {

    }

    render() {
        return (
            
                this.state.toasts.map(toast => {
                    return <div>

                    </div>
                })
        )
    }
}