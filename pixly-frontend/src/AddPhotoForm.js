import "./AddPhotoForm.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

/** Renders a form to upload a photo
 *
 * Props:
 * -uploadPhoto: function from parent
 *
 * State:
 *  -formData: a .jpg file
 *
 * App -> RoutesList -> AddPhotoForm
 */
function AddPhotoForm({ uploadPhoto }) {
  const [formData, setFormData] = useState(null);
  const navigate = useNavigate();

  function handleChange(evt) {
    setFormData(evt.target.files[0]);
    console.log("got here 1");
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    console.log("got here 2");

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

  function testClick(evt) {
    evt.preventDefault();
    console.log("got here 4");
  }

  return (
    <>
      <form className="AddPhotoForm" onSubmit={handleSubmit}>
        <label htmlFor="photo" className="photoLabel">
        </label>

        <input
          id="photo"
          name="user_photo"
          type="file"
          accept=".jpg"
          files={formData}
          onChange={handleChange}
          required
          className="photoInput"

        >
        </input>
        <button className="AddPhotoForm-submit-btn">Submit Photo</button>
      </form>
    </>
  );
}

export default AddPhotoForm;

