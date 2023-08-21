const db = firebase.firestore();
const form = document.querySelector("form");
const jobIdInput = document.getElementById("job-id");
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const fullName = document.getElementById("full-name").value;
  const email = document.getElementById("email").value;
  const mobileNumber = document.getElementById("mobile-number").value;
  const skills = document.getElementById("skills").value;
  const resume = document.getElementById("resume").value;
  const jobId = jobIdInput.value; 

  db.collection("applicants")
    .add({
      jobId,
      fullName,
      email,
      mobileNumber,
      skills,
      resume,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })
    .then(() => {
      console.log("Application submitted successfully");
      alert("Job added successfully!");
      window.location.href = "/";
    })
    .catch((error) => {
      console.error("Error submitting application", error);
    });
}
