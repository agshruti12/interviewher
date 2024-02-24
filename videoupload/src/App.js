const { Submissions, Questions, storage } = require("./config");
const { useState } = require("react");
const { ref, uploadBytes } = require("firebase/storage");

function App() {
  const [submissionUpload, setSubmissionUpload] = useState(null);
  const uploadSubmission = (props) => {
    if (submissionUpload == null) return;
    const subRef = ref(storage, `${props.questionID}/${props.submissionID}`);
    uploadBytes(subRef, submissionUpload).then(() => {
      alert("Submission uploaded!");
    });
  };

  return (
    <div id="root">
      <input
        type="file"
        onChange={(event) => {
          setSubmissionUpload(event.target.files[0]);
        }}
      />
      <button onClick={uploadSubmission}> Upload submission</button>
    </div>
  );
}

export default App;
