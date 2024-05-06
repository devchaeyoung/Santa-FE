export const paths = {
  HOME: '/',
  RANK: '/rank',
  CHALLENGE: '/challenge',
  GATHERING: '/gathering',
  LIVECHAT: '/livechat',
  GATHERING_SEARCH: '/gathering/search',
  GATHERING_SEARCHRESULT: '/gathering/search/result',
  GATHERING_PARTICIPATE: '/gathering/participate',
  GATHERING_POST: '/gathering/post',
  GATHERING_DETAIL: '/gathering/detail',
  GATHERING_DETAIL_EDIT: '/gathering/detail/edit',
  LOGIN: '/login',
  JOIN: '/join',
  OAUTH_KAKAO: '/oauth/kakao',
  PROFILE: '/profile',
  PROFILE_EDIT: '/profile/edit',
  FIND_ACCOUNT: '/user/find-account',
  FIND_PASSWORD: '/user/find-password',
  RESET_PASSWORD: '/user/reset-password',
  TROPHY: '/trophy',
  CATEGORY: '/user/category',
  MOUNTAIN_VERTIFY: '/mountain/vertify',
  MOUNTAIN_RECORD: '/mountain/record',
} as const;

export const NAVLIST = [
  { title: '메인', path: paths.HOME },
  { title: '내 프로필', path: paths.PROFILE },
  { title: '랭킹', path: paths.RANK },
  { title: '진행중인 챌린지', path: paths.CHALLENGE },
  { title: '내 모임 바로가기', path: paths.GATHERING },
  { title: '실시간 채팅', path: '/livechat' },
];
