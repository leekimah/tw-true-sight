'use client';

// import { useUserDetails } from '@lms/hooks/use-userdetails';
import { FunctionComponent, useState } from 'react';
import DefaultImage from '../../../../../../../public/images/placeholders/employee-img-placeholder.jpg';
import { useRouter } from 'next/navigation';
import superUserAdminPhoto from '../../../../../../../public/images/placeholders/superuseradmin.png';
import { Avatar } from '@/components/osprey/ui/avatar/view/Avatar';

export const Topbar: FunctionComponent = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const router = useRouter();

  return (
    <div className="sticky z-10 flex items-center justify-end w-full gap-0 px-10 bg-white border-b sm:right-0 h-14"></div>
  );
};
