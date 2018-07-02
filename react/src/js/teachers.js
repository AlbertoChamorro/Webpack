import React, {Component} from 'react'
import Teacher from './teacher'

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