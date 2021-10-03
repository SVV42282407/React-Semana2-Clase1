import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Modal = (props) => {
  const { isShowing, hide, modalContent } = props;
  const rawMarkup = () => {
    return { __html: modalContent };
  }
  if (isShowing) {
    return (
      ReactDOM.createPortal(
        <React.Fragment>
          <div className="modal-overlay"/>
          <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
            <div className="modal">
              <div className="modal-header">
                <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-content">
                <span dangerouslySetInnerHTML={rawMarkup()} />
              </div>
            </div>
          </div>
        </React.Fragment>, document.body
      )
    )
  } else {
    return null;
  }
}

export default Modal;