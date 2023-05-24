import React, { useState } from 'react'
import { Table, Button } from 'antd'

const Crud = () => {
    const [dataSource, setDataSource] = useState([{
        id: 1,
        name: 'John',
        email: 'john@gmail.com',
        adress: 'John Address'
    },
    {
        id: 2,
        name: 'John',
        email: 'john@gmail.com',
        adress: 'John Address'
    },
    {
        id: 3,
        name: 'John',
        email: 'john@gmail.com',
        adress: 'John Address'
    },
    {
        id: 4,
        name: 'John',
        email: 'john@gmail.com',
        adress: 'John Address'
    },


    ]);
    const column = [
        {
            key: '1',
            title: "ID",
            dataIndex: 'id'
        },
        {
            key: '2',
            title: "Name",
            dataIndex: 'name'
        },
        {
            key: '3',
            title: "Email",
            dataIndex: 'email'
        },
        {
            key: '4',
            title: "Address",
            dataIndex: 'address'
        },

    ]
    const onAddStudent = () => {
        const randomNumber= parseInt(Math.random()*1000);

        const newStudent = {
            id:randomNumber,
            name:"Name"+ randomNumber,
            email:randomNumber + "@gmail.com",
            address:"Sam Address" + randomNumber,
        };
        setDataSource((pre) => {
            return [...pre, newStudent];
        });
    };
    return (
        <div>
            <Button onClick={onAddStudent}>Add a New Student</Button>
            <Table columns={column} dataSource={dataSource}>

            </Table>

        </div>
    )
}

export default Crud
