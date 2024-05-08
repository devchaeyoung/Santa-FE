export const paths = {
  HOME: '/',
  RANK: '/rank',
  CHALLENGE: '/challenge',
  GATHERING: '/gathering',
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
  MOUNTAIN: '/mountain',
  MOUNTAIN_DETAIL: '/mountain/detail',
  MOUNTAIN_VERTIFY: '/mountain/vertify',
  MOUNTAIN_RECORD: '/mountain/record',
  ADMIN_CHALLENGE: '/admin/challenges',
  ADMIN_CHALLENGE_DETAIL_EDIT: '/admin/challenges/detail/edit',
};

export const NAVLIST = [
  { title: '메인', path: paths.HOME },
  { title: '내 프로필', path: paths.PROFILE },
  { title: '진행중인 챌린지', path: paths.CHALLENGE },
  { title: '모임 바로가기', path: paths.GATHERING },
  { title: '랭킹', path: paths.RANK },
  { title: '전체 산 목록', path: paths.MOUNTAIN },
];
