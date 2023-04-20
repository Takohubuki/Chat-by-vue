import axios from 'axios';

const PROJECT = import.meta.env.VITE_CHATENGINE_PROJECT_ID;

const loginRest = async (username, secret) => {
    console.log(`username: ${username} secret: ${secret} project-id: ${PROJECT}`);
    const headers = { headers: { "Project-ID": PROJECT, "User-Name": username, "User-Secret": secret } }
    // return await axios.get("https://api.chatengine.io/users/me", {
    //     header: {
    //         "Project-ID": import.meta.env.VITE_CHATENGINE_PROJECT_ID,
    //         "User-Name": username,
    //         "User-Secret": secret
    //     }
    // });
    return await axios.get("https://api.chatengine.io/users/me", headers);
};

const signupRest = async (username, secret, email, first_name, last_name) => {
    return await axios.post(
        "https://api.chatengine.io/users/me",
        { username, secret, email, first_name, last_name },
        { headers: { "Private-key": import.meta.env.VITE_CHATENGINE_PRIVATE_KEY }}
    )
};

export { loginRest, signupRest };