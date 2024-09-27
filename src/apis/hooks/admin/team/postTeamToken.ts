import { fetchInstance } from '@gdg/apis/instance/Api_JWT';

const postTeamTokenPath = () => '/api/admin/team';

interface PostTeamTokenParams {
  teamName: string;
  track: 'FRONT_END' | 'BACK_END' | 'ANDROID' | 'AI' | 'DESIGNER';
}

export const postTeamToken = async ({
  teamName,
  track,
}: PostTeamTokenParams): Promise<void> => {
  const response = await fetchInstance.post(postTeamTokenPath(), {
    teamName,
    track,
  });

  return response.data;
};
