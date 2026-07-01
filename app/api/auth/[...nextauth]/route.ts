import db from "@/app/lib/database";
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
            console.log(account,profile)
              if(account?.provider === "google"){
                         const [row]:any =   await db.query("SELECT * FROM users WHERE id = ?", [profile?.sub]);
           
          if (row.length === 0) {
      
            await db.query("INSERT INTO users(id,name,email,method,image) VALUE(?,?,?,?,?)",
               [profile?.sub , profile?.name , profile?.email , account?.provider , profile?.picture]
            )
          }
            return true
              }else{
                  return true
              }
         }
       
  
      }
})

export{ handler as GET , handler as POST}
