import { Space, Table, Tag } from 'antd';
import { fetchAllUserAPI } from '../../services/api.service';
import { useEffect, useState } from 'react';


const UserTable = () => {
    const [dataUsers, setDataUsers] = useState([
        {
            _id: "Phu", fullName: 25, email: "Quang Nam",
        },
        {
            _id: "Phu123", fullName: 25, email: "Da Nang"
        }
    ]);

    //empty array => chạy 1 lần
    useEffect(() => {
        console.log(">>> run useEffect 1111");
        loadUser();
    }, []);

    const columns = [
        {
            title: 'ID',
            dataIndex: '_id',

        },
        {
            title: 'Full Name',
            dataIndex: 'fullName',
        },
        {
            title: 'Email',
            dataIndex: 'email',

        },
    ];

    //     {
    //         key: '1',
    //         name: 'John Brown',
    //         age: 32,
    //         address: 'New York No. 1 Lake Park',
    //         tags: ['nice', 'developer'],
    //     },
    //     {
    //         key: '2',
    //         name: 'Jim Green',
    //         age: 42,
    //         address: 'London No. 1 Lake Park',
    //         tags: ['loser'],
    //     },
    //     {
    //         key: '3',
    //         name: 'Joe Black',
    //         age: 32,
    //         address: 'Sydney No. 1 Lake Park',
    //         tags: ['cool', 'teacher'],
    //     },
    // ];
    const loadUser = async () => {
        const res = await fetchAllUserAPI()
        setDataUsers(res.data)
    }

    console.log(">>run render 000");

    return (
        <Table columns={columns} dataSource={dataUsers} rowKey={"_id"} />
    )

}
export default UserTable