import { useState } from 'react';

import { useGetApplyDocs } from '@gdsc/apis/hooks/admin/useGetApplyDocs';

import AdminConfirmTable from './AdminConfirmTable';
import TrackSelectButtons from './TrackSelectButtons';
import { Track } from '@gdsc/types/AdminInterface';

type Props = {
  total?: number;
  isMarked: boolean;
  name: string;
};

const TableSection = ({ total, isMarked, name }: Props) => {
  const [track, setTrack] = useState<Track | ''>('');
  const [currentPage, setCurrentPage] = useState<number>(0);

  const { data } = useGetApplyDocs(track, isMarked, currentPage, 10);

  return (
    <>
      {data && (
        <TrackSelectButtons
          data={data}
          track={track}
          setTrack={setTrack}
          applyData={total}
        />
      )}
      {data && (
        <AdminConfirmTable
          data={data}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          name={name}
          isMarked={isMarked}
          track={track}
        />
      )}
    </>
  );
};

export default TableSection;
