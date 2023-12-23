import React from "react";
// npm
import { Modal, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
// constants
import { ID_KEY } from "src/constants/content.constant";
// redux
import { removeItem } from "src/store/slices/cart.slice";

const ProductRemoveModal = (props) => {
  const dispatch = useDispatch();
  const { modalShow, onCloseModal, data } = props;

  const handleCloseModal = () => {
    onCloseModal(false);
  };

  const handleRemove = () => {
    dispatch(removeItem(data[ID_KEY]));
    handleCloseModal();
  };

  // console.log("data", data);

  return (
    <Modal
      show={modalShow}
      onHide={() => handleCloseModal()}
      aria-labelledby="single-product-modal"
      className=" fade"
      size="sm"
    >
      <Modal.Body>
        <div className="modal-content">
          <div className="modal-body p-0">
            <div className="modal-pos-product">
              <div className="pos-remove-confirmation">
                <div className="text-center mx-auto">
                  <div>
                    <i className="far fa-trash-can fa-2x text-body text-opacity-50" />
                  </div>
                  <div className="mt-1 mb-2">Confirm to remove this item?</div>
                  <div>
                    <Button
                      variant="secondary"
                      className="w-60px me-2"
                      onClick={() => handleCloseModal()}
                    >
                      No
                    </Button>
                    <Button
                      variant="danger"
                      className="w-60px"
                      onClick={() => handleRemove()}
                    >
                      Yes
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ProductRemoveModal;
