// Get a reference to the database service
const db = firebase.firestore();

// Get a reference to the job list div
const jobList = document.getElementById("job-list");  

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
    jobTitleP.textContent = "Job Title: " + doc.data().jobTitle;
    jobDescriptionP.textContent = "Job Description: " + doc.data().jobDescription;
    remoteJobP.textContent = "Remote Job: " + doc.data().remoteJob;
    applyBtn.textContent = "Apply Now";
    applyBtn.classList.add("apply-btn");
  
    applyBtn.addEventListener("click", () => {
        console.log("HELLLLLLLLo");
        window.location.href="form.html";
    });
  
    div.appendChild(jobIdP);
    div.appendChild(jobTypeP);
    div.appendChild(jobCategoryP);
    div.appendChild(jobTitleP);
    div.appendChild(jobDescriptionP);

    div.appendChild(remoteJobP);
    div.appendChild(applyBtn);
    
    jobList.appendChild(div);
}   

// Get job records from Firestore database
db.collection("records")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      // Render each job record
      renderJob(doc);
    });
  })
  .catch((error) => {
    console.error("Error getting jobs: ", error);
    alert("Error getting jobs, please try again.");
  });

