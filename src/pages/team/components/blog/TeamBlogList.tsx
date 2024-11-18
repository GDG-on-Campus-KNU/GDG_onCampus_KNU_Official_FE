import styled from '@emotion/styled';
// import ThumbNailCard from '@gdg/components/feature/blog/ThumbNailCard';
import { lazy } from 'react';

import MaskGroup from '@gdg/assets/thumbnail/Mask group.png';
// import Grid from '@gdg/components/common/layouts/grid';
import { Spacing } from '@gdg/components/common/layouts/spacing';

import { TeamName } from '../name';

const ThumbNailCard = lazy(
  () => import('@gdg/components/feature/blog/ThumbNailCard')
);

const Grid = lazy(() => import('@gdg/components/common/layouts/grid'));

const TeamBlogList = ({ selectedTeamName }: { selectedTeamName: string }) => {
  console.log(3);

  return (
    <>
      <Spacing
        height={{
          lg: 152,
          md: 150,
          sm: 70,
        }}
      />
      <TeamName
        selectedTeamName={`${selectedTeamName} 테크블로그`}
        description='팀원들이 작성한 다양한 글을 통해 새로운 인사이트를 얻어보세요. 함께 성장하는 즐거움을 느껴보시길 바랍니다!'
      />
      <BlankBox />
      <Grid
        columns={{ lg: 2, md: 1, sm: 1 }}
        padding={{ lg: 62, md: 62, sm: 70 }}
        gap={{ lg: 50, md: 50, sm: 30 }}
      >
        {Array.from({ length: 8 }).map((_, index) => (
          <ThumbNailCard
            key={index}
            src={MaskGroup}
            title='좌충우돌 GDG on Campus KNU 4기 준비하기 - 리드편'
            subtitle='이번 3기 리드님의 추천으로 GDSC Korea에 지원을 하게 되었는데 이번 기회에 Lead를 합격하게 되었다!
          총 한국에서는 총 37개의 대학이 참여를 하게 되었고, 활동은 24년 8월부터 25년 7월까지 활동을 하게 되었다!'
            track='Frontend'
            date='2024.09.27'
          />
        ))}
      </Grid>
    </>
  );
};

export default TeamBlogList;

const BlankBox = styled.div`
  width: 100%;
  height: 50px;
`;
