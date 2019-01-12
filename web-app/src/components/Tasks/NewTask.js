import React, { Component } from 'react';
import '@coreui/coreui';
import {Button, Modal} from 'react-bootstrap';
import InputGroup from '../common/forms/InputGroup';

class NewTask extends Component{

    constructor(props, context){
        
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false,
            title: '',
            description: ''
        }

        this.handleTitleChanged = this.handleTitleChanged.bind(this);
        this.handleDescriptionChanged = this.handleDescriptionChanged.bind(this);
    }

    handleClose() {
        this.setState({ 
            show: false, 
            title: '',
            description: ''
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
            
                        
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.handleClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
                </div>
        );
    };
}

export default NewTask;