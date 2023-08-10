import { IoBarChartSharp } from 'react-icons/io5';
import { MdQueryStats } from 'react-icons/md';
import { FaWpforms } from 'react-icons/fa';
import { ImProfile } from 'react-icons/im';
import { FaAlignLeft, FaUserCircle, FaCaretDown } from 'react-icons/fa';

const links = [
    {
      id: 1,
      text: "Home",
      path: '/',
      icon: <IoBarChartSharp />,
    },
    {
      id: 2,
      text: 'AboutUs',
      path: '/Aboutus',
      icon: <FaWpforms />,
  },
    {
      id: 3,
      text: 'ContactUs',
      path: '/ContactUs',
      icon: <ImProfile />,
    },
        {
      id: 4,
      text: 'Logout',
      path: '/',
      icon: <FaUserCircle />,
    },
    
    



  ];
  
  export default links;