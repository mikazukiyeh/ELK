export interface Image {
    path: string;
    title: string; // 新增 title 屬性用於說明文字
    linkrouter: string; 
  }
  
  export const IMAGES: Image[] = [
    { path: '../../assets/factory.png', title: '政策管制項目', linkrouter: './factory' },
    { path: '../../assets/garbage.svg', title: '廢棄物處理', linkrouter:'./recycle' },
    { path: '../../assets/environmental.svg', title: '環保標章', linkrouter:'./environmental' },
  ];
  