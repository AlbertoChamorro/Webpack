import React from 'react'
import '../css/teacher.styl'

function Teacher(props){
    return (
        <li className="Teacher">
            { props.name } <a href={`https://twitter.com/${props.accounts.twitter}`}>{ props.accounts.twitter }</a>
        </li>
    )
}

export default Teacher