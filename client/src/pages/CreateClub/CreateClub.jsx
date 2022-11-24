import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./createClub.css";
import FormInput from "../../components/FormInput/FormInput";
import { createClub, reset as resetClubs } from "../../slices/clubSlice";
import { textInputsAttributes } from "./inputsData";
import axios from "axios";
import Spinner from "../../components/Spinner/Spinner";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const CreateClub = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isSuccess, isLoading, error, message } = useSelector(
    (state) => state.club
  );
  const [isImageUploading, setIsImageUploading] = useState(false);
  const [values, setValues] = useState({
    title: "",
    description: "",
    street: "",
    house_number: "",
    postcode: "",
    city: "",
    website: "",
    credit: "",
  });
  const [userFile, setUserFile] = useState({
    file: [],
    filePreview: null,
  });

  useEffect(() => {
    dispatch(resetClubs());
  }, []);

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleImageLoading = (e) => {
    const binaryData = [];
    const previewedImage = e.target.files[0];
    binaryData.push(previewedImage);

    if (previewedImage && previewedImage.size > 1e7) {
      toast.error("Oops! The size of image is larger than 10MB.");
      return (e.target.value = null);
    }

    setUserFile({
      ...userFile,
      file: previewedImage,
      filePreview: URL.createObjectURL(new Blob(binaryData)),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { street, house_number, postcode, city, ...rest } = values;

    const data = new FormData();
    data.append("file", userFile.file);
    data.append("upload_preset", "uploads");

    try {
      setIsImageUploading(true);
      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/dcfih6gcs/image/upload",
        data
      );

      setIsImageUploading(false);

      const { url } = uploadRes.data;

      dispatch(
        createClub({
          club: {
            ...rest,
            image: url,
            address: {
              street,
              house_number,
              postcode,
              city,
            },
          },
        })
      );
    } catch (error) {
      setIsImageUploading(false);
      toast.error("Oops! Something went wrong. We cannot create your club.");
    }
  };

  useEffect(() => {
    if (error) {
      toast.error(message);
    }
    if (isSuccess) {
      toast.success(message);
      setTimeout(() => {
        navigate("/myClubs");
        location.reload();
      }, 2000);
    }
  }, [error, isSuccess, message, navigate]);

  return (
    <>
      <ToastContainer />
      <div className="create-club-container">
        {(isLoading || isImageUploading) && <Spinner />}
        <div className="create-club">
          <form className="" onSubmit={handleSubmit}>
            <h2 className="create-club-header">Create a club</h2>
            {textInputsAttributes.map((input) => (
              <FormInput
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
              />
            ))}
            <div className="club-line">
              <p className="create-club-tag-title">Image of Club</p>
              <label>
                <input
                  name="file"
                  type="file"
                  className="create-club-input-photo"
                  onChange={handleImageLoading}
                  required
                  accept="image/png, image/gif, image/jpeg"
                ></input>
              </label>
              {userFile.filePreview !== null ? (
                <img
                  className="create-club-image-preview"
                  src={userFile.filePreview}
                  alt=""
                />
              ) : null}
            </div>
            <div className="club-line">
              <label className="create-club-description-tag">
                Description of Club
              </label>
              <textarea
                type="text"
                className="club-line-description"
                placeholder="Give an idea to members for your club."
                required
                name="description"
                rows="5"
                cols="15"
                value={values.name}
                onChange={onChange}
                minLength="15"
                maxLength="500"
              ></textarea>
              <button className="create-club-submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateClub;
