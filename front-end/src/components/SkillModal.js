import React, { Component, Fragment } from "react";
import {Button, Modal, ModalHeader, ModalBody} from "reactstrap";
import SkillForm from "./SkillForm";

class SkillModal extends Component{
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

        var title = "Editing Skill";
        var button = <Button onClick={this.toggle}>Edit</Button>;
        if (create){
            title = "Adding New Skill";

            button = (
                <Button color="primary" className="float-right" onClick={this.toggle}>
                   Add New
                </Button>
            );
        }

        return (
            <Fragment>
                {button}
                <Modal isOpen={this.state.modal} toggle ={this.toggle}>
                    <ModalHeader toggle={this.toggle}>{title}</ModalHeader>

                    <ModalBody>
                        <SkillForm  resetState={this.props.resetState}
                        toggle={this.toggle}
                        skill={this.props.skill}/>
                    </ModalBody>
                </Modal>
            </Fragment>
        );
    }
}

export default SkillModal;