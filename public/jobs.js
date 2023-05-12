// Get a reference to the database service
const db = firebase.firestore();

// Get a reference to the job list div
const jobList = document.getElementById("job-list");

  // Get a reference to the job type select element
  const jobTypeSelect = document.getElementById("job-type");

// Create a function to render job records// Create a function to render job records
function renderJob(doc) {
  let div = document.createElement("div");
  div.classList.add("job-card");

  let jobIdP = document.createElement("p");
  let jobTypeP = document.createElement("p");
  let jobCategoryP = document.createElement("p");
  let jobTitleP = document.createElement("p");
  let jobDescriptionP = document.createElement("p");
  let remoteJobP = document.createElement("p");
  let applyBtn = document.createElement("button");

  jobIdP.textContent = "Job ID: " + doc.data().jobId;
  jobTypeP.textContent = "Job Type: " + doc.data().jobType;
  jobCategoryP.textContent = "Job Category: " + doc.data().jobCategory;
  let jobTitleText = document.createTextNode(doc.data().jobTitle);
  let jobTitleStrong = document.createElement("strong");
  jobTitleStrong.appendChild(jobTitleText);
  jobTitleP.appendChild(jobTitleStrong);
  jobDescriptionP.textContent = "Job Description: " + doc.data().jobDescription;
  remoteJobP.textContent = "Remote Job: " + doc.data().remoteJob;
  applyBtn.textContent = "Apply Now";
  applyBtn.classList.add("apply-btn");

  applyBtn.addEventListener("click", () => {
    console.log("HELLLLLLLLo");
    window.location.href = "form.html";
  });
  div.appendChild(jobTitleP);
  div.appendChild(jobIdP);
  div.appendChild(jobTypeP);
  div.appendChild(jobCategoryP);
  div.appendChild(jobDescriptionP);

  div.appendChild(remoteJobP);
  div.appendChild(applyBtn);

  jobList.appendChild(div);
}
// Create a function to get jobs of the selected job type from Firestore database
function getJobsByType(jobType) {
  db.collection("records")
    .where("jobType", "==", jobType)
    .orderBy("jobCategory")
    .get()
    .then((querySnapshot) => {
      // Clear existing job list
      jobList.innerHTML = "";
      querySnapshot.forEach((doc) => {
        // Render each job record
        renderJob(doc);
      });
    })
    .catch((error) => {
      console.error("Error getting jobs: ", error);
      alert("Error getting jobs, please try again.");
    });
}

    
    // Get job records of the selected job type on page load
    getJobsByType(jobTypeSelect.value);
    
    // Update job list when job type selection is changed
    jobTypeSelect.addEventListener("change", (event) => {
    getJobsByType(event.target.value);
    });