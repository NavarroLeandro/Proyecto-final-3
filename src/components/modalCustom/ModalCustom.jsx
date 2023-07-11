import Modal from 'react-bootstrap/Modal';
import './ModalCustom.css'

const ModalCustom = ({show, title, handleClose, FormRegister}) => {
  return (
    <Modal show={show} onHide={handleClose}>

        <Modal.Body>
          <FormRegister />
        </Modal.Body>
      </Modal>
  )
}

export default ModalCustom