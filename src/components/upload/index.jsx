import React, { useEffect, useState } from "react";
import "./index.css";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Upload = ({ setOpen }) => {
  const [img, setImg] = useState(undefined);
  const [video, setVideo] = useState(undefined);
  const [imgPerc, setImgPerc] = useState(0);
  const [videoPerc, setVideoPerc] = useState(0);
  const [inputs, setInputs] = useState({});
  const [tags, setTags] = useState([]);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleTags = (e) => {
    setTags(e.target.value.split(","));
  };

  const uploadFile = (file, urlType) => {
    const storage = getStorage();
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        urlType === "imgUrl"
          ? setImgPerc(Math.round(progress))
          : setVideoPerc(Math.round(progress));
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
            break;
        }
      },
      (error) => {},
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setInputs((prev) => {
            return { ...prev, [urlType]: downloadURL };
          });
        });
      }
    );
  };

  useEffect(() => {
    video && uploadFile(video, "videoUrl");
  }, [video]);

  useEffect(() => {
    img && uploadFile(img, "imgUrl");
  }, [img]);
  const handleUpload = async (e) => {
    e.preventDefault();
    const res = await axios.post("/videos", { ...inputs, tags });
    setOpen(false);
    res.status === 200 && navigate(`/video/${res.data._id}`);
  };
  return (
    <div className="upload-container">
      <div className="upload">
        <div className="close" onClick={() => setOpen(false)}>
          X
        </div>
        <h1>Upload a New Video</h1>
        <label>Video:</label>
        {videoPerc > 0 ? (
          "Uploading:" + videoPerc
        ) : (
          <input
            type="file"
            accept="video/*"
            onClick={(e) => setVideo(e.target.files[0])}
          />
        )}
        <input type="text" placeholder="Title" onChange={handleChange} />
        <textarea placeholder="Description" onChange={handleChange}></textarea>
        <input
          type="text"
          placeholder="Separate the tags with commas"
          onChange={handleTags}
        />

        <label>Image:</label>
        {imgPerc > 0 ? (
          "Uploading:" + imgPerc + "%"
        ) : (
          <input
            type="file"
            accept="image/*"
            onClick={(e) => setImg(e.target.files[0])}
          />
        )}
        <button onClick={handleUpload}>Upload</button>
      </div>
    </div>
  );
};

export default Upload;
