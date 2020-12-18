import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const CustomModal = ({show, handleClose, steps}) => {
    return (
         <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
                {console.log(steps)}
                <Modal.Title>Mano Spėjimai</Modal.Title>
            </Modal.Header>
            <Modal.Body>{steps.map(item=>item)}</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CustomModal;