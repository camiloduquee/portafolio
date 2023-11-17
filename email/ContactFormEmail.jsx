// import React from "react";
// import {
//   Html,
//   Body,
//   Head,
//   Heading,
//   Hr,
//   Container,
//   Preview,
//   Section,
//   Text,
// } from "@react-email/components";
// import { Tailwind } from "@react-email/tailwind";

// export default function ContactFormEmail({email,message}) {
//   return (
//     <Html>
//       <Head />
//       <Preview>Ha recibido el siguiente mensaje del formulario de contacto</Preview>
//       <Tailwind>
//         <Body className="bg-gray-100 text-black">
//           <Container>
//             <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
//               <Heading className="leading-tight">
//                 Ha recibido el siguiente mensaje del formulario de contacto
//               </Heading>
//               <Text>{email}</Text>
//               <Hr />
//               <Text>El correo electrónico del remitente es: {message}</Text>
//             </Section>
//           </Container>
//         </Body>
//       </Tailwind>
//     </Html>
//   );
// }

// install dependecie  at a later time,, because it not compatible.
// "@react-email/components": "^0.0.11",
// "@react-email/tailwind": "^0.0.12",