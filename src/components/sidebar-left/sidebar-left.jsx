// import { Container, DivLinks, Button, ButtonDois } from './style'
// import { FcAssistant } from 'react-icons/fc'
// import { FcBriefcase } from 'react-icons/fc'
// import { FcBiomass } from 'react-icons/fc'
// import { FcBusinessman } from 'react-icons/fc'
// import { FcCompactCamera } from 'react-icons/fc'
// import { FcGraduationCap } from 'react-icons/fc'
// import { FcFaq } from 'react-icons/fc'
// import { FcLike } from 'react-icons/fc'
// import { FcNook } from 'react-icons/fc'
// import { FcCalendar } from 'react-icons/fc'
// import { FcBinoculars } from 'react-icons/fc'
// import { useHistory } from 'react-router-dom'

// function SidebarLeft() {
//   const history = useHistory()

//   function buttonLogin() {
//     history.push('/login')
//   }

//   return (
//     <Container>
//       <div
//         style={{
//           ButtonDois,
//           display: 'flex',
//           flexDirection: 'column',

//           alignItems: 'center',
//           justifyContent: 'center',
//         }}
//       >
//         <div
//           style={{
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             flexDirection: 'column',
//           }}
//         >
//           <p
//             style={{ width: '215px', lineHeight: '24px', fontSize: '0.8rem', fontFamily: 'Roboto' }}
//           >
//             <h2>DEVIL Place is a org of 1000,454 amazing peoples</h2>
//           </p>
//           <span
//             style={{ width: '215px', lineHeight: '21px', fontSize: '1rem', fontFamily: 'Roboto' }}
//           >
//             We're a build perspectives, stay up-to-date and grow their lives.
//           </span>
//           <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
//             <Button style={{}}>CREATE ACCOUNT</Button>

//             <ButtonDois onClick={buttonLogin}>Login</ButtonDois>
//           </div>
//         </div>
//         <DivLinks>
//           <a href="#" style={{ textDecoration: 'none', marginBottom: '11px' }}>
//             <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
//               <FcAssistant size="23" />
//               <span
//                 style={{
//                   color: '#404040',
//                   marginLeft: '8px',
//                   fontSize: '17px',
//                   fontFamily: 'Roboto',
//                 }}
//               >
//                 Home
//               </span>
//             </div>
//           </a>

//           <a href="#" style={{ textDecoration: 'none', marginBottom: '11px', marginTop: '10px' }}>
//             <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
//               <FcBriefcase size="23" />
//               <span
//                 style={{
//                   color: '#404040',
//                   marginLeft: '8px',
//                   fontSize: '17px',
//                   marginTop: '3px',
//                   fontFamily: 'Roboto',
//                 }}
//               >
//                 Cadastro
//               </span>
//             </div>
//           </a>

//           <a href="#" style={{ textDecoration: 'none', marginBottom: '11px', marginTop: '10px' }}>
//             <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
//               <FcBiomass size="23" />
//               <span
//                 style={{
//                   color: '#404040',
//                   marginLeft: '8px',
//                   fontSize: '17px',
//                   marginTop: '3px',
//                   fontFamily: 'Roboto',
//                 }}
//               >
//                 User
//               </span>
//             </div>
//           </a>

//           <a href="#" style={{ textDecoration: 'none', marginBottom: '11px', marginTop: '10px' }}>
//             <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
//               <FcBusinessman size="23" />
//               <span
//                 style={{
//                   color: '#404040',
//                   marginLeft: '8px',
//                   fontSize: '17px',
//                   marginTop: '3px',
//                   fontFamily: 'Roboto',
//                 }}
//               >
//                 Profile
//               </span>
//             </div>
//           </a>

//           <a href="#" style={{ textDecoration: 'none', marginBottom: '11px', marginTop: '10px' }}>
//             <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
//               <FcCompactCamera size="23" />
//               <span
//                 style={{
//                   color: '#404040',
//                   marginLeft: '8px',
//                   fontSize: '17px',
//                   marginTop: '3px',
//                   fontFamily: 'Roboto',
//                 }}
//               >
//                 Account
//               </span>
//             </div>
//           </a>

//           <a href="#" style={{ textDecoration: 'none', marginBottom: '11px', marginTop: '10px' }}>
//             <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
//               <FcLike size="23" />
//               <span
//                 style={{
//                   color: '#404040',
//                   marginLeft: '8px',
//                   fontSize: '17px',
//                   marginTop: '3px',
//                   fontFamily: 'Roboto',
//                 }}
//               >
//                 Liked
//               </span>
//             </div>
//           </a>

//           <a href="#" style={{ textDecoration: 'none', marginBottom: '11px', marginTop: '10px' }}>
//             <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
//               <FcGraduationCap size="23" />
//               <span
//                 style={{
//                   color: '#404040',
//                   marginLeft: '8px',
//                   fontSize: '17px',
//                   marginTop: '3px',
//                   fontFamily: 'Roboto',
//                 }}
//               >
//                 About
//               </span>
//             </div>
//           </a>

//           <a href="#" style={{ textDecoration: 'none', marginBottom: '11px', marginTop: '10px' }}>
//             <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
//               <FcFaq size="23" />
//               <span
//                 style={{
//                   color: '#404040',
//                   marginLeft: '8px',
//                   fontSize: '17px',
//                   marginTop: '3px',
//                   fontFamily: 'Roboto',
//                 }}
//               >
//                 Budget
//               </span>
//             </div>
//           </a>

//           <a href="#" style={{ textDecoration: 'none', marginBottom: '11px', marginTop: '10px' }}>
//             <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
//               <FcNook size="23" />
//               <span
//                 style={{
//                   color: '#404040',
//                   marginLeft: '8px',
//                   fontSize: '17px',
//                   marginTop: '3px',
//                   fontFamily: 'Roboto',
//                 }}
//               >
//                 Calc
//               </span>
//             </div>
//           </a>

//           <a href="#" style={{ textDecoration: 'none', marginBottom: '11px', marginTop: '10px' }}>
//             <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
//               <FcCalendar size="23" />
//               <span
//                 style={{
//                   color: '#404040',
//                   marginLeft: '8px',
//                   fontSize: '17px',
//                   marginTop: '3px',
//                   fontFamily: 'Roboto',
//                 }}
//               >
//                 Calendar
//               </span>
//             </div>
//           </a>

//           <a href="#" style={{ textDecoration: 'none', marginBottom: '11px', marginTop: '10px' }}>
//             <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
//               <FcBinoculars size="23" />
//               <span
//                 style={{
//                   color: '#404040',
//                   marginLeft: '8px',
//                   fontSize: '17px',
//                   marginTop: '3px',
//                   fontFamily: 'Roboto',
//                 }}
//               >
//                 Lookup
//               </span>
//             </div>
//           </a>
//         </DivLinks>
//       </div>
//     </Container>
//   )
// }

// export default SidebarLeft
