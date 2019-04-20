import axios from "axios";

export const fetchCompetitions = async () => {
    try {
        const response = await axios({ method: 'GET', url: '/api/competitions' })
        return response.data.competitions;
    } catch (error) {
        console.dir({ error });
    }
}

export async function add(competition: any) {
    try {
        const response = await axios({ method: 'POST', url: '/api/competitions', data: competition })
        return response.data.competition;
    } catch (error) {
        console.dir({ error });
        throw new Error(error);
    }
}

export async function vote({ vote, competitionId }: { vote: any, competitionId: string }) {
    try {
        const response = await axios({ method: 'PUT', url: `/api/competitions/vote/${competitionId}`, data: vote });
        console.dir({ response });
        return response.data.competition;
    } catch (error) {
        console.dir({ error })
    }
}

export async function refreshCompetition(competitionId: string) {
    try {
        const response = await axios({ method: 'GET', url: `/api/competitions/${competitionId}` });
        return response.data.competition;
    } catch (error) {
        console.dir({ error });
    }
}