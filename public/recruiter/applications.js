// get reference to the Firestore service
const db = firebase.firestore();

const applicantList = document.getElementById("applicant-list");

// Create a function to render applicants
function renderApplicant(doc) {
  let tr = document.createElement("tr");
  let nameTd = document.createElement("td");
  let emailTd = document.createElement("td");
  let phoneTd = document.createElement("td");
  let jobIdTd = document.createElement("td");
  let resumeTd = document.createElement("td");

  nameTd.textContent = doc.data().fullName;
  emailTd.textContent = doc.data().email;
  phoneTd.textContent = doc.data().mobileNumber;
  jobIdTd.textContent = doc.data().jobId;
  resumeTd.innerHTML = `<a href="${doc.data().resume}" target="_blank">View Resume</a>`;

  tr.appendChild(nameTd);
  tr.appendChild(emailTd);
  tr.appendChild(phoneTd);
  tr.appendChild(jobIdTd);
  tr.appendChild(resumeTd);

  applicantList.appendChild(tr);
}

// Get applicants from Firestore database
db.collection("applicants")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      // Render each applicant
      renderApplicant(doc);
    });
  })
  .catch((error) => {
    console.error("Error getting applicants: ", error);
    alert("Error getting applicants, please try again.");
  });
