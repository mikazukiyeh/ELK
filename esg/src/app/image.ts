export interface Image {
    path: string;
    title: string; // 新增 title 屬性用於說明文字
  }
  
  export const IMAGES: Image[] = [
    { path: '../../assets/bus.svg', title: '大眾運輸' },
    { path: '../../assets/garbage.svg', title: '資源回收' },
    { path: '../../assets/mainitem.png', title: '其他議題' },
  ];
  