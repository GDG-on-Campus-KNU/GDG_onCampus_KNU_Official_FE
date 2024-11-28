import { Suspense, useEffect, useRef, useState } from 'react';

import { LoadingView } from './LoadingView';

type LazyLoadProps = {
  children: React.ReactNode;
};

const LazyLoad = ({ children }: LazyLoadProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const observerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isVisible) return;

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
  }, [isVisible]);

  return (
    <div ref={observerRef}>
      {isVisible ? (
        <Suspense fallback={<LoadingView />}>{children}</Suspense>
      ) : (
        <LoadingView />
      )}
    </div>
  );
};

export default LazyLoad;
