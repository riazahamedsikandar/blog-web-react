import { deleteDoc, doc } from "firebase/firestore";
import React from "react";
import { db, storage } from "../firebaseConfig";
import { toast } from "react-toastify";
import { deleteObject, ref } from "firebase/storage";

export default function DeleteArticle({ id, imageUrl }) {
  const handleDelete = async () => {
    const confirmed = window.confirm("Are you sure you want to delete this article?");
    if (!confirmed) return;

    try {
      // Delete the article document from Firestore
      await deleteDoc(doc(db, "Articles", id));
      // Delete the article image from Firebase Storage
      const imageRef = ref(storage, imageUrl);
      await deleteObject(imageRef);
      // Display a success toast
      toast("Article deleted successfully", { type: "success" });
    } catch (error) {
      // Display an error toast and log the error to the console
      toast("Error deleting article", { type: "error" });
      console.error(error);
    }
  };

  return (
    <div>
      <i className="fa fa-times" onClick={handleDelete} style={{ cursor: "pointer" }} />
    </div>
  );
}
