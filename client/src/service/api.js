import axios from 'axios'
const URL='http://localhost:8000'

export default async function authenticateSignup(data) {
  console.log("authenticate check")
   
  try{
    return await axios.post(`${URL}/signup`,data)
  }
  catch(error){
   console.log("error in authenticating",error)
  }
}

export const authenticateLogin = async (user) => {
  // console.log("authenticate llgin check")
  try {
    console.log("try block")
      return await axios.post(`${URL}/login`, user)
  } catch (error) {
      console.log('Error while calling login API: ', error);
      return error.response;
  }
}

// export  const payUsingStripe = async (data) => {
//       try {
//           let response = await axios.post(`${URL}/checkout`, data);
//           return response.data;
//       } catch (error) {
//           console.log('Error', error);
//       }
//   }
