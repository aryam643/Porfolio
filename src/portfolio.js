const header = {
  homepage: 'https://github.com/aryam643',
  title: 'Aryam Sharma',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Aryam Sharma',
  role: 'Software Devlopment Engineer',
  description:"Hi, I'm Aryam Sharma, a dedicated software developer with a passion for crafting efficient and innovative solutions. With expertise in backend development, full-stack frameworks, and modern technologies.",
  resume: 'https://drive.google.com/file/d/1t7DsEhPmNeRFaaee0x9q_SO5-66PLpeh/view?usp=drive_link',
  social: {
    linkedin: 'https://www.linkedin.com/in/aryamsharma/',
    github: 'https://github.com/aryam643',
    instagram: 'https://www.instagram.com/_aryamsharma_/',
  },
}

const projects = [
  {
    name:'Whisper Transcribe',
    description:'Developed a full-stack transcription application using React for the frontend and Django for the backend.Leveraged OpenAI’s Whisper model for accurate audio and video transcription.',
    stack:['React', 'Django', 'OpenAI Whisper', 'TypeScript', 'Python', 'Material-UI', 'Tailwind CSS', 'RESTful API'],
    sourceCode:'https://github.com/aryam643/Aud_describe'
  },
  {
    name:'Video Connect',
    description:'This project is  a video calling application using React for the frontend and Node.js for the backend.Implemented real-time communication with WebSockets for seamless video calling between users.',
    stack:['React', 'Node.js', 'WebSockets', 'JavaScript'],
    sourceCode:'https://github.com/aryam643/video_call',
    livePreview:'https://video-call-gules.vercel.app/'
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
    name: 'Cyberdect',
    description:
      'This Project aims to develop a web app that can accurately classify tweets into different catergories of Cyberbullying, using Linear Support Vector Machine(SVM).',
    stack: ['HTML','CSS','JavaScript','Firebase','Python'],
    sourceCode: 'https://github.com/aryam643/CyberDect',
    livePreview: 'https://cyberdect.netlify.app/',
  },
  {
    name: 'Landslide Prediction',
    description:
      'This Project aims to develop a Bi-Directional LSTM Model for Accurate and Real-Time Landslide Detection: A Case Study in Mawiongrim, Meghalaya, India',
    stack: ['Python','Machine Learning','Deep Learning','RNN','Tensorflow','Keras','Pandas','NumPy','Matplotlib','Scikit-learn','Seaborn','Jupyter','Google Colab'],
    sourceCode: 'https://github.com/aryam643/Landslide_prediction',
  },
  {
    name: 'Parkinsons Disease Detection',
    description:
      'This project aims to predict Parkinsons disease based on voice features. It utilizes machine learning techniques to analyze voice recordings and make predictions about the presence of Parkinsons disease.',
    stack: ['Python','Pandas','NumPy','Scikit-learn','Matplotlib'],
    sourceCode: 'https://github.com/aryam643/Parkinsons-Detection-Using-SVM',
    
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
    'NumPy',
    'Matplotlib',
    'TensorFlow',
    'PyTorch',
    'Keras',
    'Pandas',
    'React.js',
    'Tailwind CSS',
    'Git',
    'GitHub',
    'Jupyter',
    'Visual Studio Code',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'aryamsharma59@gmail.com',
}

export { header, about, projects, skills, contact }
