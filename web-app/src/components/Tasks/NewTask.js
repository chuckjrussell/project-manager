import React, { Component } from 'react';
import '@coreui/coreui';
import {Button, Modal, FormGroup, ControlLabel, HelpBlock} from 'react-bootstrap';
import InputGroup from '../common/forms/InputGroup';
import DayPicker from 'react-day-picker/DayPickerInput';

import 'react-day-picker/lib/style.css';
import './NewTask.css';

import DayPickerInput from 'react-day-picker/DayPickerInput';

class NewTask extends Component{

    constructor(props, context){
        
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false,
            title: '',
            description: '',
            dueDate:'',
            formattedDueDate:'',
            assignee: 1
        }

        this.handleTitleChanged = this.handleTitleChanged.bind(this);
        this.handleDescriptionChanged = this.handleDescriptionChanged.bind(this);
        this.handleDateChanged = this.handleDateChanged.bind(this);
    }

    handleClose() {
        this.setState({ 
            show: false, 
            title: '',
            description: '',
            dueDate: new Date(),
            formattedDueDate: ''
        });
    }
  
    handleShow() {
        this.setState({ show: true });
    }

    handleTitleChanged(e) {
        this.setState({ title: e.target.value });
    }

    handleDescriptionChanged(e) {
        this.setState({ description: e.target.value });
    }

    handleSave(){
        this.handleClose();
    }

    handleDateChanged(value, formattedValue) {
        this.setState({
            dueDate: value, // ISO String, ex: "2016-11-19T12:00:00.000Z"
            formattedDueDate: formattedValue // Formatted String, ex: "11/19/2016"
        });
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
                            label="Text"
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
                            <ControlLabel>Due Date</ControlLabel>
                            <DayPickerInput/>
                        </FormGroup>
            
                        <FormGroup>
                            <ControlLabel>Assignee</ControlLabel>
                            <select className="form-control" value={this.assignee} readOnly>
                                <option value="1" key="1">Cassie Russell</option>
                                <option value="2" key="2">Chuck Russell</option>
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

export default NewTask;