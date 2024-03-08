const Upload_Preset = import.meta.env.VITE_UPLOAD_PRESET;
const Cloud_Name = import.meta.env.VITE_CLOUD_NAME;

const uploadImageToCloudnary = async (file) => {
  const uploadData = new FormData()

  uploadData.append("file", file);
  uploadData.append("upload_preset", Upload_Preset);
  uploadData.append("cloud_name", Cloud_Name);

  const res = await fetch(
    `https://api.cloudinary.com/v1_1/${Cloud_Name}/image/upload`,
    {
      method: 'post',
      body: uploadData,
    }
  );

  const data = await res.json();

  return data;
};

export default uploadImageToCloudnary;
