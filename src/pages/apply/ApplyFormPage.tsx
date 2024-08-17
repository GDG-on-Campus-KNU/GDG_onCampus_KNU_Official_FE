import { useParams } from 'react-router-dom';

import ApplyForm from '@gdsc/pages/apply/components/ApplyForm';
import Star from '@gdsc/pages/main/components/Star';

import { SEO } from '@gdsc/utils/Seo';

import { DisplayLayout } from '@gdsc/styles/LayoutStyle';

const ApplyFormPage = () => {
  const { tech } = useParams();

  return (
    <>
      <SEO
        title='GDSC KNU - 지원서 작성'
        description='GDSC KNU는 모든 경북대 학생들을 환영합니다.'
        url={`https://gdsc-knu.com/${tech}/form`}
        image='https://gdsc-knu.com/WhiteLogo.png'
      />
      <DisplayLayout>
        <ApplyForm />
        {[...Array(25)].map((_, index) => (
          <Star
            key={index}
            top={`${Math.random() * 30}%`}
            left={`${Math.random() * 100}%`}
          />
        ))}
      </DisplayLayout>
    </>
  );
};

export default ApplyFormPage;
