import { MdArrowUpward, MdArrowDownward, MdBarChart } from 'react-icons/md';

export const TransactionsFilterData = () => {
    return [
        {
            id: 1,
            icon: <MdBarChart className='custom_radio_icon custom_radio_icon_transactionsfilterdata' id='' size={15} />,
            name: "Show All",
            handlefunction: () => {
                console.log('Selected All')
            },
            group: "transactionsfilterdata"
        },
        {
            id: 2,
            icon: <MdArrowDownward className='custom_radio_icon custom_radio_icon_transactionsfilterdata' id='' size={15} />,
            name: "Money In",
            handlefunction: () => {
                console.log('Selected Money In')
            },
            group: "transactionsfilterdata"
        },
        {
            id: 2,
            icon: <MdArrowUpward className='custom_radio_icon custom_radio_icon_transactionsfilterdata' id='' size={15} />,
            name: "Money Out",
            handlefunction: () => {
                console.log('Selected Money Out')
            },
            group: "transactionsfilterdata"
        }
    ]
}

export const TransactionDayData = () => {
    return [
        {
            id: 1,
            icon: <MdBarChart className='custom_radio_icon custom_radio_icon_transactionsdaydata' id='' size={15} />,
            name: "Today",
            handlefunction: () => {
                console.log('Selected Today')
            },
            group: "transactionsdaydata"
        },
        {
            id: 2,
            icon: <MdBarChart className='custom_radio_icon custom_radio_icon_transactionsdaydata' id='' size={15} />,
            name: "Yesterday",
            handlefunction: () => {
                console.log('Selected Yesterday')
            },
            group: "transactionsdaydata"
        },
        {
            id: 3,
            icon: <MdBarChart className='custom_radio_icon custom_radio_icon_transactionsdaydata' id='' size={15} />,
            name: "2 days ago",
            handlefunction: () => {
                console.log('Selected 2 days ago')
            },
            group: "transactionsdaydata"
        },
        {
            id: 4,
            icon: <MdBarChart className='custom_radio_icon custom_radio_icon_transactionsdaydata' id='' size={15} />,
            name: "3 days ago",
            handlefunction: () => {
                console.log('Selected 3 days ago')
            },
            group: "transactionsdaydata"
        },
        {
            id: 5,
            icon: <MdBarChart className='custom_radio_icon custom_radio_icon_transactionsdaydata' id='' size={15} />,
            name: "4 days ago",
            handlefunction: () => {
                console.log('Selected 4 days ago')
            },
            group: "transactionsdaydata"
        },
        {
            id: 6,
            icon: <MdBarChart className='custom_radio_icon custom_radio_icon_transactionsdaydata' id='' size={15} />,
            name: "5 days ago",
            handlefunction: () => {
                console.log('Selected 5 days ago')
            },
            group: "transactionsdaydata"
        },
        {
            id: 7,
            icon: <MdBarChart className='custom_radio_icon custom_radio_icon_transactionsdaydata' id='' size={15} />,
            name: "6 days ago",
            handlefunction: () => {
                console.log('Selected 6 days ago')
            },
            group: "transactionsdaydata"
        },
        {
            id: 8,
            icon: <MdBarChart className='custom_radio_icon custom_radio_icon_transactionsdaydata' id='' size={15} />,
            name: "7 days ago",
            handlefunction: () => {
                console.log('Selected 7 days ago')
            },
            group: "transactionsdaydata"
        },
    ]
}

