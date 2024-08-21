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
      image: 'https://i.imghippo.com/files/q5nl11724054566.jpg',
      description: `Blockchain technology is fundamentally a decentralized digital ledger system designed to record transactions across a network of computers in a way that ensures the integrity and security of the data. Unlike traditional databases controlled by a central authority, blockchain operates on a peer-to-peer network, where no single entity has complete control. Each participant, or node, in the network maintains a copy of the blockchain, ensuring that the information is not only accurate but also resistant to tampering.
  
        At its core, a blockchain is a chain of blocks, where each block contains a list of transactions. Each block includes a unique cryptographic hash of its contents, a reference to the previous block's hash, and a set of transactions. This chaining of blocks is crucial because it links the blocks together, creating a secure and tamper-evident history of transactions. The cryptographic hash function ensures that any change to the block's data would result in a completely different hash, thereby protecting the data’s integrity.
        
        The process of adding new transactions to the blockchain involves several key steps. When a transaction is initiated, it is broadcast to the network. Nodes then validate the transaction based on predefined rules and consensus mechanisms. Common consensus mechanisms include Proof of Work (PoW), which requires solving complex mathematical problems, and Proof of Stake (PoS), where validators are chosen based on their stake in the network. Once validated, the transaction is grouped into a block, which is then added to the blockchain. The network must reach a consensus on the validity of the new block, and once added, the blockchain is updated across all nodes.
        
        One of the major benefits of blockchain technology is its transparency. Every participant in the network can view the transaction history, which enhances trust and accountability. Additionally, the decentralized nature of blockchain means that there is no single point of failure, making it highly secure against attacks and fraud. Once a block is added to the chain, it is nearly impossible to alter its contents without modifying all subsequent blocks and gaining consensus from the network.
        
        Blockchain technology has a wide range of applications beyond cryptocurrencies. It is used in supply chain management to track the provenance of goods, ensuring their authenticity and reducing fraud. In the realm of smart contracts, blockchain enables self-executing contracts with terms directly embedded in code, which automatically enforce and execute contract conditions. Additionally, blockchain is being explored for use in secure voting systems, healthcare data management, and other areas where transparency and security are critical.
        
        However, blockchain technology also faces several challenges. Scalability remains a significant issue, as increasing transaction volumes can slow down the network and raise costs. Energy consumption, particularly with consensus mechanisms like Proof of Work, has raised environmental concerns. Furthermore, regulatory issues vary by region, impacting the adoption and implementation of blockchain solutions. Interoperability between different blockchains is another challenge, as many blockchains operate in isolation, making it difficult to integrate and share data across different systems.
        
        Looking forward, the future of blockchain technology is promising. Ongoing research and development are focused on addressing existing challenges, such as improving scalability through solutions like layer 2 protocols and enhancing interoperability between blockchains. As these advancements progress, blockchain technology is expected to expand its impact, offering innovative solutions across various industries and potentially transforming how we manage data and transactions.`,
      link: '#'
    },
    {
      id: 2,
      title: 'The Future of Cryptocurrency',
      image: 'https://i.imghippo.com/files/q5nl11724054566.jpg',
      description: `The future of cryptocurrency is set to be transformative, driven by advancements in technology, regulatory developments, and evolving market dynamics. As cryptocurrencies become more integrated into traditional financial systems, their acceptance and use are likely to increase significantly. Financial institutions are expected to offer more services related to digital assets, including trading, investment, and custody solutions.

      Regulation will play a critical role in shaping the future of cryptocurrency. Governments and regulatory bodies are likely to establish clearer frameworks to address issues related to security, fraud, and market manipulation. Such regulations will aim to protect investors while fostering innovation in the cryptocurrency space.
      
      Technological advancements will also impact the future of cryptocurrencies. Innovations such as scalable blockchain solutions, improved consensus mechanisms, and enhanced security features are expected to address current limitations and enhance the usability of digital currencies. Additionally, the rise of decentralized finance (DeFi) platforms will offer new opportunities for financial inclusion and innovative financial products.
      
      As cryptocurrencies gain mainstream acceptance, their role in the global economy will expand. They may become a standard medium of exchange, an investment asset, and a tool for various financial applications. The increasing integration of cryptocurrencies with traditional financial systems and technological advancements will likely drive their continued growth and evolution.`,
          link: '#'
    },
    {
      id: 3,
      title: 'How Smart Contracts Work',
      image: 'https://i.imghippo.com/files/q5nl11724054566.jpg',
      description: `Smart contracts are self-executing contracts with the terms of the agreement directly written into code. They run on blockchain networks, which provide a decentralized and secure environment for their execution. Here’s how they work:

      1. **Creation**: Smart contracts are created by writing code that defines the contract’s rules and conditions. This code is deployed to a blockchain network, where it becomes immutable and cannot be altered.
      
      2. **Execution**: When the predefined conditions in the smart contract are met, the contract automatically executes the agreed-upon actions. For instance, if a smart contract is set up for a financial transaction, it will execute the transfer of funds once the specified conditions are satisfied.
      
      3. **Verification**: The blockchain network ensures that the terms of the smart contract are adhered to by validating transactions and conditions through consensus mechanisms. This verification process provides transparency and trust without needing intermediaries.
      
      4. **Enforcement**: Since smart contracts are executed on a blockchain, they benefit from the network’s security features. Once executed, the results are recorded on the blockchain, making them tamper-proof and transparent.
      
      Smart contracts eliminate the need for intermediaries, reduce the risk of fraud, and increase the efficiency of transactions. They have applications in various fields, including finance, real estate, and supply chain management, where they can automate processes and ensure compliance.`,
          link: '#'
    },
    {
      id: 4,
      title: 'Blockchain in Supply Chain Management',
      image: 'https://i.imghippo.com/files/q5nl11724054566.jpg',
      description: `Blockchain technology offers significant advantages in supply chain management by enhancing transparency, traceability, and efficiency. Here’s how it transforms the supply chain:

      1. **Transparency**: Blockchain provides a shared, immutable ledger accessible to all participants in the supply chain. This transparency allows each party to view and verify the history of transactions and product movements, reducing fraud and errors.
      
      2. **Traceability**: Every transaction and movement of goods is recorded on the blockchain, creating a detailed and verifiable history. This traceability helps track the provenance of products, ensuring their authenticity and quality.
      
      3. **Efficiency**: Blockchain streamlines supply chain processes by automating tasks and reducing paperwork through smart contracts. Automated processes lead to faster transactions and lower operational costs.
      
      4. **Security**: The decentralized nature of blockchain ensures that data is securely recorded and cannot be tampered with. This security feature is crucial for protecting sensitive supply chain information.
      
      5. **Collaboration**: Blockchain fosters collaboration among supply chain partners by providing a single source of truth. This shared information reduces disputes and improves coordination between different stakeholders.
      
      Overall, blockchain enhances the efficiency, security, and transparency of supply chains, making it a valuable tool for industries ranging from manufacturing to retail.`,
          link: '#'
    },
    {
      id: 5,
      title: 'Decentralized Finance (DeFi) Explained',
      image: 'https://i.imghippo.com/files/q5nl11724054566.jpg',
      description: `Decentralized Finance (DeFi) refers to a movement within the cryptocurrency and blockchain space aimed at creating an open and permissionless financial system. DeFi leverages blockchain technology to provide financial services without traditional intermediaries such as banks or brokers. Here’s an overview of how DeFi works:

      1. **Decentralization**: DeFi platforms operate on decentralized blockchain networks, primarily Ethereum. These platforms use smart contracts to facilitate and automate financial transactions, eliminating the need for central authorities.
      
      2. **Financial Services**: DeFi offers a wide range of financial services, including lending, borrowing, trading, and insurance. Users can access these services directly through decentralized applications (dApps) without relying on traditional financial institutions.
      
      3. **Liquidity**: DeFi platforms often use liquidity pools, where users provide funds in exchange for rewards or fees. These pools facilitate decentralized trading and lending, ensuring that there is enough liquidity for transactions.
      
      4. **Interoperability**: Many DeFi projects are designed to be interoperable with other protocols and platforms. This interoperability allows for the creation of complex financial products and services by combining different DeFi applications.
      
      5. **Accessibility**: DeFi platforms are accessible to anyone with an internet connection, making financial services available to a global audience. This accessibility promotes financial inclusion and democratizes access to financial products.
      
      DeFi is revolutionizing the financial industry by providing innovative and inclusive financial solutions. However, it also faces challenges such as regulatory uncertainty, security risks, and scalability issues, which need to be addressed as the ecosystem matures.`,
          link: '#'
    },
    {
      id: 6,
      title: 'The Role of Blockchain in Healthcare',
      image: 'https://i.imghippo.com/files/q5nl11724054566.jpg',
      description: `Blockchain technology has the potential to significantly improve the healthcare sector by enhancing data security, interoperability, and patient control. Here’s how blockchain can transform healthcare:

      1. **Data Security**: Blockchain provides a secure and immutable ledger for storing healthcare data. This security feature ensures that patient records are protected from unauthorized access and tampering, enhancing overall data integrity.
      
      2. **Interoperability**: Blockchain can facilitate the seamless sharing of health information between different healthcare providers and systems. By creating a standardized and decentralized data structure, blockchain enhances the interoperability of health records, improving coordination and continuity of care.
      
      3. **Patient Control**: Blockchain enables patients to have greater control over their health data. With blockchain, patients can grant or revoke access to their medical information, ensuring privacy and consent.
      
      4. **Clinical Trials**: Blockchain can improve the transparency and accountability of clinical trials by recording all trial data and results on a decentralized ledger. This transparency helps in preventing data manipulation and ensures the integrity of research findings.
      
      5. **Supply Chain Management**: Blockchain can be used to track the provenance of pharmaceuticals and medical supplies. By recording each step of the supply chain on a blockchain, stakeholders can ensure the authenticity and safety of medical products.
      
      6. **Cost Reduction**: Blockchain can reduce administrative costs by streamlining processes such as billing, claims, and record management. Automated and transparent processes lead to fewer errors and lower operational costs.
      
      Overall, blockchain offers innovative solutions to some of the key challenges in healthcare, including data security, interoperability, and patient empowerment, paving the way for a more efficient and transparent healthcare system.`,
          link: '#'
    }
  ];