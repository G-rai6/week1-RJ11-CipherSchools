import React from "react";

const alluserList = () => {
    let allusers = [{
        name: "John",
        email: "johan@gmail.com",
        phoneNumber: "123456789",
    },
    {
        name: "Garvita",
        email: "garvi@gmail.com",
        phoneNumber: "9877683210",
    },
    {
        name: "mrinmoy",
        email: "marin@gmail.com",
        phoneNumber: "943543210",
    },
    {
        name: "priya",
        email: "pri@gmail.com",
        phoneNumber: "943543210",
    },
];
return (
    <div>
        <Userdetails user={allusers[0]}/>
        <Userdetails user={allusers[1]}/>
        <Userdetails user={allusers[2]}/>
        <Userdetails user={allusers[3]}/>
        <Userdetails />
    </div>
)
};

export default alluserList;