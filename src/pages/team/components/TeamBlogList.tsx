import MaksGroup from '@gdg/assets/thumbnail/Mask group.png';
import { Grid } from '@gdg/components/common/layouts/grid';
import ThumbNailCard from '@gdg/components/feature/blog/ThumbNailCard';

const TeamBlogList = () => {
  return (
    <Grid
      columns={{
        sm: 1,
        md: 2,
        lg: 2,
      }}
      gap={50}
    >
      {Array.from({ length: 8 }).map((_, index) => (
        <ThumbNailCard
          key={index}
          src={MaksGroup}
          title='좌충우돌 GDG on Campus KNU 4기 준비하기 - 리드편'
          subtitle='이번 3기 리드님의 추천으로 GDSC Korea에 지원을 하게 되었는데 이번 기회에 Lead를 합격하게 되었다!
          총 한국에서는 총 37개의 대학이 참여를 하게 되었고, 활동은 24년 8월부터 25년 7월까지 활동을 하게 되었다!'
          track='Frontend'
          date='2024.09.27'
        />
      ))}
    </Grid>
  );
};

export default TeamBlogList;
