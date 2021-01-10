import React, { useState } from 'react'
import InCompleteTask from './InCompleteTask'
import CompleteTask from './CompleteTask'
const Task = () => {

    const [formData, setFormData] = useState({
        taskName: "",
        jiraID: "",
        xdLink: "",
        teamLevel: "",
        assignee: "",
        status: "",
        hiddenId: '',
        from: '',
        to: ''
    })

    const [tasks, addTask] = useState([])

    const [cmpltTask, addCmpltTask] = useState([])

    const {
        taskName, jiraID, xdLink, teamLevel, assignee, status, hiddenId, from, to
    } = formData

    const onSubmit = e => {
        console.log(formData)
        if (e.target.hiddenId.value != '') {
            console.log(hiddenId)
            addTask(arr => [...arr.slice(0, hiddenId), formData, ...arr.slice(hiddenId + 1)])
            setFormData({
                taskName: "",
                jiraID: "",
                xdLink: "",
                teamLevel: "",
                assignee: "",
                status: "",
                hiddenId: '',
                from: '',
                to: ''
            })
            return

        }

        addTask([...tasks, formData])
        setFormData({
            taskName: "",
            jiraID: "",
            xdLink: "",
            teamLevel: "",
            assignee: "",
            status: "",
            hiddenId: '',
            from: '',
            to: ''
        })

    }
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

    function onEdit(index, task) {

        setFormData({
            taskName: task.taskName,
            teamLevel: task.teamLevel,
            jiraID: task.jiraID,
            xdLink: task.xdLink,
            assignee: task.assignee,
            status: task.status,
            hiddenId: index,
            from: task.from,
            to: task.to
        })

    }

    function onClose(index, task) {
        console.log("INside onClose")
        task.status = 'Completed'
        addTask(arr => [...arr.slice(0, index), ...arr.slice(index + 1)])
        addCmpltTask([...cmpltTask, task])


    }

    function onRevert(index, task) {
        console.log("inside onRevert")
        task.status = 'In Progress'
        addCmpltTask(arr => [...arr.slice(0, index), ...arr.slice(index + 1)])
        addTask([...tasks, task])

    }



    return (<div className='section-last'>
        <form onSubmit={e => {
            e.preventDefault();
            onSubmit(e);
        }}>
            <p>

                <input type='hidden' name='hiddenId' value={hiddenId} />
                <input type='text' placeholder='Enter Task name' value={taskName} name='taskName' onChange={e => onChange(e)} />
                <input type='text' placeholder='Enter Jira ID' value={jiraID} name='jiraID' onChange={e => onChange(e)} />
                <input type='date' name='from' value={from} onChange={e => onChange(e)} />
                <input type='date' name='to' value={to} onChange={e => onChange(e)} />
            </p>


            <input className='fullwidth' type='link' placeholder='Enter XD Link' value={xdLink} name='xdLink' onChange={e => onChange(e)} />
            <p>
                <div className='form-group-team' id='dive'>
                    <select className="Dropdown" value={teamLevel} name='teamLevel' onChange={e => onChange(e)} >
                        <option value='0'>Select Team</option>
                        <option value='Team Level 1'>Team Level 1</option>
                        <option value='Team Level 2'>Team Level 2</option>
                        <option value='Team Level 3'>Team Level 3</option>
                        <option value='Team Level 4'>Team Level 4</option>
                        <option value='Team Level 5'>Team level 5</option>
                    </select>
                </div>

                <div className='form-group-assignee' id='dive'>
                    <select className="Dropdown" value={assignee} name='assignee' onChange={e => onChange(e)} >
                        <option value='0'>Select Assignee</option>
                        <option value='Gaurav'>Gaurav</option>
                        <option value='Tanzil'>Tanzil</option>
                        <option value='Minaj'>Minaj</option>
                        <option value='BK'>BK</option>
                        <option value='Sudha'>Sudha</option>
                    </select>
                </div>
                <div className='form-group-status' id='dive'>
                    <select className="Dropdown" value={status} name='status' onChange={e => onChange(e)} >
                        <option value='0'>Select Status</option>
                        <option value='In Qc'>In Qc</option>
                        <option value='UAT'>UAT</option>
                        <option value='In Progress'>In Progress</option>
                    </select>
                </div>
            </p>
            <button type='submit'>ADD/Update </button>

        </form>

        <table>
            <tr>
                <th>Sr.No</th>
                <th>Task</th>
                <th>Team</th>
                <th>Create</th>
                <th>Due Date</th>
                <th>Jira ID</th>
                <th>Mock-Up</th>
                <th>Assignee</th>
                <th>Status</th>
                <th>Action</th>
            </tr>
            {tasks.map((task, index) => <InCompleteTask task={task} key={index} index={index} onEdit={onEdit} onClose={onClose} />)}
        </table>
        <h2>Completed Task</h2>
        <table>
            <tr>
                <th>Sr.No</th>
                <th>Task</th>
                <th>Team</th>
                <th>Create</th>
                <th>Due Date</th>
                <th>Jira ID</th>
                <th>Mock-Up</th>
                <th>Assignee</th>
                <th>Status</th>
                <th>Action</th>
            </tr>
            {cmpltTask.map((task, index) => <CompleteTask task={task} key={index} index={index} onRevert={onRevert} />)}
        </table>


    </div>)
}

export default Task