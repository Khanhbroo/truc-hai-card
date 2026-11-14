import avatarImg from '../assets/images/truc-hai-avatar.jpg';
import picnicImg from '../assets/images/truc-hai-picnic-sunset.jpg';
import statueImg from '../assets/images/truc-hai-statue-painting.jpg';
import aodaiStandingImg from '../assets/images/truc-hai-aodai-standing.jpg';
import aodaiBouquetImg from '../assets/images/truc-hai-aodai-bouquet.jpg';
import hanhPhucImg from '../assets/images/truc-hai-hanh-phuc-card.jpg';
import corridorImg from '../assets/images/truc-hai-corridor-bouquet.jpg';
import pinwheelOutdoorImg from '../assets/images/truc-hai-pinwheel-outdoor.jpg';
import chalkboardImg from '../assets/images/truc-hai-chalkboard-memories.jpg';
import graduationGownImg from '../assets/images/truc-hai-graduation-gown.jpg';
import pinwheelSunlightImg from '../assets/images/truc-hai-pinwheel-sunlight.jpg';

export interface PhotoItem {
  id: string;
  src: string;
  caption: string;
  tag: string;
  rotation: string;
}

export const photosList: PhotoItem[] = [
  {
    id: 'avatar',
    src: avatarImg,
    caption: 'Nụ cười làm tan chảy trái tim anh',
    tag: 'Nàng Thơ',
    rotation: '-rotate-2',
  },
  {
    id: 'picnic',
    src: picnicImg,
    caption: 'Hoàng hôn bên hồ & chiếc máy ảnh film',
    tag: 'Dịu Dàng',
    rotation: 'rotate-2',
  },
  {
    id: 'aodai-standing',
    src: aodaiStandingImg,
    caption: 'Tà áo dài trắng thướt tha nắng sân trường',
    tag: 'Thuần Khiết',
    rotation: '-rotate-1',
  },
  {
    id: 'aodai-bouquet',
    src: aodaiBouquetImg,
    caption: 'Em ôm hoa tốt nghiệp hay hoa ôm nụ cười em?',
    tag: 'Rạng Rỡ',
    rotation: 'rotate-3',
  },
  {
    id: 'hanh-phuc',
    src: hanhPhucImg,
    caption: 'Hạnh phúc giản đơn là nụ cười của Trúc Hải',
    tag: 'Hạnh Phúc',
    rotation: '-rotate-2',
  },
  {
    id: 'statue',
    src: statueImg,
    caption: 'Khoảnh khắc hồn nhiên đáng yêu khi tô tượng',
    tag: 'Đáng Yêu',
    rotation: 'rotate-1',
  },
  {
    id: 'corridor',
    src: corridorImg,
    caption: 'Nắng sớm hành lang & đóa hoa trao tay',
    tag: 'Kỷ Niệm',
    rotation: '-rotate-3',
  },
  {
    id: 'pinwheel-outdoor',
    src: pinwheelOutdoorImg,
    caption: 'Chong chóng quay trong gió mang nụ cười em bay xa',
    tag: 'Trong Trẻo',
    rotation: 'rotate-2',
  },
  {
    id: 'chalkboard',
    src: chalkboardImg,
    caption: 'Bé con ngày nào giờ đã thành nàng thơ xinh đẹp',
    tag: 'Tuổi Thơ',
    rotation: '-rotate-1',
  },
  {
    id: 'graduation-gown',
    src: graduationGownImg,
    caption: 'Khoảnh khắc tự hào & dịu dàng ngày tốt nghiệp',
    tag: 'Tự Hào',
    rotation: 'rotate-2',
  },
  {
    id: 'pinwheel-sunlight',
    src: pinwheelSunlightImg,
    caption: 'Góc nghiêng đón ánh nắng sớm đầy mộng mơ',
    tag: 'Ánh Nắng',
    rotation: '-rotate-2',
  },
];
