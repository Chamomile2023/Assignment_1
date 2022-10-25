const Get = {
  getUserData: async () => {
    const request = await fetch("https://reqres.in/api/users?page");
    const response = await request.json();
  },
};

export default Get;
