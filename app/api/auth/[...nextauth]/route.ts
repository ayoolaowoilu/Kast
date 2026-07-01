import NextAuth from "next-auth";
import Google from "next-auth/providers/google";





const handler = NextAuth({
      providers:[
            Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    })
      ],session:{
         strategy:"jwt",
         maxAge:60 * 60 * 24 * 30
      },callbacks:{
         async signIn({account , profile}){
              console.log(profile,account)
            return true
         }
       
  
      }
})

export{ handler as GET , handler as POST}
