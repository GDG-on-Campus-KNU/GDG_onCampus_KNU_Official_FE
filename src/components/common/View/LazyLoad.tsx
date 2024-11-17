import React, {
  Suspense,
  ComponentType,
  useEffect,
  useRef,
  useState,
} from 'react';

import { LoadingView } from './LoadingView';

type LazyLoadProps = {
  component: React.LazyExoticComponent<ComponentType<any>>;
  props?: Record<string, any>;
};

const LazyLoad = ({ component: LazyComponent, props }: LazyLoadProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const observerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Observer가 이미 설정된 경우 추가 로직을 막습니다.
    if (isVisible) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // console.log('isVisible');
            observer.disconnect(); // 한 번만 로드하도록 observer 해제
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.3, // 뷰포트 30% 이상 노출 시 로드
      }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [isVisible]);

  return (
    <div ref={observerRef}>
      {isVisible ? (
        <Suspense fallback={<LoadingView />}>
          <LazyComponent {...props} />
        </Suspense>
      ) : (
        <LoadingView />
      )}
    </div>
  );
};

export default LazyLoad;
