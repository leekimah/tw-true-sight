import { HiDocumentText, HiFingerPrint } from 'react-icons/hi2';
import { SidebarItems } from '../utils/types';

export const sidebarItems: SidebarItems = [
  {
    header: 'View Logs',
    tooltip: 'Logs',
    icon: <HiFingerPrint className="w-[20px] h-[20px]" />,
    path: '/logs',
  },
  // {
  //   header: 'Generate Report',
  //   tooltip: 'Generate Report',
  //   icon: <HiDocumentText className="w-[20px] h-[20px]" />,
  //   path: '/generate-report',
  // },
];
