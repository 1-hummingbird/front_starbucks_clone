import CustomToast, { CustomToastProps } from './CustomToast';

import React from 'react';
import { toast } from '@/hooks/use-toast';

const ShowToast = ({ message, iconType }: CustomToastProps) => {
  return toast({
    description: <CustomToast message={message} iconType={iconType} />,
    duration: 2000,
  });
};

export default ShowToast;
