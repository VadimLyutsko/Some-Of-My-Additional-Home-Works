import React from 'react';
import styles from './App.module.css';

type ButtonPropsType = {
    counterValue: number
    callBack: (newValue: number) => void
    title: string
}


export function SuperButton(props: ButtonPropsType) {

    const IncButtonHandler = () => {
        props.callBack(props.counterValue + 1);
    };

    const ResetButtonHandler = () => {
        props.callBack(0);
    };

    const buttonIsDisabled = () => {
        if ( props.counterValue===5 && props.title==='Inc'){
            return true
        }
        if (props.counterValue === 0 && props.title === 'Reset') {
            return true;
        }
    };

    return (
        <div className={styles.allButtons}>


            <button
                disabled={
                    buttonIsDisabled()
                }
                onClick={props.title === 'Inc' ? IncButtonHandler : ResetButtonHandler}
                className={styles.realButton}>{props.title}</button>
        </div>
    );
}