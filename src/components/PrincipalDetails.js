// import React from "react";
// import styled from "styled-components";
// import { useParams } from "react-router-dom";
// import vc from "../images/vc-large.jpg";
// import dvcrid from "../images/dvcrid.jpg";
// import dvca from "../images/DVC-academics.png";
// import dvcAd from "../images/DVC-Admin.png";
// import akbakare from "../images/akbakare.jpg";
// import oafadehan2 from "../images/oafadehan2.png";
// import oiabogan from "../images/oiabogan.jpg";
// import Footer from "./Footer";

// const staffDetails = {
//   "Prof. A. S. Bamire": {
//     title: "Vice-Chancellor",
//     image: vc,
//     bio: `Bamire Adebayo Simeon, a native of Oyan in Odo-Otin Local Government Area of Osun State, Nigeria, was born in 1959. He commenced his elementary education at Datus Nursery/Primary Preparatory School, Accra, Ghana and completed it at St. Clares’ Nursery and Primary School, Osogbo. He attended St. Charles’ Grammar School, Osogbo, from 1972 to 1976. Professor Bamire was admitted into the then University of Ife (now Obafemi Awolowo University, Ile-Ife), where he studied Agricultural Economics and was awarded a Bachelor of Agriculture (B.Agric.) degree in 1985. He also obtained his M.Phil. and PhD degrees from the university in 1992 and 1999, respectively. His PhD programme attracted sponsorship from the Council for the Development of Social Science Research in Africa (CODESRIA) in 1997 and the International Institute of Tropical Agriculture (IITA) in 1998. His PhD thesis won him the “National Universities Postgraduate Theses Award” in 2001.;
// Prof. Bamire joined the Department of Agricultural Economics, Faculty of Agriculture, Obafemi Awolowo University, Ile-Ife as Assistant Lecturer in 1992 and rose to the post of Professor in 2008. He has taught courses at both the undergraduate and postgraduate levels and successfully supervised undergraduate projects and postgraduate theses at the Master and PhD levels within and outside Nigeria. He has also assessed colleagues for promotion to the Professorial cadre and served as an External Examiner at both undergraduate and postgraduate levels within and outside of the country. He has over 100 research-based publications in reputable local and international outlets, comprising contributions to books, scientific journals, refereed conference proceedings, technical reports, monographs, and delivered the University’s 315th Inaugural Lecture.;
// No doubt, Professor Bamire comes prepared for the position, having been exposed to intense leadership and managerial training over the years in the course of his academic career in the university. He was a Visiting Scientist at IITA, Ibadan, in 2004; Vice-Dean, Faculty of Agriculture, Obafemi Awolowo University (2007-2009); Head, Department of Agricultural Economics (2011-2012) and Dean, Faculty of Agriculture (2013-2015). In his capacity as Dean, he embarked on and completed laudable developmental projects in the faculty through donations from his social capital network, Alumni, and friends of the faculty. By virtue of his position as the Immediate Past Deputy Vice-Chancellor (Academic), he was a member of the Governing Council for four years (2017-2021) and served as Chairman of some Committees and Boards in the university.;
// Professor Bamire has been exposed to research training opportunities early in his career through various training workshops organized by CODESRIA, IITA, AERC, and OAU. The experiences gained made it easy for him to guide colleagues and students in writing winning research proposals and establish important networks nationally and internationally. He has personally attracted research grants from notable international funding agencies into OAU as Principal Investigator and collaborated in research activities with other scientists within and outside the university. He led a baseline study sponsored by the Bill and Melinda Gates Foundation (BMGF), USA. This was made possible through his long-time collaboration with scientists at IITA; ILRI/DfID; HarvestPlus/IFPRI (Washington, DC., USA); International Wheat and Maize Improvement Center (CIMMYT), Mexico; Makerere University (Uganda); United Nations University Institute of Natural Resources (UNU-INRA), Accra, Ghana; United Nations University World Institute for Development Economics Research (UNU-WIDER), Helsinki, Finland; African Economic Research Consortium (AERC), Nairobi, Kenya; and African University for Cooperative Development (AUCD), Cotonou, Benin Republic; among others.
// Professor Bamire has attended different national and international conferences and workshops relating to biodiversity and sustainable agricultural development and has participated in collaborative studies involving researchers from various disciplines on sustainable agricultural production. He has participated in and written different technical reports that relate to practical field experiences in agricultural business and development in Nigeria and other developing nations.
// Prof. Bamire is a Fellow of international organisations such as CODESRIA, IITA, Leadership for Environment and Development (LEAD), and an Associate Senior Research Fellow of the International Centre for Evaluation and Development (ICED). He has attended many conferences within and outside Nigeria and is a member of various professional associations. He has also received various awards and honours.
// Prof. Bamire is computer literate with excellent knowledge of the application of statistical and econometric tools. He has participated and still participates as Principal Investigator in different on-farm researches and as Resource Person in training programmes that have provided long-term interactions with farmers and non-farmers in their communities and business concerns.
// Prof. Bamire has proven to be consistently diligent, committed, disciplined, resourceful, reliable, and has a good team spirit. Above all, he is God-fearing. He has good insight and experience of best business practices that could contribute immensely to system development, having served in different committees and assisted tremendously in promoting academic and research programmes in his department, faculty, and the university as a whole.`,
//     achievements: [
//       "PhD Thesis Recognition: Won the “National Universities Postgraduate Theses Award” in 2001 for his PhD thesis.",
//       "Academic Advancement: Rose from Assistant Lecturer in 1992 to Professor in 2008 at Obafemi Awolowo University (OAU), Ile-Ife.",
//       "Leadership Roles: Served as Vice-Dean (2007-2009) and Dean (2013-2015) of the Faculty of Agriculture at OAU, completing significant developmental projects through his social capital network.",
//       "Research Grants: Successfully attracted research grants from international funding agencies as Principal Investigator.",
//       "International Collaboration: Led a baseline study sponsored by the Bill and Melinda Gates Foundation (BMGF), USA, and collaborated with renowned international organizations like IITA, CIMMYT, IFPRI, and UNU-WIDER.",
//       "Fellowships: Recognized as a Fellow of international organizations including CODESRIA, IITA, and Leadership for Environment and Development (LEAD).",
//       "Deputy Vice-Chancellor: Served as the Deputy Vice-Chancellor (Academic) of OAU and a member of the Governing Council (2017-2021), chairing several committees and boards.",
//       "Research and Academic Development: Played a crucial role in guiding colleagues and students in writing winning research proposals, establishing important national and international networks, and contributing to the development of academic and research programs at OAU.",
//       "Academic Advancement: Rose from Assistant Lecturer in 1992 to Professor in 2008 at Obafemi Awolowo University (OAU), Ile-Ife.",
//     ],
//   },

//   "Prof. M. O. Babalola": {
//     title: "Deputy Vice-Chancellor (Academics)",
//     image: dvca,
//     bio: `Professor Olubola Babalola obtained Bachelor of Science (Hons) in Quantity Surveying, Master of Science in Quantity Surveying and Doctor of Philosophy with specialization in Construction Management at the prestigious Obafemi Awolowo University (OAU), Ile-Ife between the year 1987 and 2006. After graduation, she gained employment into the Department of Quantity Surveying of the same University as a Graduate Assistant in 1993 and rose to become a Professor in 2012. She has been the Chairperson, Secretary and Member of various committees in and outside Obafemi Awolowo University, Ile-Ife. She has also been and is still an external examiner in various higher institutions in and outside Nigeria such as Federal University of Technology, Akure; Imo State University; University of Lagos; Federal University of Technology, Minna; Federal Polytechnic Ede; The Polytechnic, Ibadan; Kwame Nkumah University of Science and Technology, Ghana; Nelson Mandela University, South Africa; Open University, Malaysia; and University of Nairobi, Kenya. Furthermore, she is a Fellow of the Nigerian Institute of Quantity Surveyors (FNIQS) a member of accreditation team of the National Universities Commission (NUC), National Board of Technical Education (NBTE) and Quantity Surveyors Registration of Nigeria (QSRBN). She was a council member of The Polytechnic, Ibadan.; She has also been a member of Scientific Committee Panels for West Africa Built Environment Research Conference, Ghana; International Postgraduate Research Conference on Built Environment, Ghana; Built Environment Conference of the Association of Schools Construction of Southern Africa, South Africa; Construction Management Conference, South Africa and Construction Industry Development Board (CIDB) Postgraduate Conference, South Africa. She is an editorial board member of International Journal of Project Planning and Finance, Ghana and advisory board member of the Journal of Construction Business and Management, South Africa. She is a reviewer for Springers Publisher, London; Journal of Engineering Design and Technology and Built Environment Project and Asset Management Journal.; `,
//     achievements: [
//       " She was the only female student in her set and with the best graduating results",
//       "The first female Quantity Surveyor with a Doctoral degree in West Africa",
//       "The first female to become the Acting Head of the Department of Quantity Surveying in Obafemi Awolowo University, Ile-Ife since its establishment",
//       "Two terms Vice Dean of the Faculty of Environmental Design and Management and First female Professor of Quantity Surveying in Africa.",
//       "She is currently the Dean of the Faculty of Environmental Design and Management, Obafemi Awolowo University, Ile-Ife being the first female Dean and first from Quantity Surveying. Department in OAU to become the Dean of the Faculty.",
//       "She is the Chairperson Committee of Deans (CCODs) at Obafemi Awolowo University, Ile-Ife being the first female to occupy the position in OAU.",
//     ],
//   },
//   "Prof. O. M. A. Daramola": {
//     title: "Deputy Vice-Chancellor (Administration)",
//     image: dvcAd,
//     bio: `Jane Doe is a distinguished academic with a career spanning over two decades...`,
//     achievements: [
//       "Recipient of the Best Lecturer Award in 2020.",
//       "Published over 50 research papers in Physics.",
//     ],
//   },
//   "Prof. A. I. Akinyemi": {
//     title: "DVC Research, Innovation and Development",
//     image: dvcrid,
//     bio: `Jane Doe is a distinguished academic with a career spanning over two decades...`,
//     achievements: [
//       "Recipient of the Best Lecturer Award in 2020.",
//       "Published over 50 research papers in Physics.",
//     ],
//   },
//   "Mr. A. K. Bakare": {
//     title: "Registrar",
//     image: akbakare,
//     bio: `Jane Doe is a distinguished academic with a career spanning over two decades...`,
//     achievements: [
//       "Recipient of the Best Lecturer Award in 2020.",
//       "Published over 50 research papers in Physics.",
//     ],
//   },
//   "Dr. O. A. Fadehan": {
//     title: "Librarian",
//     image: oafadehan2,
//     bio: `Jane Doe is a distinguished academic with a career spanning over two decades...`,
//     achievements: [
//       "Recipient of the Best Lecturer Award in 2020.",
//       "Published over 50 research papers in Physics.",
//     ],
//   },
//   "Mrs. O. I. Abogan": {
//     title: "Bursar",
//     image: oiabogan,
//     bio: `Jane Doe is a distinguished academic with a career spanning over two decades...`,
//     achievements: [
//       "Recipient of the Best Lecturer Award in 2020.",
//       "Published over 50 research papers in Physics.",
//     ],
//   },
// };

// const PrincipalDetails = () => {
//   const { name } = useParams();
//   const staff = staffDetails[name];

//   if (!staff) {
//     return <div>Staff not found</div>;
//   }

//   return (
//     <>
//       <DetailContainer>
//         <Image src={staff.image} alt={name} />
//         <Content>
//           <Name>{name}</Name>
//           <Title>{staff.title}</Title>
//           <h3>{`Brief about the ${staff.title}`}</h3>
//           <Bio>{staff.bio}</Bio>
//           <Achievements>
//             <h3>Achievements:</h3>
//             <ol>
//               {staff.achievements.map((achievement, index) => (
//                 <li key={index}>{achievement}</li>
//               ))}
//             </ol>
//           </Achievements>
//         </Content>
//       </DetailContainer>
//       <Footer />
//     </>
//   );
// };

// const DetailContainer = styled.div`
//   background-color: #cfbcbc;
//   padding: 2rem;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   //   background-color: #f8f9fa;
// `;

// const Image = styled.img`
//   width: 340px;
//   height: 380px;
//   //   border-radius: 50%;
//   object-fit: cover no-repeat center center/cover;
//   margin-bottom: 1.5rem;
// `;

// const Content = styled.div`
//   max-width: 800px;
//   text-align: center;
// `;

// const Name = styled.h1`
//   font-size: 2.5rem;
//   color: #003366;
//   margin-bottom: 1rem;
// `;

// const Title = styled.h2`
//   font-size: 1.8rem;
//   color: #00509e;
//   margin-bottom: 1rem;
// `;

// const Bio = styled.p`
//   font-size: 1.1rem;
//   //   color: #333;
//   margin-bottom: 2rem;
// `;

// const Achievements = styled.div`
//   text-align: left;
//   h3 {
//     font-size: 1.5rem;
//     color: #00509e;
//     margin-bottom: 1rem;
//   }
//   ul {
//     list-style: none;
//     padding-left: 0;
//     li {
//       font-size: 1.1rem;
//       color: #555;
//       margin-bottom: 0.5rem;
//     }
//   }
// `;

// export default PrincipalDetails;

import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import vc from "../images/vc-large.jpg";
import dvcrid from "../images/dvcrid.jpg";
import dvca from "../images/DVC-academics.png";
import dvcAd from "../images/DVC-Admin.png";
import akbakare from "../images/akbakare.jpg";
import oafadehan2 from "../images/oafadehan2.png";
import oiabogan from "../images/oiabogan.jpg";
import Footer from "./Footer";

const staffDetails = {
  "Prof. A. S. Bamire": {
    title: "Vice-Chancellor",
    image: vc,
    bio: [
      "Bamire Adebayo Simeon, a native of Oyan in Odo-Otin Local Government Area of Osun State, Nigeria, was born in 1959. He commenced his elementary education at Datus Nursery/Primary Preparatory School, Accra, Ghana and completed it at St. Clares’ Nursery and Primary School, Osogbo. He attended St. Charles’ Grammar School, Osogbo, from 1972 to 1976. Professor Bamire was admitted into the then University of Ife (now Obafemi Awolowo University, Ile-Ife), where he studied Agricultural Economics and was awarded a Bachelor of Agriculture (B.Agric.) degree in 1985. He also obtained his M.Phil. and PhD degrees from the university in 1992 and 1999, respectively.",
      "His PhD programme attracted sponsorship from the Council for the Development of Social Science Research in Africa (CODESRIA) in 1997 and the International Institute of Tropical Agriculture (IITA) in 1998. His PhD thesis won him the “National Universities Postgraduate Theses Award” in 2001.",
      "Prof. Bamire joined the Department of Agricultural Economics, Faculty of Agriculture, Obafemi Awolowo University, Ile-Ife as Assistant Lecturer in 1992 and rose to the post of Professor in 2008. He has taught courses at both the undergraduate and postgraduate levels and successfully supervised undergraduate projects and postgraduate theses at the Master and PhD levels within and outside Nigeria.",
      "Professor Bamire has been exposed to research training opportunities early in his career through various training workshops organized by CODESRIA, IITA, AERC, and OAU. The experiences gained made it easy for him to guide colleagues and students in writing winning research proposals and establish important networks nationally and internationally. He has personally attracted research grants from notable international funding agencies into OAU as Principal Investigator and collaborated in research activities with other scientists within and outside the university. He led a baseline study sponsored by the Bill and Melinda Gates Foundation (BMGF), USA. This was made possible through his long-time collaboration with scientists at IITA; ILRI/DfID; HarvestPlus/IFPRI (Washington, DC., USA); International Wheat and Maize Improvement Center (CIMMYT), Mexico; Makerere University (Uganda); United Nations University Institute of Natural Resources (UNU-INRA), Accra, Ghana; United Nations University World Institute for Development Economics Research (UNU-WIDER), Helsinki, Finland; African Economic Research Consortium (AERC), Nairobi, Kenya; and African University for Cooperative Development (AUCD), Cotonou, Benin Republic; among others.",
      "Professor Bamire has attended different national and international conferences and workshops relating to biodiversity and sustainable agricultural development and has participated in collaborative studies involving researchers from various disciplines on sustainable agricultural production. He has participated in and written different technical reports that relate to practical field experiences in agricultural business and development in Nigeria and other developing nations.",
    ],
    achievements: [
      "PhD Thesis Recognition: Won the “National Universities Postgraduate Theses Award” in 2001 for his PhD thesis.",
      "Academic Advancement: Rose from Assistant Lecturer in 1992 to Professor in 2008 at Obafemi Awolowo University (OAU), Ile-Ife.",
      "Leadership Roles: Served as Vice-Dean (2007-2009) and Dean (2013-2015) of the Faculty of Agriculture at OAU, completing significant developmental projects through his social capital network.",
      "Research Grants: Successfully attracted research grants from international funding agencies as Principal Investigator.",
      "International Collaboration: Led a baseline study sponsored by the Bill and Melinda Gates Foundation (BMGF), USA, and collaborated with renowned international organizations like IITA, CIMMYT, IFPRI, and UNU-WIDER.",
      "Fellowships: Recognized as a Fellow of international organizations including CODESRIA, IITA, and Leadership for Environment and Development (LEAD).",
      "Deputy Vice-Chancellor: Served as the Deputy Vice-Chancellor (Academic) of OAU and a member of the Governing Council (2017-2021), chairing several committees and boards.",
      "Research and Academic Development: Played a crucial role in guiding colleagues and students in writing winning research proposals, establishing important national and international networks, and contributing to the development of academic and research programs at OAU.",
      "Academic Advancement: Rose from Assistant Lecturer in 1992 to Professor in 2008 at Obafemi Awolowo University (OAU), Ile-Ife.",
    ],
  },

  "Prof. M. O. Babalola": {
    title: "Deputy Vice-Chancellor (Academics)",
    image: dvca,
    bio: [
      "Professor Olubola Babalola obtained Bachelor of Science (Hons) in Quantity Surveying, Master of Science in Quantity Surveying and Doctor of Philosophy with specialization in Construction Management at the prestigious Obafemi Awolowo University (OAU), Ile-Ife between the year 1987 and 2006. After graduation, she gained employment into the Department of Quantity Surveying of the same University as a Graduate Assistant in 1993 and rose to become a Professor in 2012.",
      "Before her present position, Professor Babalola had been the first female Chairperson of the Nigerian Institute of Quantity Surveyors (NIQS), Oyo State Chapter and the Assistant General Secretary of the Association of Professional bodies of Nigeria (APBN), Oyo State Branch. She was the Chairperson of the Women Association of Quantity Surveyors of Nigeria (WAQSN), Editor of “The Quantity Surveyor,” Journal of the Nigerian Institute of Quantity Surveyors and a member of the Education and Research Committee of the African Association of Quantity Surveyors (AAQS).",
      "She has been the Chairperson, Secretary and Member of various committees in and outside Obafemi Awolowo University, Ile-Ife. She has also been and is still an external examiner in various higher institutions in and outside Nigeria such as Federal University of Technology, Akure; Imo State University; University of Lagos; Federal University of Technology, Minna; Federal Polytechnic Ede; The Polytechnic, Ibadan; Kwame Nkumah University of Science and Technology, Ghana; Nelson Mandela University, South Africa; Open University, Malaysia; and University of Nairobi, Kenya. Furthermore, she is a Fellow of the Nigerian Institute of Quantity Surveyors (FNIQS) a member of accreditation team of the National Universities Commission (NUC), National Board of Technical Education (NBTE) and Quantity Surveyors Registration of Nigeria (QSRBN). She was a council member of The Polytechnic, Ibadan.",
      "She has also been a member of Scientific Committee Panels for West Africa Built Environment Research Conference, Ghana; International Postgraduate Research Conference on Built Environment, Ghana; Built Environment Conference of the Association of Schools Construction of Southern Africa, South Africa; Construction Management Conference, South Africa and Construction Industry Development Board (CIDB) Postgraduate Conference, South Africa. She is an editorial board member of International Journal of Project Planning and Finance, Ghana and advisory board member of the Journal of Construction Business and Management, South Africa. She is a reviewer for Springers Publisher, London; Journal of Engineering Design and Technology and Built Environment Project and Asset Management Journal.",
      "Professor Babalola has received some awards to her credit, which include an award of Excellence for Development of Quantity Surveying Training in Nigerian Higher Institutions by the Women Association of Quantity Surveyors of Nigeria; an Outstanding Achievement Award by Great Ife Alumni Association, Home Branch; The President’s Award for Excellence by the Nigerian Institute of Quantity Surveyors; The Most Distinguished Ibadan Indigene by the Central Council of Ibadan Indigenes. She also received some research fellowships and grants which include the Carnegie of US Fellowship for Female academics on Ph.D. programme which she utilized at the University of Cape Town, South Africa; a research grant for the assessment of training of Quantity Surveying by the Quantity Surveyors Registration Board of Nigeria; Getty Foundation of USA Keeping it Modern grant; and LISA TEACH, USA grants. Professor Babalola is the pioneer Patroness of the National Association of Quantity Surveying Students, Obafemi Awolowo University, Ile-Ife Chapter and College of Technology, Esa-Oke Chapter.",
      "Professor Babalola is a renowned scholar with cutting-edge innovative research in Quantity Surveying and Construction Management. She has successfully supervised fourteen (14) postgraduate students and examined about thirty (30) postgraduate students. She has attended and presented academic and professional papers in conferences, seminars and workshops in and outside Nigeria including Ghana, Malaysia, UAE, UK and Germany",
    ],
    achievements: [
      "She was the only female student in her set and with the best graduating results.",
      "The first female Quantity Surveyor with a Doctoral degree in West Africa.",
      "The first female to become the Acting Head of the Department of Quantity Surveying in Obafemi Awolowo University, Ile-Ife since its establishment.",
      "Two terms Vice Dean of the Faculty of Environmental Design and Management and First female Professor of Quantity Surveying in Africa.",
      "She is currently the Dean of the Faculty of Environmental Design and Management, Obafemi Awolowo University, Ile-Ife being the first female Dean and first from Quantity Surveying. Department in OAU to become the Dean of the Faculty.",
      "She is the Chairperson Committee of Deans (CCODs) at Obafemi Awolowo University, Ile-Ife being the first female to occupy the position in OAU.",
    ],
  },
  "Prof. O. M. A. Daramola": {
    title: "Deputy Vice-Chancellor (Administration)",
    image: dvcAd,
    bio: [
      "Professor Yomi Daramola, one of the Nigerian trained Musicologists/Ethnomusicologists and Performers, started his music career at the Oyo State College of Education (now Osun State College of Education) Ilesa. He later joined the University of Ife (now Obafemi Awolowo University) as a student in the Department of Music and became the first student of the Department to graduate with a First Class Honours in Music with an Outstanding Student’s Award by the University and was also the first Ph.D product of the Department. Professor Daramola had all his Degrees from Obafemi Awolowo University, Ile-Ife, and has participated in academic music conferences, symposia, workshops and several other colloquia in Europe, America and other parts of Africa. His scholarship, with special focus on Performative Musicology especially in the areas of African music, Music of the Mass Culture and Islamic and Islamized Music, has been greatly influenced by seasoned African and Western scholars and performers of music such as J.H.K. Nketia, Akin Euba, Tunji Vidal, Mosunmola Omibiyi-Obidike, Meki Nzewi, Ademola Adegbite, Joshua Uzoigwe, Christopher Oyesiku, Fishers H.J., Irele Abiola, Jean Jenkins, Yemi Olaniyan, Bode Omojola, Tejumola Olaniyan, Babatunde Akinyemi, Thora Dubois, Michael Varner, Michael Richter, and a host of others numerous to mention.",
      "Professor Daramola, was the first Fulbright Scholar from the Department of Music Obafemi Awolowo University. During his Fulbright year at the University of Texas, Arlington, U.S.A., Professor Daramola facilitated a linkage programme between Obafemi Awolowo University and University of Texas, Arlington through which a Professor of music was brought to the Department of Music O.AU. in 2008 to study Yoruba traditional music. Professor Daramola, apart from being a visiting lecturer and examiner to some Nigerian Public and Private Universities and reviewer to some National and International Music Journals, belong to several national and international professional bodies. Professor Daramola as at now has supervised Twelve Masters and Four PhD candidates with three of them as lecturers in Nigerian higher Institutions and one of them a soldier in Nigerian army.",
      "Within and outside the University, Professor Daramola had served and contributed significantly to so many professional bodies and committees. He was a member of the technocrat committee for the compilation and editing of the Hymn Book for Christ Apostolic Church Worldwide. In 2008, he led the team for the revision of materials for teaching African Music Courses at the University of Texas, Arlington. Furthermore, Professor Daramola served as the Chairman, Faculty of Arts, Obafemi Awolowo University ’Guest Lecture Committee 2007 to 2019; Head, Department of Music at different times, a two-term Vice-Dean at the Faculty of Arts, Obafemi Awolowo University; member, Anti-Corruption and Transparency Unit (ACTUs) of the Obafemi Awolowo University; Chairman and member of several Ad-Hoc (Senate Special Task Force) Committees of the Obafemi Awolowo University.",
    ],
    achievements: [
      "First student of the Department of Music at Obafemi Awolowo University to graduate with a First Class Honours in Music and receive the Outstanding Student’s Award.",
      "First Fulbright Scholar from the Department of Music at Obafemi Awolowo University.",
      "Facilitated a significant linkage program between Obafemi Awolowo University and the University of Texas, Arlington.",
      "Supervised twelve Master's and four Ph.D. candidates, with several becoming lecturers or holding significant positions in Nigeria.",
      "Served as Dean of the Faculty of Arts at Obafemi Awolowo University from 1st August 2019 to 31st July 2021.",
    ],
  },
  "Prof. A. I. Akinyemi": {
    title: "DVC Research, Innovation and Development",
    image: dvcrid,
    bio: [
      "Akanni Ibukun Akinyemi is a Professor of Demography and Social Statistics, he is the current Executive Director of the Central office of Research,  former Director of the Intellectual Property and Technology Transfer Office (IPPTO), and former Ag. Head of Department of Demography and Social Statistics.",
      "He was a Takemi Fellow at Chan School of Public Health, Harvard University, USA; Gates Fellow at The Bloomberg School of Public Health, John’s Hopkins University, USA. He was a Visiting Researcher in many institutions including University of Witwatersrand, Johannesburg, South Africa,  University of Bristol, UK, The Max Planck Institute for Demographic Research (MPIDR) in Rostock, Germany, and the African Population and Health Research Center, Nairobi Kenya.He served on many international organisations board including as a Member of Council of International Union of Scientific Study of Population (IUSSP), FP2030, and NIHR (UK), and as Chair of the Union of African Population  Studies panel on FP/SRHR.",
      "He is a recipient of many academic and research awards including Bixby International Leadership Fellowship Award of Guttmacher Institute, New York, USA,  currently elected as a Fellow of the Social Science Academy of Nigeria.",
    ],
    achievements: [
      "Former Director of the Intellectual Property and Technology Transfer Office (IPPTO) and former Acting Head of the Department of Demography and Social Statistics.",
      "Takemi Fellow at the Chan School of Public Health, Harvard University, and Gates Fellow at The Bloomberg School of Public Health, Johns Hopkins University.",
      "Served as a Visiting Researcher at prestigious institutions, including the University of Witwatersrand, University of Bristol, Max Planck Institute for Demographic Research, and the African Population and Health Research Center.",
      "Recipient of the Bixby International Leadership Fellowship Award from the Guttmacher Institute and recently elected as a Fellow of the Social Science Academy of Nigeria.",
    ],
  },
  "Mr. A. K. Bakare": {
    title: "Registrar",
    image: akbakare,
    bio: [
      "Mr. Adetunji Kamardeen BAKARE began his professional career in the University, as a senior staff, as an Administrative Officer I. Between 1998 and 2007, he worked in the Senate Office and Directorate of Academic Affairs where he was promoted to through the ranks of Assistant Registrar and Senior Assistant Registrar respectively. From 2007 to 2009, he served in the Directorate of Council Affairs as a Principal Assistant Registrar (PAR) before being posted, in 2009, to the office of the Vice Chancellor to assist the Director in servicing meetings of the Committee of Principal Officers, among other assignments. By 2013, he was transferred to the Faculty of Education as Deputy Registrar/Faculty Secretary where he served for three years, exhibiting exceptional candor.",
      "Between 2016 and 2019, Mr. Bakare coordinated all activities in the Senate Division of the Directorate of Academic Affairs where he provided excellent leadership for members of the administrative and other staff. He also performed, very diligently, several other functions as directed by the Vice Chancellor, the Registrar and the Director, Academic Affairs. For two consecutive years ( 2017 – 2019), he was made to serve as the Director, Academic Affairs, in acting capacity before being posted to the Directorate of Personnel Affairs as the Deputy Registrar and Head, Academic Staff Establishment. Two years later, precisely in 2021, the new Registrar was transferred, as the acting Director, Directorate of Corporate Services where he provided quality leadership for all heads of units and other staff. Mr. Bakare, is currently the College Secretary of the University’s Postgraduate College.",
      "Born on the 27th day of March, 1964 in Ijebu-Ode, Ogun State, Mr. Bakare attended Islamic High School, Orita Bashorun, in Ibadan and Olode Grammar School, Olode ( via Ile-Ife) Osun State for his West African School Certificate in 1983.",
      "He later gained admission to the University of Ife that same year, 1983 and graduated in 1987 with a Bachelor of Arts degree in English Studies. In 1999, his quest for knowledge made him to enroll for a higher degree in Obafemi Awolowo University, Ile-Ife, and by 2003, he was awarded a Master of Arts degree in Literature – in – English . Happily Married with three children, Mr. Bakare has a Certificate in Electronic Data Processing from Obafemi Awolowo University, Ile-Ife.",
    ],
    achievements: [
      "Promoted through various administrative roles from Assistant Registrar to Senior Assistant Registrar between 1998 and 2007, and served as Principal Assistant Registrar from 2007 to 2009.",
      "Assisted in servicing meetings of the Committee of Principal Officers in the Vice Chancellor's office starting in 2009.",
      "Served as Deputy Registrar/Faculty Secretary in the Faculty of Education from 2013 to 2016, demonstrating exceptional candor.",
      "Coordinated all activities in the Senate Division of the Directorate of Academic Affairs from 2016 to 2019 and acted as Director of Academic Affairs for two consecutive years.",
      "Currently serving as the College Secretary of the University’s Postgraduate College, after previously holding roles as Deputy Registrar and acting Director of Directorate of Corporate Services.",
    ],
  },
  "Dr. O. A. Fadehan": {
    title: "Librarian",
    image: oafadehan2,
    bio: [
      "Dr. Olukemi Adebimpe FADEHAN was born in Ibadan in November, 1962 and she indeed had her formative years there. She later attended Methodist High School Ilesa, Osun State where she obtained the West African School Certificate (WASC) in 1978.She then proceeded to The Polytechnic, Ibadan for her General Certificate of Education (GCE ) ‘A’ Level and Cambridge ‘A’ Level Certificates which she earned in 1980. She later enrolled in University of Ibadan and graduated with a Bachelor of Education (B.Ed) degree in 1983. In 1986, she bagged the degree of Master of Library Studies (MLS) from the same university. In 2006, Dr. Fadehan was conferred with Doctor of Philosophy (Ph.D), Library and Information Studies by the University of Ibadan. She is a Certified Librarian of Nigeria (CLN). She also possesses a Proficiency Certificate in Computer Fundamentals from the Obafemi Awolowo University, Ile–Ife.",
      "Dr. Fadehan began her working career in 1984 when as a National Youth Corps Member, she was deployed to Ogun State Broadcasting Corporation. There , she worked as an announcer. She worked briefly under the Ogun State Teaching Service Commission as a teacher at Unity High School, Abeokuta. From November 1987 to July, 1992, she worked in the library of Ogun State University, Ago – Iwoye, first as Librarian II and then, as Librarian I. On August 1, 1992, she joined the services of Obafemi Awolowo University as Senior Librarian. She eventually rose to become Deputy University Librarian of that great citadel of learning. Came March 1, 2013 , it was time for this hard–working and high – flying Nigerian woman to fly higher. After due process, She was hired and assumed duty as the University Librarian of the University of Lagos. Her areas of service over years as a librarian have been extensive, covering many aspects of librarianship. She has worked as Gifts & Exchange Librarian, Serials Librarian, Reference Librarian, Africana Librarian, Deputy Librarian, Research Department and now, University Librarian.",
      "Dr. Olukemi Fadehan has taught Library Instruction Programme for over 31 years. She has a multidisciplinary research approach to library and information studies with great emphasis on User Studies (Information Provision and Use). Her papers have enhanced the literature of library and information services with import for information needs, behaviour & packaging, gender, Information and Communication Technology, oral traditions, indigenous knowledge systems, university archives, leadership/management in library and information terrains, music librarianship, family education, political and religious information issues.Others include library instruction and students’ performance, grey literature, information quality and accessibility. Of great importance is her contribution to the business and corporate information literature through her doctoral thesis on ‘Environmental Scanning’ (within the scope of Library & Information Studies) as a maiden effort in Nigeria. Olukemi Fadehan has a lot of publications to her credit. She has also attended many local and international conferences. She is a member of the Nigerian Library Association, the American Library Association, the Association of College and Research Libraries, the Reference & User Services Association, the International Federation of Library Associations and the Society of Nigerian Archivists and the Association for Information Science and Technology. She has won awards and recognitions for her efforts in several areas. She received the Researchers Participation Award of the National Universities Commission in 2004. She received commendation for Mounting of Exhibition at the 45th Year Foundation Day of OAU, Ile – Ife in 2007. In 2008, she was declared as Best Library Worker in NIALS, University of Lagos. Remarkably, she is the first black female University Librarian at the University of Lagos. It is in recognition of her contributions to national development in the field of Librarianship that Dr. Olukemi Adebimpe Fadehan was deemed worthy to be conferred with the Development in Nigeria Merit Award, the Fellow of Management Consultants (FIMC) and the Fellow of Institute of Information Management (FIIM). She is happily married to Engr. Ayoola Fadehan and the marriage is fruitful.",
    ],
    achievements: [
      "Earned a Bachelor of Education (B.Ed), Master of Library Studies (MLS), and Doctor of Philosophy (Ph.D) in Library and Information Studies from the University of Ibadan.",
      "Served as University Librarian at the University of Lagos from March 1, 2013, and was the first black female to hold this position at the University.",
      "Received the Researchers Participation Award from the National Universities Commission in 2004 and was commended for mounting an exhibition at the 45th Year Foundation Day of OAU, Ile-Ife in 2007.",
      "Declared Best Library Worker in NIALS, University of Lagos in 2008.",
      "Awarded the Development in Nigeria Merit Award, Fellow of Management Consultants (FIMC), and Fellow of the Institute of Information Management (FIIM) in recognition of her contributions to national development in librarianship.",
    ],
  },
  "Mrs. O. I. Abogan": {
    title: "Bursar",
    image: oiabogan,
    bio: [
      "Mrs. Abogan has worked in several sections within the University Bursary Department since she joined the services of the University. She has risen through the ranks to attain the highest possible position in her career. Between October 1999 and June 2002, she worked, as an Accountant I, at the Grants and Agency Division, and also as the Schedule Officer in charge of Research Grants, overseeing the Division in the absence of the Divisional Head. From June, 2002 to July 2007, Mrs. Abogan worked, at various times, as Accountant I in charge of Pension Unit, and as Senior Accountant in charge of Budget Development, Reports and Statistics. For five years, (2007 – 2012), she was a Principal Accountant in charge of Pension, preparing the retired staff pension and gratuity. As a seasoned accountant, Mrs. Abogan was the Chief Accountant in charge of capital projects accounts in the University before being posted as the Deputy Bursar Capital Project Division, and then later as the Deputy Bursar in charge of the Treasury Services Division in 2016.",
      "Born on the 26th of April, 1965 in Ilesa, Osun State, Mrs. Oluwatoyin Abogan, between 1971 and 1977, attended Saint Peters Primary School, Ibokun and Nawair – Ud – Deen Primary School, Odo – Iro, Ilesa for her Primary School education before she gained admission into Ilesa Grammar School, Ilesa and Osogbo Grammar School for her Western African School Certificate/ GCE O’ Level and General Certificate of Education Advance Level, respectively, from 1977 to 1984. In 1988, she proceeded to the prestigious Obafemi Awolowo University, Ile-Ife, for her higher education and was accordingly awarded a Bachelor of Science degree in Accounting in 1992. She also has a Certificate in Electronic Data Processing and Master of Business Administration (MBA), both from Obafemi Awolowo University, Ile-Ife, between 2005 and 2009. As an Associate Member of the Institute of Chartered Accountants of Nigeria (ICAN), and Institute of Certified Public Accountants of Nigeria (ICPAN), Mrs. Abogan is happily married and blessed with three children.",
    ],
    achievements: [
      "Worked as Accountant I in the Grants and Agency Division, overseeing the Division in the absence of the Divisional Head between October 1999 and June 2002.",
      "Held roles as Senior Accountant in charge of Budget Development, Reports, and Statistics, and as Principal Accountant responsible for Pension from 2007 to 2012.",
      "Served as Chief Accountant in charge of capital projects accounts and then as Deputy Bursar for the Capital Project Division.",
      "Earned a Bachelor of Science degree in Accounting from Obafemi Awolowo University, Ile-Ife in 1992, and later completed an MBA and a Certificate in Electronic Data Processing at the same institution.",
      "An Associate Member of the Institute of Chartered Accountants of Nigeria (ICAN) and the Institute of Certified Public Accountants of Nigeria (ICPAN).",
    ],
  },
};

