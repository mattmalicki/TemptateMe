import { useEffect, useState } from "react";

import { ReactComponent as Icon } from "./iconAddRecipeImage.svg";

import styles from "./AddRecipeImage.module.css";

import Resizer from "react-image-file-resizer";

const AddRecipeImage = () => {
  // const [file, setFile] = useState();
  const [imagePath, setImagePath] = useState();

  // function dataUrlToFile(dataurl, filename) {
  //   const arr = dataurl.split(",");
  //   const mime = arr[0].match(/:(.*?);/)[1];
  //   const bstr = atob(arr[1]);
  //   let n = bstr.length;
  //   const u8arr = new Uint8Array(n);
  //   while (n--) {
  //     u8arr[n] = bstr.charCodeAt(n);
  //   }
  //   return new File([u8arr], filename, { type: mime });
  // }

  const resizeFile = (image) =>
    new Promise((resolve) => {
      Resizer.imageFileResizer(
        image,
        300,
        300,
        "JPEG",
        100,
        0,
        (uri) => {
          resolve(uri);
        },
        "base64"
      );
    });

  useEffect(() => {
    const recipeImage = localStorage.getItem("recipeImage");
    if (recipeImage) {
      setImagePath(recipeImage);
    }
  }, [setImagePath]);

  // useEffect(() => {
  //   if (!file) {
  //     return;
  //   }
  //   const reader = new FileReader();

  //   reader.onloadend = () => {
  //     setImagePath(reader.result);
  //     localStorage.setItem("recipeImage", reader.result);
  //   };
  //   reader.readAsDataURL(file);
  // }, [file]);

  const onUpload = async (event) => {
    // setFile(event.target.files[0]);
    try {
      const file = event.target.files[0];
      const image = await resizeFile(file);
      setImagePath(image);
      localStorage.setItem("recipeImage", image);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <label className={styles.iconContainer} htmlFor="image">
      <input
        type="file"
        name="image"
        id="recipeImage"
        accept="image/png, image/jpg, image/jpeg"
        className={styles.input}
        onChange={onUpload}
      />
      {!imagePath && (
        <div className={styles.icon}>
          <Icon />
        </div>
      )}
      {imagePath && (
        <img className={styles.imageBackground} src={imagePath} alt="Preview" />
      )}
    </label>
  );
};

export { AddRecipeImage };
