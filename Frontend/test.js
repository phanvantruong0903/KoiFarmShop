import axios from 'axios'
function test(data) {
    const { name, email, password, confirm_password, date_of_birth } = data;
    axios.post("http://localhost:4000/users/register", { name, email, password, confirm_password, date_of_birth })
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error.response);
        });
}
const data =
{
    name: "T.A2222N",
    email: "annts22222222222e17adada3412@fpt.edu.com",
    password: "123456789An@",
    confirm_password: "123456789An@",
    date_of_birth: "1990-01-01"
}
test(data)