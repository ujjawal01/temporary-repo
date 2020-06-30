import React, { Component, Fragment } from "react";
import {Button, Modal, ModalHeader, ModalBody} from "reactstrap";
import NewNewsForm from "./NewNewsForm";

class NewNewsModal extends Component{
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

        var title = "Editing News";
        var button = <Button onClick={this.toggle}>Edit</Button>;
        if (create){
            title = "Creating New News";

            button = (
                <Button color="primary" className="float-right" onClick={this.toggle}>
                    Create New
                </Button>
            );
        }

        return (
            <Fragment>
                {button}
                <Modal isOpen={this.state.modal} toggle ={this.toggle}>
                    <ModalHeader toggle={this.toggle}>{title}</ModalHeader>

                    <ModalBody>
                        <NewNewsForm  resetState={this.props.resetState}
                        toggle={this.toggle}
                        news={this.props.news}/>
                    </ModalBody>
                </Modal>
            </Fragment>
        );
    }
}

export default NewNewsModal;