import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import EmailProvider from "next-auth/providers/email";
import nodemailer from "nodemailer";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // ...add more providers here
  ],
  secret: process.env.JWT_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

// export const sendEmail = async () => {
//   var transporter = nodemailer.createTransport({
//     service: "gmail", // no need to set host or port etc.
//     auth: {
//       user: "",
//       password: "",
//     },
//   });
//   const mail_configs = {
//     from: "",
//     to: "",
//     subject: "Testing",
//     text: "Don't mind me",
//   };
//   transporter.sendMail(mail_configs, (error, info) => {
//     if (error) {
//       console.log(error);
//       return reject({ message: "Error in sendmail" });
//     }
//     return resolve({ message: "success email sending" });
//   });
// };
