import React from 'react';
import { SVGProps } from 'react';

interface AppImageProps extends SVGProps<SVGSVGElement> {
  Icon: any;
  width?: number;
  height?: number;
}

const AppImage: React.FC<AppImageProps> = ({ Icon, width = 30, height = 30, ...rest }) => {
  return (
    <Icon width={width} height={height} {...rest} />
  );
};

export default AppImage;
