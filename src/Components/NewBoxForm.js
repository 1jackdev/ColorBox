import { React, useState } from "react";

const NewBoxForm = ({ addBox }) => {
  const INITIAL_STATE = {
    backgroundColor: "",
    width: "",
    height: "",
  };
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { backgroundColor, width, height } = formData;
    addBox(backgroundColor, width, height);
    setFormData(INITIAL_STATE);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="backgroundColor">Background Color</label>
      <input
        id="backgroundColor"
        type="text"
        name="backgroundColor"
        placeholder="color"
        value={formData.backgroundColor}
        onChange={handleChange}
      />
      <label htmlFor="width">Width</label>
      <input
        id="width"
        type="number"
        name="width"
        placeholder="width"
        value={formData.width}
        max={500}
        onChange={handleChange}
      />
      <label htmlFor="height">Height</label>
      <input
        id="height"
        type="number"
        name="height"
        placeholder="height"
        value={formData.height}
        max={500}
        onChange={handleChange}
      />
      <button>Add Box</button>
    </form>
  );
};

export default NewBoxForm;
