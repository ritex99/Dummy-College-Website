// Load Subjects
fetch("/api/subjects")
    .then(response => response.json())
    .then(subjects => {
        let html = "";
        subjects.forEach(sub => {
            html += `<p>• ${sub.subjectName}</p>`;
        });
        document.getElementById("subjectList").innerHTML = html;
    });

// Load Teachers
fetch("/api/teachers")
    .then(response => response.json())
    .then(teachers => {
        let html = "";
        teachers.forEach(t => {
            html += `
                <div class="card">
                    <h3>${t.name}</h3>
                    <p><strong>Subject:</strong> ${t.subject}</p>
                    <p><strong>Qualification:</strong> ${t.qualification}</p>
                    <p><strong>Experience:</strong> ${t.experience} years</p>
                </div>
            `;
        });
        document.getElementById("teacherList").innerHTML = html;
    });

    // Scroll Reveal Animation
  const revealElements = document.querySelectorAll(".scroll-reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
    { threshold: 0.15 }
  );

  revealElements.forEach((el) => observer.observe(el));

