export interface Image {
    path: string;
    title: string; // 新增 title 屬性用於說明文字
    linkrouter: string; 
  }
  
  export const IMAGES: Image[] = [
    { path: '../../assets/bus.svg', title: '大眾運輸', linkrouter: './transportation' },
    { path: '../../assets/garbage.svg', title: '資源回收', linkrouter:'./recycle' },
    { path: '../../assets/mainitem.png', title: '其他議題', linkrouter:'./environmental' },
  ];
  