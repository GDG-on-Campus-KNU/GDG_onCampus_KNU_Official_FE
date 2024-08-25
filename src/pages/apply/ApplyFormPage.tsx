import ApplyForm from '@gdsc/pages/apply/components/ApplyForm';
import Star from '@gdsc/pages/main/components/Star';

import { DisplayLayout } from '@gdsc/styles/LayoutStyle';

import { ApplyFormMetaData } from '@gdsc/router/components/MetaData';

const ApplyFormPage = () => {
  return (
    <>
      <ApplyFormMetaData />
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
