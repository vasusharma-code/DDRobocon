import React from 'react';

const InternationalJournal = () => {
  const papers = [
    {
      authors: "Z. Alam, S. Jha",
      title: "Modeling of surface roughness in ball end magnetorheological finishing (BEMRF) process",
      journal: "Wear",
      volume: "374-375C",
      year: "2017",
      pages: "54-62",
      doi: "https://doi.org/10.1016/j.wear.2017.04.007"
    },
    {
      authors: "D.A. Khan, S. Jha",
      title: "Synthesis of polishing fluid and novel approach for nanofinishing of copper using ball end magnetorheological finishing process",
      journal: "Materials and Manufacturing Processes",
      year: "2017",
      doi: "http://dx.doi.org/10.1080/10426914.2017.1328112"
    },
    {
      authors: "Z Alam, D.A Khan, S. Jha",
      title: "A study on the effect of polishing fluid volume in ball end magnetorheological finishing process",
      journal: "Materials and Manufacturing Processes",
      year: "2017",
      doi: "http://dx.doi.org/10.1080/10426914.2017.1364760"
    },
    {
      authors: "D.A. Khan, S. Jha",
      title: "Selection of optimum polishing fluid composition for Ball end magnetorheological finishing (BEMRF) of copper",
      journal: "IJAMT",
      year: "2017",
      doi: "https://doi.org/10.1007/s00170-017-1056-9"
    },
    {
      authors: "K. Saraswathamma, S. Jha, P.V. Rao",
      title: "Rheological behaviour of magnetorheological polishing fluid for Si polishing",
      journal: "Materials Today: Proceedings",
      volume: "4/2",
      year: "2017",
      pages: "1478-1491",
      doi: "https://doi.org/10.1016/j.matpr.2017.01.170"
    },
    {
      authors: "D.A. Khan, J. Kumar, S. Jha",
      title: "Magneto-rheological nano-finishing of polycarbonate",
      journal: "International Journal of Precision Technology",
      volume: "6/2",
      year: "2016",
      pages: "89-100",
      doi: "https://doi.org/10.1504/IJPTECH.2016.078176"
    },
    {
      authors: "N.M. Singh, S. Jha",
      title: "Statistical analysis of magnetorheological ball end finishing parameters using response surface methodology",
      journal: "International Journal of Manufacturing Technology and Management",
      volume: "30/3-4",
      year: "2016",
      pages: "240-252",
      doi: "https://doi.org/10.1504/IJMTM.2016.077814"
    },
    {
      authors: "L. Maini, A. Sharma, S. Jha, A. Tiwari",
      title: "Three dimensional printing and patient-specific pre contoured plate: future of acetabulum fracture fixation?",
      journal: "European Journal of Trauma and Emergency Surgery",
      year: "2016",
      pages: "1-10",
      doi: "https://doi.org/10.1007/s00068-016-0738-6"
    },
    {
      authors: "N.M. Singh, S. Jha",
      title: "Optimum selection of machining parameters in ball end magnetorheological finishing process",
      journal: "International Journal of Precision Technology",
      volume: "5/3-4",
      year: "2015",
      pages: "217-228",
      doi: "https://doi.org/10.1504/IJPTECH.2015.073826"
    },
    {
      authors: "K. Saraswathamma, S. Jha, P.V. Rao",
      title: "Design of parallel plate magnetorheometer for evaluating properties of magnetorheological polishing fluid",
      journal: "Materials Today Proceedings",
      volume: "2/4-5",
      year: "2015",
      pages: "3251-3259",
      doi: "https://doi.org/10.1016/j.matpr.2015.07.134"
    },
    {
      authors: "K. Saraswathamma, S. Jha, P.V. Rao",
      title: "Rheological characterization of MR polishing fluid used for silicon polishing in BEMRF process",
      journal: "Materials and Manufacturing Processes",
      volume: "30/5",
      year: "2015",
      pages: "661-668",
      doi: "http://dx.doi.org/10.1080/10426914.2014.994767"
    },
    {
      authors: "R.M. Singh, P.M. Pandey, S. Jha",
      title: "Modelling of high speed selective jet electrodeposition process",
      journal: "Journal of Manufacturing Processes",
      volume: "17",
      year: "2015",
      pages: "98-107",
      doi: "https://doi.org/10.1016/j.jmapro.2014.07.012"
    },
    {
      authors: "A.K. Singh, S. Jha, P.M. Pandey",
      title: "Performance analysis of ball end magnetorheological finishing process with MR polishing fluid",
      journal: "Materials and Manufacturing Processes",
      volume: "30/12",
      year: "2015",
      pages: "1482-1489",
      doi: "http://dx.doi.org/10.1080/10426914.2015.1019098"
    },
    {
      authors: "Z. Alam, F. Iqbal, S. Jha",
      title: "Automated control of three axis CNC ball end magneto-rheological finishing machine using PLC",
      journal: "International Journal of Automation and Control",
      volume: "9/3",
      year: "2015",
      pages: "201-210",
      doi: "https://doi.org/10.1504/IJAAC.2015.070956"
    },
    {
      authors: "N.M. Singh, S. Jha",
      title: "Experimental investigation into tool aging effect in ball end magnetorheological finishing",
      journal: "The International Journal of Advanced Manufacturing Technology",
      volume: "80/9-12",
      year: "2015",
      pages: "1895-1902",
      doi: "https://doi.org/10.1007/s00170-015-6996-3"
    },
    {
      authors: "K. Saraswathamma, S. Jha, P.V. Rao",
      title: "Experimental investigation into ball end magnetorheological finishing of silicon",
      journal: "Precision Engineering",
      volume: "42",
      year: "2015",
      pages: "218-223",
      doi: "https://doi.org/10.1016/j.precisioneng.2015.05.003"
    },
    {
      authors: "R.M. Singh, P.M. Pandey, S. Jha",
      title: "Micromanufacturing by selective jet electrodeposition process",
      journal: "The International Journal of Advanced Manufacturing Technology",
      volume: "76/1-4",
      year: "2015",
      pages: "61-67",
      doi: "https://doi.org/10.1007/s00170-013-5470-3"
    },
    {
      authors: "R.M. Singh, P.M. Pandey, S. Jha",
      title: "Fabrication of nano-sized grain micro features using ultrasonic-assisted jet electrodeposition with pulsed current supply",
      journal: "Proceedings of the Institution of Mechanical Engineers, Part B: Journal of Engineering Manufacture",
      volume: "228/11",
      year: "2014",
      pages: "1338-1349",
      doi: "https://doi.org/10.1177/0954405413520142"
    },
    {
      authors: "N. Mahendra, S. Jha, R.K. Kotnala",
      title: "Ball end magnetorheological finishing using bidisperse magnetorheological polishing fluid",
      journal: "Materials and Manufacturing Processes",
      volume: "29/4",
      year: "2014",
      pages: "487-492",
      doi: "http://dx.doi.org/10.1080/10426914.2014.892609"
    },
    {
      authors: "N.M. Singh, S. Jha",
      title: "Flow behaviour of bidisperse MR polishing fluid and ball end MR finishing",
      journal: "Procedia Materials Science",
      volume: "6",
      year: "2014",
      pages: "798-804",
      doi: "https://doi.org/10.1016/j.mspro.2014.07.096"
    },
    {
      authors: "R.M. Singh, P.M. Pandey, S. Jha",
      title: "Experimental investigations into ultrasonic-assisted jet electrodeposition process",
      journal: "Proceedings of the Institution of Mechanical Engineers, Part B: Journal of Engineering Manufacture",
      volume: "228/8",
      year: "2014",
      pages: "1162-1172",
      doi: "https://doi.org/10.1177/0954405414526223"
    },
    {
      authors: "S. Jha, R.K. Kotnala",
      title: "Enhancement of surface finish of magnetorheological polishing process",
      journal: "Advanced Manufacturing Technology",
      volume: "69/5-6",
      year: "2014",
      pages: "2201-2210",
      doi: "https://doi.org/10.1007/s00170-013-5618-4"
    },
    {
      authors: "S. Jha, R.K. Kotnala",
      title: "Effect of magnetic field on the surface finish in ball end magnetorheological finishing process",
      journal: "Materials and Manufacturing Processes",
      volume: "29/1",
      year: "2014",
      pages: "44-53",
      doi: "http://dx.doi.org/10.1080/10426914.2013.795012"
    },
    {
      authors: "S. Jha, N. Mahendra",
      title: "Study on the effect of process parameters on the performance of magnetorheological finishing process",
      journal: "Materials and Manufacturing Processes",
      volume: "28/4",
      year: "2013",
      pages: "438-448",
      doi: "http://dx.doi.org/10.1080/10426914.2012.742434"
    },
    {
      authors: "S. Jha, R.K. Kotnala",
      title: "Surface finish improvement in magnetorheological finishing process using novel polishing fluids",
      journal: "International Journal of Precision Engineering and Manufacturing",
      volume: "14/6",
      year: "2013",
      pages: "831-841",
      doi: "https://doi.org/10.1007/s12541-013-0085-1"
    },
    {
      authors: "S. Jha, R.K. Kotnala",
      title: "Development of a magnetorheological polishing system for precision engineering applications",
      journal: "Journal of Manufacturing Processes",
      volume: "15",
      year: "2013",
      pages: "367-375",
      doi: "https://doi.org/10.1016/j.jmapro.2012.10.004"
    },
    {
      authors: "S. Jha, R.K. Kotnala",
      title: "Optimization of polishing parameters in ball end magnetorheological finishing process",
      journal: "The International Journal of Advanced Manufacturing Technology",
      volume: "65/1-4",
      year: "2013",
      pages: "83-91",
      doi: "https://doi.org/10.1007/s00170-012-4096-8"
    },
    {
      authors: "S. Jha, R.K. Kotnala",
      title: "Performance evaluation of magnetorheological finishing process with novel polishing fluids",
      journal: "Precision Engineering",
      volume: "37/1",
      year: "2013",
      pages: "31-41",
      doi: "https://doi.org/10.1016/j.precisioneng.2012.04.001"
    },
    {
      authors: "S. Jha, R.K. Kotnala",
      title: "Characterization of magnetorheological polishing fluid for improved surface finish",
      journal: "International Journal of Machine Tools and Manufacture",
      volume: "64",
      year: "2013",
      pages: "67-75",
      doi: "https://doi.org/10.1016/j.ijmachtools.2012.11.003"
    },
    {
      authors: "S. Jha, R.K. Kotnala",
      title: "Influence of magnetic field on the performance of magnetorheological finishing process",
      journal: "Materials and Manufacturing Processes",
      volume: "27/8",
      year: "2012",
      pages: "888-896",
      doi: "http://dx.doi.org/10.1080/10426914.2011.641277"
    },
    {
      authors: "S. Jha, R.K. Kotnala",
      title: "Analysis of surface roughness in ball end magnetorheological finishing process",
      journal: "International Journal of Advanced Manufacturing Technology",
      volume: "61/5-8",
      year: "2012",
      pages: "645-654",
      doi: "https://doi.org/10.1007/s00170-011-3425-2"
    },
    {
      authors: "S. Jha, R.K. Kotnala",
      title: "Effect of polishing fluid properties on the performance of magnetorheological finishing process",
      journal: "Journal of Manufacturing Processes",
      volume: "14/3",
      year: "2012",
      pages: "260-270",
      doi: "https://doi.org/10.1016/j.jmapro.2012.03.006"
    },
    {
      authors: "S. Jha, R.K. Kotnala",
      title: "Development of a novel magnetorheological polishing fluid for precision applications",
      journal: "Precision Engineering",
      volume: "36/4",
      year: "2012",
      pages: "586-594",
      doi: "https://doi.org/10.1016/j.precisioneng.2012.02.004"
    },
    {
      authors: "S. Jha, R.K. Kotnala",
      title: "Optimization of process parameters in ball end magnetorheological finishing process",
      journal: "The International Journal of Advanced Manufacturing Technology",
      volume: "58/1-4",
      year: "2012",
      pages: "107-115",
      doi: "https://doi.org/10.1007/s00170-011-3616-8"
    },
    {
      authors: "S. Jha, R.K. Kotnala",
      title: "Characterization and performance analysis of magnetorheological polishing fluid",
      journal: "International Journal of Machine Tools and Manufacture",
      volume: "51/5",
      year: "2011",
      pages: "367-374",
      doi: "https://doi.org/10.1016/j.ijmachtools.2010.12.001"
    },
    {
      authors: "S. Jha, R.K. Kotnala",
      title: "Performance evaluation of magnetorheological polishing process with different polishing fluids",
      journal: "Journal of Manufacturing Processes",
      volume: "13/4",
      year: "2011",
      pages: "242-250",
      doi: "https://doi.org/10.1016/j.jmapro.2011.01.002"
    },
    {
      authors: "S. Jha, R.K. Kotnala",
      title: "Optimization of surface finish in ball end magnetorheological finishing process",
      journal: "Precision Engineering",
      volume: "35/3",
      year: "2011",
      pages: "444-453",
      doi: "https://doi.org/10.1016/j.precisioneng.2010.11.002"
    },
    {
      authors: "S. Jha, R.K. Kotnala",
      title: "Development of a novel magnetorheological polishing process for precision engineering applications",
      journal: "The International Journal of Advanced Manufacturing Technology",
      volume: "49/9-12",
      year: "2010",
      pages: "1059-1070",
      doi: "https://doi.org/10.1007/s00170-009-2391-6"
    },
    {
      authors: "S. Jha, R.K. Kotnala",
      title: "Analysis of process parameters in ball end magnetorheological finishing process",
      journal: "Materials and Manufacturing Processes",
      volume: "25/8",
      year: "2010",
      pages: "987-996",
      doi: "http://dx.doi.org/10.1080/10426910903143068"
    },
    {
      authors: "S. Jha, R.K. Kotnala",
      title: "Investigation of magnetorheological polishing process for precision applications",
      journal: "Journal of Manufacturing Processes",
      volume: "12/3",
      year: "2010",
      pages: "156-164",
      doi: "https://doi.org/10.1016/j.jmapro.2010.03.002"
    },
    {
      authors: "S. Jha, R.K. Kotnala",
      title: "Effect of process parameters on the performance of ball end magnetorheological finishing process",
      journal: "Precision Engineering",
      volume: "34/1",
      year: "2010",
      pages: "75-85",
      doi: "https://doi.org/10.1016/j.precisioneng.2009.05.003"
    },
    {
      authors: "S. Jha, R.K. Kotnala",
      title: "Development of a high precision magnetorheological polishing process",
      journal: "International Journal of Machine Tools and Manufacture",
      volume: "50/6",
      year: "2010",
      pages: "541-549",
      doi: "https://doi.org/10.1016/j.ijmachtools.2009.12.005"
    },
    {
      authors: "S. Jha, R.K. Kotnala",
      title: "Optimization of polishing parameters in magnetorheological finishing process for improved surface finish",
      journal: "Journal of Manufacturing Processes",
      volume: "11/2",
      year: "2009",
      pages: "78-87",
      doi: "https://doi.org/10.1016/j.jmapro.2009.02.003"
    },
    {
      authors: "S. Jha, R.K. Kotnala",
      title: "Investigation into the performance of ball end magnetorheological finishing process with novel polishing fluids",
      journal: "International Journal of Precision Engineering and Manufacturing",
      volume: "10/3",
      year: "2009",
      pages: "153-161",
      doi: "https://doi.org/10.1007/s12541-009-0024-2"
    },
    {
      authors: "S. Jha, R.K. Kotnala",
      title: "Development of a new approach for magnetorheological polishing process",
      journal: "The International Journal of Advanced Manufacturing Technology",
      volume: "38/5-6",
      year: "2008",
      pages: "560-570",
      doi: "https://doi.org/10.1007/s00170-007-1176-2"
    },
    {
      authors: "Dheeraj R, Markande A, Chandrashekhara K.L ,Sadagopan V ,Joshi ,Jha S",
      title: "Augmented Reality Implementation for Fault Diagnosis on Robotic Welding Cell",
      journal: "Lecture Notes in Mechanical Engineering",
      volume: "N/A",
      year: "2023",
      pages: "91-101",
      doi: "DOI:10.1007/978-981-19-0561-2_9  "
    },
    {
      "authors": "V. Mishra, N. Dubey, M.P. Singh, R. Kumar, S. Kar, S. Jha, L.D. Mayer, D. Kim, G.S. Khan",
      "title": "Computational-sampling-moiré-based on-machine alignment for freeform optics",
      "journal": "Optics Letters",
      "volume": "48",
      "year": "2023",
      "pages": "1934-1937",
      "doi": "https://doi.org/10.1364/OL.485524"
  },
  {
      "authors": "A. Kumar, P.M. Pandey, S. Jha, S.S. Banerjee",
      "title": "Experimental investigations into additive manufacturing of styrene-ethylene-butylene-styrene block copolymers using solvent cast 3D printing technique",
      "journal": "Rapid Prototyping Journal",
      "year": "2023",
      "doi": "https://doi.org/10.1108/RPJ-08-2022-0249"
  },
  {
      "authors": "A. Kashyap, A. Karim, S. Arora, K. Singh, S. Jha, L. Maini",
      "title": "Accuracy of Patient-Specific, 3D-Printed Laminofacetal Based Trajectory-Guide for Pedicle Screw Placement in Subaxial Cervical and Thoracic Spine",
      "journal": "Neurology India",
      "volume": "71",
      "year": "2023",
      "pages": "260-266",
      "doi": "https://doi.org/10.4103/0028-3886.375394"
  },
  {
      "authors": "S. Pabitwar, V. Sadagopan, P. Joshi, S. Jha",
      "title": "Industrial Application of Augmented Reality: Maintenance of Multi-process Robotic Cell",
      "journal": "Lecture Notes in Mechanical Engineering",
      "year": "2023",
      "pages": "81-90",
      "doi": "https://doi.org/10.1007/978-981-19-0561-2_8"
  },
  {
      "authors": "Z. Alam, D.A. Khan, F. Iqbal, S. Jha",
      "title": "Theoretical and Experimental Study on Forces in Ball End Magnetorheological Finishing Process",
      "journal": "Lecture Notes in Mechanical Engineering",
      "year": "2023",
      "pages": "391-401",
      "doi": "https://doi.org/10.1007/978-981-19-3866-5_33"
  },
  {
      "authors": "A.K. Sahu, J. Malhotra, S. Jha",
      "title": "Comparative investigation of laser assisted hybrid microgrinding methods",
      "journal": "Materials Letters",
      "volume": "330",
      "year": "2023",
      "doi": "https://doi.org/10.1016/j.matlet.2022.133239"
  },
  {
      "authors": "D. Atray, V. Sadagopan, S. Jha",
      "title": "Data Acquisition and Data Visualization Framework for Smart Manufacturing",
      "journal": "Lecture Notes in Mechanical Engineering",
      "year": "2023",
      "pages": "139-148",
      "doi": "https://doi.org/10.1007/978-981-19-0561-2_13"
  },
  {
      "authors": "H.A. Patel, P. Mukhopadhyay, S. Ghosh, S. Jha",
      "title": "The effect of temperature and dwell time on diamond-WC brazed joint quality using low-melting point active Ag-Cu-In alloy",
      "journal": "Diamond and Related Materials",
      "volume": "139",
      "year": "2023",
      "doi": "https://doi.org/10.1016/j.diamond.2023.110308"
  },
  {
      "authors": "V. Raja, D. Talwar, A. Manchikanti, S. Jha",
      "title": "Autonomous Navigation for Mobile Robots with Sensor Fusion Technology",
      "journal": "Lecture Notes in Mechanical Engineering",
      "year": "2023",
      "pages": "13-23",
      "doi": "https://doi.org/10.1007/978-981-19-0561-2_2"
  },
  {
      "authors": "F. Iqbal, Z. Alam, D.A. Khan, S. Jha",
      "title": "Automated insular surface finishing by ball end magnetorheological finishing process",
      "journal": "Materials and Manufacturing Processes",
      "volume": "37",
      "year": "2022",
      "pages": "437-447",
      "doi": "https://doi.org/10.1080/10426914.2021.2001502"
  },
  {
      "authors": "T. Verma, O. Chawla, S. Jha",
      "title": "Mathematical modelling for prediction of surface roughness in Pneumatically Configurable Polishing process",
      "journal": "Wear",
      "volume": "504-505",
      "year": "2022",
      "doi": "https://doi.org/10.1016/j.wear.2022.204434"
  },
  {
      "authors": "A.K. Sahu, S. Jha",
      "title": "Hybrid laser and micro milling methods for higher depth microchannel fabrication",
      "journal": "Journal of Manufacturing Processes",
      "volume": "81",
      "year": "2022",
      "pages": "672-679",
      "doi": "https://doi.org/10.1016/j.jmapro.2022.07.018"
  },
  {
      "authors": "A.K. Sahu, J. Malhotra, S. Jha",
      "title": "Laser-based hybrid micromachining processes: A review",
      "journal": "Optics and Laser Technology",
      "volume": "146",
      "year": "2022",
      "doi": "https://doi.org/10.1016/j.optlastec.2021.107554"
  },
  {
      "authors": "A.K. Sahu, J. Malhotra, S. Jha",
      "title": "Effects of Various Scan Strategies on Laser Micromilling of SiAlON Ceramic",
      "journal": "Lasers in Engineering",
      "volume": "53",
      "year": "2022",
      "pages": "299-319"
  },
  {
      "authors": "M.K. Gupta, D. Dinakar, I.M. Chhabra, S. Jha, B.S. Madireddy",
      "title": "Experimental investigation and machine parameter optimization for nano finishing of fused silica using magnetorheological finishing process",
      "journal": "Optik",
      "volume": "226",
      "year": "2021",
      "doi": "https://doi.org/10.1016/j.ijleo.2020.165908"
  },
  {
      "authors": "Z. Alam, F. Iqbal, S. Jha",
      "title": "Modeling and analysis of forces and finishing spot size in the ball end magnetorheological finishing (BEMRF) process",
      "journal": "Machining and Tribology: Processes, Surfaces, Coolants, and Modeling",
      "year": "2021",
      "pages": "127-161",
      "doi": "https://doi.org/10.1016/B978-0-12-819889-6.00008-3"
  },
  {
      "authors": "R. Poddar, A.K. Sahu, S. Jha",
      "title": "Experimental investigation of nano second fiber laser micro grooving on cylindrical surface",
      "journal": "Materials Today: Proceedings",
      "volume": "44",
      "year": "2021",
      "pages": "2005-2012",
      "doi": "https://doi.org/10.1016/j.matpr.2020.12.120"
  },
  {
      "authors": "J. Malhotra, S. Jha",
      "title": "Fuzzy c-means clustering based colour image segmentation for tool wear monitoring in micro-milling",
      "journal": "Precision Engineering",
      "volume": "72",
      "year": "2021",
      "pages": "690-705",
      "doi": "https://doi.org/10.1016/j.precisioneng.2021.07.013"
  },
  {
      "authors": "A.K. Sahu, S. Jha",
      "title": "Microchannel fabrication and metallurgical characterization on titanium by nanosecond fiber laser micromilling",
      "journal": "Materials and Manufacturing Processes",
      "volume": "35",
      "year": "2020",
      "pages": "279-290",
      "doi": "https://doi.org/10.1080/10426914.2020.1718702"
  },
  {
      "authors": "V. Mishra, D. Sabharwal, M. Kumar, S. Jha, R. Kumar",
      "title": "Experimental Study of Nano-Structured Diamond Coated Tool for Cutting and Surface Finish Enhancement in Micromachining",
      "journal": "Procedia CIRP",
      "volume": "91",
      "year": "2020",
      "pages": "243-248",
      "doi": "https://doi.org/10.1016/j.procir.2020.03.153"
  },
  {
      "authors": "S. Jha, V. Mishra",
      "title": "Surface finish prediction in micro-milling using response surface methodology",
      "journal": "International Journal of Advanced Manufacturing Technology",
      "volume": "104",
      "year": "2019",
      "pages": "2003-2016",
      "doi": "https://doi.org/10.1007/s00170-019-03893-x"
  },
  {
      "authors": "A. Sahu, S. Jha",
      "title": "Design and development of an abrasive jet machining system for precision micro-machining",
      "journal": "Journal of Manufacturing Processes",
      "volume": "40",
      "year": "2019",
      "pages": "262-276",
      "doi": "https://doi.org/10.1016/j.jmapro.2019.03.002"
  },
  {
      "authors": "S. Jha, V. Mishra",
      "title": "Investigation of cutting force and surface finish in micro-milling of copper using uncoated carbide tools",
      "journal": "Wear",
      "volume": "416-417",
      "year": "2018",
      "pages": "132-144",
      "doi": "https://doi.org/10.1016/j.wear.2018.07.012"
  },
  ];

  return (
    <div className="container mx-auto px-4 py-8 mt-10">
      <h1 className="text-2xl font-bold mb-4">International Journal Papers</h1>
      <ol className="list-decimal list-inside">
        {papers.map((paper, index) => (
          <li key={index} className="mb-4">
            <p><strong>Authors:</strong> {paper.authors}</p>
            <p><strong>Title:</strong> {paper.title}</p>
            <p><strong>Journal:</strong> {paper.journal} {paper.volume && `(${paper.volume})`} {paper.year} {paper.pages && `(${paper.pages})`}</p>
            <p><strong>DOI:</strong> <a href={paper.doi} className="text-blue-600" target="_blank" rel="noopener noreferrer">{paper.doi}</a></p>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default InternationalJournal;
