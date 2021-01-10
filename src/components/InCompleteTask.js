import React, { Fragment } from 'react'

const InCompleteTask = (props) => {


    const {
        task, index
    } = props

    return (<Fragment>


        <tr>
            <td>{index + 1}</td>
            <td>{task.taskName}</td>
            <td>{task.teamLevel}</td>
            <td>{task.from}</td>
            <td>{task.to}</td>
            <td>{task.jiraID}</td>
            <td><a href={task.xdLink}>XD</a></td>
            <td>{task.assignee}</td>
            <td>{task.status}</td>
            <td><button onClick={e => props.onEdit(index, task)}>edit</button>
                <button onClick={e => props.onClose(index, task)}>Close</button></td> </tr>



    </Fragment>

    )
}

export default InCompleteTask