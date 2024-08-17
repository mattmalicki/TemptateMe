import styles from "./ModalEditUser.module.css";
import { ReactComponent as IconUser } from "./icon-user.svg";
import { ReactComponent as IconPlus } from "./icon-plus.svg";
import { ReactComponent as IconEdit } from "./icon-edit.svg";
import { ReactComponent as IconName } from "./icon-name.svg";
import { Modal } from "../../Templates/Modal/Modal";
import { RectangleButton } from "../../Atoms/RectangleButton/RectangleButton";
import { useState, useEffect } from "react";
import { useAuth } from "../../../hooks";

const ModalEditUser = ({ closeModal }) => {
  const { user } = useAuth();
  const [file, setFile] = useState();
  const [name, setName] = useState(user.name ? user.name : "");
  const [imagePath, setImageUrl] = useState(user.photoUrl ? user.photoUrl : "");

  useEffect(() => {
    if (!file) {
      return;
    }
    const reader = new FileReader();

    reader.onloadend = () => {
      setImageUrl(reader.result);
    };

    reader.readAsDataURL(file);
  }, [file]);

  useEffect(() => {}, [name]);

  const onUpload = (event) => {
    setFile(event.target.files[0]);
  };

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    console.log(event.target);
    console.log(event.currentTarget);
    console.log(form.name.value);
  };

  return (
    <Modal onClose={closeModal}>
      <form className={styles.ModalEditUser} data-modal onSubmit={handleSubmit}>
        <div className={styles.user} data-modal>
          <input
            className={styles.image}
            type="file"
            name="image"
            id="recipeImage"
            accept="image/png, image/jpg, image/jpeg"
            onChange={onUpload}
          />

          {!imagePath && (
            <div className={styles.iconUser} data-modal>
              <IconUser />
            </div>
          )}
          {imagePath && (
            <img
              className={styles.imageBackground}
              src={imagePath}
              alt="Preview"
            />
          )}
          <div className={styles.iconPlus} data-modal>
            <IconPlus />
          </div>
        </div>
        <div className={styles.inputContainer} data-modal>
          <div className={styles.iconName}>
            <IconName />
          </div>
          <input
            className={styles.inputName}
            type="text"
            id="name"
            value={name}
            onChange={handleName}
          />
          <div className={styles.iconEdit} data-modal>
            <IconEdit />
          </div>
        </div>
        <RectangleButton title="Save changes" type="submit" />
      </form>
    </Modal>
  );
};

export { ModalEditUser };
