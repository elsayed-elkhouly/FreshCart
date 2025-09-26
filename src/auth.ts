import { AuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { jwtDecode } from "jwt-decode";


export const authoption: AuthOptions = {
        pages:{
            signIn:"login"
        },
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: { label: "Useremail", type: "email", placeholder: "elsayed@gmail.com" },
                password: { label: "Password", type: "password" }
            },
            // login
            authorize: async function (credentials) {
                const response = await fetch(`${process.env.API}/auth/signin`, {
                    method: 'POST',
                    body: JSON.stringify({
                        email: credentials?.email,
                        password: credentials?.password
                    }),
                    headers: { "Content-Type": "application/json" }
                })
                const data = await response.json()
                console.log(data);
                 if(data.message ==="success"){
                    const{id}:{id:string}=jwtDecode(data.token)
                    return{
                        id:id,
                        user:data.user,
                        token:data.token
                    }
                 }   
                      throw new Error(data.message || "failed to login")          
            }
        })
    ],
    callbacks:{
          async jwt({ token, user}) {
            if (user) {
                token.user=user?.user
                token.token=user?.token
            }
      return token
    },
      async session({ session, token}) {
        if (token) {
            session.user=token?.user
        }
      return session
    }
    },
}