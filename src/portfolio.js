const header = {
  homepage: 'https://github.com/aryam643',
  title: 'Aryam',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Aryam',
  role: 'Front End Developer and ML Enthusiast',
  description:
    'Welcome to my portfolio! I am a pre-final year student at Jaypee University of Information Technology, dedicatedly pursuing my B.Tech. My journey as a self-taught Front-End Developer has equipped me with the skills to create captivating user interfaces. Currently, my focus extends to exploring the intricacies of Machine Learning.',
  resume: 'https://indigo-fionna-17.tiiny.site',
  social: {
    linkedin: 'https://www.linkedin.com/in/aryamsharma/',
    github: 'https://github.com/aryam643',
    instagram: 'https://www.instagram.com/_aryamsharma_/',
  },
}

const projects = [
  {
    name: 'Cyberdect',
    description:
      'This Project aims to develop a web app that can accurately classify tweets into different catergories of Cyberbullying, using Linear Support Vector Machine(SVM).',
    stack: ['HTML','CSS','JavaScript','Firebase','Python'],
    sourceCode: 'https://github.com/aryam643/CyberDect',
    livePreview: 'https://cyberdect.netlify.app/',
  },
  {
    name: 'Parkinsons Disease Detection',
    description:
      'This project aims to predict Parkinsons disease based on voice features. It utilizes machine learning techniques to analyze voice recordings and make predictions about the presence of Parkinsons disease.',
    stack: ['Python','Pandas','NumPy','Scikit-learn','Matplotlib'],
    sourceCode: 'https://github.com/aryam643/Parkinsons-Detection-Using-SVM',
    
  },
  {
    name: 'WeChat',
    description:
      'Real-time React chat app powered by Firebase for seamless, instant messaging. Effortlessly connect users, ensuring a dynamic and responsive communication experience',
    stack: ['React', 'Firebase', 'JavaScript', 'HTML','CSS'],
    sourceCode: 'https://github.com/aryam643/WeChat',
    livePreview: 'https://we-chat-hqgc.vercel.app/',
  },
  {
    name: 'Terminal Link',
    description:
      'The project Chat application implements a Client-Server model in a multithreaded chat server by sockets to communicate among multiple users. In this application multiple users can join the server and communicate with each other. ',
    stack: ['Socket Programming','Multithreading','Linux','C++'],
    sourceCode: 'https://github.com/aryam643/TerminalLink',
  },
  {
    name:'Piano Tiles Challenge',
    description:'This project seeks to revolutionize the gaming experience by integrating the excitement of a popular mobile game with the joy of playing music on a virtual piano. Players will engage with a digital interface where they tap piano tiles in synchronization with beautiful melodies, offering an immersive and entertaining experience.',
    stack:['HTML','CSS','JavaScript'],
    sourceCode: 'https://github.com/aryam643/Pianotileschallenge',
    livePreview:'http://guitarherobutnotpiano.s3-website.ap-south-1.amazonaws.com/',
    
  }

]

const skills = [
    'C',
    'C++',
    'Python',
    'JavaScript',
    'SQL',
    'CSS',
    'HTML',
    'Data Structures and Algorithms(DSA)',
    'Dart',
    'NumPy',
    'Matplotlib',
    'TensorFlow',
    'PyTorch',
    'Keras',
    'Pandas',
    'React.js',
    'Tailwind CSS',
    'Flutter',
    'Arduino',
    'Git',
    'GitHub',
    'AWS',
    'Linux',
    'Windows',
    'Figma',
    'Adobe Photoshop',
    'Jupyter',
    'Android Studio',
    'Visual Studio',
    'Adobe Illustrator',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'aryamsharma59@gmail.com',
}

export { header, about, projects, skills, contact }
