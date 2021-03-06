import React from 'react'
import classes from './AnswerList.css'
import AnswerItem from './AnswerItem/AnswerItem'

const AnswerList = props => (
    <ul className={classes.AnswerList}>
        {
            props.answers.map((answer, index) => {
                return (
                    <AnswerItem answer={answer}
                                key={index}
                                state={props.state ? props.state[answer.id] : null}
                                onAnswerClick={props.onAnswerClick} />
                )
            })
        }
    </ul>
);

export default AnswerList