import React, {Component} from 'react'
import Teacher from './teacher'
import '../css/teachers.scss'

class Teachers extends Component {
    render(){
        return (
            <ul className="Teachers">
                {
                    this.props.data.teachers.map((teacher) => {
                        return <Teacher {...teacher} key={teacher.id.toString()}/>
                    })
                }
            </ul>
        )
    }
}

export default Teachers