import { Button } from '../../components/common/Button';

import AchievementsBox from './components/AchievementsBox';
import CategoryBox from './components/CategotyBox';
import GatheringBox from './components/GatheringBox';
import TrophyBox from './components/TrophyBox';
import styles from './profile.module.scss';

interface User {
  userId: number;
  nickname: string;
  img: string;
  rank?: number;
}

const USER: User = {
  userId: 23,
  nickname: '산악대장',
  img: 'https://cdn.pixabay.com/photo/2022/08/05/05/59/korea-7366036_1280.jpg',
  rank: 1256,
};

export default function ProfilePage() {
  //유저 권한, 세션에 토큰이 들어있는지 확인하는 hook 있으면 좋을듯?
  const onClick = () => {
    //프로필 수정의 경우 권한 확인?
    alert('버튼 클릭됨!');
  };

  return (
    <div className={styles.container}>
      <div className={styles.userInfo}>
        <img className={styles.userImg} src={USER.img} />
        <div className={styles.userName}>{USER.nickname}</div>
        <Button variant={'rounded-outline'} children={'프로필 수정'} onClick={onClick} />
      </div>
      <div className={styles.infoContainer}>
        <TrophyBox />
        <div className={styles.buttom}>
          <div className={styles.left}>
            <CategoryBox />
            <GatheringBox />
          </div>
          <div className={styles.right}>
            <AchievementsBox />
          </div>
        </div>
      </div>
      <div className={styles.oauthContainer}></div>
    </div>
  );
}
