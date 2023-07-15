import { Table, Input } from 'antd';
import { useEffect, useState } from 'react';
import './table.css';
import { IoSearchCircleSharp } from 'react-icons/io5';

const TableCom = () => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(5);

    useEffect(() => {
        fetch('https://randomuser.me/api/?results=10')
            .then(response => response.json())
            .then(json => {
                const users = json.results.map(user => ({
                    id: user.login.uuid,
                    name: `${user.name.first} ${user.name.last}`,
                    username: user.login.username,
                    email: user.email,
                    gender: user.gender,
                }));
                setData(users);
            });
    }, []);


    const columns = [
        {
            key: '1',
            title: 'Name',
            dataIndex: 'name',
            filterDropdown: ({ setSelectedKeys, selectedKeys, confirm }) => (
                <div className='search__btn'>
                    <Input
                        placeholder="Search name"
                        value={selectedKeys[0]}
                        onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                        onKeyUp={confirm}
                    />
                </div>
            ),
            filterIcon: () => (
                <i className="ant-table-filter-icon search-icon"><IoSearchCircleSharp /></i>
            ),
            onFilter: (value, record) => record.name.toLowerCase().includes(value.toLowerCase()),
            onFilterDropdownVisibleChange: (visible) => {
                if (visible) {
                    setTimeout(() => {
                        document.querySelector('.ant-table-filter-dropdown input')?.focus();
                    }, 0);
                }
            },
        },
        {
            key: '2',
            title: 'ID',
            dataIndex: 'id',
        },
        {
            key: '3',
            title: 'User Name',
            dataIndex: 'username',
        },
        {
            key: '4',
            title: 'Email',
            dataIndex: 'email',
        },
        {
            key: '5',
            title: 'Gender',
            dataIndex: 'gender',
            filters: [
                { text: 'Male', value: 'male' },
                { text: 'Female', value: 'female' },
            ],
            onFilter: (value, record) => record.gender === value,
        },
    ];

    return (
        <div className='flex w-4/5 mx-auto justify-center items-center py-3 px-2 bg-gradient-to-b from-black'>
            <Table
                className="table"
                columns={columns}
                rowClassName={() => 'hover-row'}
                dataSource={data}
                pagination={{
                    current: page,
                    pageSize: pageSize,
                    showSizeChanger: false,
                    showTotal: false,
                    onChange: (page, pageSize) => {
                        setPage(page);
                        setPageSize(pageSize);
                    },
                }}
            />
        </div>
    );
};

export default TableCom;
