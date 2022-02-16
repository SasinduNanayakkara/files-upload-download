import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import React, { useState } from "react";
import { app } from "./base";
import { storage} from "./base"

function App() {

  const [progess, setProgress] = useState(0);
  const onFileChange = (file) => {
      // const file = e.target.files[0]
      // const storageRef = app.storage().ref()
      // const fileRef = storageRef.child(file.name)
      // fileRef.put(file).then(() => {
      //   console.log("Uploaded file", file.name)
      // });
      if (!file) return;
      const storageRef = ref(storage, `/files/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on("state_changed", (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred/ snapshot.totalBytes) * 100
        );

        setProgress(prog);
      }, (err) => 
        console.log(err),
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(url => console.log(url));
        }
      );
  }

  const onSubmit = (e) => {
      e.preventDefault();
      const file = e.target[0].files[0];
      onFileChange(file);
  };


  return (
    <>
      <form onSubmit={onSubmit}>
        <input type="file"/>
        <input type="text" name="username" placeholder="NAME"/>
        <button type="submit">Submit</button>
      </form>
      <hr/>
      <h3>Uploaded {progess} %</h3>
      <ul>
        <li>---</li>
      </ul>
    </>
  );
}

export default App;
