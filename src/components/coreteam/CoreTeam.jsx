import React from 'react'
import './coreteam.css';
import TeamMember from '../TeamMember/TeamMember';
import {rajan,mukul,rohan,anil,diviyasharma,drishtisharma,shwaytasharma,ramya,keerthi,vaibhav,noimage,neetu,kannan,cinemol,DrishtiGoel} from './imports';


const CoreTeam = () => {
  return (
    <div className="gpt3__coreteam section__margin" id="coreTeam">
    <h1 className="gradient__text">Core Team</h1>
    <div className="gpt3__coreteam-container">
      <TeamMember photo={rajan} name="Rajan Sharma" title="Founder" text="Rajan Sharma is a well-known artist in the Greater Toronto Area and has been arranging, organizing, and singing at prestigious events all over North America for the past 20 years. A CPA by profession, he has released several musical CDs, such as the Tribute to Legendary Kishore Kumar and a devotional album titled Haman Hai Ishq Mastana. He has performed at several prestigious events such as the Ottawa Parliament Hill, Lions Club Diwali, and many more." />
      <TeamMember photo={rohan} name="Rohan Kapoor" title="Director" text="A media professional who has worked with production houses like Sony Pictures Network and The Walt Disney Company and managed digital experiences for top shows like Kaun Banega Crorepati, Dus Ka Dum, The Kapil Sharma Show and movies such as PK, Chennai Express and ABCD. He has 12 years of experience in building successful Digital Products from scratch and is extremely excited to take Bollywood Ki Dhun to the next level." />
      <TeamMember photo={mukul} name="Mukul Raizada" title="Technical Advisor" text="Mukul has extensive experience in developing scalable and secure applications for banks and financial institutions. He is well traveled and is passionate about technology. Music has always been close to his heart." />
      <TeamMember photo={anil} name="Anil Suravarapu" title="Audio Visual" text="Anil is a Senior Software Architect and holds a keen interest in everything related to technology. He is extremely passionate about exploring new software and developing new solutions." />
    </div>
    <div className="gpt3__coreteam-container">
    </div>
    <h1 className="gradient__text">Artists</h1>
    <div className="gpt3__coreteam-container">
      <TeamMember photo={shwaytasharma} name="Shwayta Sharma" title="Singer" text="Shwayta is a professional filmmaker and a passionate singer from a young age. She is trained in Hindustani and Carnatic Classical Music. Over the years, Shwayta has sung at several prestigious community events and venues such as the Scotiabank Arena and Metro Toronto Convention Centre, and has performed in front of Prime Minister Paul Martin & Prime Minister Justin Trudeau" />
      <TeamMember photo={diviyasharma} name="Diviya Sharma" title="Singer" text="Diviya is a professionally trained Medical Aesthetician and is successfully running the YYZ Facialist. She also works with Sephora. Diviya is extremely passionate about music and closely follows all forms of music. She loves traveling and makes it a point to travel to exotic locations every once in a while." />
      <TeamMember photo={drishtisharma} name="Drishti Sharma" title="Singer" text="Drishti is a professional Pastry Chef and currently works at the Hazelton Hotel in Yorkville. She is also a professional bhangra dancer and is a part of team Madak Mutiyaaraan Di, which has won several international awards. Her team is a winner of the Boston Bhangra Competition. Besides being a chef and a dancer, Drishti is also a singer. Since her childhood, she’s been an avid singer and holds a deep love for music" />
      <TeamMember photo={ramya} name="Ramya Addaguduru" title="Singer" text="Passionate about music from a very young age, Ramya is a trained Carnatic singer and has won several solo and group singing competitions while at school. Currently working as a Production Support Analyst, she is not able to give as much time to continue pursuing her passion as earlier. With Bollywood Ki Dhun, Ramya expects to reconnect with music and reignite her passion for singing" />
      <TeamMember photo={keerthi} name="Keerthi Devulapall" title="Singer" text="Keerthi works as the Director of Software Services. She always had an interest in Indian music, especially Carnatic, fusion, and old Bollywood music." />
    </div>
    <h1 className="gradient__text">Musicians</h1>
    <div className="gpt3__coreteam-container">
      <TeamMember photo={vaibhav} name="Vaibhav Bhambra" title="Singer and Musician" text="Talent Acquisition Advisor, Canada Pension Plan Investment Board. I have been a bathroom singer most of my career but singing has always been my passion as it runs in the family. Not only that, my 3 year old loves singing her nursery rhymes as well, so I can say that I have passed the baton ??. Mr. Rajan identified my talent and gave me a big platform like Bollywood ki Dhun which has helped me build confidence and take my skills to next level" />
      <TeamMember photo={DrishtiGoel} name="Drishti Goel" title="singer, writer, instrumentalist, composer" text="Pursuing her final year of engineering in Computer Science, Drishti is a singer, writer, instrumentalist, composer and a performer, who started her musical journey from the tender age of 4 years when she cleared the Grade-3 exam in keyboard from the Trinity College of London and a year later made her first stage performance at the Kamani Auditorium in Delhi infront of various established musicians such as Ms. Sona Mahapatra. She went on to learning Western Vocal music and Piano from The Delhi School of Music, Indian classical music, and has explored several instruments such as Sitar, Flute, Tabla, and Dholak. Since then, Drishti has performed servaral times on the stage, and recently won the International MITA Award for the best Westren Music Performance." />
    </div>
    <div className="gpt3__coreteam-container">
    </div>
    <h1 className="gradient__text">Support</h1>
    <div className="gpt3__coreteam-container">
      <TeamMember photo={cinemol} name="CINIMOL NAIR" title="Content Writer" text="Cinimol is a professional writer and editor who carries over six years of experience in managing content. She has worked with clients such as McGrawHill, Health Service Journal, Scholastic, Pearson, NHS, etc. She has experience in producing press releases, white papers, website content, and other marketing materials. Cinimol has developed content for print, websites, and applications across various industries such as education, technology, medical, publishing, to name a few." />
      <TeamMember photo={neetu} name="Neetu Gupta" title="Public Relations" text="Neetu Gupta has been working in the real estate industry since 2015. Self-employed since 2008, Neetu is currently working with Remax Metropolis Brokerage in Markham, ON. Over the years, she has been the chair of the Parent Council of Donald Cousens Public School and the President of Markham-Unionville PLA." />
      <TeamMember photo={kannan} name="Kannan" title="Social Media" text="Experienced Mechanical Engineering Technologist with a demonstrated history of working in Automotive Manufacturing industry. Being a music enthusiast, Kannan is promoting Bollywood Ki Dhun's events/ shows on various social media platforms. An ardent fan of Bollywood Dance Music, he not only loves exploring various genres of music but also keeps an ear out to the work of upcoming and established international artists. He believes in Music beyond Genres and likes listening Electronic Dance Music in his free time." />
    </div>
    <div className="gpt3__coreteam-container">
    </div>
  </div>
  )
}

export default CoreTeam
