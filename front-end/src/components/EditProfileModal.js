import React, { Component, Fragment } from "react";
import {Button, Modal, ModalHeader, ModalBody} from "reactstrap";
import EditProfileForm from "./EditProfileForm";

class EditProfileModal extends Component{
    state = {
        modal: false
    };

    toggle = () => {
        this.setState(previous => ({
            modal: !previous.modal
        }));
    };

    render() {
        var title = "Editing News";
        var button = <Button onClick={this.toggle}>Edit</Button>;

        return (
            <Fragment>
                {button}
                <Modal isOpen={this.state.modal} toggle ={this.toggle}>
                    <ModalHeader toggle={this.toggle}>{title}</ModalHeader>

                    <ModalBody>
                        <EditProfileForm  resetState={this.props.resetState}
                        toggle={this.toggle}
                        user={this.props.user}/>
                    </ModalBody>
                </Modal>
            </Fragment>
        );
    }
}

export default EditProfileModal;