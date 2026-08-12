const progress = document.getElementById("progress");
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

window.addEventListener("scroll", () => {
  const h = document.documentElement;
  const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
  progress.style.width = `${pct}%`;
});

menuBtn?.addEventListener("click", () => navLinks.classList.toggle("open"));
navLinks?.querySelectorAll("a").forEach(a => a.addEventListener("click", () => navLinks.classList.remove("open")));

const playbooks = {
  manual: {
    diagnosis: "Start with process mining / workflow mapping before automating.",
    tools: ["Lean waste analysis", "RPA / workflow automation", "Exception dashboard"],
    metric: "Target measures: cycle time, touch time, automation rate and FTE capacity released."
  },
  knowledge: {
    diagnosis: "Build a governed knowledge layer with retrieval-augmented generation (RAG) and human review.",
    tools: ["Document taxonomy", "RAG knowledge base", "Access / source controls"],
    metric: "Target measures: search time, first-time-right response, adoption and grounded-answer rate."
  },
  reporting: {
    diagnosis: "Standardise the data model first, then automate recurring MI and add an AI insight layer.",
    tools: ["SQL / Power Query", "Power BI", "Narrative insight copilot"],
    metric: "Target measures: report production time, data quality, refresh reliability and decision latency."
  },
  quality: {
    diagnosis: "Separate defect prevention from defect detection: diagnose root causes, redesign controls, then automate checks.",
    tools: ["RCA / Six Sigma", "Control plan", "AI-assisted exception triage"],
    metric: "Target measures: defect rate, rework, cost of poor quality and first-pass yield."
  },
  capacity: {
    diagnosis: "Quantify demand vs. capacity, segment work by complexity and create an automation / centralisation roadmap.",
    tools: ["Demand-capacity model", "Process segmentation", "Automation business case"],
    metric: "Target measures: utilisation, throughput, backlog, SLA and capacity released."
  }
};

document.getElementById("diagnose")?.addEventListener("click", () => {

  const key = document.getElementById("problem").value;
  const p = playbooks[key];

  // -------------------------------
  // Google Analytics event
  // -------------------------------
  if (typeof gtag === "function") {
    gtag("event", "ai_demo_use", {
      problem_type: key
    });
  }

  // -------------------------------
  // Existing AI demo output
  // -------------------------------
  document.getElementById("aiOutput").innerHTML = `
    <strong>Recommended approach</strong>
    <p style="margin-top:8px">${p.diagnosis}</p>

    <strong style="display:block;margin-top:14px">
      Suggested toolkit
    </strong>

    <ul>
      ${p.tools.map(x => `<li>${x}</li>`).join("")}
    </ul>

    <strong style="display:block;margin-top:14px">
      Success metrics
    </strong>

    <p style="margin-top:5px">
      ${p.metric}
    </p>
  `;
});
// ================================
// GOOGLE ANALYTICS CUSTOM EVENTS
// ================================

// Track LinkedIn clicks
document.getElementById("linkedinHero")?.addEventListener("click", () => {
  if (typeof gtag === "function") {
    gtag("event", "linkedin_click", {
      location: "hero"
    });
  }
});

document.getElementById("linkedinContact")?.addEventListener("click", () => {
  if (typeof gtag === "function") {
    gtag("event", "linkedin_click", {
      location: "contact"
    });
  }
});


// Track résumé requests
document.getElementById("resumeRequest")?.addEventListener("click", () => {
  if (typeof gtag === "function") {
    gtag("event", "resume_request", {
      location: "hero"
    });
  }
});


// Track email requests
document.getElementById("emailRequest")?.addEventListener("click", () => {
  if (typeof gtag === "function") {
    gtag("event", "email_click", {
      location: "contact"
    });
  }
});


// Track AI transformation demo usage
document.getElementById("diagnose")?.addEventListener("click", () => {
  const selectedProblem =
    document.getElementById("problem")?.value || "unknown";

  if (typeof gtag === "function") {
    gtag("event", "ai_demo_use", {
      problem_type: selectedProblem
    });
  }
});
