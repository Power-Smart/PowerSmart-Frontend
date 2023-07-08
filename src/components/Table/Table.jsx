import { Table, Input } from 'antd';
import { useEffect, useState } from 'react';
import './table.css';

const TableCom = () => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(5);
    const [searchTerm, setSearchTerm] = useState('');

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

    const handleSearch = e => {
        const value = e.target.value;
        setSearchTerm(value);
    };

    const filteredData = data.filter(item => {
        return item.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    const columns = [
        {
            key: '1',
            title: 'Name',
            dataIndex: 'name',
            filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
                <div style={{ padding: 8 }}>
                    <Input
                        placeholder="Search name"
                        value={selectedKeys[0]}
                        onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                        onPressEnter={confirm}
                        style={{ width: 188, marginBottom: 8, display: 'block' }}
                    />
                    <button type="button" onClick={clearFilters} style={{ width: '100%' }}>
                        Reset
                    </button>
                </div>
            ),
            filterIcon: (filtered) => (
                <i className="ant-table-filter-icon anticon">
                    <svg viewBox="64 64 896 896" className="" data-icon="search" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                        <path d="M884 810.7L693.9 620.6a358.2 358.2 0 0034.1-150.4C728 258 563.5 96 372.4 96S16.8 258 16.8 470.2 179.3 844.4 370.4 844.4c62.8 0 123-16.2 176-46.9l190.1 190.1c9.6 9.6 25.2 9.6 34.8 0l49.7-49.7c9.6-9.6 9.6-25.2 0-34.8zM370.4 770.8c-141.6 0-256-114.4-256-256s114.4-256 256-256 256 114.4 256 256-114.4 256-256 256z"></path>
                    </svg>
                </i>
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
                { text: 'Other', value: 'other' },
            ],
            onFilter: (value, record) => record.gender === value,
        },
    ];

    return (
        <Table
            className="table"
            columns={columns}
            rowClassName={() => 'table-row'}
            dataSource={filteredData}
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
    );
};

export default TableCom;
