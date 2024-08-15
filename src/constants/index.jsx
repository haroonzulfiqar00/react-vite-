import participatepic1 from "../assets/participatepic1.png";
import participatepic2 from "../assets/participatepic2.png";
import participatepic3 from "../assets/participatepic3.png";
import ecosystemcoin1 from "../assets/ecosystemcoin1.png";
import ecosystemcoin2 from "../assets/ecosystemcoin2.png";
import ecosystemcoin3 from "../assets/ecosystemcoin3.png";
import ecosystemcoin4 from "../assets/ecosystemcoin4.png";
import backgroundImage from "../assets/ecosystem-bg.jpg"; 
import backgroundImg from "../assets/bg-ENERGY.jpg"; 
import eth from '../assets/ethereum-coin.png';


export const backgroundImge = {
  backgroundImage: `url(${backgroundImg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100vh', 
};
export const backgroundStyle = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '79vh', 
};

export const options = [
  { value: 'ethereum', label: 'Ethereum', img: 'http://localhost:5173/src/assets/ethereum-coin.png' },
  { value: 'zk-sync', label: 'ZK Sync', img: 'http://localhost:5173/src/assets/zkSync.png' },
  { value: 'linea', label: 'Linea', img: 'http://localhost:5173/src/assets/linea.png' },
];


export const faqList = [
  {
  ques: "Promote Renewable Energy Adoption",
  obj: "Objective: Increase the adoption of solar PV systems globally.",
  ans: "How: Provide incentives through XEnergy Sunrise tokens to lower the barriers to entry and make solar energy more accessible and affordable.",
},
  {
  ques: "Enhance Transparency in the Energy Sector",
  obj: "Objective: Improve transparency and trust in the energy trading process.",
  ans: "How: Utilize blockchain technology to create an immutable ledger of energy transactions, ensuring all parties can verify the origin and flow of energy.",
},
  {
  ques: "Reduce Costs and Improve Efficiency",
  obj: "Objective: Lower the costs associated with solar energy transactions and improve operational efficiency.",
  ans: "How: Streamline the process using smart contracts, which automate and secure energy transactions without the need for intermediaries.",
},
  {
  ques: "Empower Consumers and Businesses",
  obj: "Objective: Enable consumers and businesses to participate actively in the energy market.",
  ans: "How: Provide a platform where users can trade solar energy, manage their consumption, and earn rewards through the use of XEnergy Sunrise tokens.",
},
]

export const participateData = [
    {
      image: participatepic1,
      subHead: "Use Cases",
      description: "For Consumers: Access to clean energy at lower costs.",
      description2: "For Businesses: Efficient energy trading and management.",
      description3: "For the Energy Sector: Enhanced transparency and reduced fraud",
    },
    {
      image: participatepic2,
      subHead: "Token Economics (Tokenomics)",
      description: "Token Distribution: 50% ICO, 20% team, 20% development fund, 10% community incentives.",
      description2: "Use of Funds: 40% development, 30% marketing, 20% operations, 10% legal and compliance.",
      description3: "Incentives: Staking rewards for token holders.",
    },
    {
      image: participatepic3,
      subHead: "Community and Marketing",
      description: "We are building a strong community of supporters and advocates through various channels, including social media, forums, and events. Our marketing plan focuses on raising awareness and driving adoption of XEnergy Sunrise.",
    },
  ];

  export const ecosystemCoins =[
    {
      image: ecosystemcoin1,
      btnText : "Enclose BTC",
    },
    {
      image: ecosystemcoin2,
      btnText : "Enclose ETH",
    },
    {
      image: ecosystemcoin3,
      btnText : "Bank Transfer",
    },
    {
      image: ecosystemcoin4,
      btnText : "Enclose UXC",
    },
  ];

  export const blogs = [
    {
      id: 1,
      title: 'Understanding Blockchain Technology',
      image: 'https://via.placeholder.com/150',
      description: 'A deep dive into the fundamentals of blockchain technology and its potential to revolutionize various industries.',
      link: '#'
    },
    {
      id: 2,
      title: 'The Future of Cryptocurrency',
      image: 'https://via.placeholder.com/150',
      description: 'Exploring the potential and challenges of cryptocurrency in the modern economy.',
      link: '#'
    },
    {
      id: 3,
      title: 'How Smart Contracts Work',
      image: 'https://via.placeholder.com/150',
      description: 'An introduction to smart contracts and their role in automating and securing agreements.',
      link: '#'
    },
    {
      id: 4,
      title: 'Blockchain in Supply Chain Management',
      image: 'https://via.placeholder.com/150',
      description: 'How blockchain is transforming supply chain management for better transparency and efficiency.',
      link: '#'
    },
    {
      id: 5,
      title: 'Decentralized Finance (DeFi) Explained',
      image: 'https://via.placeholder.com/150',
      description: 'Understanding the rise of DeFi and its impact on the traditional financial systems.',
      link: '#'
    },
    {
      id: 6,
      title: 'The Role of Blockchain in Healthcare',
      image: 'https://via.placeholder.com/150',
      description: 'Examining how blockchain technology is being used to enhance healthcare systems.',
      link: '#'
    }
  ];