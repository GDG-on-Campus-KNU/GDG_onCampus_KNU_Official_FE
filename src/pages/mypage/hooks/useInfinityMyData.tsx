import { useState, useEffect, useRef } from 'react';

import {
  myTechBlogListInterface,
  myTechBlogMetaDataInterface,
} from '@gdg/types/UserInterface';

const useInfinityMyData = (
  status: 'SAVED' | 'TEMPORAL',
  fetchData: (
    status: 'SAVED' | 'TEMPORAL',
    page: number,
    size: number
  ) => Promise<myTechBlogListInterface>
) => {
  const [page, setPage] = useState<number>(0);
  const [isPending, setIsPending] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<myTechBlogMetaDataInterface[]>([]);
  const [hasNext, setHasNext] = useState<boolean>(true);
  const observerRef = useRef<HTMLDivElement | null>(null);

  const handleObserver = (entries: IntersectionObserverEntry[]) => {
    const target = entries[0];
    if (target.isIntersecting && !isPending && hasNext) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      threshold: 0,
    });

    const currentRef = observerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPending, hasNext]);

  const fetchDataAsync = async () => {
    if (!hasNext) return;

    setIsPending(true);

    try {
      const newData = await fetchData(status, page, 4);
      setData((prevData) => [...prevData, ...newData.data]);
      console.log(newData.data);
      setHasNext(newData.hasNext);
    } catch (error) {
      setIsError(true);
      setError(error as Error);
    } finally {
      setIsPending(false);
    }
  };

  useEffect(() => {
    setData([]);
    setPage(0);
    setHasNext(true);
  }, [status]);

  useEffect(() => {
    fetchDataAsync();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return { observerRef, data, isPending, hasNext, isError, error };
};

export default useInfinityMyData;
