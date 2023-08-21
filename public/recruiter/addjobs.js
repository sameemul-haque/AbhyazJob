const db = firebase.firestore();
const addJob = document.getElementById("add-job-form");

addJob.addEventListener("submit", (e) => {
  e.preventDefault();
  const jobId = addJob.elements["jobId"].value;
  const jobType = addJob.elements["jobType"].value;
  const jobCategory = addJob.elements["jobCategory"].value;
  const jobTitle = addJob.elements["jobTitle"].value;
  const jobDescription = addJob.elements["jobDescription"].value;
  const remoteJob = addJob.elements["remoteJob"].value;
  db.collection("records")
    .add({
      jobId: jobId,
      jobType: jobType,
      jobCategory: jobCategory,
      jobTitle: jobTitle,
      jobDescription: jobDescription,
      remoteJob: remoteJob,
    })
    .then((docRef) => {
      console.log("Record added with ID: ", docRef.id);
      addJob.reset();
      alert("Job added successfully!");
    })
    .catch((error) => {
      console.error("Error adding job: ", error);
      alert("Error adding job, please try again.");
    });
});
