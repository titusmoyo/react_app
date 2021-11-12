
const cs_modules = {
  cs1001:[
    {course_id:"first_year",
    course_name:"Introduction to College Algebra",
    course_code:"cs1001",
    readings:[

      {textbook_name:"The elements of computing systems",
      textbook_description:"Building a Modern Computer From First Principles (From Nand to Tetris)",
      authors:"Shimon Schocken and Noam Nisan",
      textbook_photo:"./elements.jpg",
      textbook_link:"https://www.pdfdrive.com/download.pdf?id=164880794&h=87c6bd436df504df8cd00759a7428d29&u=cache&ext=epub"},

      {textbook_name:"Computer System Architecture",
      textbook_description:"This book deals with computer architecture as well as computer organization and design. Computer architecture is concerned with the structure and behavior of the various functional modules of the computer and how they interact to provide the processing needs of the user. Computer organization is concerned with the way the hardware components are connected together to form a computer system.",
      authors:"Morris Mano",
      textbook_photo:"./system.jpg",
      textbook_link:"https://www.pdfdrive.com/download.pdf?id=31004022&h=a43417812b9852f89a683084fa7be005&u=cache&ext=pdf"},

    ],
    course_duration:"5-6 weeks",
    course_summery:"This course provides basic grounding in algebra, trigonometry, and analytic geometry in preparation for further mathematical concepts.The course includes an extensive study of linear, quadratic, and rational functions. It also contains an introduction to exponential and logarithmic functions and circles. Finally, the topic of systems of linear equations is covered.",
    course_prerequisites:"None"}
  ],
  cs1002:[
    {course_id:"first_year",
    course_name:"Introduction to Statistics",
    course_code:"cs1002",
    course_duration:"5 weeks",
    course_summery:"This course introduces statistics and probability.It is intended to bring learners to a level where they can carry out statistical analyses of simple data.Topics covered include descriptive statistics, probability, discrete and continuous random variables, the sampling distribution and the Central Limit Theorem.The R statistical programming environment is used for computation, graphical presentation, and simulations. The presentation of statistical methods and interpretation of outcomes are emphasized in this course. The philosophy of statistics rather than mathematics are at the center of this course; needed mathematical concepts are demonstrated via simulations rather than abstract proofs.",
    course_prerequisites:"None"},
  ],
  cs10010:[
    {course_id:"first_year",
    course_name:"Computer Systems 2",
    course_code:"cs10010",
    course_duration:"6 weeks",
    readings:[

      {textbook_name:"The elements of computing systems",
      textbook_description:"Building a Modern Computer From First Principles (From Nand to Tetris)",
      authors:"Shimon Schocken and Noam Nisan",
      textbook_shit:1,
      image:"12",
      textbook_link:"https://www.pdfdrive.com/download.pdf?id=164880794&h=87c6bd436df504df8cd00759a7428d29&u=cache&ext=epub"},

      {textbook_name:"Computer System Architecture",
      textbook_description:"This book deals with computer architecture as well as computer organization and design. Computer architecture is concerned with the structure and behavior of the various functional modules of the computer and how they interact to provide the processing needs of the user. Computer organization is concerned with the way the hardware components are connected together to form a computer system.",
      authors:"Morris Mano",
      textbook_shit:2,
      image:"13",
      textbook_link:"https://www.pdfdrive.com/download.pdf?id=31004022&h=a43417812b9852f89a683084fa7be005&u=cache&ext=pdf"},

    ],
    course_summery:"In this project-centered course you will implement a virtual machine and a compiler for a simple, Java-like programming language, and you will develop a basic operating system that closes gaps between the high-level language and the underlying hardware platform.",
    course_prerequisites:"Computer Systems 1"},
  ],
};

export default cs_modules;
