const authConfig = {
  providers: [], // providers go in auth.js instead
  callbacks: {
    authorized({ auth, request }) {
      return !!auth?.user;
    },
  },
  pages: {
    signIn: "/login",
  },
};

export default authConfig;
