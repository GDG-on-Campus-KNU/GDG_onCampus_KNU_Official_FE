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
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.3,
      }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

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
