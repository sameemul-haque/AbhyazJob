const db = firebase.firestore();
const form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  // Get the form data
  const jobId = document.getElementById("job-id").value;
  const fullName = document.getElementById("full-name").value;
  const email = document.getElementById("email").value;
  const mobileNumber = document.getElementById("mobile-number").value;
  const skills = document.getElementById("skills").value;
  const resume = document.getElementById("resume").value;

  // Add the form data to the "applicants" collection in Firestore
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
      // TODO: Add code to show a success message to the user
    })
    .catch((error) => {
      console.error("Error submitting application", error);
      // TODO: Add code to show an error message to the user
    });
}
