import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import Image from 'next/image'
import topBg from '../images/topBg.png'
import headShot from '../images/headShot.png'
import { Box, SimpleGrid, IconButton, Center, Divider, useColorMode } from "@chakra-ui/react";



export default function Worker() {

 
  return (
    <>
      <div id='headerBox'>
      <Card  id='workerId'>
<Image  src={topBg} id="topBg" alt="bg" fill />
<CardBody id='cardBody'>
<div id='leftColumn'>
<div id='headShot'>
  <Image src={headShot} alt='headShot' width={100} height={100} />
  </div>
  <div id='nameInfo'>
    <h1 id='name'>EthEric</h1>
    <body id='title'>Backend Developer</body>
    <div id='footer'>
    <Image
id='headerSvg'
      priority
      src="/images/star.svg"
      height={15}
      width={15}
      alt="Follow us on Twitter"
    />
      <div id='reviews'>4.0 (0 reviews)</div>
      <Image
id='headerSvg2'
      priority
      src="/images/person.svg"
      height={15}
      width={15}
      alt="Follow us on Twitter"
    />
      <div id='location'>New York</div>
    </div>
    </div>
    </div>
    <div id='rightColumn'>
      <button id='inviteBtn'>Invite</button>
      <button id='messageBtn'>Message</button>
      </div>
</CardBody>



</Card>
</div>


<section id='mainSection'>

<div id='mainSectionLeft'>

<div className='iconRow'>

<div id='iconBox2'>
  
<Image
id='test'
      priority
      src="/images/dartBoard.svg"
      height={15}
      width={15}
      alt="Follow us on Twitter"
    />
<div id='iconText'>
  <p id='iconTitle'>Project Successes</p>
  <p id='iconNumber'>0</p>
</div>
</div>


<div id='iconBox2'>
<Image
id='test'
      priority
      src="/images/success.svg"
      height={15}
      width={15}
      alt="Follow us on Twitter"
    />
<div id='iconText'>
  <p id='iconTitle'>Total Service</p>
  <p id='iconNumber'>8</p>
</div>
</div>


<div id='iconBox2'>
<Image
id='test'
      priority
      src="/images/sucess.svg"
      height={15}
      width={15}
      alt="Follow us on Twitter"
    />
<div id='iconText'>
  <p id='iconTitle'>Completed Service</p>
  <p id='iconNumber'>0</p>
</div>
</div>


<div id='iconBox2'>
<Image
id='test'
      priority
      src="/images/in.svg"
      height={15}
      width={15}
      alt="Follow us on Twitter"
    />
<div id='iconText'>
  <p id='iconTitle'>In Queue Service</p>
  <p id='iconNumber'>0</p>
</div>
</div>


</div>

<div id='aboutFreelancer' className='about' >
  <h1 id='aboutTitle'>About Freelancer</h1>
  <p id='aboutText'>I have been a freelance developer since 2017, with a focus on turning ideas into high quality code. My areas of expertice include backend systems, automated trading systems, and decentralized applications (DApps). I have also worked with startups in the past, which has given me the ability to build productss efficiently and cost-effectivley.</p>
  <p id='aboutText'>I am actively involved in open source orginizations and have written detailed technical tutorials on various topics. Some of my work has been featured on HackerNews, GitHub, newsletters, and podcasts such as PythonBytes and PythonWeekly.</p>
  <p id='aboutText'>If you have an interesting opportunity that you would like to discuss, please do not hesitate to reach out. I am always open to considering new projects.</p>
  </div>
 
<Divider id='dividerLeft' borderColor={'whiteAlpha'} border={'2px'} />

<div id='education'>
<h1 id='educationTitle'>Education</h1>
<div id='educationBox'> 
  <div id='educationBoxLeft'>
    <h3 id='letterGrade'>c</h3>
    </div>
<div id='educationBoxRight'>
  <h2 id='years'>2008 - 2011</h2>
  <h3 id='class'>Computer Science</h3>
  <h3 id='school'>Modern University</h3>

</div>

</div>



  </div>
<p id='description'>blah blah blah alfd akljbguiabgukljasdbklgjdsjkgbau lesrkjbguraebgjklrabgjkbfdsakjgb akldrjdsbgjkrasbgjkasdbgkjsadb</p>
<Divider id='divider' borderColor={'whiteAlpha'} border={'2px'} />

</div>





<div id='mainSectionRight'>


<Card id='hireMeCard'>
<CardHeader id='hireMeCardHeader'>
  <h1 id='hireMeTitle'>$60.00 - $85.00  <span id='rateText'>/hr</span>  </h1>
  </CardHeader>
  <CardBody id='hireMeCardBody'>



    <div id='location'>
    <div id='iconBox'>

<Image
      priority
      src="/images/location.svg"
      height={15}
      width={15}
      alt="Follow us on Twitter"
    />
<div id='iconTextCard'>
  <p id='iconTitle'>Location  </p>
  <p id='iconNumber'>New York</p>
</div>
</div>
    </div>

<Divider />

    
    <div id='location'>
    <div id='iconBox'>
    <Image
      priority
      src="/images/type.svg"
      height={15}
      width={15}
      alt="Follow us on Twitter"
    /> 
<div id='iconTextCard'>
  <p id='iconTitle'>Type  </p>
  <p id='iconNumber'>Agency Freelancers</p>
</div>
</div>
    </div>


    <Divider />


    <div id='location'>
    <div id='iconBox'>
    <Image
      priority
      src="/images/language.svg"
      height={15}
      width={15}
      alt="Follow us on Twitter"
    />  
<div id='iconTextCard'>
  <p id='iconTitle'>English Level  </p>
  <p id='iconNumber'>Professional</p>
</div>
</div>
    </div>


    <Divider />


    <div id='location'>
    <div id='iconBox'>
    <Image
      priority
      src="/images/gender.svg"
      height={15}
      width={15}
      alt="Follow us on Twitter"
    />  
<div id='iconTextCard'>
  <p id='iconTitle'>Gender  </p>
  <p id='iconNumber'>Male</p>
</div>
</div>
    </div>


    <Divider />


    <div id='location'>
    <div id='iconBox'>
    <Image
      priority
      src="/images/email.svg"
      height={15}
      width={15}
      alt="Follow us on Twitter"
    /> 
<div id='iconTextCard'>
  <p id='iconTitle'>Email  </p>
  <p id='iconNumber'>etheric@blockchain.com</p>
</div>
</div>
    </div>


    <Divider />


    <div id='location'>
    <div id='iconBox'>
    <Image
      priority
      src="/images/type.svg"
      height={15}
      width={15}
      alt="Follow us on Twitter"
    /> 
<div id='iconTextCard'>
  <p id='iconTitle'>Phone  </p>
  <p id='iconNumber'>(+88)123-456-789</p>
</div>
</div>
    </div>

    </CardBody>
    <div id='btnBox'>
    <CardFooter>
<button id='contactBtn'>Contact Me</button>
      </CardFooter>
      </div>

</Card>


<Card id='skillsCard'>
<CardHeader id='skillsCardHeader'>
  <h1 id='skillsTitle'>My Skills</h1>
  </CardHeader>
  <CardBody id='skillsCardBody'>
    <div id='skillsBox'>
      <h3 id='skill'>Design Writing</h3>
      <h3 id='skill'>Prototyping</h3>
      <h3 id='skill'>HTML5</h3>
      </div>
    </CardBody>
  </Card>



</div>



</section>










        
    




    </>
  )
}