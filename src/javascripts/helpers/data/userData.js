import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getUser = (userObj) => {
  axios
    .get(`${baseUrl}/farmers.json?orderBy="uid"&equalTo="${userObj.uid}"`)
    .then((resp) => {
      if (Object.values(resp.data).length === 0) {
        axios({
          method: 'post',
          url: `${baseUrl}/farmers.json`,
          data: {
            image: userObj.photoURL,
            displayName: userObj.displayName,
            uid: userObj.uid,
            email: userObj.email,
            lastSignInTime: userObj.metadata.lastSignInTime,
          },
        }).then(console.warn('user posted'));
        // POST OBJECT TO FARMERS
        // {
        //     Image:
        //     uid:
        //     displayName:
        //     email:
        //     lastSignInTime:
        // }

        // use axios.post
        // pass it the url ${baseUrl}/farmers.json
        // pass it an object
      } else {
        console.warn('User Exists');
      }
    });
};

export default { getUser };
