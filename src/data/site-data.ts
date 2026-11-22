export interface ServiceItem {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  summary: string;
  image: string;
  imageAlt: string;
  highlights: string[];
  sections: {
    heading: string;
    paragraphs: string[];
    bullets?: string[];
  }[];
  quote?: {
    text: string;
    author: string;
  };
}

export interface TeamMember {
  slug: string;
  name: string;
  role: string;
  shortRole: string;
  image: string;
  imageAlt: string;
  credentials: string[];
  education?: string;
  experienceSummary: string;
  bio: string[];
}

export interface TestimonialItem {
  id: number;
  quote: string;
  patient: string;
  discipline: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  category: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  content: string[];
  badges?: string[];
}

export const SITE_INFO = {
  name: "Tri-Valley Home Health Care, Inc.",
  shortName: "Tri-Valley Home Health Care",
  established: 2000,
  phone: "(209) 957-0708",
  phoneHref: "tel:+12099570708",
  fax: "(209) 957-7866",
  email: "info@trivalleyhomehealth.com",
  address: "1231 West Robinhood Dr., Suite D5, Stockton, CA 95207",
  shortAddress: "1231 W Robinhood Dr, Ste D5, Stockton, CA 95207",
  hours: "Monday – Friday: 8:30 AM – 5:00 PM (24/7 On-Call Nursing)",
  counties: [
    "Alameda County",
    "San Joaquin County",
    "Stanislaus County",
    "Sacramento County",
  ],
  vimeoIntroId: "1211943712",
  vimeoIntroUrl: "https://vimeo.com/1211943712",
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=1231+West+Robinhood+Dr+Suite+D5+Stockton+CA+95207",
  googleMapsEmbedUrl:
    "https://maps.google.com/maps?q=1231+West+Robinhood+Drive+Suite+D5+Stockton+CA+95207&t=&z=15&ie=UTF8&iwloc=&output=embed",
};

export const SERVICES: ServiceItem[] = [
  {
    slug: "skilled-nursing-care",
    title: "Skilled Nursing Care",
    shortTitle: "Skilled Nursing",
    tagline: "RN & LPN In-Home Medical Care",
    summary:
      "Experienced Registered Nurses and Licensed Practical Nurses delivering wound care, 24/7 post-operative recovery, medication pre-organization, and chronic disease management.",
    image: "/images/service-skilled-nursing.png",
    imageAlt:
      "Registered nurse checking in on a smiling senior patient in the comfort of her home",
    highlights: [
      "Complex Wound Care",
      "24/7 Post-Op Nursing",
      "Diabetes & Asthma Care",
      "Parkinson's & Alzheimer's",
      "Medication Pre-Fill",
      "Flu & Immunizations",
    ],
    sections: [
      {
        heading: "Beyond Companion Care: Clinical Nursing at Home",
        paragraphs: [
          "At Tri-Valley Home Health Care, our services go beyond companion care. Our experienced Registered Nurses (RNs) and Licensed Practical Nurses (LPNs) deliver around-the-clock or part-time skilled medical care tailored to each patient’s specialized needs in the comfort of home.",
          "Our clinical staff works directly with your physician and interdisciplinary care team to develop an individualized care plan and ensure seamless continuity of care.",
        ],
        bullets: [
          "Seniors or elderly adults who need medical assistance at home due to illness or age",
          "Individuals with disabilities, chronic illness, or terminal illness who wish to remain at home",
          "Patients requiring post-operative nursing care following hospital discharge",
          "Private duty hospital and transitional care",
          "Respite care support for family members caring for a loved one",
        ],
      },
      {
        heading: "Specialized Skilled Nursing Procedures",
        paragraphs: [
          "Every visit combines clinical precision with compassionate family education so patients and caregivers feel confident between nursing visits.",
        ],
        bullets: [
          "Medication administration & pre-organization by daily medication cycle",
          "Flu vaccinations and immunization services",
          "24/7 post-operative nursing care at home or in board-and-care settings",
          "Complex wound care and dressing management",
          "Parkinson’s Disease & Alzheimer’s Disease care",
          "Diabetes management & Asthma respiratory care",
          "Pain & medication management and ongoing vital sign monitoring",
          "Teaching self-care and family caregiver techniques",
        ],
      },
    ],
  },
  {
    slug: "rehabilitative-care",
    title: "Rehabilitative Care",
    shortTitle: "Rehabilitative Care",
    tagline: "Physical, Occupational & Speech Therapy",
    summary:
      "One-on-one Physical, Occupational, and Speech therapy sessions in the home environment to restore strength, mobility, speech, and daily functional independence.",
    image: "/images/service-rehab.jpg",
    imageAlt:
      "Physical therapist guiding an older adult through safe in-home mobility rehabilitation exercises",
    highlights: [
      "Physical Therapy (PT)",
      "Occupational Therapy (OT)",
      "Speech Therapy (ST)",
      "Fall Prevention",
      "Post-Surgery Mobility",
      "1-on-1 Home Sessions",
    ],
    sections: [
      {
        heading: "Restoring Independence Where Life Happens",
        paragraphs: [
          "Tri-Valley Home Health Care therapists are highly trained and carefully screened to deliver evidence-based in-home rehabilitation. Working directly in your home environment allows therapy to address real staircases, bathrooms, seating, and daily routines.",
          "Each patient’s personal goals, medical history, and recovery pace guide their custom treatment plan.",
        ],
        bullets: [
          "Physical Therapy: Gait training, balance restoration, joint replacement recovery, and fall-risk reduction",
          "Occupational Therapy: Upper-body strength, adaptive techniques for dressing/bathing, and home safety modifications",
          "Speech Therapy: Post-stroke communication recovery, cognitive exercises, and swallowing safety (dysphagia care)",
        ],
      },
    ],
  },
  {
    slug: "home-health-aide",
    title: "Home Health Aide",
    shortTitle: "Home Health Aide",
    tagline: "Dignified Personal Care & Daily Living Assistance",
    summary:
      "Age, illness, or a surgical procedure can make everyday routines challenging. Our certified caregivers deliver bathing, grooming, mobility, and meal support with warmth and dignity.",
    image: "/images/service-home-health-aide.jpg",
    imageAlt:
      "Compassionate home health aide holding a senior patient's hand for gentle daily support",
    highlights: [
      "Bathing & Showering",
      "Oral & Personal Hygiene",
      "Walking & Transfers",
      "Posture Positioning",
      "Special Diet Prep",
      "Eating Assistance",
    ],
    sections: [
      {
        heading: "Bathing and Personal Hygiene with Dignity",
        paragraphs: [
          "Age, illness, or a surgical procedure can make it difficult to accomplish everyday tasks such as bathing, getting dressed, and grooming oneself. Accepting personal care from someone new takes trust—Tri-Valley caregivers go above and beyond to ensure your loved one feels comfortable, respected, and dignified.",
        ],
        bullets: [
          "Dressing, bathing, and showering assistance",
          "Bed baths and personal appearance care",
          "Oral hygiene and gentle personal hygiene assistance",
          "Toilet and incontinence care",
        ],
      },
      {
        heading: "Mobility, Posture, Transfers & Meal Preparation",
        paragraphs: [
          "Physical movement improves both physical circulation and emotional well-being. Our aides support safe walking, stair navigation, vehicle transfers, proper seating posture during meals, and preparation of nutritious meals aligned with dietary or religious requirements.",
        ],
        bullets: [
          "Assisted walking, stair safety, and vehicle transfers",
          "Proper posture positioning while eating or sitting to aid digestion and circulation",
          "Safe bed-to-chair and bathroom transfers",
          "Special diet meal preparation and sensitive assistance with eating and drinking",
        ],
      },
    ],
  },
  {
    slug: "medical-social-worker",
    title: "Medical Social Worker",
    shortTitle: "Medical Social Worker",
    tagline: "Emotional Counseling, Advocacy & Community Resources",
    summary:
      "Master's-prepared Medical Social Workers addressing social, emotional, financial, and transition challenges for patients and their family caregivers.",
    image: "/images/service-msw.png",
    imageAlt:
      "Licensed Medical Social Worker smiling during an in-home family care consultation",
    highlights: [
      "Psychosocial Assessment",
      "Grief & Emotional Support",
      "Community Resources",
      "Crisis Intervention",
      "Caregiver Respite",
      "Advance Directives",
    ],
    sections: [
      {
        heading: "Holistic Emotional & Resource Support for Families",
        paragraphs: [
          "The Medical Social Worker (MSW) at Tri-Valley Home Health Care plays a vital role in supporting patients and families by addressing the social, emotional, and environmental factors that affect healing. Collaborating closely with nurses, therapists, and physicians, our MSWs integrate compassionate social support directly into the home care plan.",
        ],
        bullets: [
          "Assessment of Patient Needs: Holistic evaluation of social, emotional, and home environment needs",
          "Emotional Support & Counseling: Grief counseling and mental health resources for coping with illness or life transitions",
          "Resource Coordination: Connecting families with financial aid, housing modifications, transportation, and support groups",
          "Crisis Intervention: Immediate clinical guidance during health or emotional crises",
          "Caregiver Support: Coaching family caregivers and coordinating respite care options",
          "Discharge & Transition Planning: Smooth transitions between home health, rehabilitation, or specialized care settings",
          "Legal & Ethical Guidance: Assistance with advance directives, healthcare proxies, and patient rights",
        ],
      },
    ],
  },
  {
    slug: "registered-dietitian",
    title: "Registered Dietitian",
    shortTitle: "Registered Dietitian",
    tagline: "Medical Nutrition Therapy & Personalized Meal Plans",
    summary:
      "Expert clinical nutrition evaluations and customized meal planning for diabetes, heart disease, renal health, food allergies, and post-surgical recovery.",
    image: "/images/service-dietitian.png",
    imageAlt:
      "Registered Dietitian preparing an individualized nutrition care plan for a home health patient",
    highlights: [
      "Nutritional Assessment",
      "Diabetes & Heart Plans",
      "Renal & Allergy Diets",
      "Post-Surgical Healing",
      "Caregiver Meal Prep",
      "Progress Monitoring",
    ],
    sections: [
      {
        heading: "Clinical Nutrition Tailored to Recovery",
        paragraphs: [
          "Tri-Valley’s Registered Dietitians evaluate each patient’s nutritional status, medical conditions, cultural preferences, and daily habits to craft practical, healing nutrition plans integrated with the broader medical care plan.",
        ],
        bullets: [
          "Nutritional Assessment: Comprehensive review of medical history, labs, dietary habits, and lifestyle",
          "Condition-Focused Counseling: Actionable meal planning for diabetes, heart disease, renal disease, food allergies, and malnutrition",
          "Post-Surgical Recovery Nutrition: Protein and micronutrient strategies to support wound healing and strength",
          "Patient & Caregiver Education: Hands-on guidance for preparing nutrient-dense meals at home",
          "Community Access & Follow-Up: Coordinating dietary supplements, specialized products, and ongoing progress reviews",
        ],
      },
    ],
  },
  {
    slug: "infusion-services",
    title: "Infusion Services",
    shortTitle: "Infusion Services",
    tagline: "Safe, Comfort-Focused In-Home IV Therapy",
    summary:
      "Specialized IV therapy RNs administering physician-prescribed intravenous medications, managing infusion pumps, monitoring side effects, and educating caregivers.",
    image: "/images/service-infusion.jpg",
    imageAlt:
      "Close-up of safe intravenous infusion pump monitoring by a Tri-Valley home health registered nurse",
    highlights: [
      "IV Pump Management",
      "Safe Med Delivery",
      "Side-Effect Monitoring",
      "Caregiver Training",
      "MD Coordination",
      "Supervisor Oversight",
    ],
    sections: [
      {
        heading: "Hospital-Grade IV Precision in the Comfort of Home",
        paragraphs: [
          "Our infusion services are administered by registered nurses (RNs) and clinical specialists with extensive intravenous therapy experience. Working hand-in-hand with your physician, clinical field supervisors, and Director of Patient Care Services, we ensure every infusion protocol is followed safely.",
        ],
        bullets: [
          "Setting up, programming, and monitoring home infusion pumps",
          "Administering IV medications and hydration safely and on schedule",
          "Continuous monitoring for side effects, vascular access integrity, or adverse reactions",
          "Clear hands-on education for patients and caregivers managing infusions between visits",
        ],
      },
    ],
    quote: {
      text: "Our paramount objective is to consistently provide unparalleled quality service.",
      author: "Necita Tecson Manapul, RN — CEO / Founder",
    },
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    slug: "necita-tecson-manapul-rn",
    name: "Necita Tecson Manapul, RN",
    role: "CEO / Administrator",
    shortRole: "CEO / Administrator",
    image: "/images/team-necita.jpg",
    imageAlt: "Portrait of Necita Tecson Manapul, RN, Founder and CEO of Tri-Valley Home Health Care",
    credentials: ["Registered Nurse (RN)", "Founder (Est. 2000)", "30+ Yrs Healthcare"],
    experienceSummary: "Over 30 years of clinical and home healthcare leadership in Northern California.",
    bio: [
      "Necita Tecson Manapul, RN, the visionary founder and CEO of Tri-Valley Home Health Care, Inc., has been a trailblazer in the home healthcare industry for over 25 years. Based in Stockton, California, her distinguished career as a Registered Nurse includes holding key clinical leadership positions at renowned medical institutions.",
      "She served as Charge Nurse on the Cardiac Progressive Respiratory floor at St. Joseph’s Medical Center and held critical nursing leadership roles at Eden Township Hospital, as well as Director of Patient Care Services at Eden Rehabilitation Hospital. Each of these roles sharpened her expertise and deepened her commitment to delivering the highest standards of patient care.",
      "Driven by a profound dedication to her community, Cita founded Tri-Valley Home Health Care in 2000 with a clear mission: to provide compassionate, high-quality care that enhances the well-being of individuals and their families across San Joaquin County and neighboring regions.",
      "Cita’s impact extends well beyond clinical administration. A passionate philanthropist inspired by her late father Emilio Tecson’s legacy, she has taken on pro bono cases for underserved families and organized medical mission drives for vulnerable populations—leaving a lasting legacy across thousands of lives touched.",
    ],
  },
  {
    slug: "jefferson-l-manapul",
    name: "Jefferson L. Manapul",
    role: "Chief Operations Officer",
    shortRole: "Chief Operations Officer",
    image: "/images/team-jefferson.jpg",
    imageAlt: "Portrait of Jefferson L. Manapul, Chief Operations Officer at Tri-Valley Home Health Care",
    credentials: ["Chief Operations Officer", "Operations & Strategy", "Clinical Recruitment"],
    experienceSummary: "Service-driven operational leadership across healthcare, hospitality, and aviation.",
    bio: [
      "Jefferson serves as Chief Operations Officer of Tri-Valley Home Health Care, Inc., bringing a diverse background in business development, aviation, hospitality, and customer relationship management. His leadership blends a service-driven approach with practical operational coordination.",
      "Jefferson’s foundation in business began at a young age under the mentorship of his father, Joselito Sandoval Manapul, founder of GRP Marine Services (est. 2007 in Egypt). As Business Development Manager, Jefferson oversaw external affairs and partnerships—instilling an appreciation for accountability, perseverance, and earning trust.",
      "With nearly a decade of experience in inflight services for a legacy flag carrier, Jefferson honed his ability to lead through service, respond calmly to complex situations, and collaborate across diverse communities. His hospitality tenure with Ascott Ltd. properties and later roles progressing from Business Development Manager to Customer Relationship Manager in multinational pharmaceutical distribution strengthened his commitment to service excellence.",
      "At Tri-Valley, Jefferson leads operational and marketing strategies, strengthens the agency’s digital presence, and oversees clinical recruitment and hiring—working closely with nursing and administrative leaders to support staff and serve patients and families dependably.",
    ],
  },
  {
    slug: "dr-edmund-yao-md",
    name: "Dr. Edmund Yao, MD",
    role: "Medical Consultant",
    shortRole: "Medical Consultant",
    image: "/images/team-edmund-yao.jpg",
    imageAlt: "Portrait of Dr. Edmund Yao, MD, Medical Consultant at Tri-Valley Home Health Care",
    credentials: ["Doctor of Medicine (MD)", "Internal Medicine", "30+ Yrs Clinical Practice"],
    education: "Cebu Institute of Medicine (1991)",
    experienceSummary: "Distinguished Stockton internist affiliated with St. Joseph's Medical Center & Mark Twain Medical Center.",
    bio: [
      "Dr. Edmund Yao, MD, is a distinguished internist practicing in Stockton, California. A 1991 graduate of the Cebu Institute of Medicine, he has built a 30+ year reputation for compassionate, patient-centered internal medicine.",
      "In addition to his affiliations with St. Joseph’s Medical Center Stockton and Mark Twain Medical Center, Dr. Yao serves as Medical Consultant for Tri-Valley Home Health Care, providing clinical oversight and physician guidance to ensure homebound patients receive safe, high-quality medical care.",
      "His deep knowledge of internal medicine and commitment to continuity of care beyond hospital walls make him a vital clinical anchor for Tri-Valley’s multidisciplinary team and the wider Stockton healthcare community.",
    ],
  },
  {
    slug: "sherwin-mattamu-rn-msn-ccrn",
    name: "Sherwin Mattamu, RN, MSN, CCRN",
    role: "Nursing Consultant",
    shortRole: "Nursing Consultant",
    image: "/images/team-sherwin.jpg",
    imageAlt: "Portrait of Sherwin Mattamu, RN, MSN, CCRN, Nursing Consultant at Tri-Valley Home Health Care",
    credentials: ["Registered Nurse (RN)", "Master of Science in Nursing (MSN)", "Critical Care Certified (CCRN)"],
    education: "Master of Science in Nursing (MSN)",
    experienceSummary: "Advanced critical-care certified nursing consultant guiding complex clinical protocols.",
    bio: [
      "Sherwin Mattamu, RN, MSN, CCRN, serves as Nursing Consultant at Tri-Valley Home Health Care, Inc., bringing advanced critical-care credentials and graduate-level clinical nursing expertise to our home health practice.",
      "Holding a Master of Science in Nursing (MSN) alongside Critical Care Registered Nurse (CCRN) board certification, Sherwin advises our skilled nursing team on complex post-acute care pathways, cardiopulmonary monitoring, medication safety, and evidence-based patient education.",
      "Through clinical consultation and interdisciplinary mentorship, Sherwin helps ensure patients transitioning home from intensive or acute hospital stays receive rigorous, compassionate clinical oversight.",
    ],
  },
  {
    slug: "dionicia-calvan-rn",
    name: "Antonette M. Lee, RN",
    role: "Quality Assurance & Performance Improvement (QAPI) Nurse",
    shortRole: "QAPI Nurse",
    image: "/images/team-antonette.png",
    imageAlt: "Portrait of Antonette M. Lee, RN, QAPI Nurse at Tri-Valley Home Health Care",
    credentials: ["Registered Nurse (RN)", "QAPI Clinical Quality", "With Tri-Valley Since 2015"],
    education: "BSN, Centro Escolar University (Manila, Philippines)",
    experienceSummary: "Supports clinical documentation integrity, care standards, and interdisciplinary quality assurance.",
    bio: [
      "Antonette M. Lee, RN, serves as a Quality Assurance & Performance Improvement (QAPI) Nurse at Tri-Valley Home Health Care, Inc., bringing skilled nursing expertise and a strong dedication to clinical quality, patient safety, and continuous improvement.",
      "She earned her Bachelor of Science in Nursing from Centro Escolar University in Manila, Philippines. Her clinical philosophy reflects a patient-centered approach grounded in professional accountability, continuity of care, and clear communication.",
      "As QAPI Nurse, Antonette oversees clinical documentation integrity, regulatory adherence, and ongoing care evaluation. Her connection with Tri-Valley began in 2015 as an Administrative Assistant—giving her a rare, holistic perspective uniting seamless office coordination with clinical nursing excellence.",
    ],
  },
  {
    slug: "kristine-romero-rn",
    name: "Kristine Romero, RN",
    role: "Quality Assurance & Performance Improvement (QAPI) Nurse",
    shortRole: "QAPI Nurse",
    image: "/images/team-kristine.png",
    imageAlt: "Portrait of Kristine Romero, RN, QAPI Nurse at Tri-Valley Home Health Care",
    credentials: ["Registered Nurse (RN)", "Former LVN (7 Yrs)", "10+ Yrs Healthcare"],
    education: "BSN, University of the Cordilleras (Baguio City, Philippines)",
    experienceSummary: "Over a decade of nursing experience across home health, pediatrics, and quality audits.",
    bio: [
      "Kristine Romero, RN, is a dedicated nursing professional serving as Quality Assurance & Performance Improvement (QAPI) Nurse at Tri-Valley Home Health Care, Inc. With over a decade in healthcare, she brings deep hands-on clinical judgment and a passion for patient-centered care.",
      "Kristine began her career as a Licensed Vocational Nurse (LVN), spending seven years caring for patients in long-term care and developmentally disabled settings before advancing to Registered Nurse across home health, pediatric day health, intermediate care facilities, and outpatient clinics.",
      "She earned her Bachelor of Science in Nursing from the University of the Cordilleras in Baguio City, Philippines. In her QAPI role, Kristine leads clinical chart audits, performance improvement initiatives, and clinician support to uphold Tri-Valley’s highest standards of safety and compliance.",
    ],
  },
  {
    slug: "beatriz-rivera",
    name: "Beatriz Rivera",
    role: "Office Coordinator",
    shortRole: "Office Coordinator",
    image: "/images/team-beatriz.png",
    imageAlt: "Portrait of Beatriz Rivera, Office Coordinator at Tri-Valley Home Health Care",
    credentials: ["Office Coordinator", "Administrative & HR Operations", "Patient Intake Support"],
    experienceSummary: "Ensures responsive daily administrative coordination across patients, clinicians, and referrals.",
    bio: [
      "Beatriz Rivera serves as Office Coordinator at Tri-Valley Home Health Care, Inc., bringing a strong foundation in administrative operations, human resources support, and business and office administration.",
      "Her responsibilities span staff scheduling coordination, intake communications, and maintaining accurate day-to-day office workflows. Recognized for exceptional attention to detail, professionalism, and proactive problem-solving, Beatriz helps keep every patient referral and clinician schedule moving smoothly.",
      "Her calm, approachable demeanor and ability to coordinate seamlessly across nursing and administrative teams foster a responsive, supportive environment that upholds Tri-Valley’s high standards of care.",
    ],
  },
  {
    slug: "jayvee-valdez",
    name: "Jayvee Valdez",
    role: "Medical Records Clerk",
    shortRole: "Medical Records Clerk",
    image: "/images/team-jayvee.jpg",
    imageAlt: "Portrait of Jayvee Valdez, Medical Records Clerk at Tri-Valley Home Health Care",
    credentials: ["Medical Records Clerk", "B.S. in Pharmacy", "5+ Yrs at Tri-Valley"],
    education: "Bachelor of Science in Pharmacy",
    experienceSummary: "Over five years ensuring HIPAA-compliant medical record accuracy and operational precision.",
    bio: [
      "Jayvee Valdez is a dedicated and meticulous Medical Records Clerk at Tri-Valley Home Health Care, Inc., where he has been an invaluable team member for over five years.",
      "A graduate of one of the top universities in the Philippines with a Bachelor of Science in Pharmacy, Jayvee’s background in the pharmaceutical industry—including extensive training at a leading pharmacy chain—equipped him with exceptional organizational and analytical skills.",
      "Known for his collaborative spirit and commitment to accuracy, Jayvee maintains seamless, HIPAA-compliant medical records management across physician orders, clinical charts, and care documentation—ensuring precision and reliability across agency operations.",
    ],
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  { id: 1, quote: "Nurse Naomi was a lifesaver during my recovery. Her warmth and expertise made every visit a comfort. She always took the time to listen to my concerns, and I truly felt cared for.", patient: "Jane D.", discipline: "Skilled Nursing" },
  { id: 2, quote: "Physical Therapist Danny helped me regain my strength after surgery. His encouragement kept me motivated, and he made every session enjoyable. I couldn't have done it without him!", patient: "Tom R.", discipline: "Physical Therapy" },
  { id: 3, quote: "Jessica, our nurse, was fantastic. She treated my mother with such kindness and respect, and I loved how she always explained the treatment plan in detail. We felt truly cared for.", patient: "Lily M.", discipline: "Skilled Nursing" },
  { id: 4, quote: "Nerissa, our Occupational Therapist, was brilliant! She turned therapy into fun activities that helped my dad regain independence. Her positive attitude made all the difference!", patient: "Gary L.", discipline: "Occupational Therapy" },
  { id: 5, quote: "Social Worker Orisha was invaluable during my mother's treatment. She helped us navigate the healthcare system with compassion and expertise, making a stressful time much easier for our family.", patient: "Susan K.", discipline: "Medical Social Work" },
  { id: 6, quote: "I can't thank Physical Therapist Danny enough! He tailored each session to my needs, pushing me just enough to see progress. His dedication made my recovery so much better.", patient: "Karen S.", discipline: "Physical Therapy" },
  { id: 7, quote: "Nurse Marina brought so much positivity into my recovery. She was always smiling and made sure I understood every step of my treatment. Her kindness made a tough time much easier.", patient: "Rachel T.", discipline: "Skilled Nursing" },
  { id: 8, quote: "Emerly, our nurse, was wonderful! She helped my wife with daily tasks and provided companionship. Her warmth made a significant difference in our lives.", patient: "Paul H.", discipline: "Skilled Nursing" },
  { id: 9, quote: "Jill, our Occupational Therapist, helped my mom regain her independence. She was patient and creative in her approach, making therapy enjoyable and effective.", patient: "Angela W.", discipline: "Occupational Therapy" },
  { id: 10, quote: "Nurse Gloria's care was top-notch. She took the time to explain everything to me, and I felt supported throughout my recovery. Her professionalism and kindness meant the world.", patient: "Mark B.", discipline: "Skilled Nursing" },
  { id: 11, quote: "Dulce Grace, my Physical Therapist, was amazing! She always made it fun. I felt like I could achieve anything with her support.", patient: "Diana F.", discipline: "Physical Therapy" },
  { id: 12, quote: "Nurse Tynisha was exceptional! She made me feel safe and cared for during my treatment. I truly appreciated her dedication and attentiveness.", patient: "Robert E.", discipline: "Skilled Nursing" },
  { id: 13, quote: "Orisha, our Social Worker, was a blessing. She helped us navigate the healthcare maze, providing guidance and reassurance when we needed it most. We're so thankful for her support!", patient: "Michelle Y.", discipline: "Medical Social Work" },
  { id: 14, quote: "Nurse Cecille's care was outstanding. She was always attentive, making sure I was comfortable and informed throughout my treatment. I couldn't have asked for better care.", patient: "Steven N.", discipline: "Skilled Nursing" },
  { id: 15, quote: "Nurse Marjorie was a true comfort during my recovery. She was always professional and attentive, making sure I felt cared for at every step. Her support meant a lot to me.", patient: "Janet G.", discipline: "Skilled Nursing" },
  { id: 16, quote: "Aide Flor became part of our family. Her kindness and attention to detail made a huge impact on my mom's recovery. We're so grateful for her compassion.", patient: "Tina V.", discipline: "Home Health Aide" },
  { id: 17, quote: "Jill, our Occupational Therapist, was amazing. She made therapy engaging and helped my wife regain her confidence. We're so thankful for her support!", patient: "David W.", discipline: "Occupational Therapy" },
  { id: 18, quote: "Nurse Marjorie was a true professional. She took the time to listen to my concerns and always made sure I was comfortable. I felt very lucky to have her as my nurse.", patient: "Catherine B.", discipline: "Skilled Nursing" },
  { id: 19, quote: "Orisha, our Social Worker, was a guiding light. She helped us through the complexities of my father's care and provided support when we needed it most.", patient: "Henry S.", discipline: "Medical Social Work" },
  { id: 20, quote: "Danny, my Physical Therapist, was incredible! He made my recovery journey enjoyable and motivating. I can't thank him enough for his encouragement and support.", patient: "Patricia J.", discipline: "Physical Therapy" },
  { id: 21, quote: "Nurse Arlyn was wonderful. She always treated me with respect and made sure I was comfortable during my treatment. I truly appreciated her kindness.", patient: "Joseph L.", discipline: "Skilled Nursing" },
  { id: 22, quote: "Nurse Carina was a source of comfort during my father's care. She treated him with dignity and compassion, making a difficult time a little easier for our family.", patient: "Kathy S.", discipline: "Skilled Nursing" },
  { id: 23, quote: "Physical Therapist Dan was fantastic! He tailored our sessions to my specific needs, always encouraging me to push myself while ensuring I felt safe.", patient: "David L.", discipline: "Physical Therapy" },
  { id: 24, quote: "Speech Therapist Lawrence was amazing! He helped me regain my communication skills after my stroke with his patience and creativity. I'm so grateful for his support.", patient: "Linda T.", discipline: "Speech Therapy" },
];

export const CASE_HIGHLIGHTS = [
  {
    category: "Senior Care",
    title: "Elderly Care Assistance",
    description:
      "Provided daily personal care and medical support for an elderly client, ensuring comfort and safety at home.",
    image: "/images/care-reassuring.jpg",
  },
  {
    category: "Medical Care",
    title: "Post-Surgery Recovery",
    description:
      "Assisted a client with rehabilitation and wound care after surgery, ensuring a smooth and safe recovery at home.",
    image: "/images/care-exam.jpg",
  },
  {
    category: "Health Monitoring",
    title: "Chronic Illness Management",
    description:
      "Delivered ongoing care for a client with diabetes, focusing on regular monitoring, medication, and lifestyle support.",
    image: "/images/care-water.jpg",
  },
  {
    category: "Family Relief",
    title: "Respite Care Support",
    description:
      "Provided trusted temporary care for a loved one, allowing the primary family caregiver time to rest and recharge.",
    image: "/images/care-family.jpg",
  },
  {
    category: "Comfort & Dignity",
    title: "Palliative Care Assistance",
    description:
      "Offered compassionate palliative nursing support to preserve comfort and dignity during sensitive stages of care.",
    image: "/images/care-coffee.jpg",
  },
  {
    category: "Daily Living",
    title: "Personal Hygiene Support",
    description:
      "Helped a client with mobility challenges through dignified daily hygiene routines, improving overall quality of life.",
    image: "/images/care-hair.jpg",
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "state-approved-and-chap-certified",
    title:
      "State Approved and CHAP Certified: Providing Trusted Home Health Care for Over 25 Years",
    date: "November 26, 2024",
    author: "Tri-Valley Clinical Team",
    category: "Accreditation & Quality",
    excerpt:
      "Licensed by the California Department of Health Services and accredited by CHAP, Tri-Valley holds Medicare & Medi-Cal certification to serve families across four Northern California counties.",
    image: "/images/care-teamwork.png",
    imageAlt:
      "Two Tri-Valley Home Health nurses collaborating on patient quality standards",
    badges: ["CA DHS Licensed", "CHAP Accredited", "CMS Medicare & Medi-Cal Certified"],
    content: [
      "Licensed by the California Department of Health Services and proudly accredited by the Community Health Accreditation Partner (CHAP), Tri-Valley Home Health Care, Inc. holds Medicare and Medi-Cal certification reflecting rigorous clinical quality and safety standards.",
      "Our commitment extends to delivering timely, physician-coordinated patient care, therapy, and health education across Alameda, San Joaquin, Stanislaus, and Sacramento counties.",
      "Tailoring visit schedules to accommodate both client comfort and family caregiver routines is central to our mission. Whether supporting post-surgical recovery, chronic disease management, or rehabilitative therapy, our multidisciplinary team is dedicated to meeting your healthcare needs with excellence.",
    ],
  },
  {
    slug: "putting-patients-and-families-first",
    title:
      "Putting Patients and Families First: Compassionate Care, Every Step of the Way",
    date: "November 26, 2024",
    author: "Tri-Valley Clinical Team",
    category: "Patient-Centered Care",
    excerpt:
      "Our agency comprises carefully selected, highly trained nurses, therapists, and aides aligned with care goals set jointly with patients, families, and physicians.",
    image: "/images/care-breakfast.jpg",
    imageAlt:
      "Home health nurse warmly assisting a senior patient in a bright kitchen setting",
    content: [
      "Our agency comprises a team of carefully chosen, highly trained nurses, physical and occupational therapists, medical social workers, registered dietitians, and certified home health aides committed to advancing home healthcare services aligned with jointly set clinical standards.",
      "Every care plan is built in partnership with our patients, their loved ones, and their primary healthcare providers—ensuring medical treatments, daily self-care routines, and nutritional guidance fit smoothly into home life.",
      "Through responsive communication, 24/7 on-call nursing guidance, and compassionate follow-through, our staff delivers tailored, efficient solutions that protect comfort, safety, and independence at home.",
    ],
  },
];

export const CAREER_POSITIONS = [
  {
    title: "Registered Nurse (RN)",
    type: "Full-Time · Part-Time · Per Diem",
    territory: "San Joaquin, Stanislaus, Alameda & Sacramento Counties",
    summary:
      "Lead holistic in-home patient assessments, wound care, infusion therapy, and physician-coordinated care plans.",
  },
  {
    title: "Licensed Vocational Nurse (LVN)",
    type: "Full-Time · Per Diem",
    territory: "Stockton & Surrounding Counties",
    summary:
      "Deliver attentive skilled nursing visits, medication monitoring, and patient/family education under RN & MD direction.",
  },
  {
    title: "Physical Therapist (PT)",
    type: "Flexible Territory Visits",
    territory: "4-County Service Area",
    summary:
      "Guide one-on-one in-home mobility, balance, joint recovery, and fall-prevention programs.",
  },
  {
    title: "Occupational & Speech Therapists (OT / ST)",
    type: "Flexible Schedule",
    territory: "4-County Service Area",
    summary:
      "Restore daily living skills, adaptive independence, cognitive communication, and safe swallowing at home.",
  },
  {
    title: "Certified Home Health Aide (CHHA)",
    type: "Full-Time · Part-Time",
    territory: "Stockton, Lodi, Manteca, Tracy & Modesto",
    summary:
      "Provide dignified bathing, grooming, transfers, walking support, and nutritious meal preparation.",
  },
  {
    title: "Medical Social Worker (MSW) & Registered Dietitian (RD)",
    type: "Per Diem · Part-Time",
    territory: "Regional Field Coverage",
    summary:
      "Support family counseling, community resources, advance directives, and condition-specific medical nutrition.",
  },
  {
    title: "Nurse Quality Assurance Officer (QAPI)",
    type: "Full-Time · Stockton HQ",
    territory: "1231 W. Robinhood Dr., Suite D5",
    summary:
      "Oversee clinical chart compliance, CHAP/CMS readiness, and continuous patient outcome improvement.",
  },
];
