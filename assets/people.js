/* ------------------------------------------------------------------
   LAB MEMBERS
   Sourced from the department roster (Student.aspx?id=2797), Sept 2026.
   Only page 1 of that listing could be retrieved — it uses ASP.NET
   postback pagination for page 2, which a simple fetch can't reach.
   If the group has grown past nine students, add the rest by hand
   below using the same shape.

   To add or edit someone, copy one block and edit the fields.
   Order within a category is the order they render in.

   Fields:
     name      string
     category  "phd" | "msc" | "ra" | "undergrad" | "alumni"
     role      short line under the name
     note      one line on research focus (optional)
     email     optional — rendered as a mailto link
     photo     path under assets/img/people/, e.g. "assets/img/people/guo.jpg"
                 — omit or leave "" to show initials instead
     link      optional URL — personal site or Scholar profile
     pub       optional {text, url} — surfaces a paper they coauthored,
                 cross-checked against assets/publications.js
   ------------------------------------------------------------------ */

const PEOPLE = [
  {
    name: "Ma Xingyu",
    category: "phd",
    role: "PhD student, 2025–",
    note: "Basic Medicine — mechanisms of neurodegenerative disease and artificial intelligence.",
    email: "2510976@tongji.edu.cn"
  },
  {
    name: "Guo Jingyan",
    category: "phd",
    role: "PhD student, 2023–",
    note: "Basic Medicine — artificial intelligence and spatial omics.",
    email: "2310987@tongji.edu.cn",
    pub: {
      text: "Co-first author — NOMO1 and ALS, Brain (2024)",
      url: "https://doi.org/10.1093/brain/awae123"
    }
  },
  {
    name: "Li Zhuwei",
    category: "msc",
    role: "Master's student, 2025–",
    note: "Basic Medicine — ALS mechanisms and artificial intelligence.",
    email: ""
  },
  {
    name: "Lei Helei",
    category: "msc",
    role: "Master's student, 2024–",
    note: "Biomedical Engineering — artificial intelligence and RNA biology.",
    email: "2432325@tongji.edu.cn"
  },
  {
    name: "Shen Yifan",
    category: "msc",
    role: "Master's student, 2023–",
    note: "Biomedical Engineering — artificial intelligence and RNA biology.",
    email: "2332186@tongji.edu.cn"
  },
  {
    name: "Feng Zihan",
    category: "msc",
    role: "Master's student, 2026–",
    note: "Basic Medicine.",
    email: ""
  },
  {
    name: "Tang Xuelin",
    category: "alumni",
    role: "PhD, 2022 cohort — graduated",
    note: "Basic Medicine — artificial intelligence and the RNA molecular mechanisms of neurodegenerative disease.",
    email: "2031102@tongji.edu.cn",
    pub: {
      text: "Co-first author — PCP4 splicing and ALS, Brain (2025)",
      url: "https://doi.org/10.1093/brain/awaf025"
    }
  },
  {
    name: "Gu Yuqi",
    category: "alumni",
    role: "Master's, 2022 cohort — graduated",
    note: "Biomedical Engineering — bioinformatics.",
    email: "2231074@tongji.edu.cn",
    pub: {
      text: "Co-first author — epigenetic loci and ALS survival, eBioMedicine (2025)",
      url: "https://www.sciencedirect.com/science/article/pii/S2352396425005213"
    }
  },
  {
    name: "Hu Jiali",
    category: "alumni",
    role: "Master's, 2022 cohort — graduated",
    note: "Biomedical Engineering — bioinformatics.",
    email: "2031075@tongji.edu.cn",
    pub: {
      text: "Co-author — NOMO1 and ALS, Brain (2024)",
      url: "https://doi.org/10.1093/brain/awae123"
    }
  }
];
