/* ------------------------------------------------------------------
   PUBLICATIONS
   To add a paper, copy one block and put it at the top of the list.
   Fields:
     year      number
     title     string
     authors   string  (use * for co-first, # for corresponding)
     venue     string  (journal, volume, date)
     url       string  (optional — omit or leave "" if none)
     role      "first" | "corresponding" | "co-first" | "co-corresponding" | ""
     topic     "als" | "epigenetics" | "ai" | "parkinsons" | "other"
     featured  true to surface it on the home page
   ------------------------------------------------------------------ */

const PUBLICATIONS = [
  {
    year: 2025,
    title: "Spliformer-V2 enables multi-tissue prediction and interpretation of splice-altering genetic variants",
    authors: "Zhang Lab",
    venue: "bioRxiv preprint, 3 Jul 2025",
    url: "https://doi.org/10.1101/2025.06.28.662167",
    role: "corresponding",
    topic: "ai",
    featured: true
  },
  {
    year: 2025,
    title: "Multi-omics analyses identify potential epigenetic loci associated with survival in amyotrophic lateral sclerosis across diverse populations",
    authors: "Yuqi Gu*, Yan Chen*, Xuelin Tang, Jingyan Guo, … Ming Zhang#",
    venue: "eBioMedicine 123:106071",
    url: "https://www.sciencedirect.com/science/article/pii/S2352396425005213",
    role: "corresponding",
    topic: "epigenetics",
    featured: true
  },
  {
    year: 2025,
    title: "Deep learning analyses of splicing variants identify the link of PCP4 with amyotrophic lateral sclerosis",
    authors: "Xuelin Tang*, Yan Chen*, Yongfei Ren*, … Ming Zhang#",
    venue: "Brain 148(7):2331",
    url: "https://doi.org/10.1093/brain/awaf025",
    role: "corresponding",
    topic: "ai",
    featured: true
  },
  {
    year: 2025,
    title: "Protein structure-based FUS mutational subtypes are associated with protein mislocalization in amyotrophic lateral sclerosis patients",
    authors: "Wanli Yang*, Zhen Luo*, Xuelin Tang*, Jingyan Guo, Ke Xu#, Yan Chen#, Ming Zhang#",
    venue: "Molecular Neurobiology 62(10):12461–12472",
    url: "https://pubmed.ncbi.nlm.nih.gov/40413303/",
    role: "corresponding",
    topic: "als"
  },
  {
    year: 2024,
    title: "Spatial enrichment and genomic analyses reveal the link of NOMO1 with amyotrophic lateral sclerosis",
    authors: "Jingyan Guo*, Linya You*, Yu Zhou, Jiali Hu, … Yan Chen#, Ming Zhang#",
    venue: "Brain 2024, awae123",
    url: "https://doi.org/10.1093/brain/awae123",
    role: "corresponding",
    topic: "als",
    featured: true
  },
  {
    year: 2022,
    title: "Epigenetic clock acceleration is linked to age at onset of Parkinson's disease",
    authors: "Xuelin Tang, Gonzalez-Latapi P, … Rogaeva E#, Ming Zhang#",
    venue: "Movement Disorders, 3 Aug 2022",
    url: "https://pubmed.ncbi.nlm.nih.gov/35921480/",
    role: "corresponding",
    topic: "parkinsons"
  },
  {
    year: 2022,
    title: "DNA methylation age acceleration is associated with age of onset in Chinese spinocerebellar ataxia type 3 patients",
    authors: "Jiahao Li*, Anli Shu*, … Ming Zhang#",
    venue: "Neurobiology of Aging, May 2022",
    url: "https://www.sciencedirect.com/science/article/abs/pii/S0197458022000239",
    role: "corresponding",
    topic: "epigenetics"
  },
  {
    year: 2022,
    title: "Genomic study of a large family with complex neurological phenotype including hearing loss, imbalance and action tremor",
    authors: "Julien F Bally*, Ming Zhang*, Ekaterina Rogaeva, et al.",
    venue: "Neurobiology of Aging, May 2022",
    url: "https://www.sciencedirect.com/science/article/pii/S0197458021003614",
    role: "co-first",
    topic: "other"
  },
  {
    year: 2021,
    title: "Combined epigenetic/genetic study identified an ALS age of onset modifier",
    authors: "Ming Zhang#, Zhengrui Xi, Sara Saez-Atienzar, et al.",
    venue: "Acta Neuropathologica Communications, 23 Apr 2021",
    url: "https://actaneurocomms.biomedcentral.com/articles/10.1186/s40478-021-01183-w",
    role: "corresponding",
    topic: "epigenetics"
  },
  {
    year: 2021,
    title: "Whole-genome study of a multigenerational family with essential tremor",
    authors: "Ming Zhang*, Mohammad Rohani*, Ekaterina Rogaeva, et al.",
    venue: "Canadian Journal of Neurological Sciences, 5 May 2021",
    url: "https://www.cambridge.org/core/journals/canadian-journal-of-neurological-sciences/article/abs/wholegenome-study-of-a-multigenerational-family-with-essential-tremor/59C973F95CA5CB8D272B1C22AE8C0735",
    role: "co-first",
    topic: "other"
  },
  {
    year: 2020,
    title: "DNA methylation age acceleration is associated with ALS age of onset and survival",
    authors: "Ming Zhang#, Paul M McKeever, Zhengrui Xi, et al.",
    venue: "Acta Neuropathologica, May 2020",
    url: "https://link.springer.com/article/10.1007/s00401-020-02131-z",
    role: "corresponding",
    topic: "epigenetics",
    featured: true
  },
  {
    year: 2019,
    title: "Genetic and epigenetic study of an Alzheimer's disease family with monozygotic triplets",
    authors: "Ming Zhang*, Allison A Dilliott*, Roaa Khallaf, et al.",
    venue: "Brain, Nov 2019",
    url: "https://academic.oup.com/brain/article/142/11/3375/5580538",
    role: "co-first",
    topic: "epigenetics"
  },
  {
    year: 2018,
    title: "A C6orf10/LOC101929163 locus is associated with age of onset in C9orf72 carriers",
    authors: "Ming Zhang#, Raffaele Ferrari, Maria Carmela Tartaglia, et al.",
    venue: "Brain, 25 Sep 2018",
    url: "https://academic.oup.com/brain/article/141/10/2895/5106718",
    role: "corresponding",
    topic: "als"
  },
  {
    year: 2018,
    title: "Unaffected mosaic C9orf72 case: RNA foci, dipeptide proteins, but upregulated C9orf72 expression",
    authors: "Philip McGoldrick*, Ming Zhang*, Marka van Blitterswijk, et al.",
    venue: "Neurology, 23 Jan 2018",
    url: "https://www.neurology.org/doi/10.1212/WNL.0000000000004865",
    role: "co-first",
    topic: "als"
  },
  {
    year: 2018,
    title: "Mutation analysis of CHCHD2 and CHCHD10 in Italian patients with mitochondrial myopathy",
    authors: "Elisa Rubino*, Ming Zhang*, Tiziana Mongini, et al.",
    venue: "Neurobiology of Aging, Jun 2018",
    url: "https://www.sciencedirect.com/science/article/pii/S0197458018300496",
    role: "co-first",
    topic: "other"
  },
  {
    year: 2017,
    title: "DNA methylation age-acceleration is associated with disease duration and age at onset in C9orf72 patients",
    authors: "Ming Zhang, Maria Carmela Tartaglia, Danielle Moreno, et al.",
    venue: "Acta Neuropathologica, Aug 2017",
    url: "https://link.springer.com/article/10.1007/s00401-017-1713-y",
    role: "first",
    topic: "epigenetics"
  },
  {
    year: 2017,
    title: "C9orf72 and ATXN2 repeat expansions coexist in a family with ataxia, dementia, and parkinsonism",
    authors: "Ming Zhang, Zhengrui Xi, Karen Misquitta, et al.",
    venue: "Movement Disorders, Jan 2017",
    url: "https://onlinelibrary.wiley.com/doi/full/10.1002/mds.26841",
    role: "first",
    topic: "als"
  },
  {
    year: 2017,
    title: "Genetic analysis of CHCHD2 and CHCHD10 in Italian patients with Parkinson's disease",
    authors: "Elisa Rubino*, Livia Brusa*, Ming Zhang*, et al.",
    venue: "Neurobiology of Aging, May 2017",
    url: "https://www.sciencedirect.com/science/article/pii/S0197458016303402",
    role: "co-first",
    topic: "parkinsons"
  },
  {
    year: 2016,
    title: "Genetic and epigenetic study of ALS-discordant identical twins with double mutations in SOD1 and ARHGEF28",
    authors: "Ming Zhang, Zhengrui Xi, Mahdi Ghani, et al.",
    venue: "Journal of Neurology, Neurosurgery & Psychiatry, May 2016",
    url: "https://jnnp.bmj.com/content/87/11/1268",
    role: "first",
    topic: "als"
  },
  {
    year: 2016,
    title: "Mutation analysis of CHCHD2 in Canadian patients with familial Parkinson's disease",
    authors: "Ming Zhang#, Zhengrui Xi, Shilun Fang, et al.",
    venue: "Neurobiology of Aging, Feb 2016",
    url: "https://www.sciencedirect.com/science/article/pii/S0197458015005503",
    role: "corresponding",
    topic: "parkinsons"
  },
  {
    year: 2016,
    title: "Drug repositioning for Alzheimer's disease based on systematic 'omics' data mining",
    authors: "Ming Zhang#, et al.",
    venue: "PLoS ONE, 22 Dec 2016",
    url: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0168812",
    role: "corresponding",
    topic: "other"
  },
  {
    year: 2015,
    title: "Jump from pre-mutation to pathologic expansion in C9orf72",
    authors: "Zhengrui Xi*, Marka van Blitterswijk*, Ming Zhang*, et al.",
    venue: "American Journal of Human Genetics, 4 Jun 2015",
    url: "https://www.sciencedirect.com/science/article/pii/S0002929715001536",
    role: "co-first",
    topic: "als",
    featured: true
  },
  {
    year: 2015,
    title: "The C9orf72 repeat expansion itself is methylated in ALS and FTLD patients",
    authors: "Zhengrui Xi*, Ming Zhang*, Amalia C Bruni, et al.",
    venue: "Acta Neuropathologica, May 2015",
    url: "https://link.springer.com/article/10.1007/s00401-015-1401-8",
    role: "co-first",
    topic: "epigenetics"
  },
  {
    year: 2015,
    title: "Mutation analysis of CHCHD10 in different neurodegenerative diseases",
    authors: "Ming Zhang, Zhengrui Xi, Lorne Zinman, et al.",
    venue: "Brain, Apr 2015",
    url: "https://academic.oup.com/brain/article/138/9/e380/309668",
    role: "first",
    topic: "als"
  },
  {
    year: 2015,
    title: "Drug repositioning for diabetes based on 'omics' data mining",
    authors: "Ming Zhang#, et al.",
    venue: "PLoS ONE, 6 May 2015",
    url: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0126082",
    role: "corresponding",
    topic: "other"
  },
  {
    year: 2014,
    title: "Progesterone receptor membrane component 1 is a functional part of the glucagon-like peptide-1 (GLP-1) receptor complex in pancreatic \u03b2 cells",
    authors: "Ming Zhang, et al.",
    venue: "Molecular & Cellular Proteomics, Nov 2014",
    url: "https://www.mcponline.org/article/S1535-9476(20)33564-4/fulltext",
    role: "first",
    topic: "other"
  }
];
