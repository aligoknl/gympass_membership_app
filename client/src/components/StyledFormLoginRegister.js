import styled from "styled-components";
import iconError from "../assets/icon-error.svg";
export const StyledFormLoginRegister = styled.form`
  max-width: 40rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin: auto;
  padding: 1rem 1rem 0rem 1rem;

  .login-page,
  .register-page {
    margin: 3rem 0 0rem 0;
    min-height: 100vh;
  }
  h2 {
    text-align: center;
    margin-bottom: 2rem;
  }

  .radio-input {
    width: inherit;
    align-items: center;
    display: flex;
    justify-content: space-between;
  }

  .errors-list {
    list-style-type: disc;
  }

  .list-item-error {
    color: red;
  }

  .input-container {
    width: 100%;
    position: relative;
  }

  .btn-submit,
  .input-field {
    border: none;
    outline: none;
    width: 100%;
    border-radius: var(--radius);
    padding: 0.6rem 1.2rem;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);

    &:focus {
      border: 1px solid rgb(0, 208, 255);
    }
  }

  button {
    cursor: pointer;

    &:focus {
      border: none;
    }
  }

  .p-with-link {
    width: 100%;
    margin: 1rem;
    text-align: center;
  }

  .btn-link {
    color: blue;
    border: none;
    font-size: 1.05rem;
    background: none;
    &:hover {
      text-decoration: underline;
    }
  }

  .input-with-tip {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }

  .tip-icon {
    margin-left: 1rem;
    cursor: pointer;

    &:hover + .tip {
      opacity: 1;
      left: 100%;
    }
  }

  .tip {
    opacity: 0;
    padding: 1rem;
    bottom: 100%;
    left: -100%;
    z-index: 1;
    width: 20rem;
    margin-left: 0.3rem;
    border-radius: 0.65rem;
    text-align: justify;
    color: white;
    background-image: linear-gradient(
      to right,
      hsl(39, 100%, 50%),
      50%,
      hsl(9, 100%, 64%)
    );
    position: absolute;
    transition: opacity 0.4s ease-out, left 0.4s ease-out, bottom 0.4s ease-out;
  }

  .invalid-input {
    border: 0.1rem solid red;
    background-image: url(${iconError});
    background-repeat: no-repeat;
    background-position: top 50% right 10px;
    padding-right: 10px;
  }

  .error-alert {
    padding: 0.8rem;
    border-radius: 0.5rem;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    background-color: rgba(255, 0, 0, 0.15);
    color: red;
    margin: 0.65rem 0rem;
  }

  .error-text {
    font-size: 0.8rem;
    color: red;
  }

  button:has(.loadingSpinner) {
    display: flex;
    justify-content: center;
  }

  .checkbox-title {
    color: #878787;
  }

  .loadingSpinner {
    width: 32px;
    height: 32px;
    border: 4px solid;
    border-color: #000 transparent #555 transparent;
    border-radius: 50%;
    animation: spin 1.2s linear infinite;
  }
  .register-here {
    color: tomato;
  }
  @media screen and (max-width: 1000px) {
    max-width: 350px;
    .tip {
      margin-left: 0;
      margin-bottom: 0.3rem;
    }
    .tip-icon {
      &:hover + .tip {
        opacity: 1;
        left: 0;
      }
    }
  }
`;