const PrincipalDetails = () => {
  const { name } = useParams();
  const staff = staffDetails[name];

  if (!staff) {
    return <div>Staff not found</div>;
  }

  return (
    <>
      <DetailContainer>
        <Image src={staff.image} alt={name} />
        <Content>
          <Name>{name}</Name>
          <Title>{staff.title}</Title>
          <h3>Brief about the {staff.title}</h3>
          <Bio>
            {staff.bio.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </Bio>
          <Achievements>
            <h3>Achievements/Highlights:</h3>
            <ol>
              {staff.achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ol>
          </Achievements>
        </Content>
      </DetailContainer>
      <Footer />
    </>
  );
};

const DetailContainer = styled.div`
  background-color: #cfbcbc;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  width: 340px;
  height: 380px;
  object-fit: cover;
  margin-bottom: 1.5rem;
`;

const Content = styled.div`
  max-width: 800px;
  text-align: left; /* Align text to the left */
  word-wrap: break-word; /* Ensure text wraps within the container */
`;

const Name = styled.h1`
  font-size: 2.5rem;
  color: #003366;
  margin-bottom: 0.1rem;
  text-align: center;
  text-decoration: underline;
`;

const Title = styled.h2`
  font-size: 1.8rem;
  color: #00509e;
  margin-bottom: 1rem;
  text-align: center;
  text-decoration: underline;
`;

const Bio = styled.div`
  font-size: 1.1rem;
  margin-bottom: 2rem;
  p {
    margin-bottom: 1rem; /* Add space between paragraphs */
  }
`;

const Achievements = styled.div`
  text-align: left;
  h3 {
    font-size: 1.5rem;
    color: #00509e;
    margin-bottom: 1rem;
  }
  ol {
    // list-style: none;
    padding-left: 0;
    li {
      font-size: 1.1rem;
      //   color: #555;
      margin-bottom: 0.5rem;
    }
  }
`;

export default PrincipalDetails;
