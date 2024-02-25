import "./App.css";
import {
  ref,
  uploadBytes,
  listAll,
  getDownloadURL,
  list,
} from "firebase/storage";
import { useState, useEffect } from "react";
import VideoSubmissionCard from "./VideoSubmissionCard";
// import { v4 } from "uuid";

const { storage } = require("./firebase");
// const { useState, useEffect } = require("react");
// const { v4 } = require("uuid");

function App() {
  const [submissionUpload, setSubmissionUpload] = useState(null);
  const [questionID, setQuestionID] = useState(null);
  // const [submissionID, setSubmissionID] = useState(null);
  const [submissionList, setSubmissionList] = useState([]);
  const submissionListRef = ref(storage, "question2/");
  const counter = 0;

  const uploadSubmission = (q) => {
    if (submissionUpload == null) return;
    const subRef = ref(storage, `${q}/${submissionUpload.name}`);

    uploadBytes(subRef, submissionUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setSubmissionList((prev) => [...prev, url]);
      });
    });
  };

  useEffect(() => {
    listAll(submissionListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setSubmissionList((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  return (
    <div className="App container">
      <input
        type="file"
        onChange={(event) => {
          setSubmissionUpload(event.target.files[0]);
          setQuestionID("question2");
        }}
      />
      <button onClick={() => uploadSubmission(questionID)}>
        Upload submission
      </button>
      <br />
      <div className="container">
        {[...new Set(submissionList)].map((url) => (
          <VideoSubmissionCard url={url} />
        ))}
        {/* {submissionList.map((url) => {
          return <VideoCard url={url} />;
        })} */}
      </div>
    </div>
  );
}

export default App;