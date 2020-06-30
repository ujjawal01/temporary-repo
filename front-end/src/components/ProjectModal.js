import React, { Component, Fragment } from "react";
import {Button, Modal, ModalHeader, ModalBody} from "reactstrap";
import ProjectForm from "./ProjectForm";

class ProjectModal extends Component{
    state = {
        modal: false
    };

    toggle = () =>{
        this.setState(previous => ({
            modal: !previous.modal
        }));
    };

    render() {
        const create = this.props.create;

        var title = "Editing Project";
        var button = <Button color="primary" onClick={this.toggle}>Edit</Button>;
        if (create){
            title = "Adding New Project";

            button = (
                <div >
                    <Button color="primary" className="float-left" onClick={this.toggle}>
                        Add New
                    </Button>
                </div>
                
            );
        }

        return (
            <Fragment>
                {button}
                <Modal isOpen={this.state.modal} toggle ={this.toggle}>
                    <ModalHeader toggle={this.toggle}>{title}</ModalHeader>

                    <ModalBody>
                        <ProjectForm  resetState={this.props.resetState}
                        toggle={this.toggle}
                        project={this.props.project}/>
                    </ModalBody>
                </Modal>
            </Fragment>
        );
    }
}

export default ProjectModal;