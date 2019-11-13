import React from "react";

export default function CreateItem(props) {
  const { onSubmit, onChange, values } = props;
  const { title, url, description, price } = values;

  return (
    <form onSubmit={onSubmit}>
      <label>Image-url:</label>
      <input
        type="text"
        name="url"
        value={url}
        onChange={onChange}
        placeholder="url"
      />
      <label>Title:</label>
      <input
        type="text"
        name="title"
        value={title}
        onChange={onChange}
        placeholder="title"
      />
      <label>Description:</label>
      <input
        type="text"
        name="description"
        value={description}
        onChange={onChange}
        placeholder="description"
      />
      <label>Price:</label>
      <input
        type="text"
        name="price"
        value={price}
        onChange={onChange}
        placeholder="price"
      />
      <button type="submit">Submit</button>
    </form>
  );
}
