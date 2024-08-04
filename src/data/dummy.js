import React from 'react';
import { AiOutlineTransaction, AiOutlineMessage, AiOutlineRedEnvelope } from 'react-icons/ai';
import { FiShoppingBag, FiCreditCard } from 'react-icons/fi';
import { IoMdContacts } from 'react-icons/io';
import { RiContactsLine } from 'react-icons/ri';
import avatar2 from './avatar2.jpg';


export const links = [
  {
    title: 'Dashboard',
    links: [
      {
        name: 'dashboard',
        icon: <FiShoppingBag />,
      },
      {
        name: 'drivers',
        icon: <IoMdContacts />,
      },
      {
        name: 'customers',
        icon: <RiContactsLine />,
      },
      {
        name: 'transactions',
        icon: <AiOutlineTransaction />,  
      },
      {
        name: 'messages',
        icon: <AiOutlineMessage />,  
      },
      {
        name: 'reports',
        icon: <AiOutlineRedEnvelope />,  
      },

    ],
  },
];


export const chatData = [
  {
    image:
      avatar2,
    message: 'heng Joined the Team!',
    desc: 'Congratulate him',
    time: '9:08 AM',
  },
];

export const themeColors = [
  {
    name: 'blue-theme',
    color: '#1A97F5',
  },
  {
    name: 'green-theme',
    color: '#03C9D7',
  },
  {
    name: 'purple-theme',
    color: '#7352FF',
  },
  {
    name: 'red-theme',
    color: '#FF5C8E',
  },
  {
    name: 'indigo-theme',
    color: '#1E4DB7',
  },
  {
    color: '#FB9678',
    name: 'orange-theme',
  },
  {
    color: '#FF0101',
    name: 'red-theme',
  },
  {
    color: '#5EF811 ',
    name: 'green-theme',
  },
  {
    color: '#00FFFF ',
    name: 'aqua-theme',
  },
  {
    color: '#FF00FF ',
    name: 'fuchsia-theme',
  },
  {
    color: '#808000 ',
    name: 'olive-theme',
  },
];

export const userProfileData = [
 
  {
    icon: <FiCreditCard />,
    title: 'My Tasks',
    desc: 'To-do and Daily Tasks',
    iconColor: 'rgb(255, 244, 229)',
    iconBg: 'rgb(254, 201, 15)',
  },
];

export const dropdownData = [
  {
    Id: '1',
    Time: 'March 2021',
  },
  {
    Id: '2',
    Time: 'April 2021',
  }, {
    Id: '3',
    Time: 'May 2021',
  },
];

export const contextMenuItems = [
  'AutoFit',
  'AutoFitAll',
  'SortAscending',
  'SortDescending',
  'Copy',
  'Edit',
  'Delete',
  'Save',
  'Cancel',
  'PdfExport',
  'ExcelExport',
  'CsvExport',
  'FirstPage',
  'PrevPage',
  'LastPage',
  'NextPage',
];
