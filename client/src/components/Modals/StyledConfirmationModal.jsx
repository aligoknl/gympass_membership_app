import styled from "styled-components";

const StyledConfirmationModal = styled.div`
  position: absolute;
  z-index: 4;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background-color: rgba(0, 0, 0, 0.35);

  display: flex;
  justify-content: center;
  align-items: center;

  .modal {
    background-color: white;
    border-radius: 0.65rem;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2), 0px 6px 12px rgba(0, 0, 0, 0.2);
    padding: 2rem;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .modal-text {
    font-weight: bold;
    text-align: center;
    font-size: 1.12rem;
    display: flex;
    align-items: center;
    margin-bottom: 3rem;
  }

  .btn-list {
    display: flex;
    width: 100%;
    justify-content: center;
  }

  .btn {
    border: none;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
    color: white;
    padding: 1rem 2.15rem;
    border-radius: 0.65rem;
    cursor: pointer;
    max-width: 100%;
  }

  .btn-cancel {
    background-color: red;
  }

  .btn-approve {
    background-color: green;
    margin-right: 2.5rem;
  }

  @media screen and (max-width: 1000px) {
    .modal {
      width: 90%;
    }
  }
`;

export default StyledConfirmationModal;
