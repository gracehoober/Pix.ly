import "./AddPhotoForm.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

/** Renders a form to upload a photo
 *
 * Props:
 * -uploadPhoto: function from parent
 *
 * State:
 *  -formData:{photo_file: .jpg file, photo_description: text}
 *
 * App -> RoutesList -> AddPhotoForm
 */
function AddPhotoForm({ uploadPhoto }) {
  const [formData, setFormData] = useState(
    { photoFile: "", photo_description: "" }
  );
  const navigate = useNavigate();

  function handleChange(evt) {
    let fieldName = evt.target.name;
    let description = evt.target.text;
    let photo = evt.target.file;

    // TODO: refactor setFormData
    setFormData(currData => {
      if(description){
        currData[fieldName] = description;
      }
      if(photo){
        currData[fieldName] = photo;
      }
      return {...currData}
    });
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    if (formData) {
      try {
        await uploadPhoto(formData);
        navigate("/");
      } catch (err) {
        console.log(err, "error caught in AddPhotoForm");
        alert("Sorry, there was an error in your upload.");
      }
    } else {
      alert("You must attach a .jpg file");
    }
  }
  return (
    <form className="AddPhotoForm" onSubmit={handleSubmit}>
      <label htmlFor="photo"></label>
      <input
        id="photo"
        name="user_photo"
        type="file"
        accept=".jpg"
        files={formData}
        onChange={handleChange}
        required
      >
      </input>
      <label htmlFor="photo_description"></label>
      <input
        id="photoDescription"
        name="photoDescription"
        type="text"
        placeholder="Your photo description here..."
        value={formData}
        onChange={handleChange}
      ></input>
      <button className="AddPhotoForm-submit-btn">Submit Photo</button>
    </form>
  );
}

export default AddPhotoForm;