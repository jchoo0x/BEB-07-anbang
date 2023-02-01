import { useState } from "react";

const Dragdrop = () => {
  const [change, setChange] = useState(null);
  const [preview, setPreview] = useState(null);
  const handleChange = (event) => {
    setChange(event.target.files[0]);
    setPreview(URL.createObjectURL(event.target.files[0]));
  };

  return (
    <div className="mb-8">
      {preview && <img src={preview} alt="preview" />}
      <input
        type="file"
        name="file"
        id="file"
        class="sr-only"
        onChange={handleChange}
      />

      <label
        for="file"
        className="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center"
      >
        <div>
          <span className="mb-2 block text-xl font-semibold text-[#07074D]">
            Drop files here
          </span>
          <span className="mb-2 block text-base font-medium text-[#6B7280]">
            Or
          </span>
          <span className="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D]">
            Browse
          </span>
        </div>
      </label>
    </div>
  );
};

export default Dragdrop;
