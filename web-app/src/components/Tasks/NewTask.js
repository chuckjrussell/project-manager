import React, { Component } from 'react';
import '@coreui/coreui';
import {Button, Modal, FormGroup, ControlLabel} from 'react-bootstrap';
import InputGroup from '../common/forms/InputGroup';
import 'react-day-picker/lib/style.css';
import './NewTask.css';
import {connect} from 'react-redux';
import * as taskActions from '../../actions/taskActions';
import DayPickerInput from 'react-day-picker/DayPickerInput';

class NewTask extends Component{

    constructor(props, context){
        
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleSave = this.handleSave.bind(this);
        
        this.handleTitleChanged = this.handleTitleChanged.bind(this);
        this.handleDescriptionChanged = this.handleDescriptionChanged.bind(this);
        this.handleDateChanged = this.handleDateChanged.bind(this);
        this.handleStatusChanged = this.handleStatusChanged.bind(this);
        this.handleAssigneeChanged = this.handleAssigneeChanged.bind(this);

        this.state = {
            show: false,
            task: {
                title: '',
                description: '',
                dueDate:'',
                formattedDueDate:'',
                assignee: 1,
                status: 1
            }
        }
    }

    handleClose() {
        this.setState({ 
            show: false, 
            task: {
                title: '',
                description: '',
                dueDate:'',
                formattedDueDate:'',
                assignee: 1,
                status: 1
            }
        });
    }

    handleSave(){
        this.props.dispatch(taskActions.createTask(this.state.task));
        this.handleClose();
    }
  
    handleShow() {
        this.setState({ show: true });
    }

    handleTitleChanged(e) {
        var task = this.state.task;
        task.title = e.target.value;
        this.setState({ task: task });
    }

    handleDescriptionChanged(e) {
        var task = this.state.task;
        task.description = e.target.value;
        this.setState({ task: task });
    }

    handleDateChanged(value, formattedValue) {
        var task = this.state.task;
        Object.assign(task, {dueDate: value, formattedDueDate: formattedValue});
        this.setState({ task: task });
    }

    handleStatusChanged(e){
        var task = this.state.task;
        task.status = e.target.value;
        this.setState({ task: task });
    }

    handleAssigneeChanged(e) {
        debugger;
        var task = this.state.task;
        task.assignee = e.target.value;
        this.setState({task: task});
    }

    render(){
          return (
            <div>         
                <Button className="btn btn-outline-success my-2 my-sm-0" onClick={this.handleShow}>
                    New Task
                </Button>        
      
                <Modal show={this.state.show} onHide={this.handleClose} animation={false}>
                    <Modal.Header>
                        <Modal.Title>New Task</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <InputGroup id="formControlsText"
                            type="text"
                            label="Title"
                            placeholder="Title"
                            value={this.state.title}
                            onChange={this.handleTitleChanged}/>

                        <InputGroup id="formControlsText"
                            componentClass="textarea"
                            label="Description"
                            placeholder="Description"
                            value={this.state.description}
                            onChange={this.handleDescriptionChanged}/>

                        <FormGroup>
                            <ControlLabel>Status</ControlLabel>
                            <select className="form-control" 
                                    value={this.state.statusId} 
                                    onChange={this.handleStatusChanged}>
                                    {
                                        this.props.statuses.map(status => {
                                            return (<option value={status.id} key={status.id}>{status.status}</option>);
                                    })}
                            </select>
                        </FormGroup>

                        <FormGroup>
                            <ControlLabel>Due Date</ControlLabel>
                            <DayPickerInput/>
                        </FormGroup>
            
                        <FormGroup>
                            <ControlLabel>Assignee</ControlLabel>
                            <select className="form-control" 
                                    value={this.state.assignee} 
                                    onChange={this.handleAssigneeChanged}>
                                {this.props.users.map(user => {
                                    return (
                                        <option value={user.id} key={user.id}>{user.firstName + ' ' + user.lastName}</option>);
                                })}
                            </select>
                        </FormGroup>
                        
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.handleClose}>Cancel</Button>
                        <Button className="btn btn-success my-2 my-sm-0" onClick={this.handleSave}>Save</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    };
}

function mapStateToProps(state, ownProps){
    return {
        statuses: state.statuses, 
        users: state.users
    }
}

export default connect(mapStateToProps)(NewTask);