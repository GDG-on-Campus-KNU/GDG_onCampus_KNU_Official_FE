import { createContext, useContext, useState } from 'react';

interface TeamUpdateContextType {
  isTeamUpdate: boolean;
  setIsTeamUpdate: React.Dispatch<React.SetStateAction<boolean>>;
}

const TeamUpdateContext = createContext<TeamUpdateContextType | undefined>(
  undefined
);

export const TeamUpdateProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isTeamUpdate, setIsTeamUpdate] = useState<boolean>(false);

  return (
    <TeamUpdateContext.Provider value={{ isTeamUpdate, setIsTeamUpdate }}>
      {children}
    </TeamUpdateContext.Provider>
  );
};

export const useTeamUpdate = () => {
  const context = useContext(TeamUpdateContext);
  if (!context) {
    throw new Error('useTeamUpdate must be used within a TeamUpdateProvider');
  }
  return context;
};
