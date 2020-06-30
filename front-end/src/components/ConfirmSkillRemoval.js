import React, {Component, Fragment} from "react";
import {Button, Modal, ModalHeader, ModalFooter} from "reactstrap";

import axios from "axios";

class ConfirmSkillRemovalModal extends Component{
    state ={
        modal: false
    };

    toggle = () => {
        this.setState(previous => ({
            modal: !previous.modal
        }));
    };

    deleteSkill = id => {
        axios.delete(API_URL_NEWS+id+"/", {credentials:'include'}).then(() => {
            this.props.resetState();
            this.toggle();
        }).catch(err => {
            if (err.response) {
                let errObj = err.response.data.error
                alert(errObj.message)
            }
        })
    };

    render(){
        return(
            <Fragment>
               
            <Button color="danger" onClick={() => this.toggle()}>
                Remove
            </Button>
            <Modal isOpen={this.state.modal} toggle={this.toggle}>
                <ModalHeader toggle={this.toggle}>
                    Do you really want to delete this Skill?
                </ModalHeader>

                <ModalFooter>
                    <Button type="button" onClick={() => this.toggle()}>
                        Cancel
                    </Button>
                    <Button type="button" color="primary" onClick={() => this.deleteSkill(this.props.id)}>
                        Yes
                    </Button>
                </ModalFooter>
            </Modal>
        </Fragment>
        );

    }
}

export default ConfirmSkillRemovalModal